import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA6GStNVignFqJ8QFBC_oZNBOfpvH4WV54",
    authDomain: "fantasy-site-react.firebaseapp.com",
    projectId: "fantasy-site-react",
    storageBucket: "fantasy-site-react.appspot.com",
    messagingSenderId: "328721256040",
    appId: "1:328721256040:web:2c491a46f7dbe22aa175dd",
    measurementId: "G-C57KNX2RMR"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;