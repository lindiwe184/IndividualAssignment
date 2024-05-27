// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Adding 'active' class to style the active link
const style = document.createElement('style');
style.innerHTML = `
    nav a.active {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);

// Fetch and display ads
// Existing JavaScript code...

// Add the new JavaScript code here
var formdata = new FormData();
formdata.append("type", "Horizontal Strip");
formdata.append("tags", "music,party, animal, dog, cat, pet, dogs, cats");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "yvUIGkL3un3iOxqbJpzbv5G6RJCLKoy1");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    var iframe = document.getElementById('adIframe');
    if (iframe) {
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`
            <html>
            <body>
                <a href="${response.href}" class="anchorElement">
                    <img src="${response.link}" alt="${response.alt}" class="advertIMG">
                </a>
            </body>
            </html>
        `);
        doc.close();
    }

    var advertImg = document.querySelector('.advertIMG');
    var anchorElement = document.querySelector('.anchorElement');
    var headerText = document.querySelector('.headerText');

    if (advertImg) {
        advertImg.src = response.link;
        advertImg.alt = response.alt;
    }

    if (anchorElement) {
        anchorElement.href = response.href;
    }

    if (headerText) {
        headerText.innerHTML = response.message;
    }
}

// Call fetchAds on page load
window.addEventListener('DOMContentLoaded', function() {
    // Call your ad fetching function here
    // For example:
fetchAds();
});