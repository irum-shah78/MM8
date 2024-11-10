(function() {
    if (document.getElementById('floating-icon')) return;

    let floatingIcon = document.createElement('img');
    floatingIcon.src = chrome.runtime.getURL('logo2.png');
    floatingIcon.id = 'floating-icon';
    floatingIcon.style.position = 'fixed';
    floatingIcon.style.bottom = '20px';
    floatingIcon.style.right = '20px';
    floatingIcon.style.width = '50px';
    floatingIcon.style.height = '50px';
    floatingIcon.style.cursor = 'pointer';
    floatingIcon.style.zIndex = '1000';

    function makeDraggable(element) {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        element.addEventListener('mousedown', function (e) {
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
            initialX = element.offsetLeft;
            initialY = element.offsetTop;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        });

        function drag(e) {
            let dx = e.clientX - startX;
            let dy = e.clientY - startY;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                isDragging = true;
                element.style.left = initialX + dx + 'px';
                element.style.top = initialY + dy + 'px';
                element.style.bottom = 'auto';
                element.style.right = 'auto';
            }
        }

        function stopDrag(e) {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
            if (!isDragging) {
                try {
                    // Send a message to the background script to open the popup
                    chrome.runtime.sendMessage({ action: 'openPopup' }, (response) => {
                        if (chrome.runtime.lastError) {
                            showErrorNotification("Error opening popup: " + chrome.runtime.lastError.message);
                        } else if (response) {
                            showSuccessNotification("Popup opened successfully");
                        }
                    });
                } catch (error) {
                    showErrorNotification("An unexpected error occurred: " + error.message);
                    console.error("Error:", error);
                }
            }
        }

        element.addEventListener('click', function (e) {
            if (!isDragging) {
                e.preventDefault();
            }
        });
    }

    function showSuccessNotification(message) {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: chrome.runtime.getURL('logo2.png'),
            title: 'Success',
            message: message,
            priority: 1
        });
    }

    function showErrorNotification(message) {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: chrome.runtime.getURL('logo2.png'),
            title: 'Error',
            message: message,
            priority: 2
        });
    }

    makeDraggable(floatingIcon);
    document.body.appendChild(floatingIcon);
})();
