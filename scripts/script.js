// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const logoLink = document.querySelector('.logo');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
const barsBox = document.querySelector('.bars-box');

// ═══════════════════════════════════════════
//  ENTRADA DA PAGINA: barras deslizam para
//  cima revelando o conteudo por tras
// ═══════════════════════════════════════════
function playIntro() {
    // Garantir que a home esta visivel
    sections[0].classList.add('active');

    const tl = gsap.timeline({
        onComplete: () => {
            barsBox.classList.add('hidden');
            document.body.classList.add('loaded');
        }
    });

    // As barras comecam visiveis (translateY: 0 no CSS)
    // Deslizam para cima em stagger
    tl.to('.bars-box .bar', {
        y: '-100%',
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.inOut'
    });

    // Conteudo do home entra com fromTo (estado explicito)
    tl.fromTo('.home-detail h1',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
    );

    tl.fromTo('.home-detail h2',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
    );

    tl.fromTo('.home-detail > p',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.2'
    );

    tl.fromTo('.btn-sci',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.2'
    );

    tl.fromTo('.home-img',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' },
        '-=0.4'
    );

    tl.fromTo('header',
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.5'
    );
}

// ═══════════════════════════════════════════
//  NAVEGACAO ENTRE SECOES
// ═══════════════════════════════════════════
function goToSection(idx) {
    // Mostrar barras cobrindo a pagina
    barsBox.classList.remove('hidden');
    gsap.set('.bars-box .bar', { y: '0%' });

    // Esconder secao atual
    const currentActive = document.querySelector('section.active');
    if (currentActive) {
        gsap.to(currentActive, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                currentActive.classList.remove('active');
                gsap.set(currentActive, { clearProps: 'all' });

                // Deslizar barras para cima
                gsap.to('.bars-box .bar', {
                    y: '-100%',
                    duration: 0.5,
                    stagger: 0.06,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        barsBox.classList.add('hidden');

                        // Mostrar nova secao
                        const target = sections[idx];
                        target.classList.add('active');
                        gsap.fromTo(target,
                            { opacity: 0 },
                            { opacity: 1, duration: 0.3 }
                        );

                        animateSection(idx);
                    }
                });
            }
        });
    }
}

// ═══════════════════════════════════════════
//  ANIMACOES POR SECAO
// ═══════════════════════════════════════════
function animateSection(idx) {
    switch (idx) {
        case 0: animateHome(); break;
        case 1: animateServices(); break;
        case 2: animateResume(); break;
        case 3: animateContact(); break;
    }
}

function animateHome() {
    const tl = gsap.timeline();
    tl.fromTo('.home-detail h1',
        { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    tl.fromTo('.home-detail h2',
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    tl.fromTo('.home-detail > p',
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.2');
    tl.fromTo('.btn-sci',
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.2');
    tl.fromTo('.home-img',
        { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.3');
}

function animateServices() {
    const tl = gsap.timeline();
    tl.fromTo('.services .heading',
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    tl.fromTo('.services-box',
        { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out' }, '-=0.2');
}

function animateResume() {
    const tl = gsap.timeline();
    tl.fromTo('.resume-box',
        { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    tl.fromTo('.resume-content',
        { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    tl.fromTo('.resume-item',
        { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' }, '-=0.2');
}

function animateContact() {
    const tl = gsap.timeline();
    tl.fromTo('.contact-box:first-child',
        { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    tl.fromTo('.contact-box:last-child',
        { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    tl.fromTo('.contact-detail',
        { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power3.out' }, '-=0.2');
    tl.fromTo('.field-box input, .field-box textarea',
        { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: 'power3.out' }, '-=0.1');
}

// ═══════════════════════════════════════════
//  EVENT LISTENERS
// ═══════════════════════════════════════════

// Navegacao
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            goToSection(idx);
        }
    });
});

// Logo volta para home
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[0].classList.add('active');
        goToSection(0);
    }
});

// Menu mobile
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

// Fechar menu mobile ao clicar num link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('active');
    });
});

// Tabs do resume
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        resumeDetails.forEach(d => d.classList.remove('active'));
        resumeDetails[idx].classList.add('active');

        gsap.fromTo(resumeDetails[idx],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        );

        const items = resumeDetails[idx].querySelectorAll('.resume-item, .skill-item');
        gsap.fromTo(items,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
        );
    });
});

// ═══════════════════════════════════════════
//  HOVER ANIMATIONS
// ═══════════════════════════════════════════
document.querySelectorAll('.services-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.03, borderColor: '#105ec4', duration: 0.3 });
        gsap.to(box.querySelector('h3'), { color: '#105ec4', duration: 0.3 });
    });
    box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 1, borderColor: '#323946', duration: 0.3 });
        gsap.to(box.querySelector('h3'), { color: '#fff', duration: 0.3 });
    });
});

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.08, borderColor: '#105ec4', duration: 0.3 });
        gsap.to(item.querySelector('i'), { color: '#105ec4', duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, borderColor: 'transparent', duration: 0.3 });
        gsap.to(item.querySelector('i'), { color: '#fff', duration: 0.3 });
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.3 }));
    btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3 }));
});

document.querySelectorAll('.sci a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 360, duration: 0.5, ease: 'back.out(1.7)' });
    });
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
    });
});

// ═══════════════════════════════════════════
//  PARALLAX na foto
// ═══════════════════════════════════════════
const homeImg = document.querySelector('.home-img');
if (homeImg) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        gsap.to(homeImg, { x: x, y: y, duration: 0.5, ease: 'power2.out' });
    });
}

// ═══════════════════════════════════════════
//  INICIO: animacao de entrada
// ═══════════════════════════════════════════
playIntro();
