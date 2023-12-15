//Strict mode
//Modo estrito
"use strict";

// Animation 1
// Animação 1
function stars() {
    const section = document.querySelector(".home");
    const star = document.createElement("div");
    star.setAttribute("class", "star");
    section.appendChild(star);

    let left = Math.random() * + window.innerWidth + "px";
    let size = Math.random() * 20;
    let duration = Math.random() * 3;

    star.style.left = left; 
    star.style.fontSize = 10 + size + "px";
    star.style.animationDuration = 2 + duration + "s";

    setTimeout(() => {
        section.removeChild(star);
    }, 5000);
}
setInterval(stars, 100);

// Animation 2
// Animação 2
for(let i = 1; i <= 75; i ++) {
    const sectionTwo = document.querySelector(".page2");
    const star = document.createElement("div");
    star.setAttribute("class", "star-page2");
    sectionTwo.appendChild(star);

    let left = Math.random() * + window.innerWidth + "px";
    let top = Math.random() * + window.innerHeight + "px";
    let size = Math.random() * 20;

    star.style.left = left;
    star.style.top = top;
    star.style.fontSize = 10 + size + "px";
    star.style.filter = `hue-rotate(${i * 5}deg)`;
}

function animateStars() {
    const stars = document.querySelectorAll(".star-page2");
    let star = Math.floor(Math.random() * stars.length);
    stars[star].classList.toggle("animate");
}
setInterval(animateStars, 50);