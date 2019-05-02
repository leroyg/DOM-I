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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
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
const navTranspose = Object.values(siteContent["nav"]);
console.log(navTranspose);

// navItems.forEach(function(link) {
//     link.textContent = siteContent['nav']['nav-item-1'];
//   });

// for (let i = 0; i < nav.length; i++){
//     navItems[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
//    };

navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];


//Nav Styles
navItems.forEach(item => (item.style.color = 'lightgrey'));

//CTA SECTION
let ctaText = document.getElementsByClassName('cta-text')[0];

ctaText.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaText.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);


//nav.setAttribute(siteContent["nav"][""])

// contentAreaQ.forEach(item => {
//   console.log(item);
// });

// const secondaryHeaders = document.querySelectorAll('h2');
// console.log(secondaryHeaders);
// console.log(secondaryHeaders[0]);
// console.log(secondaryHeaders[1]);
// secondaryHeaders[0].style.color = 'blue';
// secondaryHeaders[1].style.color = 'red';

// secondaryHeaders.forEach(header => {
//   header.style.color = 'blue';
//   header.style.fontSize = '3rem';
//   header.style.backgroundColor = 'yellow';
// });

// secondaryHeaders.style.color = 'red';