// ============================================================
// MAIN JAVASCRIPT - Shared across all pages
// ============================================================

// ====================== NAVBAR SCROLL ======================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ====================== HAMBURGER MENU ======================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking on a link (mobile)
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                if (hamburger.querySelector('i')) {
                    hamburger.querySelector('i').classList.add('fa-bars');
                    hamburger.querySelector('i').classList.remove('fa-times');
                }
            });
        });
    }

    // ====================== DROPDOWN ON MOBILE ======================
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        if (dropbtn) {
            dropbtn.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        }
    });

    // ====================== NEWSLETTER SUBSCRIBE ======================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('.btn');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (subscribeBtn && emailInput) {
            subscribeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();
                if (email && email.includes('@') && email.includes('.')) {
                    alert('🎉 Thank you for subscribing! Check your email for updates.');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }
    }

    // ====================== SMOOTH SCROLL FOR ANCHOR LINKS ======================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ====================== CONSOLE LOG ======================
console.log('🎨 Warda Waseem Art Gallery · All set!');