// timelineToggle.js

function toggleVisibility(id) {
    var allElements = document.querySelectorAll('.timeline.my-timeline');
    var allTitles = document.querySelectorAll('h1[onclick^="toggleVisibility"]');

    allElements.forEach(function (el) {
        el.style.display = "none";
    });

    allTitles.forEach(function (t) {
        var originalTitle = t.getAttribute('data-title');
        t.textContent = "▶ " + originalTitle;
    });

    var element = document.getElementById(id);
    var title = document.querySelector(`h1[onclick="toggleVisibility('${id}')"]`);
    var originalTitle = title.getAttribute('data-title');
    element.style.display = "block";
    title.textContent = "▼ " + originalTitle;
}