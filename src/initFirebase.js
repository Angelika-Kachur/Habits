import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

const db = firebase.firestore();
var userRef = db.collection("user");

// userRef.doc("Info").set({
//   fName: "Lika",
//   lName: "Kachur",
//   age: 24,
//   gender: 'Female'
// });

// userRef.doc("Measurments").set({
//   date: "date",
//   wheight: 60,
//   chest: 90,
//   waist: 65,
//   hip: 95
// });

userRef.get().then((queryShapshot) => {
  queryShapshot.forEach((doc) => {
    console.log(`${doc.id}`)
  })
})


export default app;
