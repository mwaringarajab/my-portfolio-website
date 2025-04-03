document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-menu a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add animation class on scroll
    const animatedElements = document.querySelectorAll(".project, .profile-image, .profile-text");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach(el => observer.observe(el));

    // WhatsApp chat button functionality (already incorporated in HTML)
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/254743805204";
    whatsappButton.className = "whatsapp-button";
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i> Chat with me';
    document.getElementById("contact").appendChild(whatsappButton);

    // Social media links animation
    document.querySelectorAll(".social-link").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Light/Dark Mode Toggle (icon version)
    const modeToggle = document.querySelector(".mode-toggle");
    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change icon based on mode
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';  // Sun icon for dark mode
        } else {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';  // Moon icon for light mode
        }
    });

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
        } else {
            alert("Message sent successfully!");
            contactForm.reset();
        }
    });
});
