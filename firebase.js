// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCswMTySQRD-V07Qr1LOc07ee3wHD7P0mg",
  authDomain: "tastecraft-dc371.firebaseapp.com",
  projectId: "tastecraft-dc371",
  storageBucket: "tastecraft-dc371.firebasestorage.app",
  messagingSenderId: "333377023110",
  appId: "1:333377023110:web:536d8510ec982849f3f507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
