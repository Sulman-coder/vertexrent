/* ========================================
   VERTEXRENT - MAIN JAVASCRIPT
======================================== */


/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu when navigation link is clicked

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ========================================
   DATE VALIDATION
======================================== */

const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");


if (dateFrom && dateTo) {

    // Today's date

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;


    // Prevent selecting past dates

    dateFrom.min = todayString;

    dateTo.min = todayString;


    // Date From changes

    dateFrom.addEventListener("change", () => {

        dateTo.min = dateFrom.value;

        if (
            dateTo.value &&
            dateTo.value < dateFrom.value
        ) {

            dateTo.value = "";

        }

    });

}


/* ========================================
   CONTACT FORM DATE VALIDATION
======================================== */

const contactDateFrom =
    document.getElementById(
        "contact-date-from"
    );

const contactDateTo =
    document.getElementById(
        "contact-date-to"
    );


if (contactDateFrom && contactDateTo) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;


    contactDateFrom.min =
        todayString;

    contactDateTo.min =
        todayString;


    contactDateFrom.addEventListener(
        "change",
        () => {

            contactDateTo.min =
                contactDateFrom.value;

            if (
                contactDateTo.value &&
                contactDateTo.value <
                contactDateFrom.value
            ) {

                contactDateTo.value = "";

            }

        }
    );

}


/* ========================================
   BOOKING FORM - FRONTEND ONLY
======================================== */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /*
                Backend is not connected yet.

                Later this form will send the
                booking request to the client.
            */


            alert(
                "Thank you! Your rental request has been received. We will review your request and confirm availability and pricing."
            );


            bookingForm.reset();

        }
    );

}


/* ========================================
   CONTACT FORM - FRONTEND ONLY
======================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /*
                Email service/backend will be
                connected later.
            */


            alert(
                "Thank you for contacting VertexRent. We will get back to you soon."
            );


            contactForm.reset();

        }
    );

}


/* ========================================
   CURRENT YEAR
======================================== */

const yearElements =
    document.querySelectorAll(
        ".current-year"
    );


yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});


/* ========================================
   HEADER SHADOW ON SCROLL
======================================== */

const header =
    document.querySelector(
        ".site-header"
    );


if (header) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}