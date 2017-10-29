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

// database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot){

// // Variables for the firebase data //
// 	var firebaseName = snapshot.val().name;
// 	var firebaseRole = snapshot.val().role;
// 	var firebaseStartDate = snapshot.val().startDate;
// 	var firebaseMonthlyRate = snapshot.val().monthlyRate;

// // Variables for calculations //
// 	var monthsWorked = "NOT SURE"
// 	var totalBilled = "NOT SURE"

// // Variables for row to be appended to //
// 	var tableRow = "<tr><td>" + firebaseName + "</td><td>" + firebaseRole + "</td><td>" + firebaseStartDate + "</td><td>" + "NOT SURE" + "</td><td>" + firebaseMonthlyRate + "</td><td>" + "NOT SURE" + "</td></tr>"
// 	$("#table tbody").append(tableRow);

// });