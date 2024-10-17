// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPjVTuDATbByqg7O2X6ZKD9YFxdbzB-mU",
  authDomain: "micro-578b6.firebaseapp.com",
  databaseURL: "https://micro-578b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "micro-578b6",
  storageBucket: "micro-578b6.appspot.com",
  messagingSenderId: "222010351380",
  appId: "1:222010351380:web:6bdaf851391aabb77fac01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth , db };
