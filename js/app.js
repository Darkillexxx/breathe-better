document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");
    if (mobileMenuIcon && navLinks) {
        mobileMenuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        const navLinkItems = document.querySelectorAll(".nav-links a");
        navLinkItems.forEach(link => {
            link.addEventListener("click", function() {
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                }
            });
        });
    }

    const blogContainer = document.querySelector(".blog-container");
    const blogLeftArrow = document.querySelector(".blog-arrow.left-arrow");
    const blogRightArrow = document.querySelector(".blog-arrow.right-arrow");
    if (blogContainer && blogLeftArrow && blogRightArrow) {
        blogLeftArrow.addEventListener("click", function () {
            blogContainer.scrollBy({ left: -300, behavior: "smooth" });
        });
        blogRightArrow.addEventListener("click", function () {
            blogContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    }

    const techniquesContainer = document.querySelector(".techniques-container");
    const techLeftArrow = document.querySelector(".tech-arrow.left-arrow");
    const techRightArrow = document.querySelector(".tech-arrow.right-arrow");
    if (techniquesContainer && techLeftArrow && techRightArrow) {
        techLeftArrow.addEventListener("click", function () {
            techniquesContainer.scrollBy({ left: -300, behavior: "smooth" });
        });
        techRightArrow.addEventListener("click", function () {
            techniquesContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    }


    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function () {
            item.classList.toggle("active");
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});
