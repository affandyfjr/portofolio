// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
