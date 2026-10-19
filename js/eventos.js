window.dataLayer = window.dataLayer || [];

// Evento 1: Clic en el botón del Hero
document.getElementById('btn-hero')?.addEventListener('click', function () {
    window.dataLayer.push({ 'event': 'click_cta_hero' });
});

// Evento 2: Clic en el botón CTA 2 (Asesor)
document.getElementById('btn-cta2')?.addEventListener('click', function () {
    window.dataLayer.push({ 'event': 'click_cta_asesor' });
});

// Evento 3: Interactuar con las FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function () {
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
window.addEventListener('scroll', function () {
    const prefooter = document.getElementById('pre-footer');
    if (!scrolled && prefooter && window.scrollY + window.innerHeight >= prefooter.offsetTop) {
        window.dataLayer.push({ 'event': 'scroll_to_prefooter' });
        scrolled = true;
    }
});

// Evento 5: generate_lead → se dispara desde onFormSubmitted de HubSpot en el HTML.
// No se requiere listener aquí.