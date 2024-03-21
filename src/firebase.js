// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKXQnnJ8VXPRJQ3yXMEWD9UErU3T3szr0",
  authDomain: "portpoliodata.firebaseapp.com",
  databaseURL: "https://portpoliodata-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portpoliodata",
  storageBucket: "portpoliodata.appspot.com",
  messagingSenderId: "244103918154",
  appId: "1:244103918154:web:88846f78d7d0ae102cecb3",
  measurementId: "G-BY9ZVF6E74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app); //데이터 베이스 가져오기

export default app;