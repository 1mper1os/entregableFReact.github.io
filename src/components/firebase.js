import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZIVq6UjzO02q_c4-sngpcCP2BKbLQomI",
  authDomain: "consultorio-1c177.firebaseapp.com",
  projectId: "consultorio-1c177",
  storageBucket: "consultorio-1c177.appspot.com", // Corregido
  messagingSenderId: "236242214651",
  appId: "1:236242214651:web:59468cd09b025cf0a65a5e"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;

