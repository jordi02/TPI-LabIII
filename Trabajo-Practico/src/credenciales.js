// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJh3pt_IzK_oFEtAKCxGtTMoIW_G_Xm2k",
  authDomain: "tpi-lab-iii.firebaseapp.com",
  projectId: "tpi-lab-iii",
  storageBucket: "tpi-lab-iii.appspot.com",
  messagingSenderId: "504529058494",
  appId: "1:504529058494:web:beafd9abf34e66976c3cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;