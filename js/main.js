/* ============================================
   MAIN JAVASCRIPT
   Funcionalidades gerais e da navbar
   ============================================ */

const NavbarHandler = {
  navbar: null,
  toggle: null,
  menu: null,
  isScrolled: false,
  
  init() {
    this.navbar = document.querySelector('.navbar');
    this.toggle = document.querySelector('.navbar-toggle');
    this.menu = document.querySelector('.navbar-menu');
    
    if (!this.toggle || !this.menu) return;
    
    this.attachEventListeners();
    this.handleScroll();
  },
  
  attachEventListeners() {
    // Clique no toggle do menu mobile
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    
    // Detectar scroll
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    
    // Fechar menu ao redimensionar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        this.closeMenu();
      }
    });
  },
  
  toggleMenu() {
    const isOpen = this.toggle.getAttribute('aria-expanded') === 'true';
    this.setMenuState(!isOpen);
  },
  
  openMenu() {
    this.setMenuState(true);
  },
  
  closeMenu() {
    this.setMenuState(false);
  },
  
  setMenuState(isOpen) {
    this.toggle.setAttribute('aria-expanded', isOpen);
    this.menu.setAttribute('aria-hidden', !isOpen);
  },
  
  handleScroll() {
    const scrolled = window.scrollY > 50;
    
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      this.navbar.classList.toggle('scrolled', scrolled);
    }
  }
};

// Atualizar link ativo na navbar conforme a página atual
const NavActiveHandler = {
  init() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      const linkFile = href.split('/').pop();
      
      if (linkFile === fileName || (fileName === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};

// Inicializar ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  NavbarHandler.init();
  NavActiveHandler.init();
});


// No unused lazy-loading behavior remains for this project.
