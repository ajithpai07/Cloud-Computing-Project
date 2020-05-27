var firebaseConfig = {
  apiKey: "AIzaSyCU8IdQO3LssJ4EyzaMckR7KpDSi1syS68",
  authDomain: "g-tool-analytics.firebaseapp.com",
  databaseURL: "https://g-tool-analytics.firebaseio.com",
  projectId: "g-tool-analytics",
  storageBucket: "g-tool-analytics.appspot.com",
  messagingSenderId: "482878229305",
  appId: "1:482878229305:web:c3cd434c9c03cd0325b6e8",
  measurementId: "G-0NXVMRYT2N"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const auth=firebase.auth();

auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in. 
      console.log(user.uid);
    } else {
      // No user is signed in.
      console.log("not signed-in");
      window.location="3_login.html";
    }
  });