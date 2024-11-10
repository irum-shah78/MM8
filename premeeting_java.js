// document.getElementById('close-button').addEventListener('click', function () {
//   window.close();
// });

// class CompanyDetails {

//   constructor(company_name, company_website, company_keywords, email) {
//     this.company_name = company_name;
//     this.company_website = company_website;
//     this.company_keywords = company_keywords;
//     this.email = email;
//   }

// }

// chrome.storage.sync.get(['userEmail'], function (result) {
//   const email_by_sign_in = result.userEmail;

//   if (!email_by_sign_in) {
//     window.location.href = "popup.html";
//   } else {
//     $(document).on('click', '#getDetailsButton1', function () {

//       const company_name = $('#companyNameInput').val();
//       const company_website = $('#companyWebsiteInput').val();
//       const company_keywords = $('#keywordsInput').val();
//       const zapier_url = "https://hooks.zapier.com/hooks/catch/16472073/30xs7hy/";

//       if (!company_name) {
//         alert('Company name is required. Please enter a valid company name.');
//         return;
//       }


//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const company_details = new CompanyDetails(company_name, company_website, company_keywords, email_by_sign_in);

//       const payload = {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(company_details),
//         redirect: "follow"
//       }
//       console.debug(' payload : ', payload);

//       $('.loading-spinner').show();

//       fetch(zapier_url, payload)
//       .then((response) => {
//         if (response.status === 200) {
//           $('.loading-spinner').hide();
//         } else {
//           throw new Error('Request failed with status ' + response?.status);
//         }
//         return response.text();
//       })
//       .then((result) => {
//         console.debug(' result ::: ', result);
//         alert(`Amazing! it worked. Your result: ${result}`);
//       })
//       .catch((error) => {
//         console.error("Error Occurred : ", error);
//         $('.loading-spinner').hide();
//         alert('Oops! Should not be able to connect to the server, try again later');
//       });
    
//       console.table([company_details]);

//     });
//   }
// });
