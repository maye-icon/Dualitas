/* ============================================
   LANGUAGE SYSTEM
   Sistema de idiomas com suporte a PT/EN
   ============================================ */

const LanguageSystem = {
  currentLanguage: 'pt',
  supportedLanguages: ['pt', 'en'],
  
  init() {
    // Recuperar idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('conexoes-language');
    this.currentLanguage = (savedLanguage && this.supportedLanguages.includes(savedLanguage)) 
      ? savedLanguage 
      : 'pt';
    
    this.updateUI();
    this.attachEventListeners();
  },
  
  attachEventListeners() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.dataset.lang;
        if (lang && this.supportedLanguages.includes(lang)) {
          this.setLanguage(lang);
        }
      });
    });
  },
  
  setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) return;
    
    this.currentLanguage = lang;
    localStorage.setItem('conexoes-language', lang);
    this.updateUI();
  },
  
  updateUI() {
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
    });
    
    // Atualizar textos multilíngues
    document.querySelectorAll('[data-pt][data-en]').forEach(element => {
      const text = element.getAttribute(`data-${this.currentLanguage}`);
      if (text) {
        element.textContent = text;
      }
    });
    
    // Atualizar atributos de idioma
    document.documentElement.lang = this.currentLanguage;
  },
  
  get(key) {
    // Método útil para recuperar strings de tradução programaticamente
    const element = document.querySelector(`[data-pt="${key}"]`);
    if (element) {
      return element.getAttribute(`data-${this.currentLanguage}`) || key;
    }
    return key;
  }
};

// Inicializar sistema de idiomas quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  LanguageSystem.init();
});
