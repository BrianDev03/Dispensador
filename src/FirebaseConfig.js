// Importa las funciones necesarias de los SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Configuración de Firebase para tu aplicación web
const FirebaseConfig = {
  apiKey: "AIzaSyAO4X9FU8o-eQHLelFyKVfXfr-tHZ8FNek",
  authDomain: "domo-ut-a50a6.firebaseapp.com",
  projectId: "domo-ut-a50a6",
  storageBucket: "domo-ut-a50a6.appspot.com",
  messagingSenderId: "602138230684",
  appId: "1:602138230684:web:d80eb70df6936cb28cd259"
};

// Inicializa Firebase
const app = initializeApp(FirebaseConfig);

// Inicializa Firestore
const bd = getFirestore(app);

// Inicializa Firebase Auth con persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default {
  app,
  bd,
  auth
};

