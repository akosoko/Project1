$(document).ready(function(){

    var config = {
      apiKey: "AIzaSyDOuB3xEmIvEW1wy8Sm4erOcphZnruS5sA",
      authDomain: "project1-92adf.firebaseapp.com",
      databaseURL: "https://project1-92adf.firebaseio.com",
      projectId: "project1-92adf",
      storageBucket: "project1-92adf.appspot.com",
      messagingSenderId: "994044310012"
    };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    
    var highScore = 0;
    var highUser = "No one :-(";
    var highImage = null;
    var userID = localStorage.getItem("userID");
    var userName = localStorage.getItem("userName");
     // var userID = "Rob";
     // var userName = "Rob";
     var score = "100";
    
    //if (localStorage.getItem("playAnon") === false && numberOfLives == 0) {
    
    console.log(userID);
    console.log(userName);
    console.log(score);
    
    /*var newUser = {
    userID: userID,
    name: userName,
    score: score,
    };
    database.ref().push(newUser);
    console.log(newUser.name);
    console.log(newuser.score);
    console.log(newUser.userID);
    */
    database.ref().push({
      userID: userID,
    name: userName,
    score: score
    });
    // At the initial load and subsequent value changes, get a snapshot of the stored data.
    // This function allows you to update your page in real-time when the firebase database changes.
    database.ref().on("value", function(snapshot) {
    
      // If Firebase has a highUserand highScore stored, update our client-side variables
      if (snapshot.child("highUser").exists() && snapshot.child("highScore").exists()) {
        // Set the variables for highUser/highScore equal to the stored values.
        highUser = snapshot.val().highUser;
        highScore = parseInt(snapshot.val().highScore);
       
      }
    
      // If Firebase does not have highScore and highUser values stored, they remain the same as the
      // values we set when we initialized the variables.
      // In either case, we want to log the values to console and display them on the page.
      console.log(highScore);
      console.log(highUser);
      $("#high-user").text(highUser);
      $("#high-score").text(highScore);
     
    
      // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    
    // --------------------------------------------------------------
    
    
    
      if (score > highScore) {
    
        // Save the new score in Firebase. This will cause our "value" callback above to fire and update
        // the UI.
        database.ref().push({
          highUser: userName,
          highScore: score,
         
        });
    
        // Log the new High Score
        console.log("New High Score!");
        console.log(userName);
        console.log(score);
      }
    
    });
    