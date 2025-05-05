// <!-- CarouselScrolling JS -->
{/* <script> */}
    // let currentIndex = 0;
    // const track = document.querySelector(".carousel-track");
    
    // function updateSlide() {
    //     track.style.transform = `translateX(-${currentIndex * 50}%)`; 
    // }

    // function nextSlide() {
    //     currentIndex = (currentIndex + 1) % 2; 
    //     updateSlide();
    // }

    // function prevSlide() {
    //     currentIndex = (currentIndex - 1 + 2) % 2; 
    //     updateSlide();
    // }


    // let currentIndex = 0;
    // const track = document.querySelector(".carousel-track");
    
    // function updateSlide() {
    //     track.style.transition = "transform 1s ease-in-out"; // Smooth transition
    //     track.style.transform = `translateX(-${currentIndex * 50}%)`; 
    // }
    
    // function nextSlide() {
    //     currentIndex = (currentIndex + 1) % 2; 
    //     updateSlide();
    // }
    
    // function prevSlide() {
    //     currentIndex = (currentIndex - 1 + 2) % 2; 
    //     updateSlide();
    // }
    
    // // Auto-slide every 5 seconds
    // setInterval(nextSlide, 5000);
    
    let currentIndex = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Duplicate first slide at the end to create a loop effect
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

function updateSlide() {
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * 50}%)`; 

    // If it's the last (cloned) slide, reset to the first slide without transition
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            track.style.transition = "none"; // Disable transition for instant jump
            currentIndex = 0;
            track.style.transform = `translateX(0%)`;
        }, 1000); // Wait for the slide transition to complete
    }
}

function nextSlide() {
    currentIndex++;
    updateSlide();
}

function prevSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlides; // Jump to the last real slide first
        track.style.transition = "none"; // Instantly move to last slide without animation
        track.style.transform = `translateX(-${currentIndex * 50}%)`;
        setTimeout(() => {
            track.style.transition = "transform 1s ease-in-out"; // Re-enable smooth transition
            currentIndex--;
            updateSlide();
        }, 10); // Small delay to allow browser to register position change
    } else {
        currentIndex--;
        updateSlide();
    }
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// </script>

// <!-- NavBarScrolling JS -->
{/* <script> */}
    let lastScrollTop = 0;
    let navbar = document.querySelector(".navbar");
    let carousel = document.querySelector(".carousel");
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let carouselHeight = carousel.offsetHeight;
        let carouselHalf = carouselHeight * 0.5;
 
        // Hide navbar when scrolling down
        if (scrollPosition > lastScrollTop) {
            navbar.classList.add("hidden");
        }

        // Show navbar when reaching 50% of the carousel
        if (scrollPosition > carouselHalf) {
            navbar.classList.remove("hidden");
        }
        if (scrollPosition > 10) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
        lastScrollTop = scrollPosition;
    });                             
    /*Nav Bar ToggleMenu JS */
    // Toggle the active class on click
    
    
    // document.addEventListener("DOMContentLoaded", () => {
    //     const toggleMenu = document.querySelector(".ToggleMenu");
    //     const navLinks = document.querySelector(".nav-links");
    //     const pagesMenu = document.querySelector(".pages");

    //     // Toggle navbar visibility
    //     toggleMenu.addEventListener("click", () => {
    //         navLinks.classList.toggle("active");
    //     });

    //     // Toggle dropdown inside navbar
    //     pagesMenu.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         pagesMenu.classList.toggle("active");
    //     });
    // });
    // document.addEventListener("DOMContentLoaded", () => {
    //     const toggleMenu = document.querySelector(".ToggleMenu");
    //     const navLinks = document.querySelector(".nav-links");
    
    //     toggleMenu.addEventListener("click", () => {
    //         navLinks.classList.toggle("active");
    //     });
    // });
    document.addEventListener("DOMContentLoaded", () => {
        const toggleMenu = document.querySelector(".ToggleMenu");
        const navLinks = document.querySelector(".nav-links");
    
        toggleMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
    
            // Toggle menu icon between hamburger and close icon
            if (navLinks.classList.contains("active")) {
                toggleMenu.innerHTML = "&#10005;"; // X icon for close
            } else {
                toggleMenu.innerHTML = "&#9776;"; // Hamburger icon
            }
        });
    });
    /*Pages in responsiive */
    document.addEventListener("DOMContentLoaded", () => {
        const pagesDropdown = document.querySelector(".pageshover");
        const navOl = document.querySelector(".nav_ol");
    
        pagesDropdown.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents link from navigating
            navOl.classList.toggle("active"); // Toggle dropdown visibility
        });
    
        // Hide dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!pagesDropdown.contains(e.target) && !navOl.contains(e.target)) {
                navOl.classList.remove("active");
            }
        });
    });
    
    
    
    
// </script>

// <!--Our Clients Say! Feedback-->
{/* <script> */}
               
        document.addEventListener("DOMContentLoaded", () => {
            let scrollContainer = document.querySelector(".feedback-111"); // The scrolling container
            let wrapper = document.querySelector(".feedback-wrapper");
            let backBtn = document.getElementById("backbtn");
            let nextBtn = document.getElementById("nextbtn");
        
            if (!scrollContainer || !backBtn || !nextBtn || !wrapper) {
                console.error("One or more elements are missing.");
                return;
            }
        
            let slides = document.querySelectorAll(".feedback-1");
            let slideWidth = slides[0].offsetWidth + 18; // Slide width + gap
            let autoScrollInterval;
        
            // **Clone slides for infinite effect**
            slides.forEach((slide) => {
                let clone = slide.cloneNode(true);
                scrollContainer.appendChild(clone);
            });
        
            // **Auto-slide function**
            function autoSlide() {
                autoScrollInterval = setInterval(() => {
                    scrollContainer.style.transition = "transform 0.5s ease-in-out";
                    scrollContainer.style.transform = `translateX(-${slideWidth}px)`;
        
                    setTimeout(() => {
                        let firstSlide = scrollContainer.children[0];
                        scrollContainer.appendChild(firstSlide); // Move first slide to the end
                        scrollContainer.style.transition = "none";
                        scrollContainer.style.transform = "translateX(0)"; // Reset position instantly
                    }, 500); // After transition ends
                }, 4000); // Auto-slide every 4 seconds
            }
        
            // **Restart auto-slide after user interaction**
            function resetAutoSlide() {
                clearInterval(autoScrollInterval);
                autoSlide();
            }
        
            // **Manual navigation (Next button)**
            nextBtn.addEventListener("click", () => {
                clearInterval(autoScrollInterval);
                scrollContainer.style.transition = "transform 0.5s ease-in-out";
                scrollContainer.style.transform = `translateX(-${slideWidth}px)`;
        
                setTimeout(() => {
                    let firstSlide = scrollContainer.children[0];
                    scrollContainer.appendChild(firstSlide);
                    scrollContainer.style.transition = "none";
                    scrollContainer.style.transform = "translateX(0)";
                    autoSlide(); // Restart auto-slide
                }, 500);
            });
        
            // **Manual navigation (Back button)**
            backBtn.addEventListener("click", () => {
                clearInterval(autoScrollInterval);
                let lastSlide = scrollContainer.lastElementChild;
                scrollContainer.insertBefore(lastSlide, scrollContainer.firstElementChild);
                scrollContainer.style.transition = "none";
                scrollContainer.style.transform = `translateX(-${slideWidth}px)`;
        
                setTimeout(() => {
                    scrollContainer.style.transition = "transform 0.5s ease-in-out";
                    scrollContainer.style.transform = "translateX(0)";
                    autoSlide(); // Restart auto-slide
                }, 50);
            });
        
            autoSlide(); // Start auto-slide on page load
        });
        

// </script>


/*Bottom-left-button-JS*/
document.addEventListener("DOMContentLoaded", () => {
    let scrollButton = document.querySelector(".Container-Bottom-Left-Button");

    if (!scrollButton) {
        console.error("Scroll button not found.");
        return;
    }

    // Function to check scroll position
    function checkScroll() {
        if (window.scrollY > 100) {  // Show button after scrolling down 100px
            scrollButton.style.opacity = "1";
            scrollButton.style.pointerEvents = "auto";
        } else {  // Hide button when at the top
            scrollButton.style.opacity = "0";
            scrollButton.style.pointerEvents = "none";
        }
    }

    // Check scroll position on page scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case page loads scrolled down

    // Scroll to top with slow start and fast end
    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


/*CSS Animations --JS */

/*School Facilities JS--Animation*/
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.2 });

    // Observe text and cards
    document.querySelectorAll(".text3, .circle-card").forEach(element => {
        observer.observe(element);
    });
});

/*Learn More About Our Work And Our Cultural Activities --JS*/
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Stop observing after animation runs once
            }
        });
    }, { threshold: 0.2 });

    // Observe both text and image sections
    document.querySelectorAll(".text-img, .imgs-ceo").forEach(element => {
        observer.observe(element);
    });
});


/* CSS Animaction become teacher cantant --JS */
document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("blink-once");
                    observer.unobserve(entry.target); // Stop observing after triggering once
                }
            });
        },
        { threshold: 1 } // Adjust threshold as needed
    );

    let target = document.querySelector(".become-teacher-cantent"); // Apply to the full container
    if (target) {
        observer.observe(target);
    }
});


/*CSS Animaction for  School Classes --JS*/

document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card1-container");

    let observer = new IntersectionObserver(
        function (entries, observer) {
            let delay = 0; // Start delay at 0
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("animate");
                    }, delay);
                    delay += 300; // Increase delay for the next card (300ms)
                    observer.unobserve(entry.target); // Stop observing after animating
                }
            });
        },
        { threshold: 1 } // Adjust sensitivity
    );

    cards.forEach(card => observer.observe(card));
});

/*CSS Animaction Popular Teachers --JS*/
document.addEventListener("DOMContentLoaded", function () {
    let textSection = document.querySelector(".text-popular-teacher");
    let teacherCards = document.querySelectorAll(".circles-teachers");

    let observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add animation class with delay for each teacher card
                    setTimeout(() => {
                        entry.target.classList.add("animate");
                    }, index * 300); // Adjust delay time (300ms between each)
                    observer.unobserve(entry.target); // Ensures it runs only once
                }
            });
        },
        { threshold: 0.5 }
    );

    if (textSection) observer.observe(textSection);
    teacherCards.forEach(card => observer.observe(card));
});




/*CSS Animaction for Our Clients Say! Feedback-container --JS*/
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements that need animation
    const elementsToAnimate = document.querySelectorAll(".text-popular-teacher2, .feedback-111, .btn-feedback-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
});


/* Loader For Page */

//<script>
                // Show loader on page refresh
                document.addEventListener("DOMContentLoaded", function () {
                    let loader = document.getElementById("loader");
                    loader.style.visibility = "visible";
        
                    setTimeout(function () {
                        loader.style.opacity = "0"; // Super-fast fade-out
                        setTimeout(() => {
                            loader.style.visibility = "hidden";
                        }, 200); // Hide after fade-out (0.2s)
                    }, 500); // Hide after animation (0.5s)
                });
    // </script>


/*CSS Animations for Make-Appointment-container--JS */

document.addEventListener("DOMContentLoaded", function () {
    const appointmentSection = document.querySelector(".Make-Appointment-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                appointmentSection.classList.add("blink-animation");
                setTimeout(() => {
                    appointmentSection.classList.remove("blink-animation");
                }, 1600); // Remove after animation ends
            }
        });
    }, { threshold: 0.5 });

    observer.observe(appointmentSection);
});

// <!--Get In Touch Quick LinksPhoto Gallery Newsletter-->
// <!--Footware-->

document.addEventListener("DOMContentLoaded", function () {
    const bottomSection = document.querySelector(".BOTTOM-MAIN-CONTAINER");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bottomSection.classList.add("blink-once");
                observer.unobserve(bottomSection); // Stop observing after first trigger
            }
        });
    }, { threshold: 0.5 });

    observer.observe(bottomSection);
});

