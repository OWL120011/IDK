document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('.download-btn');
    const optionsModal = document.getElementById('download-modal');
    const optionsCloseBtn = document.getElementById('options-close');
    const modalTitle = document.getElementById('modal-title');
    const modalLinks = document.getElementById('modal-links');

    const examData = {
        "วิชาสามัญ": [
            { text: "Physics Exam 2555", url: "https://drive.google.com/file/d/1T4uX64a1-63UpXbuW_1c40KS5tGViqIm/view?usp=drive_link" },
            { text: "Physics Exam 2556", url: "https://drive.google.com/file/d/17mogzUrpFTmegZasv0QPsAxiNxZFgj1z/view?usp=drive_link" },
            { text: "Physics Exam 2557", url: "https://drive.google.com/file/d/1XGSjL2iF71gls0WqX-ntiRrWc-1WrSWS/view?usp=drive_link" },
            { text: "Physics Exam 2558", url: "https://drive.google.com/file/d/1RjzevufjmOks7ZGJGVfao7JNWPWZGCEL/view?usp=drive_link" },
            { text: "Physics Exam 2559", url: "https://drive.google.com/file/d/1A6JnazFlPiKSruJjuiesztcseJ5R6T19/view?usp=drive_link" },
            { text: "Physics Exam 2560", url: "https://drive.google.com/file/d/1i0I06kOgy2q9iBaXnzyf5J1EEuVOWE8I/view?usp=drive_link" },
            { text: "Physics Exam 2561", url: "https://drive.google.com/file/d/19aeE6z_GB075e0RWQp0cfNZYQFJgnImy/view?usp=drive_link" },
            { text: "Physics Exam 2562", url: "https://drive.google.com/file/d/1jY9Slp80F-PrqOvIqBhXjMuJ2O4FT-_B/view?usp=drive_link" },
            { text: "Physics Exam 2563", url: "https://drive.google.com/file/d/1XCRC797MYjycdvdya-rUt8GjSa2aTKZo/view?usp=drive_link" },
            { text: "Physics Exam 2564", url: "https://drive.google.com/file/d/1RvCCm3Qk5H8cy-ERO9a1sSvfYgqwRgvT/view?usp=drive_link" },
            { text: "Physics Exam 2565", url: "https://drive.google.com/file/d/1DPCCfR_48CEQY0B74swxrgkMGKdJ68RO/view?usp=drive_link" }
        ],
        "A-level": [
            { text: "A-level Physics 2566", url: "https://drive.google.com/file/d/1Gqf6di_m9QyCQMBygTnq0Qv-s9AV3X1O/view?usp=drive_link" },
            { text: "A-level Physics 2567", url: "https://drive.google.com/file/d/1eMIkfc_JRILhMINPtgUhq2ZGU1t_RLaQ/view?usp=drive_link" },
            { text: "A-level Physics 2568", url: "https://drive.google.com/file/d/1vm7Dd-tMEsTFijawEYW1zF3QIkXov-mf/view?usp=drive_link" }
        ],
        "Entrance": [
            { text: "Entrance Oct 2543", url: "https://drive.google.com/file/d/1kzbSKz4F-DZ6ATiCibogaBUgng72dXm2/view?usp=drive_link" },
            { text: "Entrance Oct 2544", url: "https://drive.google.com/file/d/1c8aIyLqN0s4u8YQBp4bacUBaVlrGsB3W/view?usp=drive_link" },
            { text: "Entrance Oct 2545", url: "https://drive.google.com/file/d/1DQez1bz6Wy_YqVKJjE1icwPWi_CPdTok/view?usp=drive_link" },
            { text: "Entrance Oct 2546", url: "https://drive.google.com/file/d/1kV1MiM6HmSikWzjDjp2-tsI6NeMBZ-Hy/view?usp=drive_link" },
            { text: "Entrance Oct 2547", url: "https://drive.google.com/open?id=1tUoVBJPS_S99YBMMvIHrjKIWGXXavxaJ&usp=drive_copy" },
            { text: "Entrance Mar 2543", url: "https://drive.google.com/file/d/11Ga7_UE8bQz1NvAO6ue-2DDNQcHk8nsF/view?usp=drive_link" },
            { text: "Entrance Mar 2544", url: "https://drive.google.com/file/d/1drhxKksNhyVIPYCI65TUhqx8ep6g5D12/view?usp=drive_link" },
            { text: "Entrance Mar 2545", url: "https://drive.google.com/file/d/1ARUg-d0JUhwDsichpKc1ZMC92LtqzbM7/view?usp=drive_link" },
            { text: "Entrance Mar 2546", url: "https://drive.google.com/file/d/1eFRahUc94BBeY7HNPwlP2e6-gThBOdTJ/view?usp=drive_link" },
            { text: "Entrance Mar 2547", url: "https://drive.google.com/file/d/1Hf8kunl8zT67t7bkrkEXyqzl7ZsYKuQq/view?usp=drive_link" },
            { text: "Entrance Mar 2548", url: "https://drive.google.com/file/d/1R8dam95eZran1bWe4DUr1CmieW2RHLfw/view?usp=drive_link" }
        ]
    };

    let fileToDownload = '';

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const examKey = btn.getAttribute('data-exam');
            const data = examData[examKey];

            if (data && data.length > 0) {
                modalTitle.textContent = `${examKey} Options`;
                modalLinks.innerHTML = ''; 

                data.forEach(item => {
                    const link = document.createElement('a');
                    link.classList.add('modal-link');
                    link.setAttribute('data-url', item.url); 
                    link.textContent = item.text;
                    modalLinks.appendChild(link);
                });

                optionsModal.style.display = 'flex';
            }
        });
    });

    modalLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const urlToRedirect = e.target.getAttribute('data-url');
            if (urlToRedirect) {
                window.open(urlToRedirect, '_blank'); 
                optionsModal.style.display = 'none'; 
            }
        }
    });

    optionsCloseBtn.addEventListener('click', () => {
        optionsModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === optionsModal) {
            optionsModal.style.display = 'none';
        }
    });
});