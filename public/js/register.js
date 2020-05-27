// Your web app's Firebase configuration
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
const ref = firebase.storage().ref();

const signupForm=document.querySelector("#Register");

signupForm.addEventListener('submit',(e) =>{
  e.preventDefault();

  const name=signupForm['name'].value;
  const Dob=signupForm['Dob'].value;
  const email=signupForm['email'].value;
  const password=signupForm['password'].value;
  
  
  auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    //signing user in
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      if(user){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            const userId=user.uid;

            const file=document.querySelector("#Kycimg").files[0];
            
            const p_name=new Date()+'-'+file.name;

            const metadata ={
              contentType:file.type
            }

            const task=ref.child(p_name).put(file,metadata);

            task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => { url1 = url}).then(function() {remverr()});
            function remverr(){
            db.collection('Users').doc(userId).set({
              name: name,
              Dob: Dob,
              email: email,
              password: password,
              role: "user"            
            }).then(function() {remverr2();});
            
          }
            function remverr2(){
              alert("Successfully created your account!");
              window.location="9_clogin.html";
            }
          }
          else{
            //no user signed in
          }
        });
        
      }
    })
    .catch(function(error){
      console.log(error.message);
    });
  })
  .catch(function(error){
    console.log(error.message);
  });
});