// Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdR9mDYxWC9aIdtI-_KoBqBGmIfoCxRbA",
    authDomain: "trainscheduler-f10a3.firebaseapp.com",
    databaseURL: "https://trainscheduler-f10a3.firebaseio.com",
    projectId: "trainscheduler-f10a3",
    storageBucket: "trainscheduler-f10a3.appspot.com",
    messagingSenderId: "84161753918"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
// define variables //
var name = "";
var destination = "";
var firstTraintime = 0;
var frequency = 0;

// submit-button onclick function //
$("#submit-button").on("click", function(event){
	event.preventDefault();
	name = $("#name").val().trim();
	destination = $("#destination").val().trim();
	firstTrainTime = $("#firstTrainTime").val();
	
	frequency = $("#frequency").val().trim();
	
// push table content to firebase //
	database.ref().push({
	name:name,
	destination:destination,
	firstTrainTime:firstTrainTime,
	frequency:frequency,
})
});

database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot){

// Variables for the firebase data //
	var firebaseName = snapshot.val().name;
	var firebaseDestination = snapshot.val().destination;
	var firebaseFrequency = snapshot.val().frequency;
	var firebaseFirstTrainTime = snapshot.val().moment(currentTime).format("hh:mm");

///-------------------

    // var firstTimeConverted = moment(firebaseFirstTrainTime, "hh:mm").subtract(1, "years");
    // console.log("FIRST TIME CONVERTED:" +firstTimeConverted);
    console.log("FIRST TRAIN: " +firebaseFirstTrainTime);
    console.log("frequency: "+ firebaseFrequency);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firebaseFirstTrainTime), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % firebaseFrequency;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = firebaseFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))




///--------------------------

// Variables for row to be appended to //
	var tableRow = "<tr><td>" + firebaseName + "</td><td>" + firebaseDestination + "</td><td>" + firebaseFrequency + "</td><td>" + nextTrain + "</td><td>" + tMinutesTillTrain;
	$("#table tbody").append(tableRow);

});