document.addEventListener('DOMContentLoaded', () => {

    const simModal = document.getElementById('sim-modal');
    const simCloseBtn = document.getElementById('sim-close');
    const simIframe = document.getElementById('sim-iframe');
    const simTitle = document.getElementById('sim-title');
    const simCards = document.querySelectorAll('.simulation-card');

    simCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); 
            const url = card.getAttribute('data-sim-url');
            const title = card.getAttribute('data-sim-title');

            if (url) {
                simIframe.src = url;
                simTitle.textContent = title;
                simModal.style.display = 'flex'; 
            }
        });
    });
    
    if (simCloseBtn) {
        simCloseBtn.addEventListener('click', () => {
            simModal.style.display = 'none';
            simIframe.src = ''; 
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === simModal) {
            simModal.style.display = 'none';
            simIframe.src = '';
        }
    });
});