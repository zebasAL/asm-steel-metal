import firebaseAdmin from '../adminApp';

export type StorageParams = {
  blobFile: Buffer,
  folderName?: string,
  fileName: string,
  fileType: string,
}

export async function saveFile({ blobFile, folderName = "misc", fileName, fileType }: StorageParams): Promise<string> {

  const bucket = firebaseAdmin.storage().bucket();
  const file = bucket.file(`/${folderName}/${fileName}`);

  await file.save(blobFile, {
    metadata: {
      contentType: fileType ?? 'image/jpeg',
    },
  });

  const signedUrls = await file.getSignedUrl({ action: 'read', expires: null as any });
  const url = signedUrls[0];

  return url;
}

export function getBufferFromBase64(base64: string) {
  const bufferData: Buffer = Buffer.from(base64, 'base64');
  return bufferData
}