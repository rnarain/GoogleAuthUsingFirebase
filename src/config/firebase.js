import * as firebase from 'firebase'
const firebaseApp=  firebase.initializeApp({
    apiKey: "AIzaSyBfa7z2SFHHYbz1GqLoWx60zbDwNf70l8Y",
    authDomain: "authtest-2e5cd.firebaseapp.com",
    databaseURL: "https://authtest-2e5cd.firebaseio.com",
    projectId: "authtest-2e5cd",
    storageBucket: "authtest-2e5cd.appspot.com",
    messagingSenderId: "986426308958",
    appId: "1:986426308958:web:59f290bc0d08013183f7cf"
})

export  const auth = new firebase.auth();
export  const googleProvider = new firebase.auth.GoogleAuthProvider();