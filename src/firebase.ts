import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCfnQin23MuJw4dpMyDs2yEpxZzmwx72oA',
  authDomain: 'gbcleaningsite-8fb92.firebaseapp.com',
  projectId: 'gbcleaningsite-8fb92',
  storageBucket: 'gbcleaningsite-8fb92.appspot.com',
  messagingSenderId: '1037002112120',
  appId: '1:1037002112120:web:eb010d00e6be60accec18d',
  measurementId: 'G-4WR7JYMRKR',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
