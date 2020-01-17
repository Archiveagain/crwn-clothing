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

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;