import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFr5i61qNXMEEU8zVzFeZENf-ZvKR6ZCk",
    authDomain: "discord-clone-7b125.firebaseapp.com",
    databaseURL: "https://discord-clone-7b125.firebaseio.com",
    projectId: "discord-clone-7b125",
    storageBucket: "discord-clone-7b125.appspot.com",
    messagingSenderId: "251068006547",
    appId: "1:251068006547:web:b392c3a9a682e816b68d66",
    measurementId: "G-NJ5VC79W7B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider } 
  export default db