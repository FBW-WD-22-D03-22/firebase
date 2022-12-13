import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBAXTuh85WhSeuTYyTx76hfcnr-H6d4X9k',
  authDomain: 'fir-frontend-8c0d9.firebaseapp.com',
  projectId: 'fir-frontend-8c0d9',
  storageBucket: 'fir-frontend-8c0d9.appspot.com',
  messagingSenderId: '814933291743',
  appId: '1:814933291743:web:36149a325ff8e54a512f6a',
  measurementId: 'G-MYNFFPQXHF',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);