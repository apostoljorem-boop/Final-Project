// Mobile menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});


// Active nav link

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// Contact form

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const formStatus = document.getElementById("formStatus");

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    subjectInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    formStatus.textContent = "";
    formStatus.className = "form-status";

    let isValid = true;

    // Name

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        nameInput.classList.add("input-error");
        isValid = false;
    }

    // Email

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        emailInput.classList.add("input-error");
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("input-error");
        isValid = false;
    }

    // Subject

    if (subjectInput.value.trim() === "") {
        subjectError.textContent = "Please enter a subject.";
        subjectInput.classList.add("input-error");
        isValid = false;
    }

    // Message

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        messageInput.classList.add("input-error");
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        messageInput.classList.add("input-error");
        isValid = false;
    }

    // Result

    if (isValid) {
        formStatus.textContent = "✓ Message validated successfully! Thank you for reaching out.";
        formStatus.classList.add("success");
        contactForm.reset();
    } else {
        formStatus.textContent = "Please fix the highlighted fields.";
        formStatus.classList.add("fail");
    }
});


// Footer year

document.getElementById("year").textContent = new Date().getFullYear();
