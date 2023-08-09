import { initializeApp } from "firebase/app"
import { GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBldF8hTd2K51dbn_AGGTNkrfMcPV4VKjA",
  authDomain: "onestop-electronics.firebaseapp.com",
  projectId: "onestop-electronics",
  storageBucket: "onestop-electronics.appspot.com",
  messagingSenderId: "388971771085",
  appId: "1:388971771085:web:9dd330d39ce7a10d68a584",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()
