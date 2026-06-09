// ==========================================================================
// INTERACTIVE PORTFOLIO ENGINE & THEME CONTROLLER
// ==========================================================================

// 1. LIGHT / DARK MODE CONTROLLER
const themeToggle = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});


// 2. MOBILE NAVBAR TOGGLE (BURGER MENU)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    const icon = menuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});


// 3. DYNAMIC SCROLL ACTIVE NAVIGATION LINKS
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });

    const icon = menuIcon.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
});