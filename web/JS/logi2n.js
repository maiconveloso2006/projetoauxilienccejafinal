document.addEventListener('DOMContentLoaded', function() {
            if (window.Api && Api.getCurrentUser()) {
                window.location.href = 'plataforma.html';
                return;
            }

            let termsReadComplete = false;
            const termsCheck = document.getElementById('termsCheck');
            const termsHint = document.getElementById('termsHint');
            const openTermsLink = document.getElementById('openTermsAcceptModal');
            const termsAcceptModalEl = document.getElementById('termsAcceptModal');
            const termsAcceptModal = termsAcceptModalEl ? new bootstrap.Modal(termsAcceptModalEl) : null;
            const loginTermsContent = document.getElementById('loginTermsContent');
            const loginTermsScrollProgress = document.getElementById('loginTermsScrollProgress');
            const termsAcceptConfirmBtn = document.getElementById('termsAcceptConfirmBtn');
            const termsAcceptDeclineBtn = document.getElementById('termsAcceptDeclineBtn');

            function updateTermsScrollState() {
                if (!loginTermsContent || !termsAcceptConfirmBtn) return;
                const scrollTop = loginTermsContent.scrollTop;
                const scrollHeight = loginTermsContent.scrollHeight - loginTermsContent.clientHeight;
                const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 100;
                if (loginTermsScrollProgress) {
                    loginTermsScrollProgress.style.width = Math.min(progress, 100) + '%';
                }
                const atEnd = scrollHeight <= 8 || scrollTop >= scrollHeight - 8;
                if (atEnd) {
                    termsReadComplete = true;
                    termsAcceptConfirmBtn.disabled = false;
                }
            }

            if (loginTermsContent) {
                loginTermsContent.addEventListener('scroll', updateTermsScrollState);
            }

            function openTermsAcceptFlow(e) {
                if (e) e.preventDefault();
                termsReadComplete = false;
                if (termsAcceptConfirmBtn) termsAcceptConfirmBtn.disabled = true;
                if (loginTermsScrollProgress) loginTermsScrollProgress.style.width = '0%';
                if (loginTermsContent) loginTermsContent.scrollTop = 0;
                if (termsAcceptModal) {
                    termsAcceptModal.show();
                    setTimeout(updateTermsScrollState, 200);
                }
            }

            if (openTermsLink) openTermsLink.addEventListener('click', openTermsAcceptFlow);
            if (termsCheck) {
                termsCheck.addEventListener('click', function(e) {
                    if (!termsCheck.checked && !termsReadComplete) return;
                    if (!termsCheck.checked) {
                        termsReadComplete = false;
                        termsCheck.disabled = true;
                        if (termsHint) termsHint.textContent = 'Leia os termos até o final para habilitar o aceite.';
                        return;
                    }
                    if (!termsReadComplete) {
                        e.preventDefault();
                        termsCheck.checked = false;
                        openTermsAcceptFlow(e);
                    }
                });
            }

            if (termsAcceptConfirmBtn) {
                termsAcceptConfirmBtn.addEventListener('click', function() {
                    if (!termsReadComplete) return;
                    if (termsCheck) {
                        termsCheck.disabled = false;
                        termsCheck.checked = true;
                    }
                    if (termsHint) termsHint.textContent = 'Termos aceitos. Você pode concluir o cadastro.';
                    if (termsAcceptModal) termsAcceptModal.hide();
                });
            }

            if (termsAcceptDeclineBtn) {
                termsAcceptDeclineBtn.addEventListener('click', function() {
                    termsReadComplete = false;
                    if (termsCheck) {
                        termsCheck.checked = false;
                        termsCheck.disabled = true;
                    }
                    if (termsHint) termsHint.textContent = 'É necessário aceitar os termos para se cadastrar.';
                });
            }

            function validateRegistrationFields() {
                const firstName = document.getElementById('firstName').value.trim();
                const lastName = document.getElementById('lastName').value.trim();
                const email = document.getElementById('registerEmail').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const birthDate = document.getElementById('birthDate').value;
                const educationLevel = document.getElementById('educationLevel').value;
                const password = document.getElementById('registerPassword').value;
                const confirmPw = document.getElementById('confirmPassword').value;

                if (!firstName || !lastName || !email || !phone || !birthDate || !educationLevel || !password || !confirmPw) {
                    return 'Por favor, preencha todos os campos.';
                }
                if (firstName.length < 2 || lastName.length < 2) {
                    return 'Informe nome e sobrenome válidos.';
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    return 'Informe um e-mail válido.';
                }
                const phoneDigits = phone.replace(/\D/g, '');
                if (phoneDigits.length < 10 || phoneDigits.length > 11) {
                    return 'Informe um telefone válido com DDD.';
                }
                const today = new Date();
                const birth = new Date(birthDate);
                if (Number.isNaN(birth.getTime())) {
                    return 'Data de nascimento inválida.';
                }
                let age = today.getFullYear() - birth.getFullYear();
                const monthDiff = today.getMonth() - birth.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
                if (age < 15) {
                    return 'É necessário ter pelo menos 15 anos para se cadastrar.';
                }
                if (password !== confirmPw) {
                    return 'As senhas não coincidem.';
                }
                if (!termsCheck || !termsCheck.checked || !termsReadComplete) {
                    return 'Leia e aceite os termos de serviço para continuar.';
                }
                return null;
            }

            // Tab switching
            const loginTab = document.getElementById('login-tab');
            const registerTab = document.getElementById('register-tab');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const switchToRegister = document.getElementById('switchToRegister');
            const switchToLogin = document.getElementById('switchToLogin');
            const registerSuccess = document.getElementById('register-success');
            
            function showLoginForm() {
                loginTab.classList.add('active');
                registerTab.classList.remove('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                registerSuccess.style.display = 'none';
                
                // Reset step indicators
                document.getElementById('step1').classList.add('active');
                document.getElementById('step2').classList.remove('active');
                document.getElementById('step3').classList.remove('active');
                document.getElementById('step1').classList.remove('completed');
                document.getElementById('step2').classList.remove('completed');
                document.getElementById('step1').querySelector('.step-line').classList.remove('active');
                document.getElementById('step2').querySelector('.step-line').classList.remove('active');
            }
            
            function showRegisterForm() {
                loginTab.classList.remove('active');
                registerTab.classList.add('active');
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
                registerSuccess.style.display = 'none';
                
                // Reset step indicators
                document.getElementById('step1').classList.add('active');
                document.getElementById('step2').classList.remove('active');
                document.getElementById('step3').classList.remove('active');
                document.getElementById('step1').classList.remove('completed');
                document.getElementById('step2').classList.remove('completed');
                document.getElementById('step1').querySelector('.step-line').classList.remove('active');
                document.getElementById('step2').querySelector('.step-line').classList.remove('active');
            }
            
            loginTab.addEventListener('click', function() {
                showLoginForm();
                history.replaceState(null, '', 'login.html');
            });
            registerTab.addEventListener('click', function() {
                showRegisterForm();
                history.replaceState(null, '', 'login.html#cadastro');
            });
            switchToRegister.addEventListener('click', function(e) {
                e.preventDefault();
                showRegisterForm();
                history.replaceState(null, '', 'login.html#cadastro');
            });
            switchToLogin.addEventListener('click', function(e) {
                e.preventDefault();
                showLoginForm();
                history.replaceState(null, '', 'login.html');
            });

            if (window.location.hash === '#cadastro') {
                showRegisterForm();
            }
            
            // Password toggle
            const loginPasswordToggle = document.getElementById('loginPasswordToggle');
            const loginPassword = document.getElementById('loginPassword');
            const registerPasswordToggle = document.getElementById('registerPasswordToggle');
            const registerPassword = document.getElementById('registerPassword');
            const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
            const confirmPassword = document.getElementById('confirmPassword');
            
            function togglePasswordVisibility(input, toggleIcon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggleIcon.classList.remove('bi-eye');
                    toggleIcon.classList.add('bi-eye-slash');
                } else {
                    input.type = 'password';
                    toggleIcon.classList.remove('bi-eye-slash');
                    toggleIcon.classList.add('bi-eye');
                }
            }
            
            loginPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(loginPassword, this.querySelector('i'));
            });
            
            registerPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(registerPassword, this.querySelector('i'));
            });
            
            confirmPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(confirmPassword, this.querySelector('i'));
            });
            
            // Form submission
            const loginFormElement = document.getElementById('loginForm');
            const registerFormElement = document.getElementById('registerForm');
            const loginAlert = document.getElementById('login-alert');
            const registerAlert = document.getElementById('register-alert');
            
            loginFormElement.addEventListener('submit', async function(e) {
                e.preventDefault();

                const email = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value;
                const submitBtn = loginFormElement.querySelector('button[type="submit"]');

                if (!email || !password) {
                    loginAlert.textContent = 'Por favor, preencha todos os campos.';
                    loginAlert.classList.add('show');
                    setTimeout(() => loginAlert.classList.remove('show'), 3000);
                    return;
                }

                if (!window.Api) {
                    loginAlert.textContent = 'Serviço indisponível. Verifique se a API está em execução.';
                    loginAlert.classList.add('show');
                    setTimeout(() => loginAlert.classList.remove('show'), 4000);
                    return;
                }

                submitBtn.disabled = true;

                try {
                    await Api.login(email, password);
                    showLoginToast('Login realizado com sucesso!');
                    setTimeout(() => {
                        window.location.href = 'plataforma.html';
                    }, 800);
                } catch (err) {
                    loginAlert.textContent = err.message || 'Não foi possível entrar. Tente novamente.';
                    loginAlert.classList.add('show');
                    setTimeout(() => loginAlert.classList.remove('show'), 4000);
                } finally {
                    submitBtn.disabled = false;
                }
            });
            
            registerFormElement.addEventListener('submit', async function(e) {
                e.preventDefault();

                const firstName = document.getElementById('firstName').value.trim();
                const lastName = document.getElementById('lastName').value.trim();
                const email = document.getElementById('registerEmail').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const birthDate = document.getElementById('birthDate').value;
                const educationLevel = document.getElementById('educationLevel').value;
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const submitBtn = registerFormElement.querySelector('button[type="submit"]');
                const validationError = validateRegistrationFields();
                if (validationError) {
                    registerAlert.textContent = validationError;
                    registerAlert.classList.add('show');
                    setTimeout(() => registerAlert.classList.remove('show'), 4000);
                    if (validationError.indexOf('termos') !== -1) openTermsAcceptFlow();
                    return;
                }

                if (!window.Api) {
                    registerAlert.textContent = 'Serviço indisponível. Verifique se a API está em execução.';
                    registerAlert.classList.add('show');
                    setTimeout(() => registerAlert.classList.remove('show'), 4000);
                    return;
                }

                submitBtn.disabled = true;

                try {
                    if (window.Api && typeof Api.validateRegisterPayload === 'function') {
                        Api.validateRegisterPayload({
                            name: firstName + ' ' + lastName,
                            login: email,
                            password: password
                        });
                    }

                    await Api.register({
                        name: firstName + ' ' + lastName,
                        login: email,
                        password: password,
                        extra: {
                            apelido: firstName,
                            telefone: phone,
                            dataNascimento: birthDate,
                            escolaridade: educationLevel
                        }
                    });

                    registerForm.classList.remove('active');
                    registerSuccess.style.display = 'block';
                } catch (err) {
                    registerAlert.textContent = err.message || 'Não foi possível concluir o cadastro.';
                    registerAlert.classList.add('show');
                    setTimeout(() => registerAlert.classList.remove('show'), 4000);
                } finally {
                    submitBtn.disabled = false;
                }
            });
            
            // Esqueci minha senha
            const forgotPassword = document.getElementById('forgotPassword');
            const resetPasswordModal = new bootstrap.Modal(document.getElementById('resetPasswordModal'));
            
            forgotPassword.addEventListener('click', function(e) {
                e.preventDefault();
                resetPasswordModal.show();
            });
            
            // Form submission for password reset
            const resetPasswordForm = document.getElementById('resetPasswordForm');
            
            resetPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('resetEmail').value;
                
                if (email) {
                    // Simulação de envio de email de redefinição (substituir por lógica real)
                    console.log('Email de redefinição enviado para:', email);
                    
                    // Fechar modal
                    resetPasswordModal.hide();
                    
                    // Mostrar toast de sucesso
                    const toastContainer = document.createElement('div');
                    toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
                    toastContainer.style.zIndex = '11';
                    
                    toastContainer.innerHTML = `
                        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header bg-success text-white">
                                <i class="bi bi-check-circle me-2"></i>
                                <strong class="me-auto">Sucesso</strong>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">
                                Email de redefinição enviado com sucesso! Verifique sua caixa de entrada.
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(toastContainer);
                    
                    setTimeout(() => {
                        toastContainer.remove();
                    }, 3000);
                }
            });
            
            // Go to login from success page
            const goToLoginBtn = document.getElementById('goToLogin');
            
            goToLoginBtn.addEventListener('click', function() {
                showLoginForm();
                document.getElementById('registerForm').reset();
                termsReadComplete = false;
                if (termsCheck) {
                    termsCheck.checked = false;
                    termsCheck.disabled = true;
                }
                if (termsHint) termsHint.textContent = 'Leia os termos até o final para habilitar o aceite.';
            });
            
            // Password strength indicator
            const passwordStrengthBar = document.getElementById('passwordStrengthBar');
            const passwordStrengthText = document.getElementById('passwordStrengthText');
            const registerPasswordInput = document.getElementById('registerPassword');
            
            registerPasswordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                let strengthText = '';
                let strengthColor = '';
                
                if (password.length >= 8) strength += 1;
                if (password.match(/[a-z]+/)) strength += 1;
                if (password.match(/[A-Z]+/)) strength += 1;
                if (password.match(/[0-9]+/)) strength += 1;
                if (password.match(/[^a-zA-Z0-9]+/)) strength += 1;
                
                switch (strength) {
                    case 0:
                        strengthText = 'Senha Fraca';
                        strengthColor = '#dc3545';
                        break;
                    case 1:
                        strengthText = 'Senha Fraca';
                        strengthColor = '#dc3545';
                        break;
                    case 2:
                        strengthText = 'Senha Média';
                        strengthColor = '#ffc107';
                        break;
                    case 3:
                        strengthText = 'Senha Média';
                        strengthColor = '#ffc107';
                        break;
                    case 4:
                        strengthText = 'Senha Forte';
                        strengthColor = '#28a745';
                        break;
                    case 5:
                        strengthText = 'Senha Muito Forte';
                        strengthColor = '#28a745';
                        break;
                }
                
                passwordStrengthBar.style.width = (strength * 20) + '%';
                passwordStrengthBar.style.backgroundColor = strengthColor;
                passwordStrengthText.textContent = strengthText;
            });
            
            // Validação em tempo real dos campos
            const formInputs = document.querySelectorAll('.form-control, .form-select');
            
            formInputs.forEach(input => {
                input.addEventListener('input', function() {
                    if (this.value) {
                        this.classList.add('input-valid');
                        this.classList.remove('input-invalid');
                    } else {
                        this.classList.remove('input-valid');
                        this.classList.remove('input-invalid');
                    }
                });
                
                input.addEventListener('blur', function() {
                    if (this.required && !this.value) {
                        this.classList.add('input-invalid');
                        this.classList.remove('input-valid');
                    }
                });
            });
            
            function showLoginToast(message) {
                const toastContainer = document.createElement('div');
                toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
                toastContainer.style.zIndex = '11';
                toastContainer.innerHTML = `
                        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header bg-success text-white">
                                <i class="bi bi-check-circle me-2"></i>
                                <strong class="me-auto">Sucesso</strong>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">${message}</div>
                        </div>`;
                document.body.appendChild(toastContainer);
                setTimeout(() => toastContainer.remove(), 3000);
            }

            // Adicionar ícones aos campos de formulário
            const inputGroups = document.querySelectorAll('.input-group-text');
            
            inputGroups.forEach(group => {
                const icon = group.querySelector('i');
                if (icon) {
                    group.style.width = '40px';
                    group.style.justifyContent = 'center';
                }
            });
        });