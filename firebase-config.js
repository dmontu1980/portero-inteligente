// Configuración del proyecto Firebase (portero-rioja1244).
// Estos valores son públicos por diseño (identifican el proyecto, no dan acceso de escritura:
// eso lo controla el login + las reglas de seguridad de Firestore).
const firebaseConfig = {
  apiKey: "AIzaSyDFbjA6GzOzKoP36OwA_05WutxXNXdCBZM",
  authDomain: "portero-rioja1244.firebaseapp.com",
  projectId: "portero-rioja1244",
  storageBucket: "portero-rioja1244.firebasestorage.app",
  messagingSenderId: "846282368887",
  appId: "1:846282368887:web:a06d1965f81bd8f4de2372"
};
firebase.initializeApp(firebaseConfig);
