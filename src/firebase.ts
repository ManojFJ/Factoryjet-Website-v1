// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1EBwPNqicJfuygSKfpy4te8CajzSFvL4",
  authDomain: "factoryjet-c5f8a.firebaseapp.com",
  projectId: "factoryjet-c5f8a",
  storageBucket: "factoryjet-c5f8a.firebasestorage.app",
  messagingSenderId: "687943384982",
  appId: "1:687943384982:web:2bf9fb0e4c2c977e8b27b7",
  measurementId: "G-ZZ03T8W2VR",
};

// Lazy initialize Firebase after page load for better LCP
let app: any = null;
let analytics: any = null;
let db: any = null;

const initFirebase = async () => {
  if (app) return { app, analytics, db };

  const { initializeApp } = await import("firebase/app");
  const { getAnalytics } = await import("firebase/analytics");
  const { getFirestore } = await import("firebase/firestore");

  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);

  return { app, analytics, db };
};

// Firebase initialization is now deferred and only happens when explicitly called
// This prevents blocking the critical rendering path

export { app, analytics, db, initFirebase };
