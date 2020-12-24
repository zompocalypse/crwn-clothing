import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCqMEJrhtrNaiz-S-Lr_OyKNtx-0izg2ww',
  authDomain: 'crwn-db-f4bcd.firebaseapp.com',
  projectId: 'crwn-db-f4bcd',
  storageBucket: 'crwn-db-f4bcd.appspot.com',
  messagingSenderId: '950612374334',
  appId: '1:950612374334:web:b635dbe811ed7392feb26f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;