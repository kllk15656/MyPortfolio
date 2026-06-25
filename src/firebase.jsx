import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-SdnlZoG7OJGLPH8CxdQ4Us97sFopL08",
  authDomain: "myportfolio-b9a5a.firebaseapp.com",
  projectId: "myportfolio-b9a5a",
  storageBucket: "myportfolio-b9a5a.appspot.com",
  messagingSenderId: "789094592761",
  appId: "1:789094592761:web:914673ca73b3b882cc3228"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
