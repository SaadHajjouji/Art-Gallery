import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //v9

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOA0EinwiyVeLDGtaU3hCgutGrI78te4w",
  authDomain: "cdagallery-35126.firebaseapp.com",
  databaseURL: "https://cdagallery-35126-default-rtdb.firebaseio.com",
  projectId: "cdagallery-35126",
  storageBucket: "cdagallery-35126.appspot.com",
  messagingSenderId: "1050967848779",
  appId: "1:1050967848779:web:c3a71b0d3764f2d4ec9ace",
  measurementId: "G-J6JEMTT830",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//exporter notre base de donnes
//  export default fireDB;
export default app;
//export the other app
export const auth = app.auth();
