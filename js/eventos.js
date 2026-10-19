window.dataLayer = window.dataLayer || [];

// Evento 1: Clic en el botón del Hero
document.getElementById('btn-hero').addEventListener('click', function() {
    window.dataLayer.push({'event': 'click_cta_hero'});
});

// Evento 2: Clic en el botón CTA 2 (Asesor)
document.getElementById('btn-cta2').addEventListener('click', function() {
    window.dataLayer.push({'event': 'click_cta_asesor'});
});

// Evento 3: Interactuar con las FAQ
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', function() {
        // Solo envía el evento si se está abriendo (no cerrando)
        if (!this.open) { 
            window.dataLayer.push({
                'event': 'interaccion_faq',
                'faq_pregunta': this.querySelector('summary').innerText
            });
        }
    });
});

// Evento 4: Scroll hasta el pre-footer
let scrolled = false;
window.addEventListener('scroll', function() {
    const prefooter = document.getElementById('pre-footer');
    if (!scrolled && window.scrollY + window.innerHeight >= prefooter.offsetTop) {
        window.dataLayer.push({'event': 'scroll_to_prefooter'});
        scrolled = true;
    }
});

// El Evento 5 (Formulario) ya está programado en el index.html en la función onFormSubmitted