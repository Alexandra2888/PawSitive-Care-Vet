import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkel-OjVnnqBAqso7bsU_jtv4jtcEI9xs",
  authDomain: "pawsitive-1001d.firebaseapp.com",
  projectId: "pawsitive-1001d",
  storageBucket: "pawsitive-1001d.appspot.com",
  messagingSenderId: "643389248154",
  appId: "1:643389248154:web:53a7abe103327880880523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);

export default firestoreDatabase;