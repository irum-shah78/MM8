document.getElementById('close-button').addEventListener('click', function() {
  window.close();
});

chrome.storage.sync.get(['userEmail'], function (result) {
  const email_by_sign_in = result.userEmail;

  if (!email_by_sign_in) {
    window.location.href = "popup.html";
  } else {
    $(document).on('click', '#getDetailsButton1', function () {
      
      const company_name = $('#companyNameInput').val();
      const company_website = $('#companyWebsiteInput').val();
      const company_keywords = $('#keywordsInput').val();
      const zapier_url = "https://hooks.zapier.com/hooks/catch/16472073/30xs7hy/";
      
      if (!company_name) {
        alert('Company name is required. Please enter a valid company name.');
        return;
      }
      $('.loading-spinner').show();
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        companyName: company_name,
        companyWebsite: company_website,
        companyKeywords: company_keywords,
        email: email_by_sign_in,
        message: 'Testing this call'
      });
      
      fetch(zapier_url, {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        mode: 'no-cors' // Add mode option here
      })
        .then((response) => response.text())
        .then((result) => {
          console.debug(' result ::: ', result)

        })
        .catch((error) => {
            console.log("Fail Success : ", error)
            alert('Oops! Should not be able to connect to the server, try again later');
        });

      console.log(company_name);
      console.log(company_website);
      console.log(company_keywords);
      console.log(email_by_sign_in);
    });
  }
});
