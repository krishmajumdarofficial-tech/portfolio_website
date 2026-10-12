/* ================= CURSOR ================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});


function animateFollower() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animateFollower);
}

animateFollower();


/* ================= CURSOR HOVER ================= */

const hoverElements = document.querySelectorAll(
    "a, button, .skill-card, .achievement-card"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "60px";
        follower.style.height = "60px";

    });

    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* ================= MAGNETIC EFFECT ================= */

const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (e) => {

        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    element.addEventListener("mouseleave", () => {

        element.style.transform = "translate(0, 0)";

    });

});


/* ================= 3D CARD EFFECT ================= */

const cards = document.querySelectorAll(".magnetic-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.color = "#999";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#b7ff00";
        }

    });

});


/* ================= PARALLAX HERO ================= */

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        hero.style.transform =
            `translateY(${scroll * 0.15}px)`;

        hero.style.opacity =
            1 - scroll / 700;

    }

});


/* ================= SMOOTH IMAGE TILT ================= */

const imageFrame = document.querySelector(".image-frame");

if (imageFrame) {

    imageFrame.addEventListener("mousemove", (e) => {

        const rect = imageFrame.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -8;

        const rotateY =
            ((x / rect.width) - 0.5) * 8;

        imageFrame.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    imageFrame.addEventListener("mouseleave", () => {

        imageFrame.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

}


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-active");

    });

}


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});