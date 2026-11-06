// ===== Ano atual no footer =====
        document.getElementById('anoAtual').textContent = new Date().getFullYear();

        // ===== Botão voltar ao topo =====
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', function () {
            backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // ===== Sistema de Toast =====
        function showToast(title, text) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML =
                '<div class="toast-icon"><i class="fas fa-info-circle"></i></div>' +
                '<div class="toast-text"><strong>' + title + '</strong><span>' + text + '</span></div>';
            container.appendChild(toast);

            // Remove o toast após 4 segundos
            setTimeout(function () {
                toast.classList.add('hiding');
                setTimeout(function () {
                    if (toast.parentNode) toast.parentNode.removeChild(toast);
                }, 400);
            }, 4000);
        }

        // ===== Formulário de suporte =====
        const supportForm = document.getElementById('supportForm');
        const successModal = document.getElementById('successModal');
        const closeModalBtn = document.getElementById('closeModal');

        supportForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showToast('Campos obrigatórios', 'Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            const submitBtn = supportForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            try {
                if (!window.Api) {
                    throw new Error('API indisponível. Inicie o servidor em backend/.');
                }

                const texto = Api.buildContactMessage({
                    name: name,
                    email: email,
                    phone: '-',
                    subject: '[Suporte] ' + subject,
                    message: message
                });
                await Api.sendMensagem(texto, { idclient: 0 });

                successModal.style.display = 'flex';
                supportForm.reset();
            } catch (err) {
                showToast('Erro no envio', err.message || 'Não foi possível enviar sua mensagem.');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });

        closeModalBtn.addEventListener('click', function () {
            successModal.style.display = 'none';
            closeModalBtn.focus();
        });

        window.addEventListener('click', function (e) {
            if (e.target === successModal) successModal.style.display = 'none';
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') successModal.style.display = 'none';
        });

        // ===== Tabs =====
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        function activateTab(tab) {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(function (c) {
                c.classList.remove('active');
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.getElementById(tabId).classList.add('active');
        }

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                activateTab(tab);
            });
            // Acessibilidade: ativa com Enter e Space
            tab.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activateTab(tab);
                }
            });
        });

        // ===== FAQ Accordion =====
        const faqItems = document.querySelectorAll('.faq-item');

        function toggleFaq(item) {
            const isActive = item.classList.contains('active');
            const question = item.querySelector('.faq-question');

            // Fecha todos os outros
            faqItems.forEach(function (other) {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                    other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle o atual
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', String(!isActive));
        }

        faqItems.forEach(function (item) {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', function () {
                toggleFaq(item);
            });
            question.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(item);
                }
            });
        });

        // ===== Chat =====
        const chatInput = document.getElementById('chatInput');
        const sendMessageBtn = document.getElementById('sendMessage');
        const chatMessages = document.getElementById('chatMessages');

        function addMessage(message, isUser) {
            var el = document.createElement('div');
            el.classList.add('message');
            el.classList.add(isUser ? 'message-user' : 'message-support');
            el.textContent = message;
            chatMessages.appendChild(el);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getResponse(message) {
            var responses = {
                'olá': 'Olá! Como posso ajudar você hoje?',
                'oi': 'Oi! Qual é o seu nome e como posso ajudar?',
                'quem é você': 'Eu sou o chat de suporte do Auxílio ENCCEJA. Estou aqui para responder suas perguntas sobre o ENCCEJA e ajudar com suas dúvidas.',
                'data do exame': 'A data do próximo ENCCEJA será divulgada em breve. Por favor, consulte o site oficial do INEP para mais informações.',
                'como se inscrever': 'Para se inscrever no ENCCEJA, você precisa acessar o site do INEP (inep.gov.br), preencher o formulário de inscrição com seus dados e escolher a modalidade de certificação desejada.',
                'inscrição': 'Para se inscrever no ENCCEJA, acesse o site do INEP (inep.gov.br) durante o período de inscrições e preencha o formulário com seus dados pessoais.',
                'provas': 'As provas do ENCCEJA avaliam as áreas de conhecimento de Língua Portuguesa, Matemática, Ciências e Linguagens e Códigos para o Ensino Fundamental II, e Língua Portuguesa, Matemática, Ciências da Natureza, Ciências Humanas e Linguagens e Códigos para o Ensino Médio.',
                'material': 'Para acessar nosso material de estudo, clique na opção "Material de Estudo" no menu de suporte ou acesse diretamente em nossa seção de recursos.',
                'simulados': 'Nossos simulados estão disponíveis na seção de "Simulados e Questões". Lá você encontrará questões e provas anteriores para ajudar na sua preparação.',
                'resultado': 'O resultado do ENCCEJA é divulgado no site do INEP após algumas semanas da aplicação do exame. Consulte com seu CPF ou documento.',
                'horário': 'Nosso atendimento funciona de segunda a sexta, das 9h às 18h, e aos sábados das 9h às 13h.',
                'obrigado': 'Por nada! Se tiver mais alguma dúvida, é só perguntar. Estou aqui para ajudar!',
                'obrigada': 'Por nada! Se tiver mais alguma dúvida, é só perguntar. Estou aqui para ajudar!'
            };

            var msg = message.toLowerCase();
            for (var keyword in responses) {
                if (msg.includes(keyword)) return responses[keyword];
            }
            return 'Entendi sua pergunta. Para uma resposta mais detalhada, consulte nossa seção de Perguntas Frequentes ou entre em contato com nossa equipe pelo formulário de contato.';
        }

        async function handleChatMessage() {
            var message = chatInput.value.trim();
            if (!message) return;

            addMessage(message, true);
            chatInput.value = '';

            var typingEl = document.createElement('div');
            typingEl.className = 'message message-support';
            typingEl.textContent = 'Digitando...';
            typingEl.id = 'typingIndicator';
            chatMessages.appendChild(typingEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            if (window.Api) {
                try {
                    await Api.sendMensagem('[Chat Suporte]\n' + message, { idclient: 0 });
                } catch (err) {
                    console.warn('Chat não salvo na API:', err.message);
                }
            }

            setTimeout(function () {
                var typing = document.getElementById('typingIndicator');
                if (typing) typing.remove();
                addMessage(getResponse(message), false);
            }, 1200);
        }

        sendMessageBtn.addEventListener('click', handleChatMessage);
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') handleChatMessage();
        });

        // ===== Support Cards =====
        document.getElementById('faq-card').addEventListener('click', function () {
            document.querySelector('[data-tab="faq"]').click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('video-card').addEventListener('click', function () {
            showToast('Em breve', 'A página de vídeos de ajuda estará disponível em breve.');
        });

        document.getElementById('material-card').addEventListener('click', function () {
            showToast('Em breve', 'A página de materiais de estudo estará disponível em breve.');
        });

        document.getElementById('contact-card').addEventListener('click', function () {
            document.querySelector('[data-tab="contact"]').click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Acessibilidade nos cards: Enter e Space
        document.querySelectorAll('.support-card').forEach(function (card) {
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });