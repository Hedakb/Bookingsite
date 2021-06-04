import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore"; // If you need it
import "firebase/storage"; // If you need it
import "firebase/analytics"; // If you need it
import "firebase/performance"; // If you need it

const clientCredentials = {
  apiKey: "AIzaSyCRZZsIwvTxq3henbgrd3uaveL9f2KvCGY",
  authDomain: "booking-6c57c.firebaseapp.com",
  projectId: "booking-6c57c",
  storageBucket: "booking-6c57c.appspot.com",
  messagingSenderId: "741037298238",
  appId: "1:741037298238:web:e7364aa39971e4c238f76f"
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
