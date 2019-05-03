const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav
const nav = document.querySelector('nav');
console.log(nav);
const navItems = document.querySelectorAll('nav a');
console.log(navItems);
// const navTranspose = Object.values(siteContent["nav"]);
// console.log(navTranspose);
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

// Nav Prepend and Append

let navItem7 = document.createElement('a');
navItem7.textContent = ('Blog');
let navItem8 = document.createElement('a');
navItem8.textContent = ('Support');

nav.prepend(navItem7);
nav.appendChild(navItem8);

//Nav Styles
navItems.forEach(item => (item.style.color = 'seagreen'));
navItem7.setAttribute('style','color:seagreen');
navItem8.setAttribute('style', 'color:seagreen');
//CTA SECTION
let ctaText = document.getElementsByClassName('cta-text')[0];

ctaText.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaText.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]['img-src']);

//Top Content - Features  
let topContent = document.getElementsByClassName('text-content');
// console.log(topContent);
topContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
topContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];
topContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
topContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

//Middle
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

//Bottom Content - Services
let bottomContent = document.getElementsByClassName('text-content');
console.log(bottomContent);

bottomContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
bottomContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];

// Product 
bottomContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
bottomContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content'];

// Vision
bottomContent[4].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent[4].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];


//Contact 
// "contact": {
//     "contact-h4": "Contact",
//     "address": "123 Way 456 Street Somewhere, USA",
//     "phone": "1 (888) 888-8888",
//     "email": "sales@greatidea.io",
// },

let contactContent = document.getElementsByClassName('contact');

contactContent[0].getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contactContent[0].getElementsByTagName('p')[1].textContent = siteContent['contact']['address'];
contactContent[0].getElementsByTagName('p')[2].textContent = siteContent['contact']['phone'];
// contactContent[0].getElementsByTagName('p')[3].textContent = siteContent['contact']['email'];

// Footer 
// "footer": {
//     "copyright": "Copyright Great Idea! 2018"
// },
let footerContent = document.getElementsByClassName('contact');

footerContent[0].getElementsByTagName('p')[0].textContent = siteContent['footer']['copyright'];



// navTranspose.forEach(function(link) 
//     link.textContent = siteContent['nav']['nav-item-${i+1}'];
//      });

// for (let i = 0; i < nav.length; i++){
//     navItems[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
//    };