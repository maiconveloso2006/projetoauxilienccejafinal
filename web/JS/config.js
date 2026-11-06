document.getElementById('anoAtual').textContent = new Date().getFullYear();

const translations = {
    'pt-BR': {
        'page.title': 'Configurações - Auxílio Encceja',
        'nav.brand': 'Auxílio Encceja',
        'nav.home': 'Início',
        'nav.contents': 'Conteúdos',
        'nav.progress': 'Acompanhamento',
        'nav.settings': 'Configurações',
        'settings.title': 'Configurações',
        'settings.subtitle': 'Personalize sua experiência na plataforma',
        'tabs.profile': 'Perfil',
        'tabs.appearance': 'Aparência',
        'tabs.accessibility': 'Acessibilidade',
        'tabs.notifications': 'Notificações',
        'tabs.privacy': 'Privacidade',
        'tabs.account': 'Conta',
        'profile.title': 'Meu Perfil',
        'profile.desc': 'Gerencie suas informações pessoais e como elas aparecem na plataforma.',
        'profile.changePhoto': 'Alterar',
        'profile.badge': 'Estudante',
        'profile.fullName': 'Nome Completo',
        'profile.fullNamePlaceholder': 'Seu nome completo',
        'profile.nickname': 'Apelido',
        'profile.nicknamePlaceholder': 'Como prefere ser chamado',
        'profile.email': 'E-mail',
        'profile.emailPlaceholder': 'seu@email.com',
        'profile.phone': 'Telefone',
        'profile.phonePlaceholder': '(00) 00000-0000',
        'profile.dob': 'Data de Nascimento',
        'profile.state': 'Estado',
        'profile.selectState': 'Selecione...',
        'btn.save': 'Salvar Alterações',
        'btn.cancel': 'Cancelar',
        'btn.savePreferences': 'Salvar Preferências',
        'btn.restoreDefault': 'Restaurar Padrão',
        'btn.saveSettings': 'Salvar Configurações',
        'btn.restoreDefaults': 'Restaurar Padrões',
        'appearance.title': 'Aparência',
        'appearance.desc': 'Personalize a aparência visual da plataforma.',
        'appearance.theme': 'Tema',
        'appearance.themeDesc': 'Escolha entre o modo claro, escuro ou automático.',
        'theme.light': 'Claro',
        'theme.dark': 'Escuro',
        'theme.auto': 'Automático (Sistema)',
        'appearance.accentColor': 'Cor de Destaque',
        'appearance.accentColorDesc': 'Escolha a cor principal da plataforma.',
        'appearance.cardStyle': 'Estilo dos Cards',
        'appearance.cardStyleDesc': 'Define o estilo visual dos cards de conteúdo.',
        'style.rounded': 'Arredondado',
        'style.square': 'Quadrado',
        'style.minimal': 'Minimalista',
        'appearance.animations': 'Animações',
        'appearance.animationsDesc': 'Ativa animações e transições suaves na interface.',
        'appearance.parallax': 'Efeitos de Paralaxe',
        'appearance.parallaxDesc': 'Efeito de profundidade ao rolar a página.',
        'accessibility.title': 'Acessibilidade',
        'accessibility.desc': 'Configure opções de acessibilidade para uma melhor experiência.',
        'accessibility.visual': 'Configurações Visuais',
        'accessibility.highContrast': 'Alto Contraste',
        'accessibility.highContrastDesc': 'Aumenta o contraste entre texto e fundo para melhor legibilidade.',
        'accessibility.monochrome': 'Modo Monocromático',
        'accessibility.monochromeDesc': 'Remove todas as cores da tela.',
        'accessibility.invertColors': 'Inverter Cores',
        'accessibility.invertColorsDesc': 'Inverte as cores da tela.',
        'accessibility.text': 'Configurações de Texto',
        'accessibility.fontSize': 'Tamanho da Fonte',
        'accessibility.fontSizeDesc': 'Ajuste o tamanho do texto na plataforma.',
        'accessibility.smaller': 'Menor',
        'accessibility.larger': 'Maior',
        'accessibility.lineHeight': 'Espaçamento de Linha',
        'accessibility.lineHeightDesc': 'Ajuste o espaço entre as linhas de texto.',
        'accessibility.compact': 'Compacto',
        'accessibility.spaced': 'Espaçado',
        'accessibility.navigation': 'Navegação',
        'accessibility.bigCursor': 'Cursor Grande',
        'accessibility.bigCursorDesc': 'Aumenta o tamanho do cursor do mouse.',
        'accessibility.highlightLinks': 'Realçar Links',
        'accessibility.highlightLinksDesc': 'Destaca todos os links clicáveis na página.',
        'accessibility.visibleFocus': 'Foco Visível',
        'accessibility.visibleFocusDesc': 'Destaca elementos quando navegados pelo teclado.',
        'notifications.title': 'Notificações',
        'notifications.desc': 'Configure como e quando deseja receber notificações.',
        'notifications.email': 'Notificações por E-mail',
        'notifications.weeklySummary': 'Resumo Semanal',
        'notifications.weeklySummaryDesc': 'Receba um resumo semanal do seu progresso e novos conteúdos.',
        'notifications.newContent': 'Novos Conteúdos',
        'notifications.newContentDesc': 'Seja notificado quando novos materiais forem adicionados.',
        'notifications.studyReminders': 'Lembretes de Estudo',
        'notifications.studyRemindersDesc': 'Receba lembretes para manter sua rotina de estudos.',
        'notifications.browser': 'Notificações no Navegador',
        'notifications.allowBrowser': 'Permitir Notificações',
        'notifications.allowBrowserDesc': 'Receba notificações push no seu navegador.',
        'notifications.sound': 'Som de Notificação',
        'notifications.soundDesc': 'Reproduz um som ao receber notificações.',
        'privacy.title': 'Privacidade',
        'privacy.desc': 'Controle suas configurações de privacidade e dados.',
        'privacy.publicProfile': 'Perfil Público',
        'privacy.publicProfileDesc': 'Permitir que outros usuários vejam seu perfil e progresso.',
        'privacy.showRanking': 'Mostrar no Ranking',
        'privacy.showRankingDesc': 'Aparecer nas tabelas de classificação e ranking.',
        'privacy.viewPolicy': 'Ver Política de Privacidade',
        'account.title': 'Conta e Segurança',
        'account.desc': 'Gerencie sua conta, senha e configurações de segurança.',
        'account.changePass': 'Alterar Senha',
        'account.currentPass': 'Senha Atual',
        'account.currentPassPlaceholder': 'Digite sua senha atual',
        'account.newPass': 'Nova Senha',
        'account.newPassPlaceholder': 'Digite a nova senha',
        'account.confirmPass': 'Confirmar Nova Senha',
        'account.confirmPassPlaceholder': 'Confirme a nova senha',
        'account.changePassBtn': 'Alterar Senha',
        'account.session': 'Sessão',
        'account.sessionDesc': 'Encerre sua sessão neste dispositivo. Você precisará fazer login novamente para acessar a plataforma.',
        'account.logout': 'Sair da Conta',
        'account.dangerZone': 'Zona de Perigo',
        'account.dangerZoneDesc': 'Uma vez que você exclua sua conta, não há como voltar atrás. Por favor, tenha certeza.',
        'account.deleteAccount': 'Excluir Minha Conta',
        'footer.terms': 'Termos de Uso',
        'footer.privacy': 'Política de Privacidade',
        'footer.contact': 'Contato',
        'footer.about': 'Sobre',
        'footer.rights': 'Todos os Direitos Reservados.',
        'toast.profileSaved': 'Perfil atualizado com sucesso!',
        'toast.appearanceSaved': 'Aparência atualizada!',
        'toast.notificationsSaved': 'Preferências de notificação salvas!',
        'toast.privacySaved': 'Configurações de privacidade atualizadas!',
        'toast.passwordChanged': 'Senha alterada com sucesso!'
    },
    'en': {
        'page.title': 'Settings - Encceja Assistance',
        'nav.brand': 'Encceja Assistance',
        'nav.home': 'Home',
        'nav.contents': 'Contents',
        'nav.progress': 'Progress',
        'nav.settings': 'Settings',
        'settings.title': 'Settings',
        'settings.subtitle': 'Customize your experience on the platform',
        'tabs.profile': 'Profile',
        'tabs.appearance': 'Appearance',
        'tabs.accessibility': 'Accessibility',
        'tabs.notifications': 'Notifications',
        'tabs.privacy': 'Privacy',
        'tabs.account': 'Account',
        'profile.title': 'My Profile',
        'profile.desc': 'Manage your personal information and how it appears on the platform.',
        'profile.changePhoto': 'Change',
        'profile.badge': 'Student',
        'profile.fullName': 'Full Name',
        'profile.fullNamePlaceholder': 'Your full name',
        'profile.nickname': 'Nickname',
        'profile.nicknamePlaceholder': 'How do you prefer to be called',
        'profile.email': 'Email',
        'profile.emailPlaceholder': 'your@email.com',
        'profile.phone': 'Phone',
        'profile.phonePlaceholder': '(00) 00000-0000',
        'profile.dob': 'Date of Birth',
        'profile.state': 'State',
        'profile.selectState': 'Select...',
        'btn.save': 'Save Changes',
        'btn.cancel': 'Cancel',
        'btn.savePreferences': 'Save Preferences',
        'btn.restoreDefault': 'Restore Default',
        'btn.saveSettings': 'Save Settings',
        'btn.restoreDefaults': 'Restore Defaults',
        'appearance.title': 'Appearance',
        'appearance.desc': 'Customize the visual appearance of the platform.',
        'appearance.theme': 'Theme',
        'appearance.themeDesc': 'Choose between light, dark, or automatic mode.',
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.auto': 'Automatic (System)',
        'appearance.accentColor': 'Accent Color',
        'appearance.accentColorDesc': 'Choose the main color of the platform.',
        'appearance.cardStyle': 'Card Style',
        'appearance.cardStyleDesc': 'Defines the visual style of content cards.',
        'style.rounded': 'Rounded',
        'style.square': 'Square',
        'style.minimal': 'Minimalist',
        'appearance.animations': 'Animations',
        'appearance.animationsDesc': 'Enables smooth animations and transitions in the interface.',
        'appearance.parallax': 'Parallax Effects',
        'appearance.parallaxDesc': 'Depth effect when scrolling the page.',
        'accessibility.title': 'Accessibility',
        'accessibility.desc': 'Configure accessibility options for a better experience.',
        'accessibility.visual': 'Visual Settings',
        'accessibility.highContrast': 'High Contrast',
        'accessibility.highContrastDesc': 'Increases contrast between text and background for better readability.',
        'accessibility.monochrome': 'Monochrome Mode',
        'accessibility.monochromeDesc': 'Removes all colors from the screen.',
        'accessibility.invertColors': 'Invert Colors',
        'accessibility.invertColorsDesc': 'Inverts the colors of the screen.',
        'accessibility.text': 'Text Settings',
        'accessibility.fontSize': 'Font Size',
        'accessibility.fontSizeDesc': 'Adjust the text size on the platform.',
        'accessibility.smaller': 'Smaller',
        'accessibility.larger': 'Larger',
        'accessibility.lineHeight': 'Line Spacing',
        'accessibility.lineHeightDesc': 'Adjust the space between lines of text.',
        'accessibility.compact': 'Compact',
        'accessibility.spaced': 'Spaced',
        'accessibility.navigation': 'Navigation',
        'accessibility.bigCursor': 'Large Cursor',
        'accessibility.bigCursorDesc': 'Increases the mouse cursor size.',
        'accessibility.highlightLinks': 'Highlight Links',
        'accessibility.highlightLinksDesc': 'Highlights all clickable links on the page.',
        'accessibility.visibleFocus': 'Visible Focus',
        'accessibility.visibleFocusDesc': 'Highlights elements when navigated via keyboard.',
        'notifications.title': 'Notifications',
        'notifications.desc': 'Configure how and when you want to receive notifications.',
        'notifications.email': 'Email Notifications',
        'notifications.weeklySummary': 'Weekly Summary',
        'notifications.weeklySummaryDesc': 'Receive a weekly summary of your progress and new content.',
        'notifications.newContent': 'New Content',
        'notifications.newContentDesc': 'Be notified when new materials are added.',
        'notifications.studyReminders': 'Study Reminders',
        'notifications.studyRemindersDesc': 'Receive reminders to keep your study routine.',
        'notifications.browser': 'Browser Notifications',
        'notifications.allowBrowser': 'Allow Notifications',
        'notifications.allowBrowserDesc': 'Receive push notifications in your browser.',
        'notifications.sound': 'Notification Sound',
        'notifications.soundDesc': 'Play a sound when receiving notifications.',
        'privacy.title': 'Privacy',
        'privacy.desc': 'Control your privacy settings and data.',
        'privacy.publicProfile': 'Public Profile',
        'privacy.publicProfileDesc': 'Allow other users to see your profile and progress.',
        'privacy.showRanking': 'Show on Ranking',
        'privacy.showRankingDesc': 'Appear on leaderboards and rankings.',
        'privacy.viewPolicy': 'View Privacy Policy',
        'account.title': 'Account & Security',
        'account.desc': 'Manage your account, password, and security settings.',
        'account.changePass': 'Change Password',
        'account.currentPass': 'Current Password',
        'account.currentPassPlaceholder': 'Enter your current password',
        'account.newPass': 'New Password',
        'account.newPassPlaceholder': 'Enter the new password',
        'account.confirmPass': 'Confirm New Password',
        'account.confirmPassPlaceholder': 'Confirm the new password',
        'account.changePassBtn': 'Change Password',
        'account.session': 'Session',
        'account.sessionDesc': 'Sign out on this device. You will need to log in again to access the platform.',
        'account.logout': 'Log Out',
        'account.dangerZone': 'Danger Zone',
        'account.dangerZoneDesc': 'Once you delete your account, there is no going back. Please be certain.',
        'account.deleteAccount': 'Delete My Account',
        'footer.terms': 'Terms of Use',
        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.about': 'About',
        'footer.rights': 'All Rights Reserved.',
        'toast.profileSaved': 'Profile updated successfully!',
        'toast.appearanceSaved': 'Appearance updated!',
        'toast.notificationsSaved': 'Notification preferences saved!',
        'toast.privacySaved': 'Privacy settings updated!',
        'toast.passwordChanged': 'Password changed successfully!'
    },
    'es': {
        'page.title': 'Configuraciones - Asistencia Encceja',
        'nav.brand': 'Asistencia Encceja',
        'nav.home': 'Inicio',
        'nav.contents': 'Contenidos',
        'nav.progress': 'Seguimiento',
        'nav.settings': 'Configuraciones',
        'settings.title': 'Configuraciones',
        'settings.subtitle': 'Personalice su experiencia en la plataforma',
        'tabs.profile': 'Perfil',
        'tabs.appearance': 'Apariencia',
        'tabs.accessibility': 'Accesibilidad',
        'tabs.notifications': 'Notificaciones',
        'tabs.privacy': 'Privacidad',
        'tabs.account': 'Cuenta',
        'profile.title': 'Mi Perfil',
        'profile.desc': 'Gestione su información personal y cómo aparece en la plataforma.',
        'profile.changePhoto': 'Cambiar',
        'profile.badge': 'Estudiante',
        'profile.fullName': 'Nombre Completo',
        'profile.fullNamePlaceholder': 'Su nombre completo',
        'profile.nickname': 'Apodo',
        'profile.nicknamePlaceholder': 'Cómo prefiere que le llamen',
        'profile.email': 'Correo Electrónico',
        'profile.emailPlaceholder': 'su@email.com',
        'profile.phone': 'Teléfono',
        'profile.phonePlaceholder': '(00) 00000-0000',
        'profile.dob': 'Fecha de Nacimiento',
        'profile.state': 'Estado',
        'profile.selectState': 'Seleccionar...',
        'btn.save': 'Guardar Cambios',
        'btn.cancel': 'Cancelar',
        'btn.savePreferences': 'Guardar Preferencias',
        'btn.restoreDefault': 'Restaurar Predeterminado',
        'btn.saveSettings': 'Guardar Configuraciones',
        'btn.restoreDefaults': 'Restaurar Valores Predeterminados',
        'appearance.title': 'Apariencia',
        'appearance.desc': 'Personalice la apariencia visual de la plataforma.',
        'appearance.theme': 'Tema',
        'appearance.themeDesc': 'Elija entre el modo claro, oscuro o automático.',
        'theme.light': 'Claro',
        'theme.dark': 'Oscuro',
        'theme.auto': 'Automático (Sistema)',
        'appearance.accentColor': 'Color de Destaque',
        'appearance.accentColorDesc': 'Elija el color principal de la plataforma.',
        'appearance.cardStyle': 'Estilo de Tarjetas',
        'appearance.cardStyleDesc': 'Define el estilo visual de las tarjetas de contenido.',
        'style.rounded': 'Redondeado',
        'style.square': 'Cuadrado',
        'style.minimal': 'Minimalista',
        'appearance.animations': 'Animaciones',
        'appearance.animationsDesc': 'Activa animaciones y transiciones suaves en la interfaz.',
        'appearance.parallax': 'Efectos de Paralaje',
        'appearance.parallaxDesc': 'Efecto de profundidad al desplazar la página.',
        'accessibility.title': 'Accesibilidad',
        'accessibility.desc': 'Configure opciones de accesibilidad para una mejor experiencia.',
        'accessibility.visual': 'Configuraciones Visuales',
        'accessibility.highContrast': 'Alto Contraste',
        'accessibility.highContrastDesc': 'Aumenta el contraste entre texto y fondo para mejor legibilidad.',
        'accessibility.monochrome': 'Modo Monocromático',
        'accessibility.monochromeDesc': 'Elimina todos los colores de la pantalla.',
        'accessibility.invertColors': 'Invertir Colores',
        'accessibility.invertColorsDesc': 'Invierte los colores de la pantalla.',
        'accessibility.text': 'Configuraciones de Texto',
        'accessibility.fontSize': 'Tamaño de Fuente',
        'accessibility.fontSizeDesc': 'Ajuste el tamaño del texto en la plataforma.',
        'accessibility.smaller': 'Más pequeño',
        'accessibility.larger': 'Más grande',
        'accessibility.lineHeight': 'Espaciado de Línea',
        'accessibility.lineHeightDesc': 'Ajuste el espacio entre líneas de texto.',
        'accessibility.compact': 'Compacto',
        'accessibility.spaced': 'Espaciado',
        'accessibility.navigation': 'Navegación',
        'accessibility.bigCursor': 'Cursor Grande',
        'accessibility.bigCursorDesc': 'Aumenta el tamaño del cursor del mouse.',
        'accessibility.highlightLinks': 'Resaltar Enlaces',
        'accessibility.highlightLinksDesc': 'Destaca todos los enlaces clickeables en la página.',
        'accessibility.visibleFocus': 'Foco Visible',
        'accessibility.visibleFocusDesc': 'Destaca elementos cuando se navega con el teclado.',
        'notifications.title': 'Notificaciones',
        'notifications.desc': 'Configure cómo y cuándo desea recibir notificaciones.',
        'notifications.email': 'Notificaciones por Correo',
        'notifications.weeklySummary': 'Resumen Semanal',
        'notifications.weeklySummaryDesc': 'Reciba un resumen semanal de su progreso y nuevos contenidos.',
        'notifications.newContent': 'Nuevos Contenidos',
        'notifications.newContentDesc': 'Sea notificado cuando se agreguen nuevos materiales.',
        'notifications.studyReminders': 'Recordatorios de Estudio',
        'notifications.studyRemindersDesc': 'Reciba recordatorios para mantener su rutina de estudio.',
        'notifications.browser': 'Notificaciones del Navegador',
        'notifications.allowBrowser': 'Permitir Notificaciones',
        'notifications.allowBrowserDesc': 'Reciba notificaciones push en su navegador.',
        'notifications.sound': 'Sonido de Notificación',
        'notifications.soundDesc': 'Reproduce un sonido al recibir notificaciones.',
        'privacy.title': 'Privacidad',
        'privacy.desc': 'Controle su configuración de privacidad y datos.',
        'privacy.publicProfile': 'Perfil Público',
        'privacy.publicProfileDesc': 'Permitir que otros usuarios vean su perfil y progreso.',
        'privacy.showRanking': 'Mostrar en Ranking',
        'privacy.showRankingDesc': 'Aparecer en las tablas de clasificación.',
        'privacy.viewPolicy': 'Ver Política de Privacidad',
        'account.title': 'Cuenta y Seguridad',
        'account.desc': 'Gestione su cuenta, contraseña y configuraciones de seguridad.',
        'account.changePass': 'Cambiar Contraseña',
        'account.currentPass': 'Contraseña Actual',
        'account.currentPassPlaceholder': 'Ingrese su contraseña actual',
        'account.newPass': 'Nueva Contraseña',
        'account.newPassPlaceholder': 'Ingrese la nueva contraseña',
        'account.confirmPass': 'Confirmar Nueva Contraseña',
        'account.confirmPassPlaceholder': 'Confirme la nueva contraseña',
        'account.changePassBtn': 'Cambiar Contraseña',
        'account.session': 'Sesión',
        'account.sessionDesc': 'Cierre su sesión en este dispositivo. Deberá iniciar sesión nuevamente para acceder a la plataforma.',
        'account.logout': 'Cerrar Sesión',
        'account.dangerZone': 'Zona de Peligro',
        'account.dangerZoneDesc': 'Una vez que elimine su cuenta, no hay vuelta atrás. Por favor, asegúrese.',
        'account.deleteAccount': 'Eliminar Mi Cuenta',
        'footer.terms': 'Términos de Uso',
        'footer.privacy': 'Política de Privacidad',
        'footer.contact': 'Contacto',
        'footer.about': 'Acerca de',
        'footer.rights': 'Todos los Derechos Reservados.',
        'toast.profileSaved': '¡Perfil actualizado con éxito!',
        'toast.appearanceSaved': '¡Apariencia actualizada!',
        'toast.notificationsSaved': '¡Preferencias de notificación guardadas!',
        'toast.privacySaved': '¡Configuraciones de privacidad actualizadas!',
        'toast.passwordChanged': '¡Contraseña cambiada con éxito!'
    }
};

let currentLang = localStorage.getItem('auxilio-encceja-lang') || 'pt-BR';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations['pt-BR'][key] || key;
}

function applyTranslations() {
    // Texto padrão
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Títulos (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('title', translations[currentLang][key]);
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('auxilio-encceja-lang', lang);

    const flags = { 'pt-BR': '🇧🇷', 'en': '🇺🇸', 'es': '🇪🇸' };
    const codes = { 'pt-BR': 'PT', 'en': 'EN', 'es': 'ES' };

    document.getElementById('currentLangFlag').textContent = flags[lang] || '🇧🇷';
    document.getElementById('currentLangCode').textContent = codes[lang] || 'PT';

    document.querySelectorAll('.lang-dropdown .dropdown-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-lang') === lang);
    });

    applyTranslations();
    if (window.ProfilePopover) ProfilePopover.refresh();
}

function initLanguageSelector() {
    document.querySelectorAll('.lang-dropdown .dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                // Fechar o dropdown após selecionar
                const dropdownElement = this.closest('.lang-dropdown');
                const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownElement.querySelector('.dropdown-toggle'));
                if (dropdownInstance) dropdownInstance.hide();
            }
        });
    });
}

// Função Toast para as mensagens
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color: var(--secondary);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    initLanguageSelector();
    setLanguage(currentLang);
});

const Storage = {
    get(key, defaultValue = null) {
        try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : defaultValue; }
        catch { return defaultValue; }
    },
    set(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.warn('Erro ao salvar:', e); }
    },
    remove(key) { localStorage.removeItem(key); }
};


function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toastContainer');
    const icons = { success: 'bi-check-circle-fill', error: 'bi-exclamation-circle-fill', warning: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill' };
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="bi ${icons[type]}" style="color: ${colors[type]}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0'; toast.style.transform = 'translateX(-50px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function showConfirmModal(title, message, onConfirm, onCancel) {
    const existing = document.getElementById('confirmModal');
    if (existing) existing.remove();
    const modal = document.createElement('div');
    modal.id = 'confirmModal';
    modal.className = 'js-modal-overlay';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:2000;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease;';
    modal.innerHTML = `
                <div class="js-modal-box" style="background:var(--bg-card,#fff);border-radius:16px;padding:2rem;max-width:420px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
                    <h3 style="margin:0 0 0.5rem;font-size:1.2rem;color:var(--text-dark,#1e293b);">${title}</h3>
                    <div style="color:var(--text-muted,#64748b);margin:0 0 1.5rem;font-size:0.95rem;line-height:1.6;">${message}</div>
                    <div style="display:flex;gap:12px;justify-content:flex-end;">
                        <button class="btn-secondary-custom" id="modalCancelBtn" style="padding:10px 20px;">Cancelar</button>
                        <button class="btn-danger-custom" id="modalConfirmBtn" style="padding:10px 20px;">Confirmar</button>
                    </div>
                </div>`;
    document.body.appendChild(modal);
    document.getElementById('modalCancelBtn').addEventListener('click', () => { modal.remove(); if (onCancel) onCancel(); });
    document.getElementById('modalConfirmBtn').addEventListener('click', () => { modal.remove(); if (onConfirm) onConfirm(); });
    modal.addEventListener('click', (e) => { if (e.target === modal) { modal.remove(); if (onCancel) onCancel(); } });
}

function showInfoModal(title, content, buttonText = 'Entendi') {
    const existing = document.getElementById('infoModal');
    if (existing) existing.remove();
    const modal = document.createElement('div');
    modal.id = 'infoModal';
    modal.className = 'js-modal-overlay';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:2000;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease;';
    modal.innerHTML = `
                <div class="js-modal-box" style="background:var(--bg-card,#fff);border-radius:16px;padding:2rem;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
                    <h3 style="margin:0 0 1rem;font-size:1.2rem;color:var(--text-dark,#1e293b);">${title}</h3>
                    <div style="color:var(--text-muted,#64748b);font-size:0.95rem;line-height:1.6;">${content}</div>
                    <div style="margin-top:1.5rem;text-align:right;">
                        <button class="btn-primary-custom" id="infoModalCloseBtn" style="padding:10px 24px;">${buttonText}</button>
                    </div>
                </div>`;
    document.body.appendChild(modal);
    document.getElementById('infoModalCloseBtn').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

function handleThemeChange(value) {
    const body = document.body;
    body.classList.remove('dark-mode', 'high-contrast');
    const hcToggle = document.getElementById('highContrastToggle');
    if (hcToggle) hcToggle.checked = false;

    if (value === 'dark') {
        body.classList.add('dark-mode');
    } else if (value === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    }
    Storage.set('theme', value);
}

function toggleHighContrast() {
    const enabled = document.getElementById('highContrastToggle').checked;
    const body = document.body;
    if (enabled) {
        body.classList.add('high-contrast');
        body.classList.remove('dark-mode');
        const sel = document.getElementById('themeSelect');
        if (sel) sel.value = 'light';
        Storage.set('theme', 'light');
    } else {
        body.classList.remove('high-contrast');
    }
}

const themePresets = {
    teal: { accent: '#159895', secondary: '#57c5b6', gradient: 'linear-gradient(135deg, #159895, #57c5b6)' },
    blue: { accent: '#3b82f6', secondary: '#60a5fa', gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)' },
    purple: { accent: '#8b5cf6', secondary: '#a78bfa', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
    amber: { accent: '#f59e0b', secondary: '#fbbf24', gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
    red: { accent: '#ef4444', secondary: '#f87171', gradient: 'linear-gradient(135deg, #ef4444, #f87171)' }
};

function changeAccentColor(colorName) {
    const preset = themePresets[colorName];
    if (!preset) return;
    document.documentElement.style.setProperty('--accent', preset.accent);
    document.documentElement.style.setProperty('--secondary', preset.secondary);
    const style = document.createElement('style');
    style.id = 'dynamic-accent-style';
    style.textContent = `
                .toggle-switch input:checked + .toggle-slider { background: ${preset.gradient} !important; }
                .range-slider::-webkit-slider-thumb { background: ${preset.gradient} !important; }
                .tab-btn.active { background: ${preset.gradient} !important; }
                .btn-primary-custom { background: ${preset.gradient} !important; }
                .btn-accessibility { background: ${preset.gradient} !important; }
            `;
    const existing = document.getElementById('dynamic-accent-style');
    if (existing) existing.remove();
    document.head.appendChild(style);
    Storage.set('accentColor', colorName);
}

function resetAppearance() {
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
    document.querySelectorAll('.color-option')[0].classList.add('active');
    changeAccentColor('teal');
    document.getElementById('themeSelect').value = 'light';
    handleThemeChange('light');
    const cs = document.getElementById('cardStyleSelect');
    if (cs) cs.value = 'rounded';
    applyCardStyle('rounded');
    document.getElementById('animationsToggle').checked = true;
    toggleAnimations(true);
    document.getElementById('parallaxToggle').checked = false;
    toggleParallax(false);
    Storage.remove('appearanceSettings');
}

function toggleAnimations(enabled) {
    if (!enabled) {
        document.documentElement.style.setProperty('--transition-speed', '0s');
        const s = document.createElement('style');
        s.id = 'no-animations-style';
        s.textContent = '* { animation-duration: 0s !important; transition-duration: 0s !important; }';
        document.head.appendChild(s);
    } else {
        document.documentElement.style.setProperty('--transition-speed', '0.3s');
        const s = document.getElementById('no-animations-style');
        if (s) s.remove();
    }
}

function toggleParallax(enabled) {
    if (enabled) { window.addEventListener('scroll', handleParallax); }
    else { window.removeEventListener('scroll', handleParallax); document.querySelectorAll('[data-parallax]').forEach(el => { el.style.transform = ''; }); }
}

function applyCardStyle(style) {
    document.body.classList.remove('card-style-rounded', 'card-style-square', 'card-style-minimal');
    if (style) document.body.classList.add('card-style-' + style);
}

function getAccessibilitySettingsFromUi() {
    return {
        highContrast: document.getElementById('highContrastToggle').checked,
        monochrome: document.getElementById('monochromeToggle').checked,
        invertColors: document.getElementById('invertColorsToggle').checked,
        bigCursor: document.getElementById('bigCursorToggle').checked,
        highlightLinks: document.getElementById('highlightLinksToggle').checked,
        visibleFocus: document.getElementById('visibleFocusToggle').checked,
        fontSize: parseInt(document.getElementById('fontSizeRange').value, 10),
        lineHeight: parseInt(document.getElementById('lineHeightRange').value, 10)
    };
}

function saveAccessibilitySettings() {
    const settings = getAccessibilitySettingsFromUi();
    Storage.set('accessibilitySettings', settings);
    if (window.UserSettings) UserSettings.applyAccessibility(settings);
    showToast(t('btn.saveSettings') ? 'Configurações de acessibilidade aplicadas!' : 'Configurações salvas!', 'success');
}

function getNotificationSettingsFromUi() {
    return {
        weeklySummary: document.getElementById('notifyWeeklySummary')?.checked ?? true,
        newContent: document.getElementById('notifyNewContent')?.checked ?? true,
        studyReminders: document.getElementById('notifyStudyReminders')?.checked ?? false,
        browserNotifications: document.getElementById('browserNotifications')?.checked ?? false,
        notificationSound: document.getElementById('notifySound')?.checked ?? true
    };
}

function loadNotificationSettings() {
    const s = Storage.get('notificationSettings');
    if (!s) return;
    const map = {
        notifyWeeklySummary: s.weeklySummary,
        notifyNewContent: s.newContent,
        notifyStudyReminders: s.studyReminders,
        browserNotifications: s.browserNotifications,
        notifySound: s.notificationSound
    };
    Object.keys(map).forEach(function (id) {
        const el = document.getElementById(id);
        if (el && map[id] !== undefined) el.checked = !!map[id];
    });
}

async function saveNotificationSettings() {
    const settings = getNotificationSettingsFromUi();
    Storage.set('notificationSettings', settings);
    if (settings.browserNotifications && 'Notification' in window) {
        const perm = await Notification.requestPermission();
        if (perm !== 'granted') {
            showToast('Permissão de notificações não concedida pelo navegador.', 'warning');
        }
    }
    showToast(t('toast.notificationsSaved') || 'Preferências de notificação aplicadas!', 'success');
}

function getPrivacySettingsFromUi() {
    return {
        publicProfile: document.getElementById('privacyPublicProfile')?.checked ?? false,
        showRanking: document.getElementById('privacyShowRanking')?.checked ?? true
    };
}

function loadPrivacySettings() {
    const s = Storage.get('privacySettings');
    if (!s) return;
    const pub = document.getElementById('privacyPublicProfile');
    const rank = document.getElementById('privacyShowRanking');
    if (pub && s.publicProfile !== undefined) pub.checked = !!s.publicProfile;
    if (rank && s.showRanking !== undefined) rank.checked = !!s.showRanking;
}

function savePrivacySettings() {
    Storage.set('privacySettings', getPrivacySettingsFromUi());
    showToast(t('toast.privacySaved') || 'Configurações de privacidade aplicadas!', 'success');
}

function handleParallax() {
    const sy = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => { el.style.transform = `translateY(${sy * parseFloat(el.dataset.parallax || 0.5)}px)`; });
}

function toggleMonochrome() {
    const on = document.getElementById('monochromeToggle').checked;
    if (on) { document.body.classList.add('monochrome'); if (document.getElementById('invertColorsToggle').checked) { document.getElementById('invertColorsToggle').checked = false; document.body.classList.remove('invert-colors'); } }
    else { document.body.classList.remove('monochrome'); }
}

function toggleInvertColors() {
    const on = document.getElementById('invertColorsToggle').checked;
    if (on) { document.body.classList.add('invert-colors'); if (document.getElementById('monochromeToggle').checked) { document.getElementById('monochromeToggle').checked = false; document.body.classList.remove('monochrome'); } }
    else { document.body.classList.remove('invert-colors'); }
}

function toggleBigCursor() {
    document.body.classList.toggle('big-cursor', document.getElementById('bigCursorToggle').checked);
}

function toggleHighlightLinks() {
    document.body.classList.toggle('highlight-links', document.getElementById('highlightLinksToggle').checked);
}

function toggleVisibleFocus() {
    document.body.classList.toggle('visible-focus', document.getElementById('visibleFocusToggle').checked);
}

function changeFontSize(value) {
    const sizes = ['Pequeno', 'Normal', 'Grande', 'Muito Grande'];
    const classes = ['font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge'];
    document.getElementById('fontSizeValue').textContent = sizes[value - 1];
    classes.forEach(c => document.body.classList.remove(c));
    document.body.classList.add(classes[value - 1]);
}

function changeLineHeight(value) {
    const labels = ['Compacto', 'Normal', 'Espaçado'];
    const classes = ['line-height-normal', 'line-height-medium', 'line-height-large'];
    document.getElementById('lineHeightValue').textContent = labels[value - 1];
    classes.forEach(c => document.body.classList.remove(c));
    document.body.classList.add(classes[value - 1]);
}

function resetAccessibility() {
    ['high-contrast', 'monochrome', 'invert-colors', 'big-cursor', 'highlight-links', 'visible-focus', 'reading-mode', 'low-saturation', 'font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge', 'line-height-normal', 'line-height-medium', 'line-height-large'].forEach(c => document.body.classList.remove(c));
    document.body.classList.add('font-size-medium', 'line-height-medium');
    document.getElementById('highContrastToggle').checked = false;
    document.getElementById('monochromeToggle').checked = false;
    document.getElementById('invertColorsToggle').checked = false;
    document.getElementById('bigCursorToggle').checked = false;
    document.getElementById('highlightLinksToggle').checked = false;
    document.getElementById('visibleFocusToggle').checked = false;
    document.getElementById('fontSizeRange').value = 2;
    document.getElementById('lineHeightRange').value = 2;
    document.getElementById('fontSizeValue').textContent = 'Normal';
    document.getElementById('lineHeightValue').textContent = 'Normal';
    document.getElementById('themeSelect').value = 'light';
    document.body.classList.remove('dark-mode');
    Storage.remove('accessibilitySettings');
    Storage.set('theme', 'light');
}

function loadAccessibilitySettings() {
    const s = Storage.get('accessibilitySettings');
    if (!s) return;
    if (s.highContrast) { document.getElementById('highContrastToggle').checked = true; document.body.classList.add('high-contrast'); }
    if (s.monochrome) { document.getElementById('monochromeToggle').checked = true; document.body.classList.add('monochrome'); }
    if (s.invertColors) { document.getElementById('invertColorsToggle').checked = true; document.body.classList.add('invert-colors'); }
    if (s.bigCursor) { document.getElementById('bigCursorToggle').checked = true; document.body.classList.add('big-cursor'); }
    if (s.highlightLinks) { document.getElementById('highlightLinksToggle').checked = true; document.body.classList.add('highlight-links'); }
    if (s.visibleFocus) { document.getElementById('visibleFocusToggle').checked = true; document.body.classList.add('visible-focus'); }
    if (s.fontSize) { document.getElementById('fontSizeRange').value = s.fontSize; changeFontSize(s.fontSize); }
    if (s.lineHeight) { document.getElementById('lineHeightRange').value = s.lineHeight; changeLineHeight(s.lineHeight); }
}

async function saveProfile() {
    const textInputs = document.querySelectorAll('#panel-perfil input[type="text"]');
    const emailInput = document.querySelector('#panel-perfil input[type="email"]');
    const name = textInputs[0]?.value || '';
    if (!name.trim()) { showToast('Por favor, preencha o nome completo.', 'error'); return false; }
    if (emailInput?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) { showToast('E-mail inválido.', 'error'); return false; }

    const dobInput = document.querySelector('#panel-perfil input[type="date"]');
    const stateSelect = document.querySelector('#panel-perfil select.select-field, #panel-perfil select');
    const profileData = {
        nome: name,
        apelido: textInputs[1]?.value || '',
        email: emailInput?.value || '',
        telefone: document.querySelector('#panel-perfil input[type="tel"]')?.value || '',
        dataNascimento: dobInput?.value || '',
        estado: stateSelect?.value || ''
    };
    Storage.set('userProfile', profileData);

    if (window.Api && Api.getCurrentUser()) {
        try {
            await Api.updateProfile({
                name: profileData.nome,
                login: profileData.email,
                extra: {
                    apelido: profileData.apelido,
                    telefone: profileData.telefone,
                    dataNascimento: profileData.dataNascimento,
                    estado: profileData.estado
                }
            });
        } catch (err) {
            showToast(err.message || 'Erro ao salvar na API.', 'error');
            return false;
        }
    }

    document.getElementById('profileDisplayName').textContent = profileData.apelido || profileData.nome || 'Estudante Encceja';
    document.getElementById('profileDisplayEmail').textContent = profileData.email || 'estudante@email.com';
    if (window.ProfilePopover) ProfilePopover.refresh();
    showToast(t('toast.profileSaved') || 'Perfil atualizado com sucesso!', 'success');
    return true;
}

function initAvatarSystem() {
    const input = document.getElementById('avatarInput');
    const img = document.getElementById('avatarImage');
    const fallback = document.getElementById('avatarFallback');
    const removeBtn = document.getElementById('avatarRemoveBtn');
    const saved = localStorage.getItem('userAvatar');
    if (saved) { img.src = saved; img.style.display = 'block'; fallback.classList.add('hidden'); removeBtn.classList.add('visible'); }
    input.addEventListener('change', function (e) {
        const file = e.target.files[0]; if (!file) return;
        if (!file.type.startsWith('image/')) { showToast('Selecione uma imagem válida.', 'error'); return; }
        if (file.size > 5 * 1024 * 1024) { showToast('Imagem deve ter no máximo 5MB.', 'error'); return; }
        const reader = new FileReader();
        reader.onload = function (ev) {
            const i = new Image();
            i.onload = function () {
                const c = document.createElement('canvas'); const mx = 300;
                let w = i.width, h = i.height;
                if (w > h) { if (w > mx) { h = h * mx / w; w = mx; } } else { if (h > mx) { w = w * mx / h; h = mx; } }
                c.width = w; c.height = h;
                c.getContext('2d').drawImage(i, 0, 0, w, h);
                const data = c.toDataURL('image/jpeg', 0.85);
                img.src = data; img.style.display = 'block'; fallback.classList.add('hidden'); removeBtn.classList.add('visible');
                localStorage.setItem('userAvatar', data);
            };
            i.src = ev.target.result;
        };
        reader.readAsDataURL(file);
    });
    removeBtn.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        img.src = ''; img.style.display = 'none'; fallback.classList.remove('hidden'); removeBtn.classList.remove('visible'); input.value = '';
        localStorage.removeItem('userAvatar');
    });
}

function loadProfile() {
    const apiUser = window.Api ? Api.getCurrentUser() : null;
    const extra = window.Api ? Api.getProfileExtra() : {};
    const s = Storage.get('userProfile') || {};

    const profile = {
        nome: s.nome || (apiUser && apiUser.name) || '',
        apelido: s.apelido || extra.apelido || '',
        email: s.email || (apiUser && apiUser.login) || '',
        telefone: s.telefone || extra.telefone || '',
        dataNascimento: s.dataNascimento || extra.dataNascimento || '',
        estado: s.estado || extra.estado || ''
    };

    const ti = document.querySelectorAll('#panel-perfil input[type="text"]');
    if (ti[0]) ti[0].value = profile.nome;
    if (ti[1]) ti[1].value = profile.apelido;
    const ei = document.querySelector('#panel-perfil input[type="email"]');
    if (ei) ei.value = profile.email;
    const pi = document.querySelector('#panel-perfil input[type="tel"]');
    if (pi) pi.value = profile.telefone;
    const dob = document.querySelector('#panel-perfil input[type="date"]');
    if (dob) dob.value = profile.dataNascimento;
    const stateSel = document.querySelector('#profileStateSelect');
    if (stateSel && profile.estado) stateSel.value = profile.estado;
    document.getElementById('profileDisplayName').textContent = profile.apelido || profile.nome || 'Estudante Encceja';
    document.getElementById('profileDisplayEmail').textContent = profile.email || 'estudante@email.com';
}

function formatPhone(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    input.value = v;
}

function validatePasswordStrength(pw) {
    let score = 0;
    if (pw.length >= 6) score++; if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++; if (/[0-9]/.test(pw)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pw)) score++;
    return score;
}

function showPasswordStrength(password, el) {
    const ex = el.parentElement.querySelector('.password-strength');
    if (ex) ex.remove();
    if (!password) return;
    const score = validatePasswordStrength(password);
    const colors = ['#ef4444', '#f59e0b', '#f59e0b', '#10b981', '#10b981', '#10b981'];
    const labels = ['Muito fraca', 'Fraca', 'Razoável', 'Forte', 'Muito forte', 'Excelente'];
    const ind = document.createElement('div');
    ind.className = 'password-strength';
    ind.style.marginTop = '8px';
    ind.innerHTML = `<div style="height:4px;border-radius:2px;background:#e2e8f0;overflow:hidden;margin-bottom:4px;"><div style="height:100%;width:${(score / 5) * 100}%;background:${colors[score]};border-radius:2px;transition:width 0.3s ease;"></div></div><span style="font-size:0.8rem;color:${colors[score]};font-weight:600;">${labels[score]}</span>`;
    el.parentElement.appendChild(ind);
}

async function logoutAccount() {
    if (window.Api && typeof Api.logout === 'function') {
        await Api.logout();
    } else if (window.Api) {
        Api.clearCurrentUser();
    }
    Storage.remove('userProfile');
    window.location.href = 'login.html';
}

async function changePassword() {
    const pws = document.querySelectorAll('#panel-conta input[type="password"]');
    if (!pws[0]?.value) { showToast('Digite sua senha atual.', 'error'); return; }
    if (!pws[1]?.value) { showToast('Digite a nova senha.', 'error'); return; }
    if (pws[1].value !== pws[2]?.value) { showToast('As senhas não coincidem.', 'error'); return; }
    if (pws[0].value === pws[1].value) { showToast('A nova senha deve ser diferente.', 'error'); return; }
    if (validatePasswordStrength(pws[1].value) < 3) { showToast('Senha muito fraca.', 'error'); return; }

    if (window.Api && Api.getCurrentUser()) {
        try {
            await Api.changePassword(pws[0].value, pws[1].value);
        } catch (err) {
            showToast(err.message || 'Erro ao alterar senha.', 'error');
            return;
        }
    }

    pws.forEach(p => p.value = '');
    document.querySelectorAll('.password-strength').forEach(e => e.remove());
    showToast(t('toast.passwordChanged') || 'Senha alterada com sucesso!', 'success');
}

function confirmDeleteAccount() {
    showConfirmModal('Excluir Conta Permanentemente',
        `<div style="margin-bottom:1rem;"><p style="color:var(--danger);font-weight:600;">⚠️ Esta ação é irreversível!</p><p>Todos os seus dados serão permanentemente excluídos.</p></div><div style="margin-top:1rem;"><label style="display:block;margin-bottom:8px;font-weight:600;">Digite "EXCLUIR" para confirmar:</label><input type="text" id="deleteConfirmInput" placeholder="EXCLUIR" style="padding:10px 14px;border:2px solid var(--border-color);border-radius:10px;font-size:1rem;width:100%;background:var(--bg-card);color:var(--text-dark);"></div>`,
        async () => {
            if (document.getElementById('deleteConfirmInput')?.value !== 'EXCLUIR') { showToast('Digite "EXCLUIR" para confirmar.', 'error'); return; }

            if (window.Api && Api.getCurrentUser()) {
                try {
                    await Api.deleteAccount();
                } catch (err) {
                    showToast(err.message || 'Erro ao excluir conta.', 'error');
                    return;
                }
            } else if (window.Api) {
                Api.clearCurrentUser();
            }

            Storage.remove('userProfile');
            showToast('Conta excluída permanentemente.', 'success');
            setTimeout(() => { window.location.href = 'login.html'; }, 2000);
        }
    );
}

function viewActiveSessions() {
    const sessions = [
        { device: 'Chrome - Windows', loc: 'São Paulo, Brasil', time: 'Agora', current: true },
        { device: 'Safari - iPhone', loc: 'São Paulo, Brasil', time: 'Há 2 horas', current: false },
        { device: 'Firefox - Linux', loc: 'Rio de Janeiro, Brasil', time: 'Há 1 dia', current: false }
    ];
    let html = sessions.map(s => `
                <div class="js-modal-border-bottom" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border-color);">
                    <div>
                        <div class="js-modal-session-label" style="font-weight:600;color:var(--text-dark);">${s.device} ${s.current ? '<span class="js-modal-current-badge" style="background:rgba(16,185,129,0.15);color:#10b981;padding:2px 8px;border-radius:4px;font-size:0.7rem;margin-left:8px;">Atual</span>' : ''}</div>
                        <div class="js-modal-session-sub" style="font-size:0.85rem;color:var(--text-muted);">${s.loc} • ${s.time}</div>
                    </div>
                    ${!s.current ? `<button class="btn-secondary-custom session-revoke-btn" style="padding:6px 12px;font-size:0.8rem;" data-device="${s.device}">Encerrar</button>` : ''}
                </div>`).join('');
    showInfoModal('Sessões Ativas', `<p style="margin-bottom:1rem;">Dispositivos conectados:</p>${html}`, 'Fechar');
    setTimeout(() => {
        document.querySelectorAll('.session-revoke-btn').forEach(btn => {
            btn.addEventListener('click', (e) => { e.preventDefault(); btn.closest('.js-modal-border-bottom').remove(); showToast('Sessão encerrada.', 'success'); });
        });
    }, 100);
}

function viewLoginHistory() {
    const hist = [
        { date: 'Hoje, 14:32', device: 'Chrome - Windows', status: 'sucesso' },
        { date: 'Hoje, 08:15', device: 'Safari - iPhone', status: 'sucesso' },
        { date: 'Ontem, 22:45', device: 'Firefox - Linux', status: 'falha' },
        { date: 'Ontem, 19:30', device: 'Chrome - Windows', status: 'sucesso' },
    ];
    let html = hist.map(h => `
                <div class="js-modal-border-bottom" style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border-color);">
                    <div>
                        <div class="js-modal-history-label" style="font-weight:500;color:var(--text-dark);">${h.device}</div>
                        <div class="js-modal-history-sub" style="font-size:0.85rem;color:var(--text-muted);">${h.date}</div>
                    </div>
                    <span class="${h.status === 'sucesso' ? 'js-modal-status-success' : 'js-modal-status-fail'}" style="padding:4px 10px;border-radius:6px;font-size:0.8rem;font-weight:600;background:${h.status === 'sucesso' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};color:${h.status === 'sucesso' ? '#10b981' : '#ef4444'};">
                        ${h.status === 'sucesso' ? 'Sucesso' : 'Falha'}
                    </span>
                </div>`).join('');
    showInfoModal('Histórico de Login', `<p style="margin-bottom:1rem;">Últimos acessos:</p>${html}`, 'Fechar');
}

function exportUserData() {
    const data = {
        perfil: Storage.get('userProfile', {}),
        aparencia: Storage.get('appearanceSettings', {}),
        acessibilidade: Storage.get('accessibilitySettings', {}),
        notificacoes: Storage.get('notificationSettings', {}),
        privacidade: Storage.get('privacySettings', {}),
        dataExportacao: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `auxilio-encceja-dados-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    showToast('Dados exportados!', 'success');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    if (window.Api && !Api.requireAuth()) return;

    document.getElementById('anoAtual').textContent = new Date().getFullYear();

    initAvatarSystem();
    loadProfile();
    loadAccessibilitySettings();

    const pendingTab = sessionStorage.getItem('auxilio-config-tab');
    if (pendingTab) {
        sessionStorage.removeItem('auxilio-config-tab');
        const tabBtn = document.querySelector('.tab-btn[data-tab="' + pendingTab + '"]');
        if (tabBtn) tabBtn.click();
    }

    // Carregar aparência salva
    const savedTheme = Storage.get('theme');
    if (savedTheme && document.getElementById('themeSelect')) {
        document.getElementById('themeSelect').value = savedTheme;
        handleThemeChange(savedTheme);
    }

    const app = Storage.get('appearanceSettings');
    if (app) {
        if (app.theme) { document.getElementById('themeSelect').value = app.theme; handleThemeChange(app.theme); }
        if (app.accentColor) {
            document.querySelectorAll('.color-option').forEach(o => o.classList.toggle('active', o.dataset.color === app.accentColor));
            changeAccentColor(app.accentColor);
        }
        if (app.cardStyle && document.getElementById('cardStyleSelect')) {
            document.getElementById('cardStyleSelect').value = app.cardStyle;
            applyCardStyle(app.cardStyle);
        }
        if (app.animations !== undefined) { document.getElementById('animationsToggle').checked = app.animations; toggleAnimations(app.animations); }
        if (app.parallax !== undefined) { document.getElementById('parallaxToggle').checked = app.parallax; toggleParallax(app.parallax); }
    }

    loadNotificationSettings();
    loadPrivacySettings();

    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
            document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
            document.getElementById(`panel-${btn.dataset.tab}`)?.classList.add('active');
        });
    });

    // Color Options 
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            changeAccentColor(opt.dataset.color);
        });
    });

    // Phone mask
    const phoneInput = document.querySelector('#panel-perfil input[type="tel"]');
    if (phoneInput) phoneInput.addEventListener('input', () => formatPhone(phoneInput));

    // Password strength
    const newPw = document.getElementById('newPwField');
    const confPw = document.getElementById('confirmPwField');
    if (newPw) newPw.addEventListener('input', () => showPasswordStrength(newPw.value, newPw));
    if (confPw) confPw.addEventListener('input', () => showPasswordStrength(confPw.value, confPw));

    document.getElementById('themeSelect')?.addEventListener('change', e => handleThemeChange(e.target.value));
    document.getElementById('highContrastToggle')?.addEventListener('change', toggleHighContrast);
    document.getElementById('monochromeToggle')?.addEventListener('change', toggleMonochrome);
    document.getElementById('invertColorsToggle')?.addEventListener('change', toggleInvertColors);
    document.getElementById('bigCursorToggle')?.addEventListener('change', toggleBigCursor);
    document.getElementById('highlightLinksToggle')?.addEventListener('change', toggleHighlightLinks);
    document.getElementById('visibleFocusToggle')?.addEventListener('change', toggleVisibleFocus);
    document.getElementById('fontSizeRange')?.addEventListener('input', e => changeFontSize(e.target.value));
    document.getElementById('lineHeightRange')?.addEventListener('input', e => changeLineHeight(e.target.value));
    document.getElementById('animationsToggle')?.addEventListener('change', e => toggleAnimations(e.target.checked));
    document.getElementById('parallaxToggle')?.addEventListener('change', e => toggleParallax(e.target.checked));

    // Perfil → Salvar Alterações
    document.getElementById('btnSalvarPerfil')?.addEventListener('click', saveProfile);

    // Perfil → Cancelar
    document.getElementById('btnCancelarPerfil')?.addEventListener('click', () => loadProfile());

    // Aparência → Aplicar
    document.getElementById('btnSalvarAparencia')?.addEventListener('click', () => {
        const settings = {
            theme: document.getElementById('themeSelect').value,
            accentColor: document.querySelector('.color-option.active')?.dataset.color || 'teal',
            cardStyle: document.getElementById('cardStyleSelect')?.value || 'rounded',
            animations: document.getElementById('animationsToggle').checked,
            parallax: document.getElementById('parallaxToggle').checked
        };
        Storage.set('appearanceSettings', settings);
        applyCardStyle(settings.cardStyle);
        if (window.UserSettings) {
            UserSettings.applyTheme(settings.theme);
            UserSettings.applyAccent(settings.accentColor);
            UserSettings.applyCardStyle(settings.cardStyle);
        }
        showToast(t('toast.appearanceSaved') || 'Preferências de aparência aplicadas!', 'success');
    });

    // Aparência → Restaurar Padrão (sem toast, apenas reseta)
    document.getElementById('btnRestaurarAparencia')?.addEventListener('click', resetAppearance);

    // Acessibilidade → Aplicar
    document.getElementById('btnSalvarAcessibilidade')?.addEventListener('click', saveAccessibilitySettings);

    // Acessibilidade → Restaurar Padrões (sem toast)
    document.getElementById('btnRestaurarAcessibilidade')?.addEventListener('click', resetAccessibility);

    // Notificações → Aplicar
    document.getElementById('btnSalvarNotificacoes')?.addEventListener('click', saveNotificationSettings);

    // Privacidade → Aplicar
    document.getElementById('btnSalvarPrivacidade')?.addEventListener('click', savePrivacySettings);

    // Conta → Alterar Senha / Sair
    document.getElementById('btnAlterarSenha')?.addEventListener('click', changePassword);
    document.getElementById('btnLogout')?.addEventListener('click', logoutAccount);

    // Conta → Sessões / Histórico / Exportar / Excluir (ações imediatas com feedback)
    document.getElementById('btnVerSessoes')?.addEventListener('click', viewActiveSessions);
    document.getElementById('btnVerHistorico')?.addEventListener('click', viewLoginHistory);
    document.getElementById('btnExportarDados')?.addEventListener('click', exportUserData);
    document.getElementById('btnExcluirConta')?.addEventListener('click', confirmDeleteAccount);

    // Escutar mudanças de preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const theme = document.getElementById('themeSelect')?.value;
        if (theme === 'auto') {
            document.body.classList.toggle('dark-mode', e.matches);
        }
    });

    Object.assign(window, {
        handleThemeChange,
        resetAppearance,
        toggleHighContrast,
        toggleMonochrome,
        toggleInvertColors,
        changeFontSize,
        changeLineHeight,
        toggleBigCursor,
        toggleHighlightLinks,
        toggleVisibleFocus,
        saveAccessibilitySettings,
        resetAccessibility,
        confirmDeleteAccount,
        showToast,
        t
    });
});