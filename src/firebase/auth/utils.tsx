import firebase from "../clientApp";

export const userIsLoggedIn = async (): Promise<boolean> => {
  return Boolean(firebase.auth().currentUser)
};

export const usePreviousSession = async (): Promise<string | undefined> => {
  try {
    const idToken = await firebase.auth().currentUser?.getIdToken(true)
    return idToken;
  } catch (error) {
    return undefined;
  }
};
