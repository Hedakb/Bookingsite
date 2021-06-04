import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore"; // If you need it
import "firebase/storage"; // If you need it
import "firebase/analytics"; // If you need it
import "firebase/performance"; // If you need it

const clientCredentials = {
  apiKey: "AIzaSyA7L7EIGTqJmRYXOZraA0xpPPxeJijeUT8",
  authDomain: "chartervirksomhet.firebaseapp.com",
  projectId: "chartervirksomhet",
  storageBucket: "chartervirksomhet.appspot.com",
  messagingSenderId: "477953486977",
  appId: "1:477953486977:web:84489f0bac216c1c145d80"
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in clientCredentials) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export default firebase;
