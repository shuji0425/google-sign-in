import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDczHncQr3WbW85eLzvv70WdiPOT6qmenc",
  authDomain: "signi-in-527a6.firebaseapp.com",
  projectId: "signi-in-527a6",
  storageBucket: "signi-in-527a6.firebasestorage.app",
  messagingSenderId: "826883173011",
  appId: "1:826883173011:web:2b02ec95ee567e6a96fb66"
};

export const firebaseApp = initializeApp(firebaseConfig);