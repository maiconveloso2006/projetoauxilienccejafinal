(function () {
    'use strict';

    function getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem('auxilio-current-user'));
        } catch (_) {
            return null;
        }
    }

    function subjectFromPage() {
        const value = ((document.title || '') + ' ' + window.location.pathname).toLowerCase();
        if (value.includes('matemat')) return 'Matematica';
        if (value.includes('portugu')) return 'Portugues';
        if (value.includes('historia')) return 'Historia';
        if (value.includes('geografia')) return 'Geografia';
        if (value.includes('ciencia')) return 'Ciencias';
        if (value.includes('sociologia')) return 'Sociologia';
        if (value.includes('ingles')) return 'Ingles';
        return 'Geral';
    }

    function typeFromPage() {
        const value = ((document.title || '') + ' ' + window.location.pathname).toLowerCase();
        if (value.includes('simulado')) return 'QUIZ';
        if (value.includes('exercicio')) return 'EXERCICIO';
        if (value.includes('apostila')) return 'PDF';
        if (value.includes('video')) return 'VIDEO';
        return 'VIDEO';
    }

    function pageTitle() {
        return String(document.title || 'Página da plataforma').replace(/\s*[-|].*$/, '').trim();
    }

    function alreadyTracked(key) {
        const storageKey = 'auxilio-progress-tracked:' + key;
        if (sessionStorage.getItem(storageKey)) return true;
        sessionStorage.setItem(storageKey, '1');
        return false;
    }

    async function send(evento, extra) {
        if (!window.Api || typeof Api.trackProgress !== 'function' || !getCurrentUser()) return;
        await Api.trackProgress({
            evento,
            pagina: window.location.pathname.split('/').pop() || 'index.html',
            titulo: pageTitle(),
            materia: subjectFromPage(),
            tipo: typeFromPage(),
            ...extra
        });
    }

    function watchForCompletion() {
        let sent = false;

        function check() {
            if (sent) return;

            const result = document.querySelector('#resultContainer, #result-container, .result-container, .sim-result');
            if (!result) return;

            const style = window.getComputedStyle(result);
            const visible = style.display !== 'none' && style.visibility !== 'hidden' && result.offsetHeight > 0;
            if (!visible) return;

            const scoreText = result.querySelector('#finalScore, #score-display, .sim-result-score, .result-score');
            if (!scoreText || !scoreText.textContent.trim()) return;

            sent = true;
            const text = scoreText.textContent.trim();
            const numbers = text.match(/(\d+(?:[.,]\d+)?)\s*(?:\/|de)\s*(\d+(?:[.,]\d+)?)/i);
            let nota = null;
            let percentual = 100;

            if (numbers) {
                const correct = Number(numbers[1].replace(',', '.'));
                const total = Number(numbers[2].replace(',', '.'));
                if (total > 0) {
                    percentual = Math.round((correct / total) * 100);
                    nota = percentual;
                }
            }

            send('CONCLUSAO', { percentual, nota });
        }

        const observer = new MutationObserver(check);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
        check();
    }

    document.addEventListener('DOMContentLoaded', function () {
        const user = getCurrentUser();
        if (!user || !window.Api) return;

        const pageKey = (window.location.pathname || 'index').toLowerCase();
        if (!alreadyTracked(pageKey)) {
            send('VISITA');
        }

        watchForCompletion();
    });
})();
