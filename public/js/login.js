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
  
  const loginForm=document.querySelector("#login"); 

loginForm.addEventListener('submit',(e) =>{
  e.preventDefault();
    const email=loginForm['email'].value;
    const password=loginForm['password'].value;

    auth.signInWithEmailAndPassword(email,password).then(function(user){
      if(user){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in. 
            db.collection('Users').doc(user.uid).get().then(function(doc) {
              if(doc.exists) {
                console.log("data is ", doc.data());
                if(doc.data().role=="user"){
                  alert("Login successful");
                  window.location="2_home.html";
                }
                else{
                  if(doc.data().role=="admin"){
                    alert("Login successful");
                    window.location="#";
                  }
                  else{
                    alert("Your account is not secure please contact us in help");
                  }
                }
              }
              else {
                console.log("no document");
              }
            })
              .catch(function(error) {
                console.log("error"+error);
              });
          } else {
            // No user is signed in.
            console.log("no user is signed in");
          }
        });
       
    }
    })
    .catch(function(error) {
      const fd12=document.querySelector("#fld12");
      fd12.textContent="*Invalid username or password";
      alert('Invalid username or password!');
      setTimeout(function() {
        window.location="3_login.html";
      },3000);
    });
});
