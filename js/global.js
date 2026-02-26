// =============================================
// IPTV-SPOT: Shared Global Scripts
// =============================================

// 1. Dynamic header: solid at top, glassmorphism on scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

// 2. Mobile hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.mobile-menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            var icon = mobileMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
