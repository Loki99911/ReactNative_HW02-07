import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCIGwAkUV-LR2gJOe1R9rPqOheEG4W-eA",
  authDomain: "reactnativehw-ae0cf.firebaseapp.com",
  projectId: "reactnativehw-ae0cf",
  storageBucket: "reactnativehw-ae0cf.appspot.com",
  messagingSenderId: "37238810044",
  appId: "1:37238810044:web:08f58ad536901ff1adf7b9",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
