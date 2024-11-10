$(document).ready(function () {
  let data = [];
  function addDetails() {
    const name = $(".tags-input .input-container .input-tag").val().trim();
    const company = $(".tags-input .input-container .input-tag").next().val().trim();
    if (name == "" || company == ""){
      alert("You have to fill both field Company Name and Person Name");
    }else if (data.length < 6) {
      if (name !== "" && company !== "") {
        data.push({ 'name': name, 'company': company });
        if (data.length < 6) {
          $(".tags-input .input-container .input-tag").val("");
          $(".tags-input .input-container .input-tag").next().val("");
        } else{
          alert("You can add maximun 6 person details at one time and for now limit is completed")
        }
      }
    }
  }
  $("#addMoreButton").on("click", addDetails);
  function getEnteredData() {
    $('.loading-spinner').show();
    chrome.storage.sync.get(['userEmail'], function (result) {
      var email_by_sign_in = result.userEmail;
      var user_info_json = JSON.stringify(data);
      var user_email_json = JSON.stringify(email_by_sign_in);
      var data_new = new FormData();
      data_new.append('user_info', user_info_json);
      data_new.set('email', user_email_json);
      if (data_new.length === 0) {
        alert("Enter at least one person's name and company name");
        return;
      } else {
        fetch("http://3.91.77.224/api/getAttendeesDetails", {
          method: 'POST',
          body: data_new
        })
          .then(response => response.json())
          .then(data => {
            if (data.success === "true") {
              alert("We will send you an email iwith in short time.Thank you!");
            }
          })
          .catch(error => {
            alert('Oops! Should not be able to connect to the server, try again later');
            console.error('Error:', error);
            console.log(data_new)
          })
          .finally(() => {
            $('.loading-spinner').hide(); 
          });
     }
    });
  }
  $("#getProfilesButton").on("click", function () {
    addDetails();
    getEnteredData();
  });
});
