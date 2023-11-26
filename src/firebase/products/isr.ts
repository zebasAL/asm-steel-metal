import firebase from '../clientApp';
import firebaseAdmin from '../adminApp';

export type StaticProduct = {
  params: {
    id: string,
  }
}

export async function batchUpdateIsrUploadedStatus(productIds: StaticProduct[] | []): Promise<void> {
  if (!productIds?.length) return

  const firestore = firebase.firestore();
  const batch = firestore.batch();

  productIds.forEach((productId) => {
    const productRef = firestore.collection("products").doc(productId.params.id);
    batch.update(productRef, { isr_uploaded: true });
  });

  await batch.commit();
}


export async function getNoneIsrUploadedProducts(db: firebaseAdmin.firestore.Firestore): Promise<StaticProduct[] | []> {
  try {
    const productsCollection = db.collection("products").where('is_active', '==', true).where('isr_uploaded', '==', false);
    const batchSize = 50;
    let lastDoc = null;
    let products: StaticProduct[] = [];

    while (true) {
      const query: firebaseAdmin.firestore.Query<firebase.firestore.DocumentData> = lastDoc ? productsCollection.startAfter(lastDoc).limit(batchSize): productsCollection.limit(batchSize)
      const querySnapshot = await query?.get();

      if (querySnapshot?.empty || !querySnapshot?.docs?.length) {
        break;
      }

      lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

      querySnapshot.docs.forEach((doc) => products.push({
          params: { id: doc.id },
        })
      );
    }

    return products ?? []
  } catch (error) {
    return []
  }
}
