
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCRvT0W7OpL3g_0Bsj8ErGVY-VtlosmP_s",
  authDomain: "web-mobile-app-78f67.firebaseapp.com",
  projectId: "web-mobile-app-78f67",
  storageBucket: "web-mobile-app-78f67.appspot.com",
  messagingSenderId: "392890275526",
  appId: "1:392890275526:web:09e2cb636304aaee3429c7"
};


const app = initializeApp(firebaseConfig);
export const autenthication = getAuth(app);