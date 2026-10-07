document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect & Active Links
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a, .mobile-link');
    
    window.addEventListener('scroll', () => {
        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-slate-900/90');
            navbar.classList.remove('glass');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-slate-900/90');
            navbar.classList.add('glass');
        }

        // Active link highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('text-primary');
            }
        });
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Floating Button "Volver Arriba"
    const btnUp = document.getElementById('btn-up');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btnUp.classList.add('visible');
        } else {
            btnUp.classList.remove('visible');
        }
    });

    // 4. Form Interaction & Toast
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const submitBtn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission

        // Animate button
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        // Simulate network request
        setTimeout(() => {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();

            // Show toast
            toast.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
            }, 3000);
        }, 1500);
    });
});
