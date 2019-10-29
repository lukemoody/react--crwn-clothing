import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDp25hL4LqyeV1OVuTcpaTwsvuXC8lcFR4',
  authDomain: 'crwn-clothing-93765.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-93765.firebaseio.com',
  projectId: 'crwn-clothing-93765',
  storageBucket: 'crwn-clothing-93765.appspot.com',
  messagingSenderId: '168719253941',
  appId: '1:168719253941:web:490e1e998f2f683c7b19fc'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
