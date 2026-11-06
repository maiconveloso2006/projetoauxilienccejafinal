document.getElementById('anoAtual').textContent = new Date().getFullYear();

const translations = {
    'pt-BR': {
        'page.title': 'Plataforma de Estudos - Auxílio Encceja',
        'nav.home': 'Início',
        'nav.brand': 'Auxílio Encceja',
        'nav.contents': 'Conteúdos',
        'nav.progress': 'Acompanhamento',
        'nav.settings': 'Configurações',
        'welcome.title': 'Bem-vindo de volta, Estudante!',
        'welcome.subtitle.inscricoes': 'Continue sua jornada de estudos para o ENCCEJA. Escolha uma matéria abaixo para começar a estudar agora mesmo.',
        'welcome.subtitle.provas': 'As inscrições foram encerradas. Prepare-se, as provas do ENCCEJA se aproximam!',
        'welcome.subtitle.encerrada': 'O período do ENCCEJA foi encerrado. Acompanhe o site oficial para informações sobre a próxima edição.',
        'countdown.inscricoes': 'Inscrições Encceja',
        'countdown.provas': 'Provas Encceja',
        'countdown.encerrada': 'Encceja Encerrado',
        'countdown.days': 'Dias',
        'countdown.hours': 'Horas',
        'countdown.minutes': 'Minutos',
        'countdown.seconds': 'Segundos',
        'section.study': 'O que você quer estudar hoje?',
        'section.resources': 'Recursos Recomendados',
        'subject.math': 'Matemática',
        'subject.portuguese': 'Português',
        'subject.history': 'História',
        'subject.geography': 'Geografia',
        'subject.science': 'Ciências',
        'subject.access': 'Acessar matéria',
        'resource.library.title': 'Biblioteca de Estudos',
        'resource.library.desc': 'Acesse materiais complementares e documentos de apoio.',
        'resource.links.title': 'Links Úteis',
        'resource.links.desc': 'Sites e recursos externos para aprofundar seus estudos.',
        'resource.guide.title': 'Guia Completo do ENCCEJA',
        'resource.guide.desc': 'Tudo que você precisa saber sobre o exame.',
        'resource.tips.title': 'Dicas de Estudo',
        'resource.tips.desc': 'Técnicas e métodos para otimizar seu aprendizado.',
        'resource.exams.title': 'Provas Anteriores',
        'resource.exams.desc': 'Pratique com provas de edições anteriores do ENCCEJA.',
        'resource.support.title': 'Suporte',
        'resource.support.desc': 'Tire suas dúvidas e obtenha ajuda da equipe.',
        'modal.choose': 'Escolha o tipo de conteúdo',
        'modal.select': 'Selecione o que você deseja estudar:',
        'modal.videos': 'Videoaulas',
        'modal.videos.count': '6 Vídeos Disponíveis',
        'modal.booklets': 'Apostilas',
        'modal.booklets.count': '6 Apostilas Disponíveis',
        'modal.exercises': 'Exercícios',
        'modal.exercises.count': '6 Questões Disponíveis',
        'modal.mocks': 'Simulados',
        'modal.mocks.count': '6 Simulados Disponíveis',
        'modal.cancel': 'Cancelar',
        'modal.continue': 'Continuar',
        'modal.subjectChoose': '{subject} - Escolha o tipo de conteúdo',
        'footer.terms': 'Termos de Uso',
        'footer.privacy': 'Política de Privacidade',
        'footer.contact': 'Contato',
        'footer.about': 'Sobre',
        'footer.copyright': 'Auxílio Encceja. Todos os Direitos Reservados.',
        'accessibility.title': 'Configurações de Acessibilidade',
        'accessibility.tab.visual': 'Visual',
        'accessibility.tab.content': 'Conteúdo',
        'accessibility.tab.navigation': 'Navegação',
        'accessibility.tab.colorblind': 'Daltonismo',
        'accessibility.appearance': 'Aparência Geral',
        'accessibility.active': 'Ativo',
        'accessibility.darkMode': 'Modo Escuro',
        'accessibility.darkMode.desc': 'Ativa tema escuro para reduzir brilho da tela.',
        'accessibility.darkMode.label': 'Ativar modo escuro',
        'accessibility.highContrast': 'Alto Contraste',
        'accessibility.highContrast.desc': 'Aumenta contraste entre texto e fundo.',
        'accessibility.highContrast.label': 'Ativar alto contraste',
        'accessibility.monochrome': 'Monocromático',
        'accessibility.monochrome.desc': 'Remove todas as cores da tela.',
        'accessibility.monochrome.label': 'Ativar monocromático',
        'accessibility.lowSaturation': 'Baixa Saturação',
        'accessibility.lowSaturation.desc': 'Reduz intensidade das cores.',
        'accessibility.lowSaturation.label': 'Ativar baixa saturação',
        'accessibility.invertColors': 'Inverter Cores',
        'accessibility.invertColors.desc': 'Inverte as cores da tela.',
        'accessibility.invertColors.label': 'Ativar inversão',
        'accessibility.readingMode': 'Modo Leitura',
        'accessibility.readingMode.desc': 'Otimiza interface para leitura.',
        'accessibility.readingMode.label': 'Ativar modo leitura',
        'accessibility.fontSize': 'Tamanho do Texto',
        'accessibility.fontSize.desc': 'Ajuste o tamanho do texto na página.',
        'accessibility.fontSmaller': 'A- (Menor)',
        'accessibility.fontLarger': 'A+ (Maior)',
        'accessibility.lineHeight': 'Espaçamento de Linha',
        'accessibility.lineHeight.desc': 'Ajuste o espaço entre linhas.',
        'accessibility.lineCompact': 'Compacto',
        'accessibility.lineSpaced': 'Espaçado',
        'accessibility.links.title': 'Links e Elementos',
        'accessibility.highlightLinks': 'Realçar Links',
        'accessibility.highlightLinks.desc': 'Destaca todos os links na página.',
        'accessibility.highlightLinks.label': 'Realçar links',
        'accessibility.cursor.title': 'Cursor e Foco',
        'accessibility.bigCursor': 'Cursor Grande',
        'accessibility.bigCursor.desc': 'Aumenta o tamanho do cursor.',
        'accessibility.bigCursor.label': 'Cursor grande',
        'accessibility.visibleFocus': 'Foco Visível',
        'accessibility.visibleFocus.desc': 'Destaca elementos em foco pelo teclado.',
        'accessibility.visibleFocus.label': 'Foco visível',
        'accessibility.reduceMotion': 'Reduzir Animações',
        'accessibility.reduceMotion.desc': 'Desativa animações e transições.',
        'accessibility.reduceMotion.label': 'Reduzir animações',
        'accessibility.colorblind.title': 'Ajustes de Cor para Daltonismo',
        'accessibility.colorblind.desc': 'Selecione uma opção para ajustar as cores da página de acordo com seu tipo de visão.',
        'accessibility.colorblind.normal': 'Visão Normal',
        'accessibility.reset': 'Restaurar Padrões',
        'accessibility.save': 'Salvar Configurações',
        'accessibility.saved': 'Configurações salvas com sucesso!',
        'accessibility.restored': 'Configurações restauradas!',
        'size.small': 'Pequeno',
        'size.normal': 'Normal',
        'size.large': 'Grande',
        'size.xlarge': 'Muito Grande',
        'toast.opening': 'Abrindo'
    },
    'en': {
        'page.title': 'Study Plataform - Encceja Assistance',
        'nav.home': 'Home',
        'nav.brand': 'Encceja Assistance',
        'nav.contents': 'Contents',
        'nav.progress': 'Progress',
        'nav.settings': 'Settings',
        'welcome.title': 'Welcome back, Student!',
        'welcome.subtitle.inscricoes': 'Continue your ENCCEJA study journey. Choose a subject below to start studying right now.',
        'welcome.subtitle.provas': 'Registrations are closed. Get ready, the ENCCEJA exams are approaching!',
        'welcome.subtitle.encerrada': 'The ENCCEJA period has ended. Check the official website for information about the next edition.',
        'countdown.inscricoes': 'ENCCEJA Registrations',
        'countdown.provas': 'ENCCEJA Exams',
        'countdown.encerrada': 'ENCCEJA Ended',
        'countdown.days': 'Days',
        'countdown.hours': 'Hours',
        'countdown.minutes': 'Minutes',
        'countdown.seconds': 'Seconds',
        'section.study': 'What do you want to study today?',
        'section.resources': 'Recommended Resources',
        'subject.math': 'Mathematics',
        'subject.portuguese': 'Portuguese',
        'subject.history': 'History',
        'subject.geography': 'Geography',
        'subject.science': 'Science',
        'subject.access': 'Access subject',
        'resource.library.title': 'Study Library',
        'resource.library.desc': 'Access supplementary materials and support documents.',
        'resource.links.title': 'Useful Links',
        'resource.links.desc': 'Websites and external resources to deepen your studies.',
        'resource.guide.title': 'Complete ENCCEJA Guide',
        'resource.guide.desc': 'Everything you need to know about the exam.',
        'resource.tips.title': 'Study Tips',
        'resource.tips.desc': 'Techniques and methods to optimize your learning.',
        'resource.exams.title': 'Previous Exams',
        'resource.exams.desc': 'Practice with exams from past ENCCEJA editions.',
        'resource.support.title': 'Support',
        'resource.support.desc': 'Get your questions answered and receive help from the team.',
        'modal.choose': 'Choose the content type',
        'modal.select': 'Select what you want to study:',
        'modal.videos': 'Video Lessons',
        'modal.videos.count': '6 Videos Available',
        'modal.booklets': 'Booklets',
        'modal.booklets.count': '6 Booklets Available',
        'modal.exercises': 'Exercises',
        'modal.exercises.count': '6 Questions Available',
        'modal.mocks': 'Mock Exams',
        'modal.mocks.count': '6 Mock Exams Available',
        'modal.cancel': 'Cancel',
        'modal.continue': 'Continue',
        'modal.subjectChoose': '{subject} - Choose the content type',
        'footer.terms': 'Terms of Use',
        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.about': 'About',
        'footer.copyright': 'Encceja Assistance. All Rights Reserved.',
        'accessibility.title': 'Accessibility Settings',
        'accessibility.tab.visual': 'Visual',
        'accessibility.tab.content': 'Content',
        'accessibility.tab.navigation': 'Navigation',
        'accessibility.tab.colorblind': 'Color Blindness',
        'accessibility.appearance': 'General Appearance',
        'accessibility.active': 'Active',
        'accessibility.darkMode': 'Dark Mode',
        'accessibility.darkMode.desc': 'Activates dark theme to reduce screen brightness.',
        'accessibility.darkMode.label': 'Enable dark mode',
        'accessibility.highContrast': 'High Contrast',
        'accessibility.highContrast.desc': 'Increases contrast between text and background.',
        'accessibility.highContrast.label': 'Enable high contrast',
        'accessibility.monochrome': 'Monochrome',
        'accessibility.monochrome.desc': 'Removes all colors from the screen.',
        'accessibility.monochrome.label': 'Enable monochrome',
        'accessibility.lowSaturation': 'Low Saturation',
        'accessibility.lowSaturation.desc': 'Reduces color intensity.',
        'accessibility.lowSaturation.label': 'Enable low saturation',
        'accessibility.invertColors': 'Invert Colors',
        'accessibility.invertColors.desc': 'Inverts screen colors.',
        'accessibility.invertColors.label': 'Enable inversion',
        'accessibility.readingMode': 'Reading Mode',
        'accessibility.readingMode.desc': 'Optimizes interface for reading.',
        'accessibility.readingMode.label': 'Enable reading mode',
        'accessibility.fontSize': 'Text Size',
        'accessibility.fontSize.desc': 'Adjust the text size on the page.',
        'accessibility.fontSmaller': 'A- (Smaller)',
        'accessibility.fontLarger': 'A+ (Larger)',
        'accessibility.lineHeight': 'Line Spacing',
        'accessibility.lineHeight.desc': 'Adjust the space between lines.',
        'accessibility.lineCompact': 'Compact',
        'accessibility.lineSpaced': 'Spaced',
        'accessibility.links.title': 'Links and Elements',
        'accessibility.highlightLinks': 'Highlight Links',
        'accessibility.highlightLinks.desc': 'Highlights all links on the page.',
        'accessibility.highlightLinks.label': 'Highlight links',
        'accessibility.cursor.title': 'Cursor and Focus',
        'accessibility.bigCursor': 'Large Cursor',
        'accessibility.bigCursor.desc': 'Increases cursor size.',
        'accessibility.bigCursor.label': 'Large cursor',
        'accessibility.visibleFocus': 'Visible Focus',
        'accessibility.visibleFocus.desc': 'Highlights keyboard-focused elements.',
        'accessibility.visibleFocus.label': 'Visible focus',
        'accessibility.reduceMotion': 'Reduce Animations',
        'accessibility.reduceMotion.desc': 'Disables animations and transitions.',
        'accessibility.reduceMotion.label': 'Reduce animations',
        'accessibility.colorblind.title': 'Color Adjustments for Color Blindness',
        'accessibility.colorblind.desc': 'Select an option to adjust the page colors according to your type of vision.',
        'accessibility.colorblind.normal': 'Normal Vision',
        'accessibility.reset': 'Restore Defaults',
        'accessibility.save': 'Save Settings',
        'accessibility.saved': 'Settings saved successfully!',
        'accessibility.restored': 'Settings restored!',
        'size.small': 'Small',
        'size.normal': 'Normal',
        'size.large': 'Large',
        'size.xlarge': 'Very Large',
        'toast.opening': 'Opening'
    },
    'es': {
        'page.title': 'Plataforma de Estudios - Asistencia Encceja',
        'nav.home': 'Inicio',
        'nav.brand': 'Asistencia Encceja',
        'nav.contents': 'Contenidos',
        'nav.progress': 'Seguimiento',
        'nav.settings': 'Configuraciones',
        'welcome.title': '¡Bienvenido de vuelta, Estudiante!',
        'welcome.subtitle.inscricoes': 'Continúa tu jornada de estudios para el ENCCEJA. Elige una materia abajo para comenzar a estudiar ahora mismo.',
        'welcome.subtitle.provas': 'Las inscripciones se han cerrado. ¡Prepárate, los exámenes del ENCCEJA se acercan!',
        'welcome.subtitle.encerrada': 'El período del ENCCEJA ha terminado. Consulta el sitio oficial para información sobre la próxima edición.',
        'countdown.inscricoes': 'Inscripciones Encceja',
        'countdown.provas': 'Exámenes Encceja',
        'countdown.encerrada': 'Encceja Terminado',
        'countdown.days': 'Días',
        'countdown.hours': 'Horas',
        'countdown.minutes': 'Minutos',
        'countdown.seconds': 'Segundos',
        'section.study': '¿Qué quieres estudiar hoy?',
        'section.resources': 'Recursos Recomendados',
        'subject.math': 'Matemáticas',
        'subject.portuguese': 'Portugués',
        'subject.history': 'Historia',
        'subject.geography': 'Geografía',
        'subject.science': 'Ciencias',
        'subject.access': 'Acceder a materia',
        'resource.library.title': 'Biblioteca de Estudios',
        'resource.library.desc': 'Accede a materiales complementarios y documentos de apoyo.',
        'resource.links.title': 'Enlaces Útiles',
        'resource.links.desc': 'Sitios y recursos externos para profundizar tus estudios.',
        'resource.guide.title': 'Guía Completa del ENCCEJA',
        'resource.guide.desc': 'Todo lo que necesitas saber sobre el examen.',
        'resource.tips.title': 'Consejos de Estudio',
        'resource.tips.desc': 'Técnicas y métodos para optimizar tu aprendizaje.',
        'resource.exams.title': 'Exámenes Anteriores',
        'resource.exams.desc': 'Practica con exámenes de ediciones anteriores del ENCCEJA.',
        'resource.support.title': 'Soporte',
        'resource.support.desc': 'Resuelve tus dudas y obtén ayuda del equipo.',
        'modal.choose': 'Elige el tipo de contenido',
        'modal.select': 'Selecciona lo que deseas estudiar:',
        'modal.videos': 'Videolecciones',
        'modal.videos.count': '6 Videos Disponibles',
        'modal.booklets': 'Fascículos',
        'modal.booklets.count': '6 Fascículos Disponibles',
        'modal.exercises': 'Ejercicios',
        'modal.exercises.count': '6 Preguntas Disponibles',
        'modal.mocks': 'Simulacros',
        'modal.mocks.count': '6 Simulacros Disponibles',
        'modal.cancel': 'Cancelar',
        'modal.continue': 'Continuar',
        'modal.subjectChoose': '{subject} - Elige el tipo de contenido',
        'footer.terms': 'Términos de Uso',
        'footer.privacy': 'Política de Privacidad',
        'footer.contact': 'Contacto',
        'footer.about': 'Acerca de',
        'footer.copyright': 'Asistencia Encceja. Todos los Derechos Reservados.',
        'accessibility.title': 'Configuraciones de Accesibilidad',
        'accessibility.tab.visual': 'Visual',
        'accessibility.tab.content': 'Contenido',
        'accessibility.tab.navigation': 'Navegación',
        'accessibility.tab.colorblind': 'Daltonismo',
        'accessibility.appearance': 'Apariencia General',
        'accessibility.active': 'Activo',
        'accessibility.darkMode': 'Modo Oscuro',
        'accessibility.darkMode.desc': 'Activa el tema oscuro para reducir el brillo de la pantalla.',
        'accessibility.darkMode.label': 'Activar modo oscuro',
        'accessibility.highContrast': 'Alto Contraste',
        'accessibility.highContrast.desc': 'Aumenta el contraste entre texto y fondo.',
        'accessibility.highContrast.label': 'Activar alto contraste',
        'accessibility.monochrome': 'Monocromático',
        'accessibility.monochrome.desc': 'Elimina todos los colores de la pantalla.',
        'accessibility.monochrome.label': 'Activar monocromático',
        'accessibility.lowSaturation': 'Baja Saturación',
        'accessibility.lowSaturation.desc': 'Reduce la intensidad de los colores.',
        'accessibility.lowSaturation.label': 'Activar baja saturación',
        'accessibility.invertColors': 'Invertir Colores',
        'accessibility.invertColors.desc': 'Invierte los colores de la pantalla.',
        'accessibility.invertColors.label': 'Activar inversión',
        'accessibility.readingMode': 'Modo Lectura',
        'accessibility.readingMode.desc': 'Optimiza la interfaz para lectura.',
        'accessibility.readingMode.label': 'Activar modo lectura',
        'accessibility.fontSize': 'Tamaño del Texto',
        'accessibility.fontSize.desc': 'Ajusta el tamaño del texto en la página.',
        'accessibility.fontSmaller': 'A- (Menor)',
        'accessibility.fontLarger': 'A+ (Mayor)',
        'accessibility.lineHeight': 'Espaciado de Línea',
        'accessibility.lineHeight.desc': 'Ajusta el espacio entre líneas.',
        'accessibility.lineCompact': 'Compacto',
        'accessibility.lineSpaced': 'Espaciado',
        'accessibility.links.title': 'Enlaces y Elementos',
        'accessibility.highlightLinks': 'Resaltar Enlaces',
        'accessibility.highlightLinks.desc': 'Resalta todos los enlaces en la página.',
        'accessibility.highlightLinks.label': 'Resaltar enlaces',
        'accessibility.cursor.title': 'Cursor y Enfoque',
        'accessibility.bigCursor': 'Cursor Grande',
        'accessibility.bigCursor.desc': 'Aumenta el tamaño del cursor.',
        'accessibility.bigCursor.label': 'Cursor grande',
        'accessibility.visibleFocus': 'Enfoque Visible',
        'accessibility.visibleFocus.desc': 'Resalta elementos enfocados por teclado.',
        'accessibility.visibleFocus.label': 'Enfoque visible',
        'accessibility.reduceMotion': 'Reducir Animaciones',
        'accessibility.reduceMotion.desc': 'Desactiva animaciones y transiciones.',
        'accessibility.reduceMotion.label': 'Reducir animaciones',
        'accessibility.colorblind.title': 'Ajustes de Color para Daltonismo',
        'accessibility.colorblind.desc': 'Selecciona una opción para ajustar los colores de la página según tu tipo de visión.',
        'accessibility.colorblind.normal': 'Visión Normal',
        'accessibility.reset': 'Restaurar Valores Predeterminados',
        'accessibility.save': 'Guardar Configuraciones',
        'accessibility.saved': '¡Configuraciones guardadas con éxito!',
        'accessibility.restored': '¡Configuraciones restauradas!',
        'size.small': 'Pequeño',
        'size.normal': 'Normal',
        'size.large': 'Grande',
        'size.xlarge': 'Muy Grande',
        'toast.opening': 'Abriendo'
    }
};

let currentLang = localStorage.getItem('auxilio-encceja-lang') || 'pt-BR';
let selectedSubject = null;
let selectedContentType = null;
let currentCountdownPhase = null; 

const state = {
    'dark-mode': false,
    'high-contrast': false,
    'monochrome': false,
    'low-saturation': false,
    'invert-colors': false,
    'reading-mode': false,
    'highlight-links': false,
    'big-cursor': false,
    'visible-focus': false,
    'reduce-motion': false,
    'colorblind-type': 'normal',
    'font-size': 2,
    'line-height': 2
};

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations['pt-BR'][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let text = t(key);
        if (key === 'modal.subjectChoose' && selectedSubject) {
            const subjectKey = 'subject.' + selectedSubject;
            text = t('modal.subjectChoose').replace('{subject}', t(subjectKey));
        }
        if (text) el.textContent = text;
    });

    // Atualiza valores dos sliders
    const sizeLabels = ['size.small', 'size.normal', 'size.large', 'size.xlarge'];
    const fontSizeValue = document.getElementById('fontSizeValue');
    if (fontSizeValue) fontSizeValue.textContent = t(sizeLabels[state['font-size'] - 1]);

    const lineLabels = ['accessibility.lineCompact', 'size.normal', 'accessibility.lineSpaced'];
    const lineHeightValue = document.getElementById('lineHeightValue');
    if (lineHeightValue) lineHeightValue.textContent = t(lineLabels[state['line-height'] - 1]);
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
    updateCountdownDisplay();
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
                const dropdown = bootstrap.Dropdown.getInstance(this.closest('.dropdown-toggle'));
                if (dropdown) dropdown.hide();
            }
        });
    });
}

function updateCountdownDisplay() {
    const subtitleEl = document.getElementById('welcomeSubtitle');
    const labelTextEl = document.getElementById('countdownLabelText');

    if (!subtitleEl || !labelTextEl) return;

    // Mapeamento de fases para chaves de tradução
    const phaseMap = {
        'inscricoes': {
            label: 'countdown.inscricoes',
            subtitle: 'welcome.subtitle.inscricoes'
        },
        'provas': {
            label: 'countdown.provas',
            subtitle: 'welcome.subtitle.provas'
        },
        'encerrada': {
            label: 'countdown.encerrada',
            subtitle: 'welcome.subtitle.encerrada'
        }
    };

    if (currentCountdownPhase && phaseMap[currentCountdownPhase]) {
        const phase = phaseMap[currentCountdownPhase];
        labelTextEl.textContent = t(phase.label);
        subtitleEl.textContent = t(phase.subtitle);
    }
}

// Lógica do Content Modal
const contentModal = document.getElementById('contentModal');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalClose = document.getElementById('modalClose');
const btnCancel = document.getElementById('btnCancel');
const btnContinue = document.getElementById('btnContinue');
const contentOptions = document.querySelectorAll('.content-option');
const contentCards = document.querySelectorAll('.content-card');

let selectedOption = null;
let currentSubject = null;

const subjectTypes = {
    matematica: { title: 'Matemática', icon: 'bi-calculator-fill', i18nKey: 'subject.math' },
    portugues: { title: 'Português', icon: 'bi-book-half', i18nKey: 'subject.portuguese' },
    historia: { title: 'História', icon: 'bi-clock-history', i18nKey: 'subject.history' },
    geografia: { title: 'Geografia', icon: 'bi-globe-americas', i18nKey: 'subject.geography' },
    ciencias: { title: 'Ciências', icon: 'bi-lightning-fill', i18nKey: 'subject.science' }
};

contentCards.forEach(card => {
    card.addEventListener('click', function () {
        const type = this.dataset.type;
        openContentModal(type);
    });
});

function openContentModal(subjectKey) {
    const subject = subjectTypes[subjectKey];
    if (!subject) return;
    currentSubject = subjectKey;
    selectedSubject = subjectKey;
    const subjectName = t(subject.i18nKey);
    modalTitle.textContent = subjectName + ' - ' + t('modal.choose');
    modalIcon.className = 'bi ' + subject.icon;
    selectedOption = null;
    contentOptions.forEach(opt => opt.classList.remove('selected'));
    btnContinue.disabled = true;
    contentModal.classList.add('show');
}

contentOptions.forEach(option => {
    option.addEventListener('click', function () {
        contentOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        selectedOption = this.dataset.type;
        btnContinue.disabled = false;
    });
});

function closeModal() {
    contentModal.classList.remove('show');
}

modalClose.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);

contentModal.addEventListener('click', function (e) {
    if (e.target === contentModal) closeModal();
});

btnContinue.addEventListener('click', function () {
    if (selectedOption && currentSubject) {
        window.location.href = `conteudos.html?materia=${currentSubject}&tipo=${selectedOption}`;
    }
});

const resourceCards = document.querySelectorAll('.resource-card');
resourceCards.forEach(card => {
    card.addEventListener('click', function (e) {
        const title = this.querySelector('.resource-title').textContent;
        showToast(t('toast.opening') + ' ' + title + '...');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 500);
    });
});

// Configurações de Acessibilidade
let accessibilitySettings = {
    darkMode: false,
    highContrast: false,
    monochrome: false,
    lowSaturation: false,
    invertColors: false,
    readingMode: false,
    highlightLinks: false,
    bigCursor: false,
    visibleFocus: false,
    reduceMotion: false,
    fontSize: 2,
    lineHeight: 2,
    colorBlindType: 'normal'
};

document.addEventListener('DOMContentLoaded', function () {
    if (window.Api && !Api.requireAuth()) return;

    initLanguageSelector();
    initAccessibilityModal();
    loadAccessibilitySettings();
    startCountdown();
    setLanguage(currentLang);
});

// Contagem Regressiva (Inscrições → Provas)
function startCountdown() {
    const dataInscricoes = new Date("2026-06-15T23:59:59").getTime();
    const dataProvas = new Date("2026-08-23T07:00:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const labelEl = document.getElementById("countdownLabel");
    const labelTextEl = document.getElementById("countdownLabelText");
    const subtitleEl = document.getElementById("welcomeSubtitle");

    function atualizarFase() {
        const now = new Date().getTime();

        if (now < dataInscricoes) {
            currentCountdownPhase = 'inscricoes'; 
            labelEl.className = 'countdown-label inscricoes';
            labelEl.querySelector('i').className = 'bi bi-pencil-square';
            return dataInscricoes;
        } else if (now < dataProvas) {
            currentCountdownPhase = 'provas'; 
            labelEl.className = 'countdown-label provas';
            labelEl.querySelector('i').className = 'bi bi-journal-check';
            return dataProvas;
        } else {
            currentCountdownPhase = 'encerrada';
            labelEl.className = 'countdown-label encerrada';
            labelEl.querySelector('i').className = 'bi bi-check-circle';
            return null;
        }
    }

    function atualizarDisplay(distance) {
        if (distance === null) {
            daysEl.textContent = '--';
            hoursEl.textContent = '--';
            minutesEl.textContent = '--';
            secondsEl.textContent = '--';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Primeira execução
    const firstTarget = atualizarFase();
    if (firstTarget !== null) {
        const now = new Date().getTime();
        const distance = firstTarget - now;
        atualizarDisplay(distance > 0 ? distance : 0);
    } else {
        atualizarDisplay(null);
    }

    setInterval(function () {
        const targetDate = atualizarFase();

        if (targetDate === null) {
            atualizarDisplay(null);
            return;
        }

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            atualizarDisplay(0);
        } else {
            atualizarDisplay(distance);
        }
    }, 1000);
}

// Modal de Acessibilidade
function initAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    const btn = document.getElementById('accessibilityBtn');
    const closeBtn = document.getElementById('accessibilityModalClose');
    const tabs = document.querySelectorAll('.accessibility-tab');
    const tabContents = document.querySelectorAll('.accessibility-tab-content');

    btn.addEventListener('click', () => {
        modal.classList.add('show');
        btn.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        btn.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            btn.classList.remove('active');
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tabContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
        });
    });

    const toggles = {
        darkModeToggle: 'dark-mode',
        highContrastToggle: 'high-contrast',
        monochromeToggle: 'monochrome',
        lowSaturationToggle: 'low-saturation',
        invertColorsToggle: 'invert-colors',
        readingModeToggle: 'reading-mode',
        highlightLinksToggle: 'highlight-links',
        bigCursorToggle: 'big-cursor',
        visibleFocusToggle: 'visible-focus',
        reduceMotionToggle: 'reduce-motion'
    };

    Object.entries(toggles).forEach(([toggleId, className]) => {
        const toggle = document.getElementById(toggleId);
        if (toggle) {
            toggle.addEventListener('change', function () {
                document.body.classList.toggle(className, this.checked);
                const option = this.closest('.accessibility-option');
                if (option) option.classList.toggle('active', this.checked);
                updateButtonState();
            });
        }
    });

    const fontSizeRange = document.getElementById('fontSizeRange');
    const fontSizeValue = document.getElementById('fontSizeValue');
    fontSizeRange.addEventListener('input', function () {
        const sizes = ['Pequeno', 'Normal', 'Grande', 'Muito Grande'];
        const classes = ['font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge'];
        fontSizeValue.textContent = sizes[this.value - 1];
        document.body.classList.remove(...classes);
        document.body.classList.add(classes[this.value - 1]);
        accessibilitySettings.fontSize = parseInt(this.value);
        state['font-size'] = parseInt(this.value);
    });

    const lineHeightRange = document.getElementById('lineHeightRange');
    const lineHeightValue = document.getElementById('lineHeightValue');
    lineHeightRange.addEventListener('input', function () {
        const heights = ['Compacto', 'Normal', 'Espaçado'];
        const classes = ['line-height-normal', 'line-height-medium', 'line-height-large'];
        lineHeightValue.textContent = heights[this.value - 1];
        document.body.classList.remove(...classes);
        document.body.classList.add(classes[this.value - 1]);
        accessibilitySettings.lineHeight = parseInt(this.value);
        state['line-height'] = parseInt(this.value);
    });

    const colorBlindOptions = document.querySelectorAll('.colorblind-option');
    colorBlindOptions.forEach(option => {
        option.addEventListener('click', function () {
            colorBlindOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            const type = this.dataset.type;
            document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
            if (type !== 'normal') document.body.classList.add(type);
            accessibilitySettings.colorBlindType = type;
        });
    });

    document.getElementById('saveAccessibility').addEventListener('click', () => {
        saveAccessibilitySettings();
        modal.classList.remove('show');
        btn.classList.remove('active');
        showToast(t('accessibility.saved'));
    });

    document.getElementById('saveAccessibility').addEventListener('click', () => {
        saveAccessibilitySettings();
        modal.classList.remove('show');
        btn.classList.remove('active');
        showToast('Configurações salvas com sucesso!');
    });

    document.getElementById('resetAccessibility').addEventListener('click', resetAccessibilitySettings);
}

function updateAccessibilityButtonState() {
    const hasActive = document.body.classList.contains('dark-mode') || document.body.classList.contains('high-contrast');
    document.getElementById('accessibilityBtn').classList.toggle('active', hasActive);
}

function saveAccessibilitySettings() {
    accessibilitySettings.darkMode = document.getElementById('darkModeToggle').checked;
    accessibilitySettings.highContrast = document.getElementById('highContrastToggle').checked;
    accessibilitySettings.monochrome = document.getElementById('monochromeToggle').checked;
    accessibilitySettings.lowSaturation = document.getElementById('lowSaturationToggle').checked;
    accessibilitySettings.invertColors = document.getElementById('invertColorsToggle').checked;
    accessibilitySettings.readingMode = document.getElementById('readingModeToggle').checked;
    accessibilitySettings.highlightLinks = document.getElementById('highlightLinksToggle').checked;
    accessibilitySettings.bigCursor = document.getElementById('bigCursorToggle').checked;
    accessibilitySettings.visibleFocus = document.getElementById('visibleFocusToggle').checked;
    accessibilitySettings.reduceMotion = document.getElementById('reduceMotionToggle').checked;
    localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
}

function loadAccessibilitySettings() {
    const saved = localStorage.getItem('accessibilitySettings');
    if (!saved) return;
    accessibilitySettings = JSON.parse(saved);

    const classMap = {
        darkMode: 'dark-mode', highContrast: 'high-contrast', monochrome: 'monochrome',
        lowSaturation: 'low-saturation', invertColors: 'invert-colors', readingMode: 'reading-mode',
        highlightLinks: 'highlight-links', bigCursor: 'big-cursor', visibleFocus: 'visible-focus',
        reduceMotion: 'reduce-motion'
    };

    Object.entries(classMap).forEach(([key, cls]) => {
        document.body.classList.toggle(cls, accessibilitySettings[key]);
    });

    if (accessibilitySettings.colorBlindType !== 'normal') {
        document.body.classList.add(accessibilitySettings.colorBlindType);
    }

    const toggleMap = {
        darkMode: 'darkModeToggle', highContrast: 'highContrastToggle', monochrome: 'monochromeToggle',
        lowSaturation: 'lowSaturationToggle', invertColors: 'invertColorsToggle', readingMode: 'readingModeToggle',
        highlightLinks: 'highlightLinksToggle', bigCursor: 'bigCursorToggle', visibleFocus: 'visibleFocusToggle',
        reduceMotion: 'reduceMotionToggle'
    };

    Object.entries(toggleMap).forEach(([key, id]) => {
        const el = document.getElementById(id);
        if (el) {
            el.checked = accessibilitySettings[key];
            if (accessibilitySettings[key]) el.closest('.accessibility-option')?.classList.add('active');
        }
    });

    document.getElementById('fontSizeRange').value = accessibilitySettings.fontSize;
    document.getElementById('lineHeightRange').value = accessibilitySettings.lineHeight;

    const sizes = ['Pequeno', 'Normal', 'Grande', 'Muito Grande'];
    const heights = ['Compacto', 'Normal', 'Espaçado'];
    document.getElementById('fontSizeValue').textContent = sizes[accessibilitySettings.fontSize - 1];
    document.getElementById('lineHeightValue').textContent = heights[accessibilitySettings.lineHeight - 1];

    const fontClasses = ['font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge'];
    const lineClasses = ['line-height-normal', 'line-height-medium', 'line-height-large'];
    document.body.classList.remove(...fontClasses, ...lineClasses);
    document.body.classList.add(fontClasses[accessibilitySettings.fontSize - 1]);
    document.body.classList.add(lineClasses[accessibilitySettings.lineHeight - 1]);

    document.querySelectorAll('.colorblind-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.type === accessibilitySettings.colorBlindType);
    });

    updateAccessibilityButtonState();
}

function resetAccessibilitySettings() {
    document.body.classList.remove('dark-mode', 'high-contrast', 'monochrome', 'low-saturation', 'invert-colors', 'reading-mode', 'highlight-links', 'big-cursor', 'visible-focus', 'reduce-motion', 'protanopia', 'deuteranopia', 'tritanopia', 'font-size-small', 'font-size-large', 'font-size-xlarge', 'line-height-normal', 'line-height-medium', 'line-height-large');
    document.body.classList.add('font-size-medium', 'line-height-normal');

    ['darkModeToggle', 'highContrastToggle', 'monochromeToggle', 'lowSaturationToggle', 'invertColorsToggle', 'readingModeToggle', 'highlightLinksToggle', 'bigCursorToggle', 'visibleFocusToggle', 'reduceMotionToggle'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.checked = false; el.closest('.accessibility-option')?.classList.remove('active'); }
    });

    document.getElementById('fontSizeRange').value = 2;
    document.getElementById('lineHeightRange').value = 2;
    document.getElementById('fontSizeValue').textContent = 'Normal';
    document.getElementById('lineHeightValue').textContent = 'Normal';

    document.querySelectorAll('.colorblind-option').forEach(opt => opt.classList.toggle('active', opt.dataset.type === 'normal'));

    localStorage.removeItem('accessibilitySettings');
    updateAccessibilityButtonState();
    showToast('Configurações restauradas!');
}