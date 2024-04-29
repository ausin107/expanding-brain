import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDQVt2brEn_Ktdar6Oq6ywOE1WSeSnZnos',
  authDomain: 'expandingbrain-a6bb6.firebaseapp.com',
  projectId: 'expandingbrain-a6bb6',
  storageBucket: 'expandingbrain-a6bb6.appspot.com',
  messagingSenderId: '561105439244',
  appId: '1:561105439244:web:f8a5df7a0d8d114e3ebc29',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
