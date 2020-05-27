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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  const db=firebase.firestore();
  const auth=firebase.auth();
//logout 
auth.signOut().then(() =>{
        firebase.auth().signOut();
        console.log('user is signed out');
        // alert('You are now logged out');
        // window.location="8_clogin.html";
    })
    .catch(function(error){
        alert('unable to log out');
});