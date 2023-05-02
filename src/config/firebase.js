import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBeoqAxBv4oMevvxRYJp5XGb5K88Z_GvLg",
    authDomain: "task-181c3.firebaseapp.com",
    projectId: "task-181c3",
    storageBucket: "task-181c3.appspot.com",
    messagingSenderId: "833880985600",
    appId: "1:833880985600:web:70c6bbcda3eed658ef08e5",
    measurementId: "G-193VGYMN84"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database;