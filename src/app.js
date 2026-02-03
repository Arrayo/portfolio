/**
 * Portfolio Application
 * Self-contained bundle for static hosting (no build tools required)
 * 
 * Structure:
 * - Translations (i18n)
 * - Date Utilities
 * - Language Service
 * - Navigation Service
 * - App Initialization
 */

(function() {
    'use strict';

    // ============================================
    // TRANSLATIONS
    // ============================================
    
    const translations = {
        es: {
            // Page & SEO
            pageTitle: 'CV | Francisco Caballero Portero',
            metaDescription: 'Desarrollador Full Stack especializado en React, TypeScript y Node.js. +4 años construyendo producto B2B con arquitectura hexagonal y DDD.',
            ogTitle: 'Francisco Caballero Portero - Full Stack Developer',
            ogDescription: 'Desarrollador Full Stack | React + TypeScript | GraphQL & REST | Node.js',
            authorName: 'Francisco Caballero Portero',
            authorAlt: 'Francisco Caballero Portero',
            avatarAction: 'Ver repositorio en GitHub',
            
            // Header
            subtitle: 'Desarrollador Full Stack | React + TypeScript | GraphQL & REST | Node.js',
            location: 'Bullas (Murcia), España · Remoto',
            
            // Contact
            emailLabel: 'fcp1978@hotmail.com',
            linkedinLabel: 'LinkedIn',
            
            // Stack
            stackTitle: 'Stack principal',
            chip1: 'React',
            chip2: 'TypeScript',
            chip3: 'Node.js',
            chip4: 'GraphQL · Apollo',
            chip5: 'PostgreSQL · MongoDB',
            chip6: 'Angular · Ionic',
            
            // Language buttons
            langEs: 'ES',
            langEn: 'EN',
            
            // Navigation
            homeAbout: 'Sobre mí',
            homeExperience: 'Trayectoria',
            homePortfolio: 'Portfolio',
            back: 'Volver',
            closeLabel: 'Cerrar',
            
            // Profile pills
            pillsLabel: 'Especialidades y Enfoque',
            pill1: 'Arquitectura Hexagonal / DDD',
            pill2: 'Full Stack (Node/React)',
            pill3: 'GraphQL & Apollo Expert',
            pill4: 'Testing (Unit, E2E, Integration)',
            pill5: 'AI-Assisted Engineering',
            pill6: 'Cloud & DevOps (AWS/Docker)',
            pill7: 'Comunicación Técnica',
            
            // Footer
            footerLabel: 'Enlaces',
            githubLabel: 'GitHub',
            youtubeLabel: 'YouTube',
            
            // About
            aboutTitle: 'Sobre mí',
            aboutP1: 'Desarrollador <strong>Full Stack</strong> especializado en <strong>React, TypeScript y Node.js</strong>, con <strong>+4 años</strong> construyendo producto <strong>B2B</strong>. Desarrollo interfaces y APIs (<strong>GraphQL/REST</strong>) priorizando mantenibilidad, rendimiento y DX mediante <strong>Arquitectura Hexagonal</strong> y DDD.',
            aboutP2: 'Compagino desarrollo de producto con <strong>docencia y divulgación</strong> (Udemy/YouTube), reforzando comunicación y documentación. Además, creo herramientas open-source como <strong>CodeBundle</strong> y uso IA como apoyo en revisión y refactor, manteniendo estándares y <strong>revisión manual</strong>.',
            aboutCta: '¿Quieres ver cómo aplico esto? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--circle" aria-hidden="true"></span><a href="#" data-section-link="experience">Trayectoria</a><span class="detail-cta-icon detail-cta-icon--triangle" aria-hidden="true"></span><a href="#" data-section-link="projects">Proyectos</a></div>',
            eduTitle: 'Formación y certificaciones',
            edu1: 'Certificado de Profesionalidad — Desarrollo de aplicaciones web (SEPE, 2017–2018)',
            edu2: 'AWS (formación) — Architecting on AWS (2024)',
            edu3: 'AWS (formación) — DevOps on AWS (2023)',
            skillsTitle: 'Habilidades',
            skill1: '<strong>Frontend:</strong> React, TypeScript/JavaScript, GraphQL/Apollo, styled-components, i18next',
            skill2: '<strong>Mobile:</strong> Ionic, Angular, Cordova/Capacitor',
            skill3: '<strong>Backend:</strong> Node.js, Express, REST, GraphQL (resolvers), TypeORM, Sequelize, Mongoose, PostgreSQL, MongoDB, JWT, arquitectura hexagonal',
            skill4: '<strong>Testing:</strong> Jest, React Testing Library, Cypress',
            skill5: '<strong>Tooling:</strong> pnpm, Lerna, ESLint, Prettier, Git, GitLab, CI/CD',
            skill6: '<strong>Cloud/DevOps (experiencia básica):</strong> Docker, AWS',
            skill7: '<strong>IA asistida:</strong> Cursor, agentes de IA (revisión manual y estándares)',
            languagesTitle: 'Idiomas',
            lang1: '<strong>Español:</strong> nativo',
            lang2: '<strong>Inglés:</strong> conversacional/técnico',
            expTitle: 'Trayectoria',
            expIntro: 'Experiencia en producto B2B (telecom), desarrollo full stack y divulgación técnica.',
            expRole1: 'Desarrollador de software — SEWAN COMUNICACIONES, S.L',
            expRole1Meta: 'mar. 2021 – actualidad (<span id="years-sewan"></span>) · Producto B2B · Remoto',
            expRole1Li1: 'Producto interno de telecomunicaciones basado en microservicios para venta y gestión de access links, líneas móviles, Starlink, SD‑WAN y elegibilidad.',
            expRole1Li2: 'Desarrollo de UI en React + TypeScript con Apollo (queries, mutations, subscriptions) para plataforma B2B.',
            expRole1Li3: 'Arquitectura hexagonal y DDD: separación de capas, puertos/adaptadores y dominio testeable; realtime con Socket.io.',
            expRole1Li4: 'Diseño e implementación de servicios Node.js (REST/GraphQL) con PostgreSQL y mensajería (SNS/SQS, RabbitMQ).',
            expRole1Li5: 'Implementación de flujos complejos: gestión de estado, formularios (Formik/Yup, react-hook-form) e i18n (i18next).',
            expRole1Li6: 'Calidad: tests unit/integration (Jest + React Testing Library) y E2E (Cypress); estándares con ESLint/Stylelint/Prettier.',
            expRole1Li7: 'Evolución y mantenimiento en monorepo (pnpm/Lerna) y operación con observabilidad (Datadog/Sentry), Docker y CI/CD.',
            expRole2: 'Instructor online — Udemy',
            expRole2Meta: '2018 – actualidad',
            expRole2Li1: 'Curso: "Aplicación web dinámica con Angular 9, Bootstrap y NodeJS (MEAN)". <a href="https://www.udemy.com/course/angular-bootstrap-y-nodejs/" target="_blank" rel="noreferrer">Ver curso</a>.',
            expRole2Li2: 'Calificación 4,3/5 · 218 valoraciones · 10.533 estudiantes.',
            expRole3: 'Creador de contenido — YouTube "Yustgo"',
            expRole3Meta: '2018 – actualidad',
            expRole3Li1: 'Divulgación técnica sobre Angular y desarrollo web (tutoriales, buenas prácticas y ejemplos). <a href="https://www.youtube.com/@yustgo2631" target="_blank" rel="noreferrer">Ver canal</a>.',
            expRole3Li2: '304 suscriptores · 20 vídeos · 47.560 visualizaciones · activo desde 14/03/2020.',
            expCta: '¿Quieres ver más contexto? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--square" aria-hidden="true"></span><a href="#" data-section-link="profile">Sobre mí</a><span class="detail-cta-icon detail-cta-icon--triangle" aria-hidden="true"></span><a href="#" data-section-link="projects">Proyectos</a></div>',
            projTitle: 'Portfolio',
            projIntro: 'Proyectos personales y herramientas open-source enfocadas en arquitectura, DX y productividad.',
            proj1Title: 'Hexagonal Architecture — React + TypeScript',
            proj1Li1: 'Arquitectura hexagonal (Ports & Adapters) aplicada a React/TypeScript.',
            proj1Li2b: 'Separación de capas y enfoque en mantenibilidad.',
            proj1Li2: 'Testing con Jest y E2E con Cypress.',
            proj1Li3: 'Repo: <a href="https://github.com/Arrayo/hexagonal-architecture" target="_blank" rel="noreferrer">github.com/Arrayo/hexagonal-architecture</a>',
            proj1Li4: 'Demo: <a href="https://arrayo.github.io/hexagonal-architecture/" target="_blank" rel="noreferrer">GitHub Pages</a>',
            proj2Title: 'NPM Package — custom-code-input',
            proj2Li1: 'Input OTP/PIN reusable para React, Angular, Vue y vanilla JS.',
            proj2Li2: 'Personalizable: validaciones, callbacks y temas.',
            proj2Li2b: 'Publicado en npm bajo licencia MIT; usado en autenticación y verificación.',
            proj2Li3: 'Package: <a href="https://www.npmjs.com/package/custom-code-input" target="_blank" rel="noreferrer">npmjs.com/package/custom-code-input</a>',
            proj3Title: 'CodeBundle — Editor Extension',
            proj3Li1: 'Extensión que exporta proyectos completos a Markdown optimizado para LLMs.',
            proj3Li2: 'Disponible en VS Code, Cursor, Windsurf y VSCodium.',
            proj3Li2b: 'Redacción de secretos, filtros por globs/.gitignore, árbol del proyecto y auto-copy.',
            proj3Li2c: 'Casos de uso: code review con IA, documentación, onboarding, análisis de arquitectura.',
            proj3Li3: 'Repo: <a href="https://github.com/Arrayo/codebundle" target="_blank" rel="noreferrer">github.com/Arrayo/codebundle</a>',
            proj3Li4: 'VS Marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=arrayo.codebundle" target="_blank" rel="noreferrer">marketplace.visualstudio.com</a>',
            proj3Li5: 'Open VSX: <a href="https://open-vsx.org/extension/arrayo/codebundle" target="_blank" rel="noreferrer">open-vsx.org/extension/arrayo/codebundle</a>',
            projCta: '¿Quieres ver más contexto? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--square" aria-hidden="true"></span><a href="#" data-section-link="profile">Sobre mí</a><span class="detail-cta-icon detail-cta-icon--circle" aria-hidden="true"></span><a href="#" data-section-link="experience">Trayectoria</a></div>',
            footerUdemy: 'Udemy: Angular 9 + Bootstrap + NodeJS (MEAN)',
            footerUdemyShort: 'Udemy: Angular 9 + Bootstrap + NodeJs',
            footerTel: 'Tel: +34 643 660 234'
        },
        en: {
            // Page & SEO
            pageTitle: 'CV | Francisco Caballero Portero',
            metaDescription: 'Full Stack Developer specialized in React, TypeScript and Node.js. 4+ years building B2B products with hexagonal architecture and DDD.',
            ogTitle: 'Francisco Caballero Portero - Full Stack Developer',
            ogDescription: 'Full Stack Developer | React + TypeScript | GraphQL & REST | Node.js',
            authorName: 'Francisco Caballero Portero',
            authorAlt: 'Francisco Caballero Portero',
            avatarAction: 'View repository on GitHub',
            
            // Header
            subtitle: 'Full Stack Developer | React + TypeScript | GraphQL & REST | Node.js',
            location: 'Bullas (Murcia), Spain · Remote',
            
            // Contact
            emailLabel: 'fcp1978@hotmail.com',
            linkedinLabel: 'LinkedIn',
            
            // Stack
            stackTitle: 'Core stack',
            chip1: 'React',
            chip2: 'TypeScript',
            chip3: 'Node.js',
            chip4: 'GraphQL · Apollo',
            chip5: 'PostgreSQL · MongoDB',
            chip6: 'Angular · Ionic',
            
            // Language buttons
            langEs: 'ES',
            langEn: 'EN',
            
            // Navigation
            homeAbout: 'About',
            homeExperience: 'Experience',
            homePortfolio: 'Portfolio',
            back: 'Back',
            closeLabel: 'Close',
            
            // Profile pills
            pillsLabel: 'Specialties and Focus',
            pill1: 'Hexagonal Architecture / DDD',
            pill2: 'Full Stack (Node/React)',
            pill3: 'GraphQL & Apollo Expert',
            pill4: 'Testing (Unit, E2E, Integration)',
            pill5: 'AI-Assisted Engineering',
            pill6: 'Cloud & DevOps (AWS/Docker)',
            pill7: 'Technical Communication',
            
            // Footer
            footerLabel: 'Links',
            githubLabel: 'GitHub',
            youtubeLabel: 'YouTube',
            
            // About
            aboutTitle: 'About me',
            aboutP1: 'Full Stack developer specialized in <strong>React, TypeScript, and Node.js</strong>, with <strong>4+ years</strong> building <strong>B2B</strong> products. I ship UIs and APIs (<strong>GraphQL/REST</strong>) focused on maintainability, performance, and DX via <strong>Hexagonal Architecture</strong> and DDD.',
            aboutP2: 'I combine product engineering with <strong>teaching and technical content</strong> (Udemy/YouTube), which strengthens communication and documentation. I also build open-source tools like <strong>CodeBundle</strong> and use AI to support reviews and refactors, always with standards and <strong>manual review</strong>.',
            aboutCta: 'Want to see how I apply this? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--circle" aria-hidden="true"></span><a href="#" data-section-link="experience">Experience</a><span class="detail-cta-icon detail-cta-icon--triangle" aria-hidden="true"></span><a href="#" data-section-link="projects">Projects</a></div>',
            eduTitle: 'Education & certifications',
            edu1: 'Professional Certificate — Web application development (SEPE, 2017–2018)',
            edu2: 'AWS (training) — Architecting on AWS (2024)',
            edu3: 'AWS (training) — DevOps on AWS (2023)',
            skillsTitle: 'Skills',
            skill1: '<strong>Frontend:</strong> React, TypeScript/JavaScript, GraphQL/Apollo, styled-components, i18next',
            skill2: '<strong>Mobile:</strong> Ionic, Angular, Cordova/Capacitor',
            skill3: '<strong>Backend:</strong> Node.js, Express, REST, GraphQL (resolvers), TypeORM, Sequelize, Mongoose, PostgreSQL, MongoDB, JWT, hexagonal architecture',
            skill4: '<strong>Testing:</strong> Jest, React Testing Library, Cypress',
            skill5: '<strong>Tooling:</strong> pnpm, Lerna, ESLint, Prettier, Git, GitLab, CI/CD',
            skill6: '<strong>Cloud/DevOps (basic experience):</strong> Docker, AWS',
            skill7: '<strong>AI‑assisted:</strong> Cursor, AI agents (manual review and standards)',
            languagesTitle: 'Languages',
            lang1: '<strong>Spanish:</strong> native',
            lang2: '<strong>English:</strong> conversational/technical',
            expTitle: 'Experience',
            expIntro: 'Experience in B2B product (telecom), full-stack development, and technical content.',
            expRole1: 'Software developer — SEWAN COMUNICACIONES, S.L',
            expRole1Meta: 'Mar 2021 – present (<span id="years-sewan"></span>) · B2B product · Remote',
            expRole1Li1: 'Internal telecom product based on microservices for sales/management of access links, mobile lines, Starlink, SD‑WAN, and eligibility.',
            expRole1Li2: 'UI development with React + TypeScript and Apollo (queries, mutations, subscriptions) for a B2B platform.',
            expRole1Li3: 'Hexagonal architecture and DDD: clear layering, ports/adapters, testable domain; realtime with Socket.io.',
            expRole1Li4: 'Design and implementation of Node.js services (REST/GraphQL) with PostgreSQL and messaging (SNS/SQS, RabbitMQ).',
            expRole1Li5: 'Complex flows: state management, forms (Formik/Yup, react-hook-form), and i18n (i18next).',
            expRole1Li6: 'Quality: unit/integration tests (Jest + React Testing Library) and E2E (Cypress); standards with ESLint/Stylelint/Prettier.',
            expRole1Li7: 'Monorepo work (pnpm/Lerna) and operations with observability (Datadog/Sentry), Docker, and CI/CD.',
            expRole2: 'Online instructor — Udemy',
            expRole2Meta: '2018 – present',
            expRole2Li1: 'Course: "Dynamic web app with Angular 9, Bootstrap and NodeJS (MEAN)". <a href="https://www.udemy.com/course/angular-bootstrap-y-nodejs/" target="_blank" rel="noreferrer">View course</a>.',
            expRole2Li2: 'Rating 4.3/5 · 218 reviews · 10,533 students.',
            expRole3: 'Content creator — YouTube "Yustgo"',
            expRole3Meta: '2018 – present',
            expRole3Li1: 'Technical content on Angular and web development (tutorials, best practices, real examples). <a href="https://www.youtube.com/@yustgo2631" target="_blank" rel="noreferrer">View channel</a>.',
            expRole3Li2: '304 subscribers · 20 videos · 47,560 views · active since 2020‑03‑14.',
            expCta: 'Want more context? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--square" aria-hidden="true"></span><a href="#" data-section-link="profile">About</a><span class="detail-cta-icon detail-cta-icon--triangle" aria-hidden="true"></span><a href="#" data-section-link="projects">Projects</a></div>',
            projTitle: 'Portfolio',
            projIntro: 'Open-source projects and tools focused on architecture, DX, and productivity.',
            proj1Title: 'Hexagonal Architecture — React + TypeScript',
            proj1Li1: 'Hexagonal architecture (Ports & Adapters) applied to React/TypeScript.',
            proj1Li2b: 'Layer separation with a maintainability focus.',
            proj1Li2: 'Testing with Jest and E2E with Cypress.',
            proj1Li3: 'Repo: <a href="https://github.com/Arrayo/hexagonal-architecture" target="_blank" rel="noreferrer">github.com/Arrayo/hexagonal-architecture</a>',
            proj1Li4: 'Demo: <a href="https://arrayo.github.io/hexagonal-architecture/" target="_blank" rel="noreferrer">GitHub Pages</a>',
            proj2Title: 'NPM package — custom-code-input',
            proj2Li1: 'Reusable OTP/PIN input for React, Angular, Vue, and vanilla JS.',
            proj2Li2: 'Customizable: validations, callbacks, and themes.',
            proj2Li2b: 'Published on npm under MIT license; used in authentication and verification.',
            proj2Li3: 'Package: <a href="https://www.npmjs.com/package/custom-code-input" target="_blank" rel="noreferrer">npmjs.com/package/custom-code-input</a>',
            proj3Title: 'CodeBundle — Editor extension',
            proj3Li1: 'Extension that exports full projects to Markdown optimized for LLMs.',
            proj3Li2: 'Available in VS Code, Cursor, Windsurf, and VSCodium.',
            proj3Li2b: 'Secret redaction, glob/.gitignore filters, project tree, and auto-copy.',
            proj3Li2c: 'Use cases: AI code review, documentation, onboarding, architecture analysis.',
            proj3Li3: 'Repo: <a href="https://github.com/Arrayo/codebundle" target="_blank" rel="noreferrer">github.com/Arrayo/codebundle</a>',
            proj3Li4: 'VS Marketplace: <a href="https://marketplace.visualstudio.com/items?itemName=arrayo.codebundle" target="_blank" rel="noreferrer">marketplace.visualstudio.com</a>',
            proj3Li5: 'Open VSX: <a href="https://open-vsx.org/extension/arrayo/codebundle" target="_blank" rel="noreferrer">open-vsx.org/extension/arrayo/codebundle</a>',
            projCta: 'Want more context? <div class="detail-cta-links"><span class="detail-cta-icon detail-cta-icon--square" aria-hidden="true"></span><a href="#" data-section-link="profile">About</a><span class="detail-cta-icon detail-cta-icon--circle" aria-hidden="true"></span><a href="#" data-section-link="experience">Experience</a></div>',
            footerUdemy: 'Udemy: Angular 9 + Bootstrap + NodeJS (MEAN)',
            footerUdemyShort: 'Udemy: Angular 9 + Bootstrap + NodeJs',
            footerTel: 'Phone: +34 643 660 234'
        }
    };

    // ============================================
    // DATE UTILITIES
    // ============================================
    
    const SEWAN_START_DATE = new Date(2021, 2, 1); // March 2021
    const BIRTH_DATE = new Date(1978, 9, 15); // October 15, 1978

    /**
     * Calculate tenure from a start date to now
     */
    function calculateTenure(startDate) {
        const now = new Date();
        let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 
                        + (now.getMonth() - startDate.getMonth());
        
        if (now.getDate() < startDate.getDate()) {
            totalMonths -= 1;
        }
        
        return {
            years: Math.max(0, Math.floor(totalMonths / 12)),
            months: Math.max(0, totalMonths % 12)
        };
    }

    /**
     * Format tenure for display
     */
    function formatTenure(tenure, lang) {
        const { years, months } = tenure;
        
        if (lang === 'en') {
            const y = years === 1 ? '1 year' : years + ' years';
            const m = months === 1 ? '1 month' : months + ' months';
            return months > 0 ? y + ' ' + m : y;
        }
        
        const y = years === 1 ? '1 año' : years + ' años';
        const m = months === 1 ? '1 mes' : months + ' meses';
        return months > 0 ? y + ' ' + m : y;
    }

    /**
     * Calculate age from birth date
     */
    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }

    // ============================================
    // LANGUAGE SERVICE
    // ============================================
    
    const LanguageService = {
        currentLang: localStorage.getItem('lang') || 'es',

        getDictionary: function(lang) {
            return translations[lang || this.currentLang] || translations.es;
        },

        setLanguage: function(lang) {
            if (!translations[lang]) return;
            
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            
            this.applyTranslations();
            this.updateSewanYears();
            this.updateFooterUdemy();
        },

        applyTranslations: function() {
            const dict = this.getDictionary();
            
            // Page title
            if (dict.pageTitle) {
                document.title = dict.pageTitle;
            }
            
            // Text content
            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) el.textContent = dict[key];
            });
            
            // HTML content
            document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-html');
                if (dict[key]) el.innerHTML = dict[key];
            });
            
            // Aria labels
            document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-aria');
                if (dict[key]) el.setAttribute('aria-label', dict[key]);
            });
            
            // Alt attributes
            document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-alt');
                if (dict[key]) el.setAttribute('alt', dict[key]);
            });
            
            // Title attributes
            document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-title');
                if (dict[key]) el.setAttribute('title', dict[key]);
            });
            
            // Meta content attributes
            document.querySelectorAll('[data-i18n-content]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-content');
                if (dict[key]) el.setAttribute('content', dict[key]);
            });
        },

        updateSewanYears: function() {
            const yearsEl = document.getElementById('years-sewan');
            if (!yearsEl) return;
            
            const tenure = calculateTenure(SEWAN_START_DATE);
            yearsEl.textContent = formatTenure(tenure, this.currentLang);
        },

        updateFooterUdemy: function() {
            const isMobile = window.matchMedia('(max-width: 680px)').matches;
            const dict = this.getDictionary();
            
            document.querySelectorAll('[data-i18n-mobile="footerUdemyShort"]').forEach(function(el) {
                const key = isMobile ? 'footerUdemyShort' : 'footerUdemy';
                if (dict[key]) el.textContent = dict[key];
            });
        },

        initButtons: function(buttons) {
            const self = this;
            
            buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    buttons.forEach(function(b) { b.classList.remove('btn--active'); });
                    btn.classList.add('btn--active');
                    self.setLanguage(btn.dataset.lang);
                });
            });
            
            // Set initial active button
            const initialBtn = document.querySelector('.btn[data-lang="' + this.currentLang + '"]');
            if (initialBtn) {
                buttons.forEach(function(b) { b.classList.remove('btn--active'); });
                initialBtn.classList.add('btn--active');
            }
        }
    };

    // ============================================
    // NAVIGATION SERVICE
    // ============================================
    
    const NavigationService = {
        currentView: 'home',
        scrollElements: null,

        init: function() {
            const self = this;
            
            this.scrollElements = document.querySelectorAll(
                '.view--profile .profile-content-inner, ' +
                '.view--experience .profile-content-inner, ' +
                '.view--projects .profile-content-inner'
            );

            // Section card clicks
            document.querySelectorAll('.shape-item').forEach(function(card) {
                card.addEventListener('click', function() {
                    const section = card.dataset.section;
                    if (section) self.navigateTo(section);
                });
            });

            // Section link clicks (detail CTAs)
            document.addEventListener('click', function(e) {
                const link = e.target.closest('[data-section-link]');
                if (!link) return;
                
                e.preventDefault();
                const section = link.dataset.sectionLink;
                if (section) self.navigateTo(section);
            });

            // Back buttons
            document.querySelectorAll('.back-btn').forEach(function(btn) {
                btn.addEventListener('click', function() { self.goHome(); });
            });

            // Avatar click -> GitHub repo
            var avatar = document.querySelector('.avatar');
            if (avatar) {
                var openRepo = function() {
                    window.open('https://github.com/Arrayo/portfolio', '_blank', 'noopener');
                };
                avatar.addEventListener('click', openRepo);
                avatar.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openRepo();
                    }
                });
            }

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && self.currentView !== 'home') {
                    self.goHome();
                }
            });

            // Scroll event for hint
            this.scrollElements.forEach(function(scrollEl) {
                scrollEl.addEventListener('scroll', function() { self.updateScrollHint(); });
            });

            // Initial state
            this.triggerFadeAnimation();
            this.updateScrollHint();
        },

        navigateTo: function(view) {
            this.currentView = view;
            document.body.dataset.view = view;
            
            window.scrollTo(0, 0);
            this.updateAriaStates(view);
            this.triggerFadeAnimation();
            this.resetScroll(view);
            this.updateScrollHint();
        },

        goHome: function() {
            this.navigateTo('home');
        },

        updateAriaStates: function(activeView) {
            ['home', 'profile', 'experience', 'projects'].forEach(function(view) {
                const el = document.querySelector('.view--' + view);
                if (el) {
                    el.setAttribute('aria-hidden', view !== activeView ? 'true' : 'false');
                }
            });
        },

        triggerFadeAnimation: function() {
            const mainCard = document.querySelector('.main-card');
            if (!mainCard) return;
            
            mainCard.classList.remove('fade-in');
            void mainCard.offsetWidth; // Force reflow
            mainCard.classList.add('fade-in');
        },

        resetScroll: function(view) {
            const scrollEl = document.querySelector('.view--' + view + ' .profile-content-inner');
            if (scrollEl) {
                scrollEl.scrollTop = 0;
            }
        },

        updateScrollHint: function() {
            if (!this.scrollElements) return;
            
            this.scrollElements.forEach(function(scrollEl) {
                const canScroll = scrollEl.scrollHeight > scrollEl.clientHeight + 1;
                const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1;
                scrollEl.classList.toggle('scroll-hint', canScroll && !atBottom);
            });
        }
    };

    // ============================================
    // APP INITIALIZATION
    // ============================================
    
    function initApp() {
        // Initialize language
        const langButtons = document.querySelectorAll('.btn[data-lang]');
        LanguageService.initButtons(langButtons);
        LanguageService.setLanguage(LanguageService.currentLang);
        
        // Initialize navigation
        NavigationService.init();
        
        // Update age if element exists
        const ageEl = document.getElementById('age');
        if (ageEl) {
            ageEl.textContent = String(calculateAge(BIRTH_DATE));
        }
        
        // Window resize handler
        window.addEventListener('resize', function() {
            LanguageService.updateFooterUdemy();
            NavigationService.updateScrollHint();
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
