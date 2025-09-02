// loadResume.js

window.addEventListener('load', function() {
    fetch('html/resume.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('resumeContainer').innerHTML = data;
        });
});