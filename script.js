document.addEventListener('DOMContentLoaded', () => {
    // Seletores do formulário
    const registrationForm = document.getElementById('registrationForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitButton = document.getElementById('submitButton');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    // Função de validação de e-mail corporativo
    function validateEmail(email) {
        const personalEmailDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'uol.com.br', 'bol.com.br', 'live.com', 'icloud.com'];
        const emailDomain = email.split('@')[1]?.toLowerCase();
        if (personalEmailDomains.includes(emailDomain)) {
            return 'Por favor, utilize um e-mail corporativo. E-mails pessoais não são permitidos.';
        }
        return '';
    }

    // Função de validação de telefone
    function validatePhone(phone) {
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            return 'Telefone inválido. Digite um número com DDD (10 ou 11 dígitos).';
        }
        return '';
    }

    // Função de máscara de telefone
    function formatPhone(value) {
        let digits = value.replace(/\D/g, '');
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length > 10) {
            return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (digits.length > 6) {
            return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (digits.length > 2) {
            return digits.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            return digits.replace(/(\d*)/, '($1');
        }
    }
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }


    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Ajuste conforme altura do header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect (navbar branca ao descer)
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo');
    function updateHeaderScroll() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
            header.classList.remove('transparent');
            if (logo) logo.style.filter = '';
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
            if (logo) logo.style.filter = 'brightness(0) invert(1)';
        }
    }
    if (header) {
        window.addEventListener('scroll', updateHeaderScroll);
        updateHeaderScroll();
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = formatPhone(e.target.value);
            if (phoneError) phoneError.textContent = '';
            e.target.classList.remove('error');
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', (e) => {
            if (emailError) emailError.textContent = '';
            e.target.classList.remove('error');
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            let hasError = false;

            const emailValidationMsg = validateEmail(emailInput.value);
            if (emailValidationMsg) {
                if (emailError) emailError.textContent = emailValidationMsg;
                emailInput.classList.add('error');
                hasError = true;
            } else {
                if (emailError) emailError.textContent = '';
                emailInput.classList.remove('error');
            }

            const phoneValidationMsg = validatePhone(phoneInput.value);
            if (phoneValidationMsg) {
                if (phoneError) phoneError.textContent = phoneValidationMsg;
                phoneInput.classList.add('error');
                hasError = true;
            } else {
                if (phoneError) phoneError.textContent = '';
                phoneInput.classList.remove('error');
            }

            if (hasError) {
                return;
            }

            if (submitButton) submitButton.disabled = true;
            submitButton.textContent = 'Processando...';

            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData);

            // Capture UTM parameters from URL
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = {
                utm_source: urlParams.get('utm_source') || '',
                utm_medium: urlParams.get('utm_medium') || '',
                utm_campaign: urlParams.get('utm_campaign') || '',
                utm_term: urlParams.get('utm_term') || '',
                utm_content: urlParams.get('utm_content') || '',
            };

            const payload = {
                ...data,
                ...utmParams
            };

            try {
                // Adiciona timeout de 15 segundos
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 15000);

                const res = await fetch("https://n8n-n8n-start.t4r0vc.easypanel.host/webhook/4212093e-b3f1-467b-8604-9ebfe17d7167", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                // Verifica se a resposta foi bem-sucedida
                if (!res.ok) {
                    throw new Error(`Webhook responded with ${res.status}`);
                }

                // Apenas mostra sucesso se o webhook respondeu OK
                if (registrationForm) registrationForm.style.display = 'none';
                if (formSuccess) formSuccess.style.display = 'flex';

                // Log de sucesso para debug
                console.log('Form submitted successfully', res.status);

            } catch (err) {
                console.error("Error submitting form:", err);
                
                // Em qualquer erro, mostra mensagem e reabilita o botão
                let errorMessage = "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.";
                
                if (err.name === 'AbortError') {
                    errorMessage = "O envio demorou muito tempo. Por favor, tente novamente.";
                }
                
                alert(errorMessage);
                
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Confirmar Inscrição Gratuita';
                }
            }
        });
    }

    // Scroll to form functionality for CTA button
    const ctaButton = document.querySelector('.cta-section .btn-lg');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const element = document.getElementById('inscricao');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
