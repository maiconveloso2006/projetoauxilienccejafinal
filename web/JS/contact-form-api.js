(function () {
    const SKIP_PATHS = ['contato.html', 'suporte.html'];

    function shouldSkipPage() {
        const path = (window.location.pathname || '').toLowerCase();
        return SKIP_PATHS.some(function (p) { return path.endsWith(p); });
    }

    function isContactForm(form) {
        return form && (form.id === 'contactForm' || form.id === 'contact-form');
    }

    function showSuccess(form, fields) {
        const message = 'Obrigado, ' + (fields.name || '') + '! Mensagem enviada com sucesso.';
        const container = document.querySelector('.toast-container');

        if (container && window.bootstrap && window.bootstrap.Toast) {
            const toastEl = document.createElement('div');
            toastEl.className = 'toast align-items-center text-white bg-primary border-0';
            toastEl.setAttribute('role', 'alert');
            toastEl.innerHTML =
                '<div class="d-flex">' +
                '<div class="toast-body">' + message + '</div>' +
                '<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>' +
                '</div>';
            container.appendChild(toastEl);
            const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
            toast.show();
            toastEl.addEventListener('hidden.bs.toast', function () { toastEl.remove(); });
            return;
        }

        if (typeof window.showToast === 'function') {
            try {
                window.showToast('Mensagem Enviada', message, 'success');
            } catch {
                window.showToast(message);
            }
            return;
        }

        alert(message);
    }

    document.addEventListener('submit', async function (e) {
        if (shouldSkipPage() || !isContactForm(e.target)) return;

        e.preventDefault();
        e.stopImmediatePropagation();

        const form = e.target;
        if (form.dataset.apiSending === 'true') return;

        if (!window.Api) {
            alert('API indisponível. Inicie o servidor em backend/.');
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalHtml = btn ? btn.innerHTML : '';
        form.dataset.apiSending = 'true';
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = 'Enviando...';
        }

        try {
            const pageLabel = document.title || 'Página';
            const fields = await Api.submitPageContact(form, pageLabel);
            form.reset();
            showSuccess(form, fields);
        } catch (err) {
            alert(err.message || 'Não foi possível enviar a mensagem.');
        } finally {
            form.dataset.apiSending = 'false';
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = originalHtml;
            }
        }
    }, true);
})();
