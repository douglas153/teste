import * as firebase from 'firebase'


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCxDQCw0yv6YSTD5XiUuyA_88P5n0mQC0k",
    authDomain: "meu-db-39ae2.firebaseapp.com",
    databaseURL: "https://meu-db-39ae2.firebaseio.com",
    projectId: "meu-db-39ae2",
    storageBucket: "meu-db-39ae2.appspot.com",
    messagingSenderId: "1011944033695",
    appId: "1:1011944033695:web:1c7b28d2ac77f007e901aa",
    measurementId: "G-RKEK2M1WCB"
};
// Initialize Firebase
firebase.initializeApp(config);




const db = firebase.firestore(); 
db.settings({timestampsInSnapshots: true})

export default db; 