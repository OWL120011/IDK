document.addEventListener('DOMContentLoaded', () => {
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const subtopicCards = document.querySelectorAll('.subtopic-card');
    const equationModal = document.getElementById('equation-modal'); // Modal หลัก
    const allSubtopicContents = document.querySelectorAll('.subtopic-content');
    const modalCloseBtn = document.getElementById('modal-close');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            document.querySelectorAll('.accordion-content.active').forEach(openContent => {
                const openHeader = openContent.previousElementSibling;
                openContent.classList.remove('active');
                openHeader.classList.remove('active');
            });

            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
            }
        });
    });

    subtopicCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const subtopicId = card.getAttribute('data-subtopic-id');
            const targetContentId = `content-${subtopicId}`; 
            const targetContent = document.getElementById(targetContentId);
            
            allSubtopicContents.forEach(content => {
                content.style.display = 'none';
            });

            if (targetContent) {
                targetContent.style.display = 'block';
                equationModal.style.display = 'flex';
                
                if (window.MathJax) {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, targetContent]);
                }
            }

            document.querySelectorAll('.subtopic-card.active-selected').forEach(activeCard => {
                activeCard.classList.remove('active-selected');
            });
            card.classList.add('active-selected');
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        equationModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === equationModal) {
            equationModal.style.display = 'none';
        }
    });
});