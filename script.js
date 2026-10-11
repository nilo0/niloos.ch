// Simple JavaScript for the personal website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact button interaction
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Thanks for stopping by! Feel free to reach out anytime.');
        });
    }

    // Add a simple greeting based on time of day
    const homeSection = document.getElementById('home');
    if (homeSection) {
        const hour = new Date().getHours();
        let greeting = 'Hello';
        if (hour < 12) {
            greeting = 'Good morning';
        } else if (hour < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }
        const welcomeText = homeSection.querySelector('p');
        if (welcomeText) {
            welcomeText.textContent = greeting + '! This is my personal website. I\'m glad you\'re here.';
        }
    }
});