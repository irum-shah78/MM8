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

// function closePopup() {
//   document.querySelector(".container").style.display = "none";
// }

$(document).ready(function () {
  $("#close-btn").on("click", function () {
    $(".container").hide();
  });
});

// testing
$(document).ready(function () {
  // console.log("jQuery loaded");

  // function getBotResponse(userMessage) {
  //   return "I'm here to help you with your meeting details!";
  // }

  // function sendMessage() {
  //   const userMessage = $("#user-input").val().trim();

  //   if (userMessage) {
  //     console.log("User message:", userMessage);
  //     $("#chat-box").append(`
  //         <div class="message user">
  //           <span class="text">${userMessage}</span>
  //         </div>
  //       `);
  //     $("#user-input").val("");

  //     $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);

  //     const loadingMessageElement = $(`
  //         <div class="message bot" id="loading-message">
  //           <div class="profile-icon">
  //             <img src="/logo2.png" alt="Profile Icon">
  //           </div>
  //           <span class="text">On it...</span>
  //         </div>
  //       `);

  //     $("#chat-box").append(loadingMessageElement);

  //     $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);

  //     setTimeout(function () {
  //       const botResponse = getBotResponse(userMessage);
  //       console.log("Bot response:", botResponse);

  //       loadingMessageElement.remove();

  //       $("#chat-box").append(`
  //           <div class="message bot">
  //             <div class="profile-icon">
  //               <img src="/logo2.png" alt="Profile Icon">
  //             </div>
  //             <span class="text">${botResponse}</span>
  //           </div>
  //         `);

  //       $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
  //     }, 500);
  //   } else {
  //     console.log("Empty input, message not sent.");
  //   }
  // }

  // $("#send-button").click(function () {
  //   console.log("Send button clicked");
  //   sendMessage();
  // });

  // $("#user-input").keypress(function (e) {
  //   if (e.which === 13) {
  //     console.log("Enter key pressed");
  //     sendMessage();
  //     e.preventDefault();
  //   }
  // });


  
  // Implemented APIs
  // console.log("jQuery loaded");
  // const headers = {
  //   Authorization:
  //     "Bearer (key here)",
  //   "OpenAI-Beta": "assistants=v2",
  //   "Content-Type": "application/json",
  // };

  // let threadId = null;

  // function createThread() {
  //   return fetch("https://api.openai.com/v1/threads", {
  //     method: "POST",
  //     headers: headers,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Thread created:", data);
  //       threadId = data.id;
  //     })
  //     .catch((error) => console.error("Error creating thread:", error));
  // }

  // function sendMessageToBot(userMessage) {
  //   if (!threadId) {
  //     console.log("No thread found, creating one...");
  //     return createThread().then(() => addMessageToThread(userMessage));
  //   } else {
  //     return addMessageToThread(userMessage);
  //   }
  // }

  // function addMessageToThread(userMessage) {
  //   return fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify({
  //       role: "user",
  //       content: userMessage,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Full bot response data:", JSON.stringify(data, null, 2));

  //       // const messageContent = data.content || data.choices?.[0]?.message?.content;
  //       const messageContent = data.content[0]?.text?.value;

  //       if (messageContent) {
  //         return messageContent;
  //       } else {
  //         console.log("Unexpected response structure:", data);
  //         return "Oops, something went wrong!";
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error sending message to thread:", error);
  //       return "Something went wrong!";
  //     });
  // }

  // function sendMessage() {
  //   const userMessage = $("#user-input").val().trim();

  //   if (userMessage) {
  //     console.log("User message:", userMessage);
  //     $("#chat-box").append(`
  //           <div class="message user">
  //             <span class="text">${userMessage}</span>
  //           </div>
  //         `);
  //     $("#user-input").val("");

  //     const loadingMessageElement = $(`
  //           <div class="message bot" id="loading-message">
  //             <div class="profile-icon">
  //               <img src="/logo2.png" alt="Profile Icon">
  //             </div>
  //             <span class="text">On it...</span>
  //           </div>
  //         `);

  //     $("#chat-box").append(loadingMessageElement);
  //     $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);

  //     sendMessageToBot(userMessage).then((data) => {
  //       loadingMessageElement.remove();

  //       if (data && data.message && data.message.content) {
  //         $("#chat-box").append(`
  //             <div class="message bot">
  //               <div class="profile-icon">
  //                 <img src="/logo2.png" alt="Profile Icon">
  //               </div>
  //               <span class="text">${data.message.content}</span>
  //             </div>
  //           `);
  //       } else {
  //         $("#chat-box").append(`
  //             <div class="message bot">
  //               <div class="profile-icon">
  //                 <img src="/logo2.png" alt="Profile Icon">
  //               </div>
  //               <span class="text">Something went wrong!</span>
  //             </div>
  //           `);
  //       }

  //       $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
  //     });
  //   } else {
  //     console.log("Empty input, message not sent.");
  //   }
  // }

  // // Event listeners
  // $("#send-button").click(function () {
  //   console.log("Send button clicked");
  //   sendMessage();
  // });

  // $("#user-input").keypress(function (e) {
  //   if (e.which === 13) {
  //     console.log("Enter key pressed");
  //     sendMessage();
  //     e.preventDefault();
  //   }
  // });

  // const headers = {
  //   Authorization:
  //     "Bearer (key here)",
  //   "OpenAI-Beta": "assistants=v2",
  //   "Content-Type": "application/json",
  // };

  let threadId = null;

  function createThread() {
    return fetch("https://api.openai.com/v1/threads", {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Thread created:", data);
        threadId = data.id;
      })
      .catch((error) => console.error("Error creating thread:", error));
  }

  function addMessageToThread(userMessage) {
    return fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        role: "user",
        content: userMessage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Full bot response data:", JSON.stringify(data, null, 2));
        const assistantMessage =
          data.choices?.[0]?.message?.content?.text?.value ||
          data.assistant_message?.content?.text?.value;

        if (assistantMessage) {
          return assistantMessage;
        } else {
          console.log("No assistant message found in response:", data);
          return "Something went wrong!";
        }
      })
      .catch((error) => {
        console.error("Error sending message to thread:", error);
        return "Something went wrong!";
      });
  }

  function createRun() {
    if (!threadId) return console.error("No thread ID found");

    return fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => console.log("Run created:", data))
      .catch((error) => console.error("Error creating run:", error));
  }

  function getRunStatus() {
    if (!threadId) return console.error("No thread ID found");

    return fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => console.log("Run status:", data))
      .catch((error) => console.error("Error fetching run status:", error));
  }

  function getMessages() {
    if (!threadId) return console.error("No thread ID found");

    return fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => console.log("Messages:", data))
      .catch((error) => console.error("Error fetching messages:", error));
  }

  function sendMessageToBot(userMessage) {
    if (!threadId) {
      console.log("No thread found, creating one...");
      return createThread().then(() => addMessageToThread(userMessage));
    } else {
      return addMessageToThread(userMessage);
    }
  }

  function sendMessage() {
    const userMessage = $("#user-input").val().trim();

    if (userMessage) {
      $("#chat-box").append(
        `<div class="message user"><span class="text">${userMessage}</span></div>`
      );
      $("#user-input").val("");

      const loadingMessageElement =
        $(`<div class="message bot" id="loading-message">
        <div class="profile-icon"><img src="/logo2.png" alt="Profile Icon"></div><span class="text">On it...</span></div>`);

      $("#chat-box").append(loadingMessageElement);
      $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);

      sendMessageToBot(userMessage).then((response) => {
        loadingMessageElement.remove();
        $("#chat-box")
          .append(`<div class="message bot"><div class="profile-icon"><img src="/logo2.png" alt="Profile Icon"></div>
          <span class="text">${
            response || "Something went wrong!"
          }</span></div>`);
        $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
        console.log(response);
      });
    }
  }

  // Event listeners
  $("#send-button").click(sendMessage);
  $("#user-input").keypress(function (e) {
    if (e.which === 13) sendMessage();
  });

  // Calendar Details
  let tokenClient;
  let accessToken = localStorage.getItem("accessToken") || null;
  let refreshToken = localStorage.getItem("refreshToken") || null;
  let userEmail = localStorage.getItem("userEmail") || null;

  console.log("Access Token stored in localStorage:", accessToken);
  console.log("Refresh Token stored in localStorage:", refreshToken);

  if (!accessToken || !userEmail) {
    console.log("No stored login. Please log in.");
  } else {
    console.log("User already logged in:", userEmail);
    fetchCalendarEventDetails();
  }

  $(document).ready(function () {
    initializeGoogleServices();

    $("#get-calendar-button").on("click", function () {
      if (accessToken) {
        fetchCalendarEventDetails();
      } else {
        tokenClient.requestAccessToken({ prompt: "consent" });
      }
    });
  });

  function initializeGoogleServices() {
    if (typeof google !== "undefined" && google.accounts) {
      tokenClient = google.accounts.oauth2.initTokenClient({
        // client_id:
        //   "",
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        access_type: "offline",
        prompt: "consent",
        callback: (response) => {
          console.log("OAuth Response:", response);

          if (response.error) {
            console.error("Token response error:", response.error);
            alert("Failed to authenticate. Please try logging in again.");
            return;
          }
          accessToken = response.access_token;
          localStorage.setItem("accessToken", accessToken);

          if (response.refresh_token) {
            refreshToken = response.refresh_token;
            localStorage.setItem("refreshToken", refreshToken);
          } else {
            console.warn("No refresh token provided.");
          }

          fetchCalendarEventDetails();
        },
      });
    } else {
      console.error("Google Identity Services not loaded.");
    }
  }

  if (!accessToken || !userEmail || !refreshToken) {
    localStorage.clear();
    // console.log("No valid session. Redirecting to login...");
    // alert("Session expired or invalid. Please log in again.");
  } else {
    fetchCalendarEventDetails();
  }

  function fetchCalendarEventDetails() {
    if (!accessToken) {
      console.error("Access token not available. Attempting refresh...");
      refreshAccessToken(() => {
        if (accessToken) fetchCalendarEventDetails();
        else alert("Please log in again.");
      });
      return;
    }

    $.ajax({
      url: "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      type: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 1,
        orderBy: "startTime",
      },
      success: function (response) {
        console.log("API response:", response);
        processCalendarResponse(response);
      },
      error: function (error) {
        if (error.status === 401) {
          console.error("Unauthorized. Attempting token refresh...");
          refreshAccessToken(() => fetchCalendarEventDetails());
        } else {
          console.error("Error fetching calendar events:", error);
        }
      },
    });
  }

  function refreshAccessToken(callback) {
    if (!refreshToken) {
      console.error("No refresh token available. Cannot refresh access token.");
      alert("Session expired. Please log in again.");
      localStorage.clear();
      return;
    }

    $.ajax({
      url: "https://oauth2.googleapis.com/token",
      type: "POST",
      contentType: "application/x-www-form-urlencoded",
      data: {
        // client_id:
        //   "",
        // client_secret: "",
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      },
      success: function (response) {
        console.log("New access token fetched:", response.access_token);
        accessToken = response.access_token;
        localStorage.setItem("accessToken", accessToken);

        if (callback && typeof callback === "function") {
          callback();
        }
      },
      error: function (error) {
        console.error("Error refreshing access token:", error);
        alert("Failed to refresh access token. Please log in again.");
        localStorage.clear();
      },
    });
  }

  function processCalendarResponse(response) {
    const event = response.items[0];
    const $calendarDetails = $("#calendar-details");
    $calendarDetails.empty();

    if (event) {
      const eventTime = event.start.dateTime || event.start.date;
      const title = event.summary;
      const company = title.split(" ")[0];
      const location = event.location || "No location provided";
      const description = event.description || "No description provided";
      const attendees = event.attendees || "No attendees provided";

      $calendarDetails.append(`
            <p style='color: white'>Time: ${eventTime}</p>
            <p style='color: white'>Title: ${title}</p>
            <p style='color: white'>Company: ${company}</p>
            <p style='color: white'>Location: ${location}</p>
            <p style='color: white'>Description: ${description}</p>
            <p style='color: white'>Attendees: ${attendees}</p>
        `);

      confirmMeetingDetails(title, eventTime, company, description, attendees);
    } else {
      $calendarDetails.append(
        "<p style='color: white'>No upcoming events.</p>"
      );
    }
  }

  function confirmMeetingDetails(
    title,
    eventTime,
    company,
    description,
    attendees
  ) {
    const botResponse = `
    <div class="message bot">
      <div class="profile-icon" style="flex-shrink: 0; margin-right: 10px;">
        <img src="/logo2.png" alt="Profile Icon" style="width: 40px; height: 40px; border-radius: 50%;">
      </div>
      <div class="text" style="flex-grow: 1; max-width: calc(100% - 60px); word-wrap: break-word;">
        You are meeting with <strong>${company}</strong>, the title of the meeting is <strong>${title}</strong>, and the purpose is to <strong>${description}</strong>. <strong>${attendees}</strong> will be attending.
      </div>
    </div>
  `;
    $("#chat-box").append(botResponse);
    $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
  }
});
