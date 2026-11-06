(function () {
    const LANG_KEY = 'auxilio-encceja-lang';

    const translations = {
        'pt-BR': {
            'profile.badge': 'Estudante',
            'profile.settings': 'Configurações',
            'profile.myProfile': 'Meu perfil',
            'profile.logout': 'Sair',
            'profile.logoutSuccess': 'Sessão encerrada. Até logo!',
            'welcome.titleNamed': 'Bem-vindo de volta, {name}!'
        },
        en: {
            'profile.badge': 'Student',
            'profile.settings': 'Settings',
            'profile.myProfile': 'My profile',
            'profile.logout': 'Log out',
            'profile.logoutSuccess': 'Signed out. See you soon!',
            'welcome.titleNamed': 'Welcome back, {name}!'
        },
        es: {
            'profile.badge': 'Estudiante',
            'profile.settings': 'Configuración',
            'profile.myProfile': 'Mi perfil',
            'profile.logout': 'Salir',
            'profile.logoutSuccess': 'Sesión cerrada. ¡Hasta pronto!',
            'welcome.titleNamed': '¡Bienvenido de nuevo, {name}!'
        }
    };

    function getLang() {
        return localStorage.getItem(LANG_KEY) || 'pt-BR';
    }

    function t(key) {
        const lang = getLang();
        return (translations[lang] && translations[lang][key])
            || translations['pt-BR'][key]
            || key;
    }

    function getDisplayName() {
        const extra = window.Api ? Api.getProfileExtra() : {};
        const stored = (function () {
            try {
                return JSON.parse(localStorage.getItem('userProfile')) || {};
            } catch {
                return {};
            }
        })();
        const user = window.Api ? Api.getCurrentUser() : null;
        return stored.apelido || stored.nome || extra.apelido || (user && user.name) || 'Estudante';
    }

    function getDisplayEmail() {
        const stored = (function () {
            try {
                return JSON.parse(localStorage.getItem('userProfile')) || {};
            } catch {
                return {};
            }
        })();
        const user = window.Api ? Api.getCurrentUser() : null;
        return stored.email || (user && user.login) || '';
    }

    function getInitials(name) {
        const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
        if (!parts.length) return 'E';
        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function getAvatarHtml(sizeClass) {
        const saved = localStorage.getItem('userAvatar');
        const initials = getInitials(getDisplayName());
        if (saved) {
            return '<img src="' + saved + '" alt="">';
        }
        return initials;
    }

    function updateWelcomeBanner() {
        const titleEl = document.querySelector('.welcome-title[data-i18n="welcome.title"]');
        if (!titleEl) return;
        const name = getDisplayName();
        titleEl.textContent = t('welcome.titleNamed').replace('{name}', name);
    }

    function applyI18n(root) {
        root.querySelectorAll('[data-profile-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-profile-i18n'));
        });
    }

    function refreshUI() {
        const name = getDisplayName();
        const email = getDisplayEmail();
        const avatarInner = getAvatarHtml();

        document.querySelectorAll('.profile-trigger-avatar').forEach(function (el) {
            el.innerHTML = avatarInner;
        });
        document.querySelectorAll('.profile-trigger-name').forEach(function (el) {
            el.textContent = name;
        });
        document.querySelectorAll('.profile-popover-header-name').forEach(function (el) {
            el.textContent = name;
        });
        document.querySelectorAll('.profile-popover-header-email').forEach(function (el) {
            el.textContent = email || '—';
        });
        document.querySelectorAll('.profile-popover-header-avatar').forEach(function (el) {
            el.innerHTML = avatarInner;
        });

        const menu = document.getElementById('profilePopoverMenu');
        if (menu) applyI18n(menu);
        updateWelcomeBanner();
    }

    async function performLogout() {
        if (window.Api && typeof Api.logout === 'function') {
            await Api.logout();
        } else if (window.Api) {
            Api.clearCurrentUser();
        }
        localStorage.removeItem('userProfile');
        window.location.href = 'login.html';
    }

    function bindLogoutButtons() {
        document.querySelectorAll('[data-profile-logout]').forEach(function (btn) {
            if (btn.dataset.boundLogout) return;
            btn.dataset.boundLogout = '1';
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                performLogout();
            });
        });
    }

    function injectNavbarItem() {
        const navList = document.querySelector('.navbar-nav.ms-auto');
        if (!navList || document.getElementById('profileDropdown')) return;

        const li = document.createElement('li');
        li.className = 'nav-item dropdown profile-dropdown';
        li.id = 'profileDropdown';
        li.innerHTML =
            '<button type="button" class="nav-link profile-trigger dropdown-toggle" ' +
            'id="profilePopoverTrigger" data-bs-toggle="dropdown" aria-expanded="false" ' +
            'aria-label="Menu do perfil">' +
            '<span class="profile-trigger-avatar"></span>' +
            '<span class="profile-trigger-name"></span>' +
            '<i class="bi bi-chevron-down profile-trigger-chevron"></i>' +
            '</button>' +
            '<ul class="dropdown-menu dropdown-menu-end profile-popover-menu" id="profilePopoverMenu">' +
            '<li class="profile-popover-header">' +
            '<div class="profile-popover-header-avatar"></div>' +
            '<div class="profile-popover-header-info">' +
            '<p class="profile-popover-header-name"></p>' +
            '<p class="profile-popover-header-email"></p>' +
            '<span class="profile-popover-badge"><i class="bi bi-patch-check-fill"></i> ' +
            '<span data-profile-i18n="profile.badge">Estudante</span></span>' +
            '</div></li>' +
            '<li class="profile-popover-body">' +
            '<a class="profile-popover-item" href="config.html">' +
            '<i class="bi bi-gear"></i><span data-profile-i18n="profile.settings">Configurações</span></a>' +
            '<a class="profile-popover-item" href="config.html" data-profile-tab="perfil">' +
            '<i class="bi bi-person"></i><span data-profile-i18n="profile.myProfile">Meu perfil</span></a>' +
            '<div class="profile-popover-divider"></div>' +
            '<button type="button" class="profile-popover-item profile-popover-logout" data-profile-logout>' +
            '<i class="bi bi-box-arrow-right"></i><span data-profile-i18n="profile.logout">Sair</span>' +
            '</button></li></ul>';

        navList.appendChild(li);

        li.querySelector('[data-profile-tab="perfil"]').addEventListener('click', function () {
            sessionStorage.setItem('auxilio-config-tab', 'perfil');
        });

        document.getElementById('profilePopoverTrigger').addEventListener('show.bs.dropdown', refreshUI);
        bindLogoutButtons();
        refreshUI();
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (window.Api && !Api.getCurrentUser()) return;
        injectNavbarItem();
    });

    window.addEventListener('storage', function (e) {
        if (e.key === LANG_KEY || e.key === 'userProfile' || e.key === 'userAvatar' || e.key === 'auxilio-current-user') {
            refreshUI();
        }
    });

    window.ProfilePopover = {
        refresh: refreshUI,
        logout: performLogout,
        t: t
    };
})();
