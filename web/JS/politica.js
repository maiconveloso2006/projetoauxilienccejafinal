// Ano atual no footer
            document.getElementById('anoAtual').textContent = new Date().getFullYear(); 

            document.addEventListener('DOMContentLoaded', function () {

            // Tabs
            const tabs = document.querySelectorAll('.privacy-tab');
            const panes = document.querySelectorAll('.tab-pane');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => {
                        t.classList.remove('active');
                        t.setAttribute('aria-selected', 'false');
                    });
                    panes.forEach(p => p.classList.remove('active'));

                    tab.classList.add('active');
                    tab.setAttribute('aria-selected', 'true');

                    const target = tab.getAttribute('data-tab');
                    document.getElementById(target + '-pane').classList.add('active');
                });
            });
        });

        // Toast
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            if (!container) return;

            const toast = document.createElement('div');
            toast.className = 'custom-toast';
            toast.innerHTML = '<i class="bi bi-check-circle-fill"></i><span class="custom-toast-message">' + message + '</span>';
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }