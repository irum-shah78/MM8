// document.getElementById('close-button').addEventListener('click', function() {
//   window.close();
// });

// chrome.storage.sync.get(['userEmail'], function (result) {
//   var email_by_sign_in = result.userEmail;

//   if (!email_by_sign_in) {
//     window.location.href = "popup.html";
//   } else {
//     $(document).on('click', '#getDetailsButton1', function () {
      
//         var companyName = $('#companyNameInput').val();
//         var companyWebsite = $('#companyWebsiteInput').val();
//         var companyKeywords = $('#keywordsInput').val();
//       if (!companyName) {
//         alert('Company name is required. Please enter a valid company name.');
//         return;
//       }
//       $('.loading-spinner').show();

//         fetch('https://hooks.zapier.com/hooks/catch/16472073/3rlfays/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             // Add any additional headers if required
//           },
//           body: JSON.stringify({
//             companyName: companyName,
//             companyWebsite: companyWebsite,
//             companyKeywords: companyKeywords
//           }),
//         })
//           .then(response => {
//             $('.loading-spinner').hide();
//             if (!response.ok) {
              
//               throw new Error('Failed to call webhook');
//             }
//             // Handle successful response if needed
//             console.log('Webhook call successful');
//           })
//           .catch(error => {
//             // Handle errors
//             console.error('Error calling webhook:', error);
//           }),

//       console.log(companyName);
//       console.log(companyWebsite);
//       console.log(companyKeywords);
//       console.log(email_by_sign_in);
//     });
//   }
// });