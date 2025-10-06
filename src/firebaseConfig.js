import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArZ3x0a-demykFzIyXAIiYMhX58lsKdf0",
  authDomain: "nurse-me-app.firebaseapp.com",
  projectId: "nurse-me-app",
  storageBucket: "nurse-me-app.firebasestorage.app",
  messagingSenderId: "783445041153",
  appId: "1:783445041153:web:c6a906dff4e27cb4e2e000"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);


export const googleProvider = new GoogleAuthProvider();

export default app;
