document.getElementById('anoAtual').textContent = new Date().getFullYear();

const translations = {
    'pt-BR': {
        'page.title': 'Acompnhamento - Auxílio Encceja',
        'nav.home': 'Início',
        'nav.brand': 'Auxílio Encceja',
        'nav.contents': 'Conteúdos',
        'nav.progress': 'Acompanhamento',
        'nav.settings': 'Configurações',
        'tracking.title': 'Acompanhamento de Desempenho',
        'tracking.subtitle': 'Acompanhe seu progresso e evolução em cada matéria',
        'tracking.classInfo': 'Turma: ENCCEJA 2025 | Matricula: 2025-001',
        'tracking.level': 'Nivel: Intermediario',
        'tracking.generalProgress': 'Progresso Geral',
        'tracking.activeDays': 'Dias Ativos',
        'tracking.xpPoints': 'Pontos XP',
        'tracking.overviewView': 'Visão Geral',
        'tracking.subjectView': 'Por Matéria',
        'tracking.completedActivities': 'Atividades Concluídas',
        'tracking.pendingActivities': 'Atividades Pendentes',
        'tracking.generalAverage': 'Média Geral',
        'tracking.subjectProgress': 'Progresso por Matéria',
        'tracking.recentActivity': 'Atividades Recentes',
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
        'data.subject.math.name': 'Matemática',
        'data.subject.math.t0.name': 'Operações Básicas',
        'data.subject.math.t0.act0.name': 'Soma e Subtração',
        'data.subject.math.t0.act1.name': 'Lista de Exercícios 1',
        'data.subject.math.t1.name': 'Frações',
        'data.subject.math.t1.act0.name': 'Introdução a Frações',
        'data.subject.math.t1.act1.name': 'Lista de Exercícios 2',
        'data.subject.math.t2.name': 'Equações',
        'data.subject.math.t2.act0.name': 'Equações do 1o Grau',
        'data.subject.math.t2.act1.name': 'Equações do 2o Grau',

        'data.subject.portuguese.name': 'Português',
        'data.subject.portuguese.t0.name': 'Gramática Básica',
        'data.subject.portuguese.t0.act0.name': 'Classes de Palavras',
        'data.subject.portuguese.t0.act1.name': 'Lista de Gramática',
        'data.subject.portuguese.t1.name': 'Interpretação',
        'data.subject.portuguese.t1.act0.name': 'Estrutura do Texto',
        'data.subject.portuguese.t1.act1.name': 'Simulado de Interpretação',

        'data.subject.history.name': 'História',
        'data.subject.history.t0.name': 'Brasil Colonial',
        'data.subject.history.t0.act0.name': 'Chegada dos Portugueses',
        'data.subject.history.t1.name': 'Independência',
        'data.subject.history.t1.act0.name': 'Independência do Brasil',
        'data.subject.history.t1.act1.name': 'Lista Independência',

        'data.subject.geography.name': 'Geografia',
        'data.subject.geography.t0.name': 'Geografia Física',
        'data.subject.geography.t0.act0.name': 'Lista Relevo',

        'data.subject.science.name': 'Ciências',
        'data.subject.science.t0.name': 'Biologia',
        'data.subject.science.t0.act0.name': 'Células',

        'data.subject.english.name': 'Inglês',
        'data.subject.english.t0.name': 'Vocabulary',
        'data.subject.english.t0.act0.name': 'Basic Words',

        // UI Labels
        'ui.activities': 'Atividades',
        'ui.generalProgress': 'Progresso Geral',
        'ui.completed': 'Concluídas',
        'ui.pending': 'Pendentes',
        'ui.average': 'Média',
        'ui.viewTopics': 'Ver Tópicos',
        'ui.backToOverview': 'Voltar para Visão Geral',
        'ui.topics': 'Tópicos',
        'ui.videoType': 'Vídeo',
        'ui.exerciseType': 'Exercício',
        'ui.simulatedType': 'Simulado',
        'ui.statusDone': 'Concluído',
        'ui.statusPending': 'Pendente',

        // Atividades Recentes
        'data.recent.act0.title': 'Exercício de Matemática concluído',
        'data.recent.act0.meta': 'Equações - Lista 3',
        'data.recent.act1.title': 'Videoaula assistida',
        'data.recent.act1.meta': 'Interpretação de Texto',
        'data.recent.act2.title': 'Simulado finalizado',
        'data.recent.act2.meta': 'Quiz de Português - 88%',

        'time.ago': 'Há',
        'time.hours': 'horas',
        'time.yesterday': 'Ontem'
    },

    'en': {
        'page.title': 'Progress - Encceja Assistance',
        'nav.home': 'Home',
        'nav.brand': 'Encceja Assistance',
        'nav.contents': 'Contents',
        'nav.progress': 'Progress',
        'nav.settings': 'Settings',
        'tracking.title': 'Performance Tracking',
        'tracking.subtitle': 'Track your progress and evolution in each subject',
        'tracking.classInfo': 'Class: ENCCEJA 2025 | ID: 2025-001',
        'tracking.level': 'Level: Intermediate',
        'tracking.generalProgress': 'General Progress',
        'tracking.activeDays': 'Active Days',
        'tracking.xpPoints': 'XP Points',
        'tracking.overviewView': 'Overview',
        'tracking.subjectView': 'By Subject',
        'tracking.completedActivities': 'Completed Activities',
        'tracking.pendingActivities': 'Pending Activities',
        'tracking.generalAverage': 'General Average',
        'tracking.subjectProgress': 'Progress by Subject',
        'tracking.recentActivity': 'Recent Activity',
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
        'data.subject.math.name': 'Math',
        'data.subject.math.t0.name': 'Basic Operations',
        'data.subject.math.t0.act0.name': 'Addition and Subtraction',
        'data.subject.math.t0.act1.name': 'Exercise List 1',
        'data.subject.math.t1.name': 'Fractions',
        'data.subject.math.t1.act0.name': 'Intro to Fractions',
        'data.subject.math.t1.act1.name': 'Exercise List 2',
        'data.subject.math.t2.name': 'Equations',
        'data.subject.math.t2.act0.name': '1st Degree Equations',
        'data.subject.math.t2.act1.name': '2nd Degree Equations',

        'data.subject.portuguese.name': 'Portuguese',
        'data.subject.portuguese.t0.name': 'Basic Grammar',
        'data.subject.portuguese.t0.act0.name': 'Word Classes',
        'data.subject.portuguese.t0.act1.name': 'Grammar List',
        'data.subject.portuguese.t1.name': 'Interpretation',
        'data.subject.portuguese.t1.act0.name': 'Text Structure',
        'data.subject.portuguese.t1.act1.name': 'Interpretation Simulation',

        'data.subject.history.name': 'History',
        'data.subject.history.t0.name': 'Colonial Brazil',
        'data.subject.history.t0.act0.name': 'Arrival of the Portuguese',
        'data.subject.history.t1.name': 'Independence',
        'data.subject.history.t1.act0.name': 'Independence of Brazil',
        'data.subject.history.t1.act1.name': 'Independence List',

        'data.subject.geography.name': 'Geography',
        'data.subject.geography.t0.name': 'Physical Geography',
        'data.subject.geography.t0.act0.name': 'Relief List',

        'data.subject.science.name': 'Science',
        'data.subject.science.t0.name': 'Biology',
        'data.subject.science.t0.act0.name': 'Cells',

        'data.subject.english.name': 'English',
        'data.subject.english.t0.name': 'Vocabulary',
        'data.subject.english.t0.act0.name': 'Basic Words',

        // UI Labels
        'ui.activities': 'Activities',
        'ui.generalProgress': 'General Progress',
        'ui.completed': 'Completed',
        'ui.pending': 'Pending',
        'ui.average': 'Average',
        'ui.viewTopics': 'View Topics',
        'ui.backToOverview': 'Back to Overview',
        'ui.topics': 'Topics',
        'ui.videoType': 'Video',
        'ui.exerciseType': 'Exercise',
        'ui.simulatedType': 'Simulated',
        'ui.statusDone': 'Done',
        'ui.statusPending': 'Pending',

        'data.recent.act0.title': 'Math Exercise Completed',
        'data.recent.act0.meta': 'Equations - List 3',
        'data.recent.act1.title': 'Video Lesson Watched',
        'data.recent.act1.meta': 'Text Interpretation',
        'data.recent.act2.title': 'Simulation Finished',
        'data.recent.act2.meta': 'Portuguese Quiz - 88%',

        'time.ago': 'ago',
        'time.hours': 'hours',
        'time.yesterday': 'Yesterday',
    },

    'es': {
        'page.title': 'Seguimiento - Asistencia Encceja',
        'nav.home': 'Inicio',
        'nav.brand': 'Asistencia Encceja',
        'nav.contents': 'Contenidos',
        'nav.progress': 'Seguimiento',
        'nav.settings': 'Configuraciones',
        'tracking.title': 'Seguimiento del Desempeño',
        'tracking.subtitle': 'Acompaña tu progreso y evolución en cada materia',
        'tracking.classInfo': 'Clase: ENCCEJA 2025 | Matrícula: 2025-001',
        'tracking.level': 'Nivel: Intermedio',
        'tracking.generalProgress': 'Progreso General',
        'tracking.activeDays': 'Días Activos',
        'tracking.xpPoints': 'Puntos XP',
        'tracking.overviewView': 'Visión General',
        'tracking.subjectView': 'Por Materia',
        'tracking.completedActivities': 'Actividades Completadas',
        'tracking.pendingActivities': 'Actividades Pendientes',
        'tracking.generalAverage': 'Promedio General',
        'tracking.subjectProgress': 'Progreso por Materia',
        'tracking.recentActivity': 'Actividad Reciente',
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
        'data.subject.math.name': 'Matemáticas',
        'data.subject.math.t0.name': 'Operaciones Básicas',
        'data.subject.math.t0.act0.name': 'Suma y Resta',
        'data.subject.math.t0.act1.name': 'Lista de Ejercicios 1',
        'data.subject.math.t1.name': 'Fracciones',
        'data.subject.math.t1.act0.name': 'Introducción a Fracciones',
        'data.subject.math.t1.act1.name': 'Lista de Ejercicios 2',
        'data.subject.math.t2.name': 'Ecuaciones',
        'data.subject.math.t2.act0.name': 'Ecuaciones de 1er Grado',
        'data.subject.math.t2.act1.name': 'Ecuaciones de 2do Grado',

        'data.subject.portuguese.name': 'Portugués',
        'data.subject.portuguese.t0.name': 'Gramática Básica',
        'data.subject.portuguese.t0.act0.name': 'Clases de Palabras',
        'data.subject.portuguese.t0.act1.name': 'Lista de Gramática',
        'data.subject.portuguese.t1.name': 'Interpretación',
        'data.subject.portuguese.t1.act0.name': 'Estructura del Texto',
        'data.subject.portuguese.t1.act1.name': 'Simulado de Interpretación',

        'data.subject.history.name': 'Historia',
        'data.subject.history.t0.name': 'Brasil Colonial',
        'data.subject.history.t0.act0.name': 'Llegada de los Portugueses',
        'data.subject.history.t1.name': 'Independencia',
        'data.subject.history.t1.act0.name': 'Independencia de Brasil',
        'data.subject.history.t1.act1.name': 'Lista Independencia',

        'data.subject.geography.name': 'Geografía',
        'data.subject.geography.t0.name': 'Geografía Física',
        'data.subject.geography.t0.act0.name': 'Lista de Relieve',

        'data.subject.science.name': 'Ciencias',
        'data.subject.science.t0.name': 'Biología',
        'data.subject.science.t0.act0.name': 'Células',

        'data.subject.english.name': 'Inglés',
        'data.subject.english.t0.name': 'Vocabulario',
        'data.subject.english.t0.act0.name': 'Palabras Básicas',

        // UI Labels
        'ui.activities': 'Actividades',
        'ui.generalProgress': 'Progreso General',
        'ui.completed': 'Completadas',
        'ui.pending': 'Pendientes',
        'ui.average': 'Media',
        'ui.viewTopics': 'Ver Temas',
        'ui.backToOverview': 'Volver a Visión General',
        'ui.topics': 'Temas',
        'ui.videoType': 'Video',
        'ui.exerciseType': 'Ejercicio',
        'ui.simulatedType': 'Simulado',
        'ui.statusDone': 'Completado',
        'ui.statusPending': 'Pendiente',

        'data.recent.act0.title': 'Ejercicio de Matemáticas Completado',
        'data.recent.act0.meta': 'Ecuaciones - Lista 3',
        'data.recent.act1.title': 'Videolección Vista',
        'data.recent.act1.meta': 'Interpretación de Texto',
        'data.recent.act2.title': 'Simulado Finalizado',
        'data.recent.act2.meta': 'Quiz de Portugués - 88%',

        'time.ago': 'Hace',
        'time.hours': 'horas',
        'time.yesterday': 'Ayer',
    }
};

let currentLang = localStorage.getItem('auxilio-encceja-lang') || 'pt-BR';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations['pt-BR'][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        if (text) el.textContent = text;
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
    if (acompanhamentoData) {
        updateStudentInfo(acompanhamentoData.usuario, acompanhamentoData.resumo);
        updateOverviewStatsFromAcompanhamento(acompanhamentoData.resumo);
    }
    if (subjectsGrid) renderSubjects();
    if (activityList) renderActivities();
    if (detailView && detailView.classList.contains('active') && lastViewedSubjectId) {
        showSubjectDetail(lastViewedSubjectId);
    }
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
                // Fechar o dropdown
                const dropdownElement = this.closest('.dropdown-menu');
                const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownElement.previousElementSibling);
                if (dropdownInstance) dropdownInstance.hide();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.Api && !Api.requireAuth()) return;

    initLanguageSelector();
    setLanguage(currentLang);
    initAccessibilityModal();
});

function initAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    const btn = document.getElementById('accessibilityBtn');
    const closeBtn = document.getElementById('accessibilityModalClose');
    const tabs = document.querySelectorAll('.accessibility-tab');
    const tabContents = document.querySelectorAll('.accessibility-tab-content');

    if (btn) {
        btn.addEventListener('click', () => modal.classList.add('show'));
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tabContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
        });
    });

    // Salvar configurações
    const saveBtn = document.getElementById('saveAccessibility');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            showToast(t('accessibility.save') + '!');
        });
    }
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>${message}</span>`;
    toast.style.cssText = `
                background: linear-gradient(135deg, var(--primary), var(--accent));
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                margin-bottom: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: fadeIn 0.3s;
                display: flex; align-items: center; gap: 10px;
            `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Data Store
let subjectsData = [
    {
        id: 1,
        name: "Matemática",
        icon: "bi-calculator",
        colorClass: "matematica",
        progress: 72,
        completed: 18,
        total: 25,
        average: 81,
        topics: [
            {
                name: "Operações Básicas", status: "completed", progress: 100, activities: [
                    { type: "video", name: "Soma e Subtração", status: "completed", score: null },
                    { type: "exercise", name: "Lista de Exercícios 1", status: "completed", score: "95%" }
                ]
            },
            {
                name: "Frações", status: "completed", progress: 100, activities: [
                    { type: "video", name: "Introdução a Frações", status: "completed", score: null },
                    { type: "exercise", name: "Lista de Exercícios 2", status: "completed", score: "82%" }
                ]
            },
            {
                name: "Equações", status: "in-progress", progress: 60, activities: [
                    { type: "video", name: "Equações do 1o Grau", status: "completed", score: null },
                    { type: "video", name: "Equações do 2o Grau", status: "pending", score: null }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Português",
        icon: "bi-chat-quote",
        colorClass: "portugues",
        progress: 85,
        completed: 22,
        total: 26,
        average: 88,
        topics: [
            {
                name: "Gramatica Básica", status: "completed", progress: 100, activities: [
                    { type: "video", name: "Classes de Palavras", status: "completed", score: null },
                    { type: "exercise", name: "Lista de Gramática", status: "completed", score: "92%" }
                ]
            },
            {
                name: "Interpretação", status: "in-progress", progress: 70, activities: [
                    { type: "video", name: "Estrutura do Texto", status: "completed", score: null },
                    { type: "simulado", name: "Simulado de Interpretação", status: "pending", score: null }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "História",
        icon: "bi-bank",
        colorClass: "historia",
        progress: 55,
        completed: 11,
        total: 20,
        average: 72,
        topics: [
            {
                name: "Brasil Colonial", status: "completed", progress: 100, activities: [
                    { type: "video", name: "Chegada dos Portuguêses", status: "completed", score: null }
                ]
            },
            {
                name: "Independência", status: "in-progress", progress: 50, activities: [
                    { type: "video", name: "Independência do Brasil", status: "completed", score: null },
                    { type: "exercise", name: "Lista Independência", status: "pending", score: null }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Geografia",
        icon: "bi-globe-americas",
        colorClass: "geografia",
        progress: 48,
        completed: 10,
        total: 21,
        average: 68,
        topics: [
            {
                name: "Geografia Física", status: "completed", progress: 100, activities: [
                    { type: "exercise", name: "Lista Relevo", status: "completed", score: "72%" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Ciências",
        icon: "bi-lightning",
        colorClass: "ciencias",
        progress: 63,
        completed: 15,
        total: 24,
        average: 75,
        topics: [
            {
                name: "Biologia", status: "completed", progress: 100, activities: [
                    { type: "video", name: "Células", status: "completed", score: null }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Inglês",
        icon: "bi-translate",
        colorClass: "ingles",
        progress: 40,
        completed: 8,
        total: 20,
        average: 65,
        topics: [
            {
                name: "Vocabulary", status: "in-progress", progress: 30, activities: [
                    { type: "video", name: "Basic Words", status: "completed", score: null }
                ]
            }
        ]
    }
];

const defaultRecentActivities = [
    { icon: "bi-check-circle", type: "success", title: "Exercício de Matemática concluido", meta: "Equações - Lista 3", time: "Há 2 horas" },
    { icon: "bi-play-circle", type: "info", title: "Videoaula assistida", meta: "Interpretaçâo de Texto", time: "Há 5 horas" },
    { icon: "bi-trophy", type: "warning", title: "Simulado finalizado", meta: "Quiz de Português - 88%", time: "Ontem" }
];
let recentActivities = defaultRecentActivities.slice();
let apiTarefas = [];
let acompanhamentoLoaded = false;
let acompanhamentoData = null;

const subjectTranslationKeys = {
    matematica: 'data.subject.math.name',
    math: 'data.subject.math.name',
    portugues: 'data.subject.portuguese.name',
    portuguese: 'data.subject.portuguese.name',
    historia: 'data.subject.history.name',
    history: 'data.subject.history.name',
    geografia: 'data.subject.geography.name',
    geography: 'data.subject.geography.name',
    ciencias: 'data.subject.science.name',
    science: 'data.subject.science.name',
    ingles: 'data.subject.english.name',
    english: 'data.subject.english.name'
};

function normalizeText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, function (char) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[char];
    });
}

function subjectDisplayName(subject) {
    const key = subjectTranslationKeys[normalizeText(subject.name)];
    return key ? t(key) : subject.name;
}

function getSubjectColorClass(name) {
    const normalized = normalizeText(name);
    if (normalized.includes('mat')) return 'matematica';
    if (normalized.includes('port')) return 'portugues';
    if (normalized.includes('hist')) return 'historia';
    if (normalized.includes('geo')) return 'geografia';
    if (normalized.includes('cien')) return 'ciencias';
    if (normalized.includes('ing') || normalized.includes('engl')) return 'ingles';
    return 'matematica';
}

function apiTypeToUiType(type) {
    const normalized = normalizeText(type);
    if (normalized.includes('video')) return 'video';
    if (normalized.includes('quiz') || normalized.includes('simulado')) return 'simulado';
    return 'exercise';
}

function activityTypeLabel(type) {
    if (type === 'video') return t('ui.videoType');
    if (type === 'simulado') return t('ui.simulatedType');
    return t('ui.exerciseType');
}

function isAcompanhamentoActivityDone(activity) {
    return String(activity && activity.status || '').toUpperCase() === 'CONCLUIDA';
}

function mapAcompanhamentoData(data) {
    if (!data || !Array.isArray(data.materias)) return false;

    acompanhamentoData = data;
    const atividades = Array.isArray(data.atividades) ? data.atividades : [];

    subjectsData = data.materias.map(function (materia) {
        const subjectActivities = atividades.filter(function (atividade) {
            return Number(atividade.id_materia) === Number(materia.id_materia);
        });
        const completed = Number(materia.atividades_concluidas) || subjectActivities.filter(isAcompanhamentoActivityDone).length;
        const pending = Number(materia.atividades_pendentes) || Math.max(subjectActivities.length - completed, 0);
        const total = Math.max(completed + pending, subjectActivities.length);
        const progress = total ? Math.round(Number(materia.percentual) || (completed / total) * 100) : 0;

        return {
            id: Number(materia.id_materia),
            name: materia.nome_materia || 'Materia',
            icon: materia.icone || 'bi-book',
            colorClass: getSubjectColorClass(materia.nome_materia),
            progress,
            completed,
            total,
            average: Math.round(Number(materia.media) || progress),
            topics: subjectActivities.map(function (atividade) {
                const done = isAcompanhamentoActivityDone(atividade);
                const uiType = apiTypeToUiType(atividade.tipo);
                return {
                    id: Number(atividade.id_atividade),
                    name: atividade.titulo || 'Atividade',
                    status: done ? 'completed' : 'pending',
                    progress: done ? 100 : 0,
                    activities: [{
                        id: Number(atividade.id_atividade),
                        type: uiType,
                        name: atividade.descricao || activityTypeLabel(uiType),
                        status: done ? 'completed' : 'pending',
                        score: atividade.nota !== null && atividade.nota !== undefined ? Math.round(Number(atividade.nota)) + '%' : null
                    }]
                };
            })
        };
    });

    recentActivities = atividades.slice(0, 6).map(function (atividade) {
        const done = isAcompanhamentoActivityDone(atividade);
        return {
            icon: done ? 'bi-check-circle' : 'bi-hourglass-split',
            type: done ? 'success' : 'warning',
            title: atividade.titulo || 'Atividade',
            meta: atividade.descricao || activityTypeLabel(apiTypeToUiType(atividade.tipo)),
            time: done ? t('ui.statusDone') : t('ui.statusPending'),
            activityId: Number(atividade.id_atividade)
        };
    });

    updateStudentInfo(data.usuario, data.resumo);
    updateOverviewStatsFromAcompanhamento(data.resumo);
    acompanhamentoLoaded = true;
    return true;
}

function updateStudentInfo(usuario, resumo) {
    if (!usuario) return;

    const elName = document.getElementById('studentName');
    const elMeta = document.querySelector('.student-meta');
    const elLevel = document.querySelector('.student-badge span');
    const elProgress = document.getElementById('studentProgress');
    const elDays = document.getElementById('studentActiveDays');
    const elXp = document.getElementById('studentXp');

    if (elName) elName.textContent = usuario.nome || 'Estudante Encceja';
    if (elMeta) elMeta.textContent = 'Turma: ENCCEJA 2026 | Matricula: ' + (usuario.matricula || '-');
    if (elLevel) elLevel.textContent = 'Nivel: ' + (usuario.nivel || 'Intermediario');
    if (elProgress && resumo) elProgress.textContent = (resumo.progressoGeral || 0) + '%';
    if (elDays) elDays.textContent = String(usuario.dias_ativos || 0);
    if (elXp) elXp.textContent = String(usuario.pontos_xp || 0);
}

function updateOverviewStatsFromAcompanhamento(resumo) {
    if (!resumo) return;

    const elProgress = document.getElementById('statProgress');
    const elCompleted = document.getElementById('statCompleted');
    const elPending = document.getElementById('statPending');
    const elAverage = document.getElementById('statAverage');

    if (elProgress) elProgress.textContent = (resumo.progressoGeral || 0) + '%';
    if (elCompleted) elCompleted.textContent = String(resumo.totalConcluidas || 0);
    if (elPending) elPending.textContent = String(resumo.totalPendentes || 0);
    if (elAverage) elAverage.textContent = (resumo.mediaGeral || 0) + '%';
}

// DOM Elements
const subjectsGrid = document.getElementById('subjectsGrid');
const activityList = document.getElementById('activityList');
const overviewView = document.getElementById('overviewView');
const detailView = document.getElementById('detailView');
const detailContent = document.getElementById('detailContent');
const viewBtns = document.querySelectorAll('.view-btn');

// Estado para salvar a última matéria visualizada
let lastViewedSubjectId = null;

function tarefaToActivity(tarefa) {
    const done = window.Api ? Api.isTarefaConcluida(tarefa) : false;
    const metaParts = [];
    if (tarefa.descricao) metaParts.push(tarefa.descricao);
    if (tarefa.flagurgente) metaParts.push('Urgente');
    if (tarefa.tempo) metaParts.push(tarefa.tempo + ' min');
    return {
        icon: done ? 'bi-check-circle' : 'bi-hourglass-split',
        type: done ? 'success' : 'warning',
        title: tarefa.titulo || 'Tarefa',
        meta: metaParts.join(' • ') || 'Tarefa da plataforma',
        time: done ? 'Concluída' : 'Pendente',
        tarefaId: tarefa.id
    };
}

function updateOverviewStatsFromTarefas() {
    if (!apiTarefas.length) return;

    const completed = apiTarefas.filter(function (t) { return Api.isTarefaConcluida(t); }).length;
    const pending = apiTarefas.length - completed;
    const progress = Math.round((completed / apiTarefas.length) * 100);

    const elProgress = document.getElementById('statProgress');
    const elCompleted = document.getElementById('statCompleted');
    const elPending = document.getElementById('statPending');
    const elAverage = document.getElementById('statAverage');

    if (elProgress) elProgress.textContent = progress + '%';
    if (elCompleted) elCompleted.textContent = String(completed);
    if (elPending) elPending.textContent = String(pending);
    if (elAverage) elAverage.textContent = progress + '%';
}

function mergeTarefasIntoRecentActivities() {
    if (!apiTarefas.length) {
        recentActivities = defaultRecentActivities.slice();
        return;
    }
    recentActivities = apiTarefas.map(tarefaToActivity);
}

function renderApiTasksList() {
    const section = document.getElementById('apiTasksSection');
    const list = document.getElementById('apiTasksList');
    if (!section || !list || !apiTarefas.length) return;

    section.style.display = 'block';
    list.innerHTML = apiTarefas.map(function (tarefa) {
        const done = Api.isTarefaConcluida(tarefa);
        const urgent = tarefa.flagurgente ? '<span class="activity-badge warning" style="margin-left:8px;">Urgente</span>' : '';
        return `
            <div class="activity-card api-task-card" data-tarefa-id="${tarefa.id}">
                <button type="button" class="activity-card-icon ${done ? 'success' : 'pending'} api-task-toggle" title="${done ? 'Marcar pendente' : 'Marcar concluída'}" aria-label="Alternar status">
                    <i class="bi ${done ? 'bi-check-lg' : 'bi-circle'}"></i>
                </button>
                <div class="activity-card-content">
                    <div class="activity-card-title">${tarefa.titulo || 'Tarefa'}${urgent}</div>
                    <div class="activity-card-meta">${tarefa.descricao || 'Sem descrição'}${tarefa.tempo ? ' • ' + tarefa.tempo + ' min' : ''}</div>
                </div>
                <div class="activity-card-time">${done ? 'Concluída' : 'Pendente'}</div>
            </div>`;
    }).join('');

    list.querySelectorAll('.api-task-toggle').forEach(function (btn) {
        btn.addEventListener('click', async function () {
            const card = btn.closest('.api-task-card');
            const id = Number(card.dataset.tarefaId);
            const tarefa = apiTarefas.find(function (t) { return t.id === id; });
            if (!tarefa || !window.Api) return;

            try {
                await Api.toggleTarefa(tarefa);
                await loadTarefasFromApi();
                renderApiTasksList();
                renderActivities();
                updateOverviewStatsFromTarefas();
            } catch (err) {
                showToast(err.message || 'Erro ao atualizar tarefa.');
            }
        });
    });
}

async function loadTarefasFromApi() {
    if (!window.Api || acompanhamentoLoaded) return;

    try {
        apiTarefas = await Api.listTarefas();
        mergeTarefasIntoRecentActivities();
        updateOverviewStatsFromTarefas();
    } catch (err) {
        console.warn('Não foi possível carregar tarefas:', err.message);
        apiTarefas = [];
        recentActivities = defaultRecentActivities.slice();
    }
}

async function loadAcompanhamentoFromApi() {
    if (!window.Api || !Api.getAcompanhamento) return;

    try {
        const data = await Api.getAcompanhamento();
        mapAcompanhamentoData(data);
    } catch (err) {
        console.warn('Não foi possível carregar acompanhamento:', err.message);
        acompanhamentoLoaded = false;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async function () {
    await loadAcompanhamentoFromApi();
    await loadTarefasFromApi();
    renderSubjects();
    renderActivities();
    renderApiTasksList();
    setupEventListeners();
});

// Render Subjects Grid
function renderSubjects() {
    subjectsGrid.innerHTML = subjectsData.map(subject => createSubjectCard(subject)).join('');
    translateRenderedCards();
}

function translateRenderedCards() {
    document.querySelectorAll('.stat-pill-label').forEach(function (el) {
        const normalized = normalizeText(el.textContent);
        if (normalized.startsWith('conclu')) el.textContent = t('ui.completed');
        if (normalized.startsWith('pend')) el.textContent = t('ui.pending');
        if (normalized.startsWith('media')) el.textContent = t('ui.average');
    });

    document.querySelectorAll('.card-view-btn').forEach(function (el) {
        const icon = el.querySelector('i');
        el.textContent = t('ui.viewTopics') + ' ';
        if (icon) el.appendChild(icon);
    });
}

// Subject Card 
function createSubjectCard(subject) {
    const progressClass = getProgressClass(subject.progress);
    const name = subjectDisplayName(subject);
    return `
                <div class="subject-card" onclick="showSubjectDetail(${subject.id})">
                    <div class="subject-card-header">
                        <div class="subject-icon-wrapper ${subject.colorClass}">
                            <i class="bi ${subject.icon}"></i>
                        </div>
                        <div class="subject-main-info">
                            <div class="subject-name">${escapeHtml(name)}</div>
                            <div class="subject-meta">
                                <i class="bi bi-collection"></i> ${subject.completed}/${subject.total} ${t('ui.activities').toLowerCase()}
                            </div>
                        </div>
                    </div>
                    
                    <div class="subject-card-body">
                        <div class="progress-header">
                            <span class="progress-label">${t('ui.generalProgress')}</span>
                            <span class="progress-value">${subject.progress}%</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill ${progressClass}" style="width: ${subject.progress}%"></div>
                        </div>
                        
                        <div class="subject-stats-new">
                            <div class="stat-pill">
                                <span class="stat-pill-value">${subject.completed}</span>
                                <span class="stat-pill-label">Concluídas</span>
                            </div>
                            <div class="stat-pill">
                                <span class="stat-pill-value">${subject.total - subject.completed}</span>
                                <span class="stat-pill-label">Pendentes</span>
                            </div>
                            <div class="stat-pill">
                                <span class="stat-pill-value">${subject.average}%</span>
                                <span class="stat-pill-label">Média</span>
                            </div>
                        </div>
                        
                        <button class="card-view-btn">
                            Ver Tópicos <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
}

// Render Activities
function renderActivities() {
    activityList.innerHTML = recentActivities.map(activity => `
                <div class="activity-card">
                    <div class="activity-card-icon ${activity.type}">
                        <i class="bi ${activity.icon}"></i>
                    </div>
                    <div class="activity-card-content">
                        <div class="activity-card-title">${escapeHtml(activity.title)}</div>
                        <div class="activity-card-meta">${escapeHtml(activity.meta)}</div>
                    </div>
                    <div class="activity-card-time">${escapeHtml(translateActivityTime(activity.time))}</div>
                </div>
            `).join('');
}

function translateActivityTime(value) {
    const normalized = normalizeText(value);
    if (normalized.startsWith('conclu') || normalized.startsWith('complet')) return t('ui.statusDone');
    if (normalized.startsWith('pend')) return t('ui.statusPending');
    return value;
}

// Show Subject Detail
function showSubjectDetail(subjectId) {
    // Salva o ID da matéria clicada
    lastViewedSubjectId = subjectId;

    const subject = subjectsData.find(s => s.id === subjectId);
    if (!subject) return;
    const name = subjectDisplayName(subject);

    detailContent.innerHTML = `
                <button class="back-btn" onclick="backToOverview()">
                    <i class="bi bi-arrow-left"></i> ${t('ui.backToOverview')}
                </button>
                
                <div class="detail-header">
                    <div class="detail-subject-icon ${subject.colorClass}">
                        <i class="bi ${subject.icon}"></i>
                    </div>
                    <div class="detail-info">
                        <h2 class="detail-label">${escapeHtml(name)}</h2>
                        <p class="detail-label">${subject.completed}/${subject.total} ${t('ui.completed')}</p>
                        <p class="detail-label">${t('ui.average')}: ${subject.average}%</p>
                    </div>
                    <div class="detail-progress">
                        <div class="detail-progress-circle">
                            <svg width="80" height="80">
                                <circle cx="40" cy="40" r="35" fill="none" stroke="#e2e8f0" stroke-width="6"/>
                                <circle cx="40" cy="40" r="35" fill="none" stroke="url(#gradient${subject.id})" stroke-width="6" 
                                    stroke-dasharray="${2 * Math.PI * 35}" 
                                    stroke-dashoffset="${2 * Math.PI * 35 * (1 - subject.progress / 100)}"
                                    stroke-linecap="round"/>
                                <defs>
                                    <linearGradient id="gradient${subject.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#159895"/>
                                        <stop offset="100%" style="stop-color:#57c5b6"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="detail-progress-value">${subject.progress}%</div>
                        </div>
                    </div>
                </div>
                
                <div class="topics-section">
                    <div class="section-header">
                        <h2 class="section-title">
                            <i class="bi bi-journal-text"></i> ${t('ui.topics')}
                        </h2>
                    </div>
                    ${subject.topics.map((topic, index) => createTopicCard(topic, index)).join('')}
                </div>
            `;

    // Switch to detail view
    overviewView.classList.add('hidden');
    detailView.classList.add('active');
    viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === 'detail');
        btn.setAttribute('aria-pressed', btn.dataset.view === 'detail');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createTopicCard(topic, index) {
    return `
                <div class="topic-card" data-topic="${index}">
                    <div class="topic-header" onclick="toggleTopic(${index})">
                        <div class="topic-title">
                            <div class="topic-status ${topic.status}">
                                ${topic.status === 'completed' ? '<i class="bi bi-check"></i>' :
            topic.status === 'in-progress' ? '<i class="bi bi-arrow-repeat"></i>' : ''}
                            </div>
                            <div>
                                <div class="topic-name">${escapeHtml(topic.name)}</div>
                                <div class="topic-meta">${topic.activities.length} ${t('ui.activities')}</div>
                            </div>
                        </div>
                        <div class="topic-progress-mini">
                            <div class="topic-percentage">${topic.progress}%</div>
                            <div class="topic-toggle">
                                <i class="bi bi-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="topic-content">
                        <div class="topic-activities">
                            ${topic.activities.map(activity => `
                                <div class="activity-item">
                                    <div class="activity-info">
                                        <div class="activity-icon ${activity.type}">
                                            <i class="bi ${activity.type === 'video' ? 'bi-play-fill' :
                    activity.type === 'exercise' ? 'bi-pencil' : 'bi-clipboard-check'}"></i>
                                        </div>
                                        <div class="activity-name">${escapeHtml(activity.name)}</div>
                                    </div>
                                    <div class="activity-status">
                                        ${activity.score ? `<span class="activity-score">${activity.score}</span>` : ''}
                                        <span class="activity-badge ${activity.status}">${activity.status === 'completed' ? t('ui.statusDone') : t('ui.statusPending')}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
}

function toggleTopic(index) {
    const card = document.querySelector(`.topic-card[data-topic="${index}"]`);
    card.classList.toggle('expanded');
}

function backToOverview() {
    overviewView.classList.remove('hidden');
    detailView.classList.remove('active');
    viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === 'overview');
        btn.setAttribute('aria-pressed', btn.dataset.view === 'overview');
    });
}

function getProgressClass(progress) {
    if (progress >= 80) return 'excellent';
    if (progress >= 60) return 'good';
    if (progress >= 40) return 'average';
    return 'low';
}

function setupEventListeners() {
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const view = this.dataset.view;

            if (view === 'overview') {
                backToOverview();
            } else {
                // Verifica se há uma matéria salva
                if (lastViewedSubjectId) {
                    showSubjectDetail(lastViewedSubjectId);
                } else {
                    // Se não houve nenhuma clicada ainda, mostra a primeira da lista
                    if (subjectsData.length > 0) {
                        showSubjectDetail(subjectsData[0].id);
                    }
                }
            }
        });
    });
}

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

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    initAccessibilityModal();
    loadAccessibilitySettings();
});

function initAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    const btn = document.getElementById('accessibilityBtn');
    const closeBtn = document.getElementById('accessibilityModalClose');
    const tabs = document.querySelectorAll('.accessibility-tab');
    const tabContents = document.querySelectorAll('.accessibility-tab-content');

    // Abrir modal
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        btn.classList.add('active');
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        btn.classList.remove('active');
    });

    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            btn.classList.remove('active');
        }
    });

    // Troca de abas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tabContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
        });
    });

    // Mapeamento de toggles
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

    // Tamanho da Fonte
    const fontSizeRange = document.getElementById('fontSizeRange');
    const fontSizeValue = document.getElementById('fontSizeValue');
    fontSizeRange.addEventListener('input', function () {
        const sizes = ['Pequeno', 'Normal', 'Grande', 'Muito Grande'];
        const classes = ['font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge'];
        fontSizeValue.textContent = sizes[this.value - 1];
        document.body.classList.remove(...classes);
        document.body.classList.add(classes[this.value - 1]);
        accessibilitySettings.fontSize = parseInt(this.value);
    });

    // Altura da Linha
    const lineHeightRange = document.getElementById('lineHeightRange');
    const lineHeightValue = document.getElementById('lineHeightValue');
    lineHeightRange.addEventListener('input', function () {
        const heights = ['Compacto', 'Normal', 'Espaçado'];
        const classes = ['line-height-normal', 'line-height-medium', 'line-height-large'];
        lineHeightValue.textContent = heights[this.value - 1];
        document.body.classList.remove(...classes);
        document.body.classList.add(classes[this.value - 1]);
        accessibilitySettings.lineHeight = parseInt(this.value);
    });

    // Daltonismo
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

    // Salvar
    document.getElementById('saveAccessibility').addEventListener('click', () => {
        saveAccessibilitySettings();
        modal.classList.remove('show');
        btn.classList.remove('active');
        showToast('Configurações salvas com sucesso!');
    });

    // Resetar
    document.getElementById('resetAccessibility').addEventListener('click', resetAccessibilitySettings);
}

function updateButtonState() {
    const hasActiveSettings = document.body.classList.contains('dark-mode') || document.body.classList.contains('high-contrast') || /* adicione outras classes aqui se necessário */ false;
    document.getElementById('accessibilityBtn').classList.toggle('active', hasActiveSettings);
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
    if (saved) {
        accessibilitySettings = JSON.parse(saved);

        // Aplicar classes no body
        document.body.classList.toggle('dark-mode', accessibilitySettings.darkMode);
        document.body.classList.toggle('high-contrast', accessibilitySettings.highContrast);
        document.body.classList.toggle('monochrome', accessibilitySettings.monochrome);
        document.body.classList.toggle('low-saturation', accessibilitySettings.lowSaturation);
        document.body.classList.toggle('invert-colors', accessibilitySettings.invertColors);
        document.body.classList.toggle('reading-mode', accessibilitySettings.readingMode);
        document.body.classList.toggle('highlight-links', accessibilitySettings.highlightLinks);
        document.body.classList.toggle('big-cursor', accessibilitySettings.bigCursor);
        document.body.classList.toggle('visible-focus', accessibilitySettings.visibleFocus);
        document.body.classList.toggle('reduce-motion', accessibilitySettings.reduceMotion);

        if (accessibilitySettings.colorBlindType !== 'normal') {
            document.body.classList.add(accessibilitySettings.colorBlindType);
        }

        // Atualizar UI (checkboxes e ranges)
        document.getElementById('darkModeToggle').checked = accessibilitySettings.darkMode;
        document.getElementById('highContrastToggle').checked = accessibilitySettings.highContrast;
        document.getElementById('monochromeToggle').checked = accessibilitySettings.monochrome;
        document.getElementById('lowSaturationToggle').checked = accessibilitySettings.lowSaturation;
        document.getElementById('invertColorsToggle').checked = accessibilitySettings.invertColors;
        document.getElementById('readingModeToggle').checked = accessibilitySettings.readingMode;
        document.getElementById('highlightLinksToggle').checked = accessibilitySettings.highlightLinks;
        document.getElementById('bigCursorToggle').checked = accessibilitySettings.bigCursor;
        document.getElementById('visibleFocusToggle').checked = accessibilitySettings.visibleFocus;
        document.getElementById('reduceMotionToggle').checked = accessibilitySettings.reduceMotion;

        document.getElementById('fontSizeRange').value = accessibilitySettings.fontSize;
        document.getElementById('lineHeightRange').value = accessibilitySettings.lineHeight;

        // Atualizar estados visuais
        const toggles = ['darkModeToggle', 'highContrastToggle', 'monochromeToggle', 'lowSaturationToggle', 'invertColorsToggle', 'readingModeToggle', 'highlightLinksToggle', 'bigCursorToggle', 'visibleFocusToggle', 'reduceMotionToggle'];
        toggles.forEach(id => {
            const toggle = document.getElementById(id);
            if (toggle && toggle.checked) toggle.closest('.accessibility-option')?.classList.add('active');
        });

        const colorBlindOptions = document.querySelectorAll('.colorblind-option');
        colorBlindOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.type === accessibilitySettings.colorBlindType);
        });

        updateButtonState();
    }
}

function resetAccessibilitySettings() {
    // Remove classes
    document.body.classList.remove('dark-mode', 'high-contrast', 'monochrome', 'low-saturation', 'invert-colors', 'reading-mode', 'highlight-links', 'big-cursor', 'visible-focus', 'reduce-motion', 'protanopia', 'deuteranopia', 'tritanopia', 'font-size-small', 'font-size-large', 'font-size-xlarge', 'line-height-normal', 'line-height-medium', 'line-height-large');
    document.body.classList.add('font-size-medium', 'line-height-normal');

    // Reset UI
    document.getElementById('darkModeToggle').checked = false;
    document.getElementById('highContrastToggle').checked = false;
    document.getElementById('monochromeToggle').checked = false;
    document.getElementById('lowSaturationToggle').checked = false;
    document.getElementById('invertColorsToggle').checked = false;
    document.getElementById('readingModeToggle').checked = false;
    document.getElementById('highlightLinksToggle').checked = false;
    document.getElementById('bigCursorToggle').checked = false;
    document.getElementById('visibleFocusToggle').checked = false;
    document.getElementById('reduceMotionToggle').checked = false;
    document.getElementById('fontSizeRange').value = 2;
    document.getElementById('lineHeightRange').value = 2;

    document.querySelectorAll('.accessibility-option').forEach(opt => opt.classList.remove('active'));
    document.querySelectorAll('.colorblind-option').forEach(opt => { opt.classList.toggle('active', opt.dataset.type === 'normal'); });

    document.getElementById('fontSizeValue').textContent = 'Normal';
    document.getElementById('lineHeightValue').textContent = 'Normal';

    localStorage.removeItem('accessibilitySettings');
    updateButtonState();
    showToast('Configurações restauradas!');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i><span class="custom-toast-message">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
