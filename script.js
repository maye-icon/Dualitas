// Objeto com as traduções
const translations = {
    pt: {
        brand: "Conexões",
        galeria: "Galeria",
        sobre: "Sobre",
        autores: "Autores",
        authorsTitle: "Autores",
        title: "Conexões",
        subtitle: "Uma exploração visual sobre as formas de conexão humana em um mundo cada vez mais digital.",
        btn: "VER GALERIA",
        footer: "Conexões © 2026",
        galleryTitle: "Galeria",
        chapter1Number: "PARTE 1",
        chapter1Title: "Cidade <Conectada/Infectada>",
        chapter2Number: "PARTE 2",
        chapter2Title: "<Conexão/Infecção>",
        chapter3Number: "PARTE 3",
        chapter3Title: "<Desconexão/Cura>",
        sobreIntro: "Conexões se trata de uma exposição fotográfica com foco na ideia de conexão em um mundo cada vez mais digital e modernizado, seja no ambiente físico, relações interpessoais e questões de identidade.",
        part1Title: "Parte 1: Cidade <Conectada/Infectada>",
        part1Text: "Cabos, postes, ferros, pedras e metais crescem e invadem. Formam uma selva de pedra. Dados são transmitidos. Estabelecem conexão. Facilitam, unem, dividem e aprisionam. Nos perdemos mas encontramos tudo. Conectam e infectam. Tornam todos conectados e infectados. Novo Mundo. Artificial. Cinza e verde.",
        part2Title: "Parte 2: <Conexão/Infecção>",
        part2Text: "Processo de transformação Iniciada. Acesso autorizado. Informações acessadas. Overdose de informações. Nova visão. Novas visões. Construídas por algoritmos. Moldagem. Distorção de mundo. Transmutação completa. Novo eu. Apático. Viciado. Perdido. Odioso. Melancólico. Conectado. Infectado.",
        part3Title: "Parte3: <Desconexão/Cura>",
        part3Text: "Retorno ao esquecido. Antítese. Contraponto. Respiro em meio aos metais, fios e dados. Libertam e relembram. Sentimentos reais. Lembranças reais. Memórias reais. Vislumbre. Momentos compartilhados. Mundo atemporal. Presente porém esquecido por muitos. Vivo. Real. Verde, amarelo e azul."
    },
    en: {
        brand: "Connections",
        galeria: "Gallery",
        sobre: "About",
        autores: "Authors",
        authorsTitle: "Authors",
        title: "Connections",
        subtitle: "A visual exploration of human connection forms in an increasingly digital world.",
        btn: "VIEW GALLERY",
        footer: "Connections © 2026",
        galleryTitle: "Gallery",
        chapter1Number: "PART 1",
        chapter1Title: "City <Connected/Infected>",
        chapter2Number: "PART 2",
        chapter2Title: "<Connection/Infection>",
        chapter3Number: "PART 3",
        chapter3Title: "<Disconnection/Cure>",
        sobreIntro: "Connections is a photographic exhibition focused on the idea of connection in an increasingly digital and modernized world, whether in the physical environment, interpersonal relationships, and identity issues.",
        part1Title: "Part 1: City <Connected/Infected>",
        part1Text: "Cables, poles, irons, stones and metals grow and invade. They form a stone jungle. Data is transmitted. They establish connection. They facilitate, unite, divide and imprison. We get lost but find everything. They connect and infect. They make everyone connected and infected. New World. Artificial. Gray and green.",
        part2Title: "Part 2: <Connection/Infection>",
        part2Text: "Transformation process initiated. Authorized access. Information accessed. Information overdose. New vision. New visions. Built by algorithms. Molding. World distortion. Complete transmutation. New me. Apathetic. Addicted. Lost. Hateful. Melancholic. Connected. Infected.",
        part3Title: "Part3: <Disconnection/Cure>",
        part3Text: "Return to the forgotten. Antithesis. Counterpoint. I breathe amidst the metals, wires and data. They free and remind. Real feelings. Real memories. Real memories. Glimpse. Shared moments. Timeless world. Present but forgotten by many. Alive. Real. Green, yellow and blue."
    }
};

// Idioma atual
let currentLang = 'pt';

// Função para mudar o idioma
function switchLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    
    // Atualizar o atributo lang do documento
    document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : 'en';
    
    // Atualizar o botão de idioma
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT-BR';
    }

    // Atualizar textos (só se o elemento existir)
    if (document.querySelector('.brand')) document.querySelector('.brand').textContent = translations[currentLang].brand;
    const authorsTitleEl = document.getElementById('authors-title');
    if (authorsTitleEl) authorsTitleEl.textContent = translations[currentLang].authorsTitle;
    if (document.querySelector('a[href="galeria.html"]')) document.querySelector('a[href="galeria.html"]').textContent = translations[currentLang].galeria;
    if (document.querySelector('a[href="sobre.html"]')) document.querySelector('a[href="sobre.html"]').textContent = translations[currentLang].sobre;
    if (document.querySelector('a[href="autores.html"]')) document.querySelector('a[href="autores.html"]').textContent = translations[currentLang].autores;
    if (document.querySelector('.hero-title')) document.querySelector('.hero-title').textContent = translations[currentLang].title;
    if (document.querySelector('.hero-subtitle')) document.querySelector('.hero-subtitle').textContent = translations[currentLang].subtitle;
    if (document.querySelector('.btn-gallery')) document.querySelector('.btn-gallery').textContent = translations[currentLang].btn;
    if (document.querySelector('.site-footer p')) document.querySelector('.site-footer p').textContent = translations[currentLang].footer;
    if (document.querySelector('.gallery-title h1')) document.querySelector('.gallery-title h1').textContent = translations[currentLang].galleryTitle;
    if (document.querySelectorAll('.chapter-number').length > 0) {
        document.querySelectorAll('.chapter-number')[0].textContent = translations[currentLang].chapter1Number;
        if (document.querySelectorAll('.chapter-number').length > 1) document.querySelectorAll('.chapter-number')[1].textContent = translations[currentLang].chapter2Number;
        if (document.querySelectorAll('.chapter-number').length > 2) document.querySelectorAll('.chapter-number')[2].textContent = translations[currentLang].chapter3Number;
    }
    if (document.querySelectorAll('.chapter-title').length > 0) {
document.querySelectorAll('.chapter-title')[0].textContent = translations[currentLang].chapter1Title;
        if (document.querySelectorAll('.chapter-title').length > 1) document.querySelectorAll('.chapter-title')[1].textContent = translations[currentLang].chapter2Title;
        if (document.querySelectorAll('.chapter-title').length > 2) document.querySelectorAll('.chapter-title')[2].textContent = translations[currentLang].chapter3Title;
    }

    // Traduções para a página Sobre
    const sobrePs = document.querySelectorAll('.hero-content p');
    if (sobrePs.length >= 4) {
        sobrePs[0].textContent = translations[currentLang].sobreIntro;
        sobrePs[1].textContent = translations[currentLang].part1Text;
        sobrePs[2].textContent = translations[currentLang].part2Text;
        sobrePs[3].textContent = translations[currentLang].part3Text;
    }
    const sobreH4s = document.querySelectorAll('.hero-content h4');
    if (sobreH4s.length >= 3) {
        sobreH4s[0].textContent = translations[currentLang].part1Title;
        sobreH4s[1].textContent = translations[currentLang].part2Title;
        sobreH4s[2].textContent = translations[currentLang].part3Title;
    }

}

// Inicializar o botão com o idioma correto
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = 'EN'; // começa em PT, então exibe EN
    }
});

// Adicionar evento ao botão
document.getElementById('lang-toggle').addEventListener('click', switchLanguage);

/* ================= NAV TOGGLE (mobile hamburger) ================= */
(function(){
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    const BREAKPOINT = 768; // px

    if(!navToggle || !navList) return; // nothing to do on pages without the new markup

    // ensure initial state
    if(window.innerWidth <= BREAKPOINT) navList.classList.add('mobile-closed');

    function openNav(){
        navToggle.setAttribute('aria-expanded','true');
        navList.classList.remove('mobile-closed');
        navList.classList.add('mobile-open');
    }

    function closeNav(){
        navToggle.setAttribute('aria-expanded','false');
        navList.classList.remove('mobile-open');
        navList.classList.add('mobile-closed');
    }

    navToggle.addEventListener('click', ()=>{
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        if(expanded) closeNav(); else openNav();
    });

    // close when clicking a nav link or language button (mobile)
    navList.addEventListener('click', (e)=>{
        const target = e.target.closest('a, button');
        if(!target) return;
        if(window.innerWidth <= BREAKPOINT) closeNav();
    });

    // close on Escape
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });

    // on resize, remove mobile classes when switching to desktop
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > BREAKPOINT){
            navList.classList.remove('mobile-open','mobile-closed');
            navToggle.setAttribute('aria-expanded','false');
        } else if(!navList.classList.contains('mobile-open')){
            navList.classList.add('mobile-closed');
        }
    });

})();
