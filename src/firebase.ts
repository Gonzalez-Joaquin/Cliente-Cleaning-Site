import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCxezGS6EKhifuL_4wqnXvcmyA94d7XFMA',
  authDomain: 'gblimpiezadetapizados.firebaseapp.com',
  projectId: 'gblimpiezadetapizados',
  storageBucket: 'gblimpiezadetapizados.appspot.com',
  messagingSenderId: '884866225097',
  appId: '1:884866225097:web:b41a8cc7a68ed8557a8e18',
  measurementId: 'G-MSNQM61ESV',
}

const appFirebase = initializeApp(firebaseConfig)

const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase)
export { db, auth, appFirebase }
