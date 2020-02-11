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

/**********************************/
/********** Nav Section ***********/
/**********************************/
let navLinks = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');

let home = document.createElement('a');
let blog = document.createElement('a');

blog.textContent = "Blog";
blog.setAttribute('href', '#');

home.textContent = "Home";
home.setAttribute('href', '#');

nav.prepend(home);
nav.appendChild(blog);

navLinks.forEach(function(ele, i){
  ele.append(siteContent['nav']['nav-item-' + (i + 1)]);
  ele.style.color = "green";
});

/**********************************/
/********** CTA Section ***********/
/**********************************/
// H1
document.querySelector('.cta-text h1').append(siteContent['cta']['h1']);
// Button
document.querySelector('.cta-text button').append(siteContent['cta']['button']);
// image source
document.querySelector('.cta img').setAttribute("src", siteContent['cta']['img-src']);

/**********************************/
/****** Main Content Section ******/
/**********************************/

// top content
// h4 tags
let mcH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
mcH4[0].append(siteContent['main-content']['features-h4'])
mcH4[1].append(siteContent['main-content']['about-h4'])
// p tags
let mcContent = document.querySelectorAll('.main-content .top-content .text-content p')
mcContent[0].append(siteContent['main-content']['features-content'])
mcContent[1].append(siteContent['main-content']['about-content'])

// middle image
document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom content
//h4 tags
let bcH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')
bcH4[0].append(siteContent['main-content']['services-h4'])
bcH4[1].append(siteContent['main-content']['product-h4'])
bcH4[2].append(siteContent['main-content']['vision-h4'])

// p tags
let bcContent = document.querySelectorAll('.main-content .bottom-content .text-content p')
bcContent[0].append(siteContent['main-content']['services-content'])
bcContent[1].append(siteContent['main-content']['product-content'])
bcContent[2].append(siteContent['main-content']['vision-content'])

/**********************************/
/******** Contact Section *********/
/**********************************/
// H4
document.querySelector('.contact h4').append(siteContent['contact']['contact-h4']);

// P
let contactP = document.querySelectorAll('.contact p');
contactP[0].append(siteContent['contact']['address']);
contactP[1].append(siteContent['contact']['phone']);
contactP[2].append(siteContent['contact']['email']);

/**********************************/
/********* Footer Section *********/
/**********************************/
document.querySelector('footer p').append(siteContent['footer']['copyright']);