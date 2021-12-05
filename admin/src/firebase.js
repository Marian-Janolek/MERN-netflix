import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'netflix-3460e.firebaseapp.com',
  projectId: 'netflix-3460e',
  storageBucket: 'netflix-3460e.appspot.com',
  messagingSenderId: '622327973878',
  appId: '1:622327973878:web:2722bc5e0d987c2eb569d7',
  measurementId: 'G-7YG7L05TEG',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
