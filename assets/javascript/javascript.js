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

  $("#add-train").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var trainDestination = $("#train-destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var trainFrequency = $("#train-frequency").val().trim();

    var newTrain = {
      name: trainName,
      destination: trainDestination,
      first: firstTrain,
      frequency: trainFrequency
    };

    database.ref().push(newTrain),

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    alert("Train added successfully");

    $("#train-name").val("");
    $("#train-destination").val("");
    $("#first-train").val("");
    $("#train-frequency").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
    Console.log(childSnapshot.val());

    

  });


  
});