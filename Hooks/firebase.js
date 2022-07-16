
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoZBflzCvFSq01OhVe8qJhahqudvsd9is",
  authDomain: "docapplication-bc5cf.firebaseapp.com",
  projectId: "docapplication-bc5cf",
  storageBucket: "docapplication-bc5cf.appspot.com",
  messagingSenderId: "638762542103",
  appId: "1:638762542103:web:3cb78ea09569198e7c6852",
  measurementId: "G-KVGRY1LCBS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app