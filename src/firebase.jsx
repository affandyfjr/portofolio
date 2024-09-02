// // Import the functions you need from the SDKs you need
// import 'firebase/storage';
// import firebaseStorage from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqk_ntsLZLN_n3UFWxAGl28mq0W3ROC0",
  authDomain: "fb-data-17cd1.firebaseapp.com",
  databaseURL:
    "https://fb-data-17cd1-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fb-data-17cd1",
  storageBucket: "fb-data-17cd1.appspot.com",
  messagingSenderId: "484467128216",
  appId: "1:484467128216:web:a026fb608cd2075a49dded",
};



// const firebaseConfig2 = {
//   apiKey: "AIzaSyDDqk_ntsLZLN_n3UFWxAGl28mq0W3ROC0",
//   authDomain: "fb-data-17cd1.firebaseapp.com",
//   databaseURL: '<DATABASE_URL>',
//   projectId: "fb-data-17cd1",
//   storageBucket: '<STORAGE_BUCKET>',
//   messagingSenderId: '<MESSAGING_SENDER_ID>',
//   appId: '<APP_ID>',
// };

// firebaseStorage.initializeApp(firebaseConfig);

// const storage = firebaseStorage.storage();



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);
export { db, auth, provider, storage, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, signOut};
