var happyButton = document.querySelector("#happy");
var quotes = ["You go!", "It's a great day", "It's good"];

happyButton.addEventListener("click", showHappyMessages);

function showHappyMessages() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("displayed-message").innerHTML = quotes[randomNumber];
}



// target button, target empty space for the message, qnd what you want it to say
// var happyBtn = document.querySelector('#happy');
// var message = document.querySelector('displayed-message')
// var quote = "Yeah!"
//
// // Add an addEventListener for the button so when it clicks the quote will display on the screen
//
// happyBtn.addEventListener('click', displayMessage)
//
// function displayMessage() {
//
// }



















//
