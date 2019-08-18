$("#content").html("Hallo Welt!");
console.log($("content"));

var firebaseConfig = {
  apiKey: "AIzaSyA70BZjanQr9Q--HeKo6bFJi37miqJwYgY",
  authDomain: "test-a0932.firebaseapp.com",
  databaseURL: "https://test-a0932.firebaseio.com",
  projectId: "test-a0932",
  storageBucket: "test-a0932.appspot.com",
  messagingSenderId: "558012206350",
  appId: "1:558012206350:web:8ac6093b8f2eda39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();



var docRef = db.collection("Test").doc("name");
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        $("#content").html(doc.data().vorname);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  });
