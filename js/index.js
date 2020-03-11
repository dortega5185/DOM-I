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

//header 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(siteContent)
const aTags = document.querySelectorAll("a")
aTags[0].textContent = siteContent.nav["nav-item-1"]
aTags[1].textContent = siteContent.nav["nav-item-2"]
aTags[2].textContent = siteContent.nav["nav-item-3"]
aTags[3].textContent = siteContent.nav["nav-item-4"]
aTags[4].textContent = siteContent.nav["nav-item-5"]
aTags[5].textContent = siteContent.nav["nav-item-6"]

//cta section
const leftCta = document.querySelector("h1")
leftCta.textContent = siteContent.cta["h1"]
const leftBtn = document.querySelector("button")
leftBtn.textContent = siteContent.cta["button"]
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//main-content section

//top section
const topFeature = document.querySelectorAll("h4")
topFeature[0].textContent = siteContent["main-content"]["features-h4"]
topFeature[1].textContent = siteContent["main-content"]["about-h4"]
const topP = document.querySelectorAll("p")
topP[0].textContent = siteContent["main-content"]["features-content"]
topP[1].textContent = siteContent["main-content"]["about-content"]

//mid img
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//bottom section
const botServices = document.querySelectorAll("h4")
botServices[2].textContent = siteContent["main-content"]["services-h4"]
botServices[3].textContent = siteContent["main-content"]["product-h4"]
botServices[4].textContent = siteContent["main-content"]["vision-h4"]
const botP = document.querySelectorAll("p")
botP[2].textContent = siteContent["main-content"]["services-content"]
botP[3].textContent = siteContent["main-content"]["product-content"]
botP[4].textContent = siteContent["main-content"]["vision-content"]

//contact section
const contactH = document.querySelector(".contact h4")
contactH.textContent = siteContent.contact["contact-h4"]
const contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent.contact["address"]
contactP[1].textContent = siteContent.contact["phone"]
contactP[2].textContent = siteContent.contact["email"]

//footer
const botCopyright = document.querySelector("footer")
botCopyright.textContent = siteContent.footer["copyright"]

//task 3
const nav1 = document.createElement("a")
nav1.textContent = "Sign In"
const nav2 = document.createElement("a")
nav2.textContent = "Help";

const extraNav = document.querySelector("nav")
extraNav.prepend(nav1)
extraNav.append(nav2)

aTags.forEach(item => {
  item.style.color = `green`
})
