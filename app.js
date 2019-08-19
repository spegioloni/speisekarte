// SETUP FIREBASE
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

// SETUP HANDLEBARS COMPILE FUNCTION
function render(templateName, context, targetDivId) {
  var source = document.getElementById(templateName).innerHTML;
  var template = Handlebars.compile(source);
  var html = template(context);

  $("#" + targetDivId).html(html);
}

// SETUP NAVBAR
const navItems = [
  { name: "Home", link: "./index.html" },
  { name: "Speisekarte", link: "./speisekarte.html" },
  { name: "Verwalten", link: "./verwalten.html" }
];

render("navbar", { navItems: navItems }, "top");

// GET STUFF OUT OF DB
var docRef = db.collection("speisekarte");
var menuItems = [];
docRef.get().then(function(snapshot) {
  for (var i = 0; i < snapshot.docs.length; i++) {
    menuItems.push(snapshot.docs[i].data());
    console.log(menuItems);
  }
  render("menu", { menuItems: menuItems }, "middle");
});
