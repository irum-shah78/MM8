
// document.addEventListener('DOMContentLoaded', function() {
//     try {
//         let element = document.querySelector('#yourElementId');
//         if (element) {
//             element.addEventListener('click', function() {
//                 // Your click handler code here
//                 showSuccessNotification("Click event handled successfully");
//             });
//         } else {
//             showErrorNotification("#yourElementId not found. Ensure the element is present in the DOM.");
//             console.error("#yourElementId not found");
//         }
//     } catch (error) {
//         showErrorNotification("An unexpected error occurred: " + error.message);
//         console.error("Error:", error);
//     }

//     function showSuccessNotification(message) {
//         chrome.notifications.create({
//             type: 'basic',
//             iconUrl: chrome.runtime.getURL('logo2.png'),
//             title: 'Success',
//             message: message,
//             priority: 1
//         });
//     }

//     function showErrorNotification(message) {
//         chrome.notifications.create({
//             type: 'basic',
//             iconUrl: chrome.runtime.getURL('logo2.png'),
//             title: 'Error',
//             message: message,
//             priority: 2
//         });
//     }
// });
