document.getElementById('anoAtual').textContent = new Date().getFullYear();

        // ===== ELEMENTOS =====
        const searchInput = document.getElementById('search-input');
        const searchClearBtn = document.getElementById('search-clear-btn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const tipCards = document.querySelectorAll('.tip-card');
        const emptyState = document.getElementById('empty-state');
        const tipsCount = document.getElementById('tips-count');

        // ===== NORMALIZAR TEXTO =====
        function normalize(str) {
            if (!str) return '';
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }

        // ===== FILTRO POR CATEGORIA =====
        let activeCategory = 'all';

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                activeCategory = this.dataset.category;
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                applyFilters();
            });
        });

        // ===== BUSCA =====
        searchInput.addEventListener('input', function () {
            searchClearBtn.classList.toggle('show', this.value.trim().length > 0);
            applyFilters();
        });

        searchClearBtn.addEventListener('click', function () {
            searchInput.value = '';
            searchClearBtn.classList.remove('show');
            searchInput.focus();
            applyFilters();
        });

        // ===== APLICAR FILTROS UNIFICADOS =====
        function applyFilters() {
            const query = normalize(searchInput.value.trim());
            let visibleCount = 0;

            tipCards.forEach(card => {
                const cardCategory = card.dataset.category || '';
                const cardSearch = normalize(card.dataset.search || '') || normalize(card.querySelector('.item-title').textContent + ' ' + card.querySelector('.item-text').textContent);
                const matchCategory = activeCategory === 'all' || cardCategory === activeCategory;
                const matchSearch = !query || cardSearch.includes(query);
                const visible = matchCategory && matchSearch;

                card.style.display = visible ? '' : 'none';
                if (visible) visibleCount++;
            });

            // MUDANÇA AQUI: Forçar o 'block' em vez de string vazia ''
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
            
            tipsCount.textContent = visibleCount + ' dica' + (visibleCount !== 1 ? 's' : '') + ' disponíve' + (visibleCount !== 1 ? 'is' : 'l');
        }

        // ===== TIMER POMODORO =====
        let timerInterval;
        let minutes = 25;
        let seconds = 0;
        let isRunning = false;

        const timerDisplay = document.getElementById('timer');
        const startBtn = document.getElementById('start-timer');
        const resetBtn = document.getElementById('reset-timer');

        function updateTimerDisplay() {
            timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                startBtn.innerHTML = '<i class="bi bi-pause-fill"></i> Pausar';
                startBtn.classList.add('running');

                timerInterval = setInterval(function () {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            clearInterval(timerInterval);
                            isRunning = false;
                            startBtn.innerHTML = '<i class="bi bi-play-fill"></i> Iniciar';
                            startBtn.classList.remove('running');

                            showToast('Seu tempo de estudo terminou! Faça uma pausa.');

                            minutes = 25;
                            seconds = 0;
                            updateTimerDisplay();
                            return;
                        }
                        minutes--;
                        seconds = 59;
                    } else {
                        seconds--;
                    }
                    updateTimerDisplay();
                }, 1000);
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.innerHTML = '<i class="bi bi-play-fill"></i> Continuar';
                startBtn.classList.remove('running');
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            minutes = 25;
            seconds = 0;
            updateTimerDisplay();
            startBtn.innerHTML = '<i class="bi bi-play-fill"></i> Iniciar';
            startBtn.classList.remove('running');
        }

        startBtn.addEventListener('click', startTimer);
        resetBtn.addEventListener('click', resetTimer);
        updateTimerDisplay();

        // ===== TOAST =====
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'custom-toast';
            toast.innerHTML = '<i class="bi bi-bell-fill"></i><span class="custom-toast-message">' + message + '</span>';
            container.appendChild(toast);
            setTimeout(function () {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50px)';
                setTimeout(function () { toast.remove(); }, 300);
            }, 5000);
        }