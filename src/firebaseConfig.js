import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJMCYKELLL2KcH12evXKOFI0WVu95d4Wg",
  authDomain: "ecommerce-react-martos.firebaseapp.com",
  projectId: "ecommerce-react-martos",
  storageBucket: "ecommerce-react-martos.appspot.com",
  messagingSenderId: "967057936234",
  appId: "1:967057936234:web:db5fe3618b268cdfb21f13",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
