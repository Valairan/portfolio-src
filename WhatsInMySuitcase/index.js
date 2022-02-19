
function login(){
  var uName = document.getElementById("uName").value;
  var pWord = document.getElementById("pWord").value;

  .auth().signInWithEmailAndPassword(uName, pWord)
  .then((userCredential) => {
    window.alert("Logged in" + uName + "   " + pWord);
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Logg in failed - " +errorCode+ " - " +errorMessage );
  });
}

