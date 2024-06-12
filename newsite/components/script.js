// scripts.js
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        });
}

function loadHead() {
    fetch('head.html')
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('beforeend', data);
        });
}

function loadHeaderAndFooter() {
    loadComponent('footer', 'components/footer.html');
}

document.addEventListener("DOMContentLoaded", () => {
    loadHead();
    loadHeaderAndFooter();
});
