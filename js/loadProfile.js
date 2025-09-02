// loadProfile.js

window.addEventListener('load', function() {
    fetch('html/profile.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('profileContainer').innerHTML = data;
        });
});