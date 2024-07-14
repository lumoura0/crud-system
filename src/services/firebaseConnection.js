
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2IPl5slKyLiNMm8zrdEycjb4TPhHf-aQ",
  authDomain: "tickets-65592.firebaseapp.com",
  projectId: "tickets-65592",
  storageBucket: "tickets-65592.appspot.com",
  messagingSenderId: "1050171480933",
  appId: "1:1050171480933:web:28d415af8a7a2fd0741f8c",
  measurementId: "G-F317H3LSJM"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };