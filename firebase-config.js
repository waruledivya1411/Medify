// Your web app's Firebase configuration (Medify project)
// For local dev: add 127.0.0.1 and localhost in Firebase Console → Authentication → Settings → Authorized domains
const firebaseConfig = {
    apiKey: "AIzaSyDxcGc3Uh2EAjV3C1gnNurzfcYgEaquIfY",
    authDomain: "medify-785e6.firebaseapp.com",
    projectId: "medify-785e6",
    storageBucket: "medify-785e6.firebasestorage.app",
    messagingSenderId: "82727222891",
    appId: "1:82727222891:web:abc7be5786328a1c54bb2e"
};

// Initialize Firebase (requires Firebase SDK scripts to be loaded first)
// Default app = customer (main site, checkout, notifications). Staff app = doctor/pharmacist/delivery/clinic (separate auth so logging in one tab does not log out the other).
if (typeof firebase !== 'undefined') {
    window.firebaseApp = firebase.initializeApp(firebaseConfig);
    window.firebaseAuth = firebase.auth();
    window.firebaseDb = firebase.firestore();
    if (firebase.storage) {
        window.firebaseStorage = firebase.storage();
    }
    try {
        window.firebaseStaffApp = firebase.initializeApp(firebaseConfig, 'staff');
        window.firebaseStaffAuth = window.firebaseStaffApp.auth();
        window.firebaseStaffDb = window.firebaseStaffApp.firestore();
    } catch (e) {
        if (e.code === 'app/duplicate-app') {
            window.firebaseStaffApp = firebase.app('staff');
            window.firebaseStaffAuth = window.firebaseStaffApp.auth();
            window.firebaseStaffDb = window.firebaseStaffApp.firestore();
        } else {
            throw e;
        }
    }
} else {
    console.warn('Firebase SDK not loaded. Add Firebase script tags before firebase-config.js');
}
