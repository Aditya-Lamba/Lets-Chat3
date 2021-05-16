var firebaseConfig = {
    apiKey: "AIzaSyAuLwyk_eZcNuY0ExgnoSaWW3QjURPsnbY",
    authDomain: "lets-chat-6836e.firebaseapp.com",
    databaseURL: "https://lets-chat-6836e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6836e",
    storageBucket: "lets-chat-6836e.appspot.com",
    messagingSenderId: "57692059001",
    appId: "1:57692059001:web:2aaa0af9bab676ab0d2ba8",
    measurementId: "G-J49E4913CZ"
  };
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome"+ user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
  }  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >" + Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row; 
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
