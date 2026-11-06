// Ano atual no footer
        document.getElementById('anoAtual').textContent = new Date().getFullYear();

        // Lista de IDs que são tabs
        var tabIds = ['about', 'registration', 'preparation', 'exam', 'results', 'faq'];

        // Função auxiliar para pegar a posição real de um elemento em relação ao topo do documento
        function getElementTop(el) {
            return el.getBoundingClientRect().top + window.scrollY;
        }

        // Função para ativar uma tab pelo ID
        function activateTab(tabId, highlight) {
            var tabBtn = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
            var tabContent = document.getElementById(tabId);

            if (tabBtn && tabContent) {
                // Remove active de todas as tabs
                document.querySelectorAll('.tab-btn').forEach(function(btn) {
                    btn.classList.remove('active', 'highlight-flash');
                });
                document.querySelectorAll('.tab-content').forEach(function(content) {
                    content.classList.remove('active');
                });

                // Ativa a tab clicada
                tabBtn.classList.add('active');
                tabContent.classList.add('active');

                // Se veio do botão "Começar Preparação" ou "Ver Recursos", adiciona destaque visual
                if (highlight) {
                    tabBtn.classList.add('highlight-flash');
                }

                // Scroll horizontal para mostrar o botão ativo no tab-buttons
                var tabButtonsContainer = document.getElementById('tabButtonsContainer');
                if (tabButtonsContainer) {
                    var btnLeft = tabBtn.offsetLeft;
                    var btnWidth = tabBtn.offsetWidth;
                    var containerWidth = tabButtonsContainer.offsetWidth;
                    var targetScroll = btnLeft - (containerWidth / 2) + (btnWidth / 2);
                    tabButtonsContainer.scrollTo({
                        left: targetScroll,
                        behavior: 'smooth'
                    });
                }
            }
        }

        // Tab Navigation (clique direto nos botões)
        document.querySelectorAll('.tab-btn').forEach(function(button) {
            button.addEventListener('click', function() {
                activateTab(button.getAttribute('data-tab'), false);
            });
        });

        // FAQ Accordion
        var faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(function(item) {
            var question = item.querySelector('.faq-question');
            question.addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                faqItems.forEach(function(i) { i.classList.remove('active'); });
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Contact Form
        var contactForm = document.getElementById('contact-form');
        var notification = document.getElementById('notification');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            setTimeout(function() {
                notification.classList.add('show');
                contactForm.reset();
                setTimeout(function() {
                    notification.classList.remove('show');
                }, 5000);
            }, 800);
        });

        // Scroll suave para âncoras — reescrito com cálculo correto de posição
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                var targetId = this.getAttribute('href').substring(1);

                if (!targetId) return;

                // Verifica se é uma tab
                var tabBtn = document.querySelector('.tab-btn[data-tab="' + targetId + '"]');
                if (tabBtn) {
                    // Ativa a tab com destaque visual
                    activateTab(targetId, true);

                    // Scroll suave para o topo da seção de tabs (cálculo correto)
                    var tabsSection = document.getElementById('tabsSection');
                    var tabsTop = getElementTop(tabsSection) - 80;

                    window.scrollTo({
                        top: tabsTop,
                        behavior: 'smooth'
                    });
                } else {
                    // Scroll normal para outros elementos (contato, etc.)
                    var targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        var elementTop = getElementTop(targetElement) - 80;
                        window.scrollTo({
                            top: elementTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });