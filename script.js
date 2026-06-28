// --- SYSTÈME DE GESTION DU MODE CLAIR / SOMBRE ---
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('user-theme', newTheme);
    updateButtonText(newTheme);
}

function updateButtonText(theme) {
    const btn = document.getElementById('themeBtn');
    if (btn) {
        btn.innerText = theme === 'dark' ? 'Mode Clair ☀️' : 'Mode Sombre 🌙';
    }
}

// --- ANIMATION SCROLL REVEAL ---
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
}

// Initialisation globale au chargement de chaque page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);

    // Déclenchement initial et liaison avec le défilement
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});