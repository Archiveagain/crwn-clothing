import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCOmUookR_wx84HJb7kVgbcbd0Rrdx3aAk",
  authDomain: "crwn-db-957c7.firebaseapp.com",
  databaseURL: "https://crwn-db-957c7.firebaseio.com",
  projectId: "crwn-db-957c7",
  storageBucket: "crwn-db-957c7.appspot.com",
  messagingSenderId: "583933950456",
  appId: "1:583933950456:web:1559978eeca7f3ca927e0d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot =  await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
} 


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;