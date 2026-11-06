(function () {
    const Storage = {
        get(key, defaultValue) {
            try {
                const raw = localStorage.getItem(key);
                return raw ? JSON.parse(raw) : defaultValue;
            } catch {
                return defaultValue;
            }
        }
    };

    const themePresets = {
        teal: { accent: '#159895', secondary: '#57c5b6', gradient: 'linear-gradient(135deg, #159895, #57c5b6)' },
        blue: { accent: '#3b82f6', secondary: '#60a5fa', gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)' },
        purple: { accent: '#8b5cf6', secondary: '#a78bfa', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
        amber: { accent: '#f59e0b', secondary: '#fbbf24', gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
        red: { accent: '#ef4444', secondary: '#f87171', gradient: 'linear-gradient(135deg, #ef4444, #f87171)' }
    };

    function applyTheme(value) {
        const body = document.body;
        body.classList.remove('dark-mode', 'high-contrast');
        if (value === 'dark') {
            body.classList.add('dark-mode');
        } else if (value === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    }

    function applyAccent(colorName) {
        const preset = themePresets[colorName] || themePresets.teal;
        document.documentElement.style.setProperty('--accent', preset.accent);
        document.documentElement.style.setProperty('--secondary', preset.secondary);
        const style = document.createElement('style');
        style.id = 'dynamic-accent-style';
        style.textContent = `
            .toggle-switch input:checked + .toggle-slider { background: ${preset.gradient} !important; }
            .range-slider::-webkit-slider-thumb { background: ${preset.gradient} !important; }
            .tab-btn.active { background: ${preset.gradient} !important; }
            .btn-primary-custom { background: ${preset.gradient} !important; }
        `;
        const existing = document.getElementById('dynamic-accent-style');
        if (existing) existing.remove();
        document.head.appendChild(style);
    }

    function applyCardStyle(style) {
        document.body.classList.remove('card-style-rounded', 'card-style-square', 'card-style-minimal');
        if (style) document.body.classList.add('card-style-' + style);
    }

    function applyAnimations(enabled) {
        if (!enabled) {
            document.documentElement.style.setProperty('--transition-speed', '0s');
            if (!document.getElementById('no-animations-style')) {
                const s = document.createElement('style');
                s.id = 'no-animations-style';
                s.textContent = '* { animation-duration: 0s !important; transition-duration: 0s !important; }';
                document.head.appendChild(s);
            }
        } else {
            document.documentElement.style.setProperty('--transition-speed', '0.3s');
            const s = document.getElementById('no-animations-style');
            if (s) s.remove();
        }
    }

    function applyAccessibility(s) {
        if (!s) return;
        const body = document.body;
        if (s.highContrast) body.classList.add('high-contrast');
        if (s.monochrome) body.classList.add('monochrome');
        if (s.invertColors) body.classList.add('invert-colors');
        if (s.bigCursor) body.classList.add('big-cursor');
        if (s.highlightLinks) body.classList.add('highlight-links');
        if (s.visibleFocus) body.classList.add('visible-focus');
        const fontClasses = ['', 'font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge'];
        const lineClasses = ['', 'line-height-normal', 'line-height-medium', 'line-height-large'];
        if (s.fontSize) {
            fontClasses.forEach(c => { if (c) body.classList.remove(c); });
            body.classList.add(fontClasses[s.fontSize] || 'font-size-medium');
        }
        if (s.lineHeight) {
            lineClasses.forEach(c => { if (c) body.classList.remove(c); });
            body.classList.add(lineClasses[s.lineHeight] || 'line-height-medium');
        }
    }

    function applySavedUserSettings() {
        let theme = null;
        try {
            const rawTheme = localStorage.getItem('theme');
            if (rawTheme) theme = JSON.parse(rawTheme);
        } catch {
            theme = null;
        }
        const appearance = Storage.get('appearanceSettings');
        if (appearance && appearance.theme) {
            theme = appearance.theme;
        }
        if (theme) applyTheme(theme);

        if (appearance) {
            if (appearance.accentColor) applyAccent(appearance.accentColor);
            if (appearance.cardStyle) applyCardStyle(appearance.cardStyle);
            if (appearance.animations !== undefined) applyAnimations(appearance.animations);
        }

        const accessibility = Storage.get('accessibilitySettings');
        applyAccessibility(accessibility);
    }

    applySavedUserSettings();
    window.UserSettings = { applySavedUserSettings, applyTheme, applyAccent, applyCardStyle, applyAccessibility };
})();
