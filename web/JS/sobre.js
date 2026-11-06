// Ano atual no footer
        document.getElementById('anoAtual').textContent = new Date().getFullYear();

        // Botão voltar ao topo
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Modal de sucesso
        const successModal = document.getElementById('successModal');
        const closeModal = document.getElementById('closeModal');

        closeModal.addEventListener('click', () => {
            successModal.classList.remove('show');
        });

        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('show');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                successModal.classList.remove('show');
            }
        });

        // Animação de elementos ao rolar
        const animateOnScroll = () => {
            const elements = document.querySelectorAll(
                '.about-image, .mission-card, .team-card, .testimonial'
            );

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll(
                '.about-image, .mission-card, .team-card, .testimonial'
            );

            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
            });

            animateOnScroll();
        });

        window.addEventListener('scroll', animateOnScroll);