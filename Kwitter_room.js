const config={apiKey: "AIzaSyDEh51vNWS5AlVrTLDSnJyHSp1EBMeL13k",
authDomain: "class-93-c03a8.firebaseapp.com",
projectId: "class-93-c03a8",
storageBucket: "class-93-c03a8.appspot.com",
messagingSenderId: "813536808924",
appId: "1:813536808924:web:2f5e2b67c27ba2bf810919",
measurementId: "G-WZPP42YN3J"
,databaseURL="https://project-93-90d5b-default-rtdb.firebaseio.com/"};


firebase.initnalizeApp(config);

user_name=localStorage.getItem(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
