import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "blogsemana-a33da.firebasestorage.app",
  messagingSenderId: "720440574888",
  appId: "1:720440574888:web:4f6e4b3ba23ef34678939d",
  measurementId: "G-EPC24T8Q92"
};

export const app = initializeApp(firebaseConfig);