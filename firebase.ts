import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAulEqRDVOk2ca4qWzXy6Y75dEKmBnfgwA",
  authDomain: "dropbox-clone-a1bd3.firebaseapp.com",
  projectId: "dropbox-clone-a1bd3",
  storageBucket: "dropbox-clone-a1bd3.appspot.com",
  messagingSenderId: "648275339157",
  appId: "1:648275339157:web:09362036c7cfb2447b389c",
};

const app = getApps?.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
