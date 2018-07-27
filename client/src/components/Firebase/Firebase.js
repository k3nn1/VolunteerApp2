import firebase from 'firebase'

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyAlw2E9NE0wNyfxeFmP1dC3gbD4O4sxvso",
    authDomain: "volunteer-app-project.firebaseapp.com",
    databaseURL: "https://volunteer-app-project.firebaseio.com",
    projectId: "volunteer-app-project",
    storageBucket: "",
    messagingSenderId: "580646424877"
};

firebase.initializeApp(config);
export default firebase;