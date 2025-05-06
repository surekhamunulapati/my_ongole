
function navigateToPage(place) {
    const pages = {
        "Sirigiri Temple": "sirigiri.html",
        "About Ongole": "aboutongole.html",
        "Kalvari Temple": "kalvari.html",
        "Mallavaram Dam": "mallavaramdam.html",
        "Kothapatnam Beach": "kothapatnam.html",
        "ChennakesavaSwamy Temple": "chennakesava.html",
        "Nalluri Gardens": "nalluri.html",
        "Rangarayudu cheruvu": "rangarayudu.html",
        "law":"law.html"
    };
    window.location.href = pages[place];
}

$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
});

// Optional: Close dropdown when clicking outside
document.addEventListener('click', function(event) {
const dropdown = document.querySelector('.developed-by-content');
const button = document.querySelector('.developed-by-button');
if (dropdown && !dropdown.contains(event.target) && event.target !== button) {
    dropdown.style.display = 'none';
}
});
document.addEventListener('DOMContentLoaded', function() {
const viewCounterElement = document.getElementById('view-counter');
let views = localStorage.getItem('pageViews');

if (views) {
    views = parseInt(views) + 1;
} else {
    views = 1;
}

localStorage.setItem('pageViews', views);
viewCounterElement.textContent = `Views: ${views}`;

// Optional: Send view count to server for more persistent tracking
fetch('/api/increment-view', { // Replace with your server endpoint
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ views: views })
});
});
