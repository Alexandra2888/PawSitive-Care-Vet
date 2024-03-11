import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "pawsitive-1001d.firebaseapp.com",
  projectId: "pawsitive-1001d",
  storageBucket: "pawsitive-1001d.appspot.com",
  messagingSenderId: "643389248154",
  appId: "1:643389248154:web:53a7abe103327880880523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export default app;
