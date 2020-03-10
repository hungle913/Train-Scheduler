$(document).ready(function(){

  var firebaseConfig = {
    apiKey: "AIzaSyAARauqpKNNBNRWUd7b9kYHxvEpNPzeABA",
    authDomain: "bootcamp-16a34.firebaseapp.com",
    databaseURL: "https://bootcamp-16a34.firebaseio.com",
    projectId: "bootcamp-16a34",
    storageBucket: "bootcamp-16a34.appspot.com",
    messagingSenderId: "923397960484",
    appId: "1:923397960484:web:40699617e0275bd7bcb9b1",
    measurementId: "G-XHSHJSZJ0J"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-train").on("click", function(event) {
    event.preventDefault();
    
  });
  
});