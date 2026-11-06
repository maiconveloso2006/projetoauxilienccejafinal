// Ano atual no footer
        document.getElementById('anoAtual').textContent = new Date().getFullYear();
        
        document.addEventListener('DOMContentLoaded', function () {
            const acceptBtn = document.getElementById('acceptBtn');
            const declineBtn = document.getElementById('declineBtn');
            const notification = document.getElementById('notification');
            const notificationIcon = document.getElementById('notificationIcon');
            const notificationMessage = document.getElementById('notificationMessage');
            const searchInput = document.getElementById('searchInput');
            const searchClearBtn = document.getElementById('searchClearBtn');
            const termsContent = document.getElementById('termsContent');
            const scrollProgress = document.getElementById('scrollProgress');

            // ===== Barra de progresso de scroll =====
            termsContent.addEventListener('scroll', function () {
                const scrollTop = this.scrollTop;
                const scrollHeight = this.scrollHeight - this.clientHeight;
                const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                scrollProgress.style.width = Math.min(progress, 100) + '%';
            });

            // ===== Notificação =====
            function showNotification(message, type) {
                notification.className = 'notification show';

                if (type === 'success') {
                    notification.classList.add('notification-success');
                    notificationIcon.className = 'bi bi-check-circle-fill';
                } else {
                    notification.classList.add('notification-error');
                    notificationIcon.className = 'bi bi-exclamation-circle-fill';
                }

                notificationMessage.textContent = message;

                setTimeout(() => {
                    notification.className = 'notification';
                }, 3500);
            }

            // ===== Aceitar termos =====
            acceptBtn.addEventListener('click', function () {
                localStorage.setItem('termsAccepted', 'true');
                showNotification('Termos aceitos com sucesso! Redirecionando...', 'success');

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            });

            // ===== Recusar termos =====
            declineBtn.addEventListener('click', function () {
                showNotification('Você precisa aceitar os termos para usar o Auxílio Encceja.', 'error');
            });

            // ===== Pesquisa =====
            searchInput.addEventListener('input', function () {
                const searchTerm = this.value.trim().toLowerCase();
                const hasSearch = searchTerm.length > 0;

                searchClearBtn.classList.toggle('show', hasSearch);

                if (!hasSearch) {
                    removeHighlights();
                    return;
                }

                removeHighlights();
                highlightMatches(searchTerm);
            });

            searchClearBtn.addEventListener('click', function () {
                searchInput.value = '';
                searchInput.focus();
                searchClearBtn.classList.remove('show');
                removeHighlights();
            });

            function removeHighlights() {
                const highlights = termsContent.querySelectorAll('.highlight');
                highlights.forEach(highlight => {
                    const parent = highlight.parentNode;
                    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
                    parent.normalize();
                });
            }

            function highlightMatches(term) {
                const textNodes = getTextNodes(termsContent);
                textNodes.forEach(node => {
                    const text = node.nodeValue;
                    const lowerText = text.toLowerCase();
                    let startIndex = 0;
                    let index;

                    while ((index = lowerText.indexOf(term, startIndex)) > -1) {
                        const before = text.substring(startIndex, index);
                        const match = text.substring(index, index + term.length);
                        const after = text.substring(index + term.length);

                        const span = document.createElement('span');
                        span.className = 'highlight';
                        span.textContent = match;

                        const beforeNode = document.createTextNode(before);
                        const afterNode = document.createTextNode(after);

                        const parent = node.parentNode;
                        parent.insertBefore(beforeNode, node);
                        parent.insertBefore(span, node);
                        parent.insertBefore(afterNode, node);
                        parent.removeChild(node);

                        startIndex = index + match.length;
                        node = afterNode;
                    }
                });
            }

            function getTextNodes(element) {
                const textNodes = [];
                const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
                let node;
                while (node = walker.nextNode()) {
                    if (node.nodeValue.trim() !== '') {
                        textNodes.push(node);
                    }
                }
                return textNodes;
            }
        });