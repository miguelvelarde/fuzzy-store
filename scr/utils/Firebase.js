import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAm86bWOsGuEsTtt2Ose9WCaZ4OlNLeOcU",
    authDomain: "nicebook-af683.firebaseapp.com",
    projectId: "nicebook-af683",
    storageBucket: "nicebook-af683.appspot.com",
    messagingSenderId: "133351109983",
    appId: "1:133351109983:web:39797161b3025a89acb2ea"
  }
  

  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)