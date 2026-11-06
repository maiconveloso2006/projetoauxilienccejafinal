document.getElementById('anoAtual').textContent = new Date().getFullYear();

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const span = toast.querySelector('span');
    if (span) span.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

document.addEventListener('DOMContentLoaded', function () {
    const helpOptions = document.querySelectorAll('.help-option');
    const subjectSelect = document.getElementById('subject');

    helpOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const value = this.dataset.value;
            subjectSelect.value = value;
            helpOptions.forEach(function (o) { o.style.borderColor = 'transparent'; });
            this.style.borderColor = 'var(--accent)';
            document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btnSubmit = contactForm.querySelector('.btn-submit');
        const originalHTML = btnSubmit.innerHTML;
        btnSubmit.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';
        btnSubmit.style.pointerEvents = 'none';
        btnSubmit.style.opacity = '0.7';

        const fields = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };

        try {
            if (!window.Api) {
                throw new Error('API indisponível. Inicie o servidor em backend/.');
            }

            const texto = Api.buildContactMessage(fields);
            await Api.sendMensagem(texto, { idclient: 0 });

            showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
            helpOptions.forEach(function (o) { o.style.borderColor = 'transparent'; });
        } catch (err) {
            showToast(err.message || 'Não foi possível enviar a mensagem.');
        } finally {
            btnSubmit.innerHTML = originalHTML;
            btnSubmit.style.pointerEvents = '';
            btnSubmit.style.opacity = '';
        }
    });

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.substring(0, 11);
        if (v.length > 6) {
            this.value = '(' + v.substring(0, 2) + ') ' + v.substring(2, 7) + '-' + v.substring(7);
        } else if (v.length > 2) {
            this.value = '(' + v.substring(0, 2) + ') ' + v.substring(2);
        } else if (v.length > 0) {
            this.value = '(' + v;
        }
    });
});
