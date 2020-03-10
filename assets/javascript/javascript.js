$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyAARauqpKNNBNRWUd7b9kYHxvEpNPzeABA",
    authDomain: "bootcamp-16a34.firebaseapp.com",
    databaseURL: "https://bootcamp-16a34.firebaseio.com",
    projectId: "bootcamp-16a34",
    storageBucket: "bootcamp-16a34.appspot.com",
    messagingSenderId: "923397960484",
    appId: "1:923397960484:web:40699617e0275bd7bcb9b1",
    measurementId: "G-XHSHJSZJ0J"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  // var database = firebase.database();

  // $("#add-train").on("click", function(event) {
  //   event.preventDefault();

  //   var trainName = $("#trainName").val().trim();
  //   var destination = $("#destination").val().trim();
  //   var firstTrain = $("#firstTrain").val().trim();
  //   var frequency = $("#frequency").val().trim();

  //   var newTrain = {
  //     name: trainName,
  //     dest: destination,
  //     first: firstTrain,
  //     freq: frequency
  //   };

  //   database.ref().push(newTrain),

  //   console.log(newTrain.name);
  //   console.log(newTrain.dest);
  //   console.log(newTrain.first);
  //   console.log(newTrain.freq);

  //   alert("Train added successfully");

  // });
  
});