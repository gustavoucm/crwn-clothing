import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB6KEevPmYILof9ZA4U68smJzINMOSEp0o",
  authDomain: "crwn-db-83641.firebaseapp.com",
  databaseURL: "https://crwn-db-83641.firebaseio.com",
  projectId: "crwn-db-83641",
  storageBucket: "crwn-db-83641.appspot.com",
  messagingSenderId: "449187188100",
  appId: "1:449187188100:web:734cf790a890c7333f61d1",
  measurementId: "G-M9E02QSVNN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;