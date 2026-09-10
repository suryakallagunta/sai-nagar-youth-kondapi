/* =========================================
   SAI NAGAR YOUTH – KONDAPI
   WEBSITE JAVASCRIPT
   2026
========================================= */


/* =========================================
   DOM READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       ELEMENTS
    ========================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const header =
        document.getElementById("header");

    const scrollTopButton =
        document.getElementById("scrollTop");

    const pageLoader =
        document.getElementById("pageLoader");

    const directionsButton =
        document.getElementById("directionsButton");



    /* =========================================
       MOBILE MENU
    ========================================== */

    if (menuToggle && navMenu) {


        menuToggle.addEventListener("click", () => {


            const isActive =
                navMenu.classList.toggle("active");


            menuToggle.classList.toggle(
                "active",
                isActive
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isActive ? "true" : "false"
            );


        });



        /* =========================================
           CLOSE MENU AFTER CLICKING LINK
        ========================================== */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach((link) => {


            link.addEventListener("click", () => {


                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


            });


        });


        /* =========================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ========================================== */

        document.addEventListener("click", (event) => {


            const clickedInsideMenu =
                navMenu.contains(event.target);


            const clickedToggle =
                menuToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {


                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


            }


        });


    }



    /* =========================================
       COUNTDOWN
    ========================================== */

    /*
        IMPORTANT:

        Exact Ganesh celebration date/time
        confirm ayyaka ikkada change cheyyali.

        Format:

        YYYY-MM-DDTHH:MM:SS

        Current placeholder:
        14 September 2026
        08:00 AM
    */


    const festivalDate =
        new Date(
            "2026-09-14T08:00:00"
        ).getTime();



    /* =========================================
       COUNTDOWN ELEMENTS
    ========================================== */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");



    /* =========================================
       COUNTDOWN UPDATE FUNCTION
    ========================================== */

    function updateCountdown() {


        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {

            return;

        }


        const now =
            new Date().getTime();


        const difference =
            festivalDate - now;



        /* =========================================
           FESTIVAL DATE REACHED
        ========================================== */

        if (difference <= 0) {


            daysElement.textContent =
                "00";

            hoursElement.textContent =
                "00";

            minutesElement.textContent =
                "00";

            secondsElement.textContent =
                "00";


            return;

        }



        /* =========================================
           CALCULATE TIME
        ========================================== */

        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference /
                    (1000 * 60 * 60)) %
                24
            );


        const minutes =
            Math.floor(
                (difference /
                    (1000 * 60)) %
                60
            );


        const seconds =
            Math.floor(
                (difference / 1000) %
                60
            );



        /* =========================================
           DISPLAY COUNTDOWN
        ========================================== */

        daysElement.textContent =
            String(days).padStart(2, "0");


        hoursElement.textContent =
            String(hours).padStart(2, "0");


        minutesElement.textContent =
            String(minutes).padStart(2, "0");


        secondsElement.textContent =
            String(seconds).padStart(2, "0");


    }



    /* =========================================
       START COUNTDOWN
    ========================================== */

    updateCountdown();


    const countdownInterval =
        setInterval(
            updateCountdown,
            1000
        );



    /* =========================================
       HEADER SCROLL EFFECT
    ========================================== */

    function updateHeader() {


        if (!header) {

            return;

        }


        if (window.scrollY > 30) {


            header.classList.add(
                "scrolled"
            );


        } else {


            header.classList.remove(
                "scrolled"
            );


        }


    }



    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();



    /* =========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );



    function updateActiveNavigation() {


        let currentSection =
            "home";


        const scrollPosition =
            window.scrollY + 150;



        sections.forEach((section) => {


            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }


        });



        navigationLinks.forEach((link) => {


            link.classList.remove(
                "active"
            );


            const target =
                link.getAttribute("href");


            if (
                target ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }


        });


    }



    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();



    /* =========================================
       SMOOTH ANCHOR LINKS
    ========================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {


        link.addEventListener(
            "click",
            (event) => {


                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const targetElement =
                    document.querySelector(
                        targetId
                    );


                if (!targetElement) {

                    return;

                }


                event.preventDefault();


                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


            }
        );


    });



    /* =========================================
       SCROLL TO TOP
    ========================================== */

    if (scrollTopButton) {


        window.addEventListener(
            "scroll",
            () => {


                if (window.scrollY > 500) {


                    scrollTopButton.classList.add(
                        "show"
                    );


                } else {


                    scrollTopButton.classList.remove(
                        "show"
                    );


                }


            },
            { passive: true }
        );



        scrollTopButton.addEventListener(
            "click",
            () => {


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


            }
        );


    }



    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {


        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {


                    entries.forEach((entry) => {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );


                        }


                    });


                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {


            revealObserver.observe(
                element
            );


        });


    } else {


        revealElements.forEach((element) => {

            element.classList.add(
                "visible"
            );

        });


    }



    /* =========================================
       DIRECTIONS BUTTON
    ========================================== */

    if (directionsButton) {


        directionsButton.addEventListener(
            "click",
            (event) => {


                /*
                    Exact Google Maps location
                    later add cheyyachu.

                    Current ga page lo
                    unnecessary navigation
                    prevent chestunnam.
                */


                event.preventDefault();


                const locationSection =
                    document.getElementById(
                        "location"
                    );


                if (locationSection) {


                    locationSection.scrollIntoView({
                        behavior: "smooth"
                    });


                }


            }
        );


    }



    /* =========================================
       KEYBOARD ACCESSIBILITY
    ========================================== */

    document.addEventListener(
        "keydown",
        (event) => {


            if (event.key === "Escape") {


                if (navMenu && menuToggle) {


                    navMenu.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                }


            }


        }
    );



    /* =========================================
       PAGE LOADER
    ========================================== */

    window.addEventListener(
        "load",
        () => {


            if (pageLoader) {


                setTimeout(() => {


                    pageLoader.classList.add(
                        "loaded"
                    );


                }, 500);


            }


        }
    );



    /* =========================================
       PREVENT EMPTY HASH JUMP
    ========================================== */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach((link) => {


            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );


        });



    /* =========================================
       CONSOLE INFORMATION
    ========================================== */

    console.log(
        "Sai Nagar Youth – Kondapi website loaded successfully."
    );


});