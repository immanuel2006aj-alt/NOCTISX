/*=========================================================
FILE : main.js
PART : 5A
Noctis Technologies
=========================================================*/

/*====================================
LOADER
====================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

document.body.classList.add("loaded");

setTimeout(()=>{

loader.classList.add("hide");

},1200);

});


/*====================================
STICKY NAVBAR
====================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(6,6,6,.65)";
header.style.backdropFilter="blur(18px)";
header.style.padding="14px 0";

}

else{

header.style.background="transparent";
header.style.backdropFilter="none";
header.style.padding="22px 0";

}

});


/*====================================
SCROLL PROGRESS
====================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const width=

(scrollTop/docHeight)*100;

progress.style.width=width+"%";

});


/*====================================
SMOOTH SCROLL
====================================*/

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*====================================
CUSTOM CURSOR
====================================*/

const cursor=

document.querySelector(".cursor");

document.addEventListener("mousemove",

(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

document

.querySelectorAll("a,button")

.forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});


/*====================================
REVEAL ANIMATION
====================================*/

const revealItems=

document.querySelectorAll(

".fade,.fade-up,.fade-left,.fade-right,.zoom"

);

const revealObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.18

});

revealItems.forEach(item=>{

revealObserver.observe(item);

});


/*====================================
END PART 5A
=========================================================*/
/*=========================================================
FILE : main.js
PART : 5B
Advanced Interactions
=========================================================*/


/*====================================
ACTIVE NAVIGATION
====================================*/

const currentPage=

window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a")

.forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage ||

(currentPage==="" && href==="index.html")){

link.classList.add("active");

}

});


/*====================================
THEME TOGGLE
====================================*/

const themeButton=

document.querySelector(".theme-btn");

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});

}


/*====================================
SCROLL TO TOP
====================================*/

const topButton=

document.createElement("button");

topButton.className="scroll-top";

topButton.innerHTML=

'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*====================================
NEWSLETTER VALIDATION
====================================*/

const newsletterForm=

document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=

newsletterForm.querySelector("input");

const pattern=

/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(pattern.test(email.value)){

alert("Thanks for subscribing!");

email.value="";

}else{

alert("Please enter a valid email address.");

}

});

}


/*====================================
CONTACT FORM VALIDATION
====================================*/

const contactForm=

document.querySelector("#contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=

contactForm.querySelector("#name");

const email=

contactForm.querySelector("#email");

const message=

contactForm.querySelector("#message");

if(

name.value.trim()==="" ||

email.value.trim()==="" ||

message.value.trim()===""

){

alert("Please complete all required fields.");

return;

}

alert("Message submitted successfully.");

contactForm.reset();

});

}


/*====================================
COUNTER ANIMATION
====================================*/

const counters=

document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=

+counter.dataset.target;

const current=

+counter.innerText;

const increment=

target/120;

if(current<target){

counter.innerText=

Math.ceil(current+increment);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});


/*====================================
PARALLAX EFFECT
====================================*/

const heroImage=

document.querySelector(".hero-right img");

document.addEventListener("mousemove",(e)=>{

if(heroImage){

const x=

(window.innerWidth/2-e.pageX)/40;

const y=

(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

}

});


/*====================================
CURRENT YEAR
====================================*/

const year=

document.querySelector("#year");

if(year){

year.textContent=

new Date().getFullYear();

}


/*====================================
CONSOLE BRANDING
====================================*/

console.log(

"%cNOCTIS TECHNOLOGIES",

"font-size:20px;font-weight:bold;color:#D4AF37;"

);

console.log(

"%cCrafting Premium Digital Experiences",

"font-size:13px;color:#ffffff;"

);

/*=========================================================
END OF main.js
=========================================================*/

