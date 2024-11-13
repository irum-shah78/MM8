// chrome.storage.sync.get(['userEmail'], function (result) {
//   var email_by_sign_in = result.userEmail;
//   if (email_by_sign_in) {
//     window.location.href = "premeeting.html";
//   }
// });
// element = document.getElementById('getDetailsButton');
// element.addEventListener('click', function (event) {
//   event.preventDefault();
//   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   input = document.getElementById('emailInput_by_Sign_up');
//   if (input.value.match(validRegex)) {
//     var email = document.getElementById('emailInput_by_Sign_up').value;

//     chrome.storage.sync.set({ 'userEmail': email }, function () {
//       window.location.href = "premeeting.html";
//     });
//   } else {
//     alert("Invalid email address!");
//   }
// }, false);

// function closePopup() {
//   document.querySelector(".container").style.display = "none";
// }

// function handleCredentialResponse(response) {
//   console.log("Encoded JWT ID token: " + response.credential);
//   window.location.href = "/premeeting.html";
// }
