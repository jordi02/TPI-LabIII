// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYvQbefhJqMSD8rMoP1D_Pzgy9HZDX_jU",
  authDomain: "tpi-labiii-f364b.firebaseapp.com",
  projectId: "tpi-labiii-f364b",
  storageBucket: "tpi-labiii-f364b.appspot.com",
  messagingSenderId: "593578322699",
  appId: "1:593578322699:web:7709e1eab219627318d00e",
  measurementId: "G-3EBFF3CB0Z"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;