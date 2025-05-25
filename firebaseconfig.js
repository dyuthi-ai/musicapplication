
import { initializeApp } from "firebase/app";
//! Authentication service from firebase
import{getAuth} from "firebase/auth";
//! database services from firebase
import{getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEHECzYQnBAe_gDCkDFFwprKGcjANqFbs",
  authDomain: "music-application-de513.firebaseapp.com",
  projectId: "music-application-de513",
  storageBucket: "music-application-de513.firebasestorage.app",
  messagingSenderId: "769824724886",
  appId: "1:769824724886:web:adb9fcbc7046367b6bafb7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 export let __AUTH = getAuth(firebaseApp);
 export let __DB = getFirestore(firebaseApp);
 export default firebaseApp;