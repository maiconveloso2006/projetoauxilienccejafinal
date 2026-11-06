document.getElementById('anoAtual').textContent = new Date().getFullYear();

        // ===== Tab switching =====
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
                // Re-apply filters for the newly visible tab
                filterExams();
            });
        });

        // ===== Toast notifications =====
        function showToast(message, type = 'success') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'custom-toast ' + type;
            const iconMap = {
                success: 'bi-check-circle-fill',
                error: 'bi-exclamation-circle-fill'
            };
            toast.innerHTML = '<i class="bi ' + (iconMap[type] || iconMap.success) + '"></i><span class="custom-toast-message">' + message + '</span>';
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ===== Download / View =====
        function downloadExam(title, year, type) {
            showToast('Iniciando download de: ' + title, 'success');
            console.log('Baixando prova:', title, '| Ano:', year, '| Tipo:', type);
        }

        function viewExam(title, year, type) {
            showToast('Abrindo visualização de: ' + title, 'success');
            console.log('Visualizando prova:', title, '| Ano:', year, '| Tipo:', type);
        }

        // ===== Search =====
        const searchInput = document.getElementById('searchInput');
        const searchClearBtn = document.getElementById('searchClearBtn');

        searchInput.addEventListener('input', function () {
            const hasValue = this.value.trim().length > 0;
            searchClearBtn.classList.toggle('show', hasValue);
            filterExams();
        });

        searchClearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchClearBtn.classList.remove('show');
            searchInput.focus();
            filterExams();
        });

        // ===== Filter selects =====
        document.getElementById('yearFilter').addEventListener('change', filterExams);
        document.getElementById('subjectFilter').addEventListener('change', filterExams);
        document.getElementById('typeFilter').addEventListener('change', filterExams);

        // ===== Unified filter logic =====
        function normalizeStr(str) {
            if (!str) return '';
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }

        function filterExams() {
            const yearFilter = document.getElementById('yearFilter').value;
            const subjectFilter = document.getElementById('subjectFilter').value;
            const typeFilter = document.getElementById('typeFilter').value;
            const searchTerm = normalizeStr(searchInput.value.trim());

            document.querySelectorAll('.tab-content').forEach(tabContent => {
                const cards = tabContent.querySelectorAll('.exam-card');
                let visibleCount = 0;

                cards.forEach(card => {
                    const year = card.querySelector('.exam-year-tag').textContent;
                    const title = normalizeStr(card.querySelector('.item-title').textContent);
                    const cardType = card.dataset.type;
                    let show = true;

                    if (yearFilter && !year.includes(yearFilter)) show = false;
                    if (typeFilter && cardType !== typeFilter) show = false;
                    if (subjectFilter) {
                        const tagsText = normalizeStr(card.querySelector('.item-tags').textContent);
                        if (!tagsText.includes(subjectFilter)) show = false;
                    }
                    if (searchTerm && !title.includes(searchTerm)) show = false;

                    card.style.display = show ? '' : 'none';
                    if (show) visibleCount++;
                });

                // Show/hide empty state for this tab
                const emptyEl = tabContent.querySelector('.empty-state');
                if (emptyEl) {
                    emptyEl.classList.toggle('show', visibleCount === 0);
                }
            });
        }

        // ===== Initial filter run =====
        filterExams();