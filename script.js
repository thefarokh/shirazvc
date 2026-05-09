// Custom Cursor
const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('a, button, .magnetic-btn');

document.addEventListener('mousemove', (e) => {
    // Only apply custom cursor on non-touch devices
    if(window.matchMedia("(pointer: fine)").matches) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

hoverElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    elem.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Magnetic Button Effect
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
    });
});

// Scroll Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-text, .reveal-fade').forEach(elem => {
    observer.observe(elem);
});

// Trigger initial reveal on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-text, .hero .reveal-fade').forEach(elem => {
            elem.classList.add('active');
        });
    }, 100);
});
