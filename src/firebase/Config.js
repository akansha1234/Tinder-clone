import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD8-dmjLwpWY-e5-I1JxFMwlmOeUwkE3GY",
  authDomain: "tinder-clone-b5f62.firebaseapp.com",
  projectId: "tinder-clone-b5f62",
  storageBucket: "tinder-clone-b5f62.appspot.com",
  messagingSenderId: "351834014330",
  appId: "1:351834014330:web:80a4c704b671a9ae0431c3"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
//firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.firestore();
const db = firebase.database();
export { auth, database, db };
