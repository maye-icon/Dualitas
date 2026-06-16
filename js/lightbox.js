/* ============================================
   LIGHTBOX HANDLER
   Gerenciar visualização de fotos em fullscreen
   ============================================ */

const LightboxHandler = {
  lightbox: null,
  currentChapter: null,
  currentIndex: 0,
  allImages: [],
  isOpen: false,
  touchStartX: 0,
  scrollPosition: 0,
  previousFocus: null,
  
  init() {
    this.lightbox = document.getElementById('lightbox');
    if (!this.lightbox) return;
    
    this.attachEventListeners();
    this.preloadGalleryData();
  },
  
  preloadGalleryData() {
    // Preparar dados de todas as imagens para navegação
    Object.keys(GalleryHandler.chapters).forEach(chapterKey => {
      this.allImages[chapterKey] = GalleryHandler.chapters[chapterKey].images;
    });
  },
  
  attachEventListeners() {
    // Botões de controle
    document.querySelector('.lightbox-close')?.addEventListener('click', () => this.close());
    document.querySelector('.lightbox-prev')?.addEventListener('click', () => this.prev());
    document.querySelector('.lightbox-next')?.addEventListener('click', () => this.next());
    
    // Teclado
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
    
    // Touch/Swipe
    const imageContainer = document.querySelector('.lightbox-image-container');
    if (imageContainer) {
      imageContainer.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      });
      
      imageContainer.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = this.touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            this.next();
          } else {
            this.prev();
          }
        }
      });
    }
    
    // Fechar ao clicar fora da imagem
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });
  },
  
  openGallery(chapterKey, imageIndex) {
    this.currentChapter = chapterKey;
    this.currentIndex = imageIndex;
    this.isOpen = true;
    
    this.scrollPosition = window.scrollY || window.pageYOffset;
    this.previousFocus = document.activeElement;

    this.lightbox.showModal();
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.width = '100%';
    document.body.classList.add('lightbox-open');
    
    this.updateImage();
    
    // Focar no botão de fechar para acessibilidade
    document.querySelector('.lightbox-close')?.focus();
  },
  
  close() {
    if (!this.isOpen) return;
    
    this.lightbox.close();
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    document.body.classList.remove('lightbox-open');
    this.isOpen = false;

    window.scrollTo({ top: this.scrollPosition, behavior: 'auto' });
    if (this.previousFocus instanceof HTMLElement) {
      this.previousFocus.focus();
    }
  },
  
  next() {
    if (!this.isOpen) return;
    
    const imageCount = this.allImages[this.currentChapter]?.length || 0;
    this.currentIndex = (this.currentIndex + 1) % imageCount;
    this.updateImage();
  },
  
  prev() {
    if (!this.isOpen) return;
    
    const imageCount = this.allImages[this.currentChapter]?.length || 0;
    this.currentIndex = (this.currentIndex - 1 + imageCount) % imageCount;
    this.updateImage();
  },
  
  updateImage() {
    const image = this.allImages[this.currentChapter]?.[this.currentIndex];
    if (!image) return;
    
    const imgElement = document.getElementById('lightbox-image');
    const chapter = GalleryHandler.chapters[this.currentChapter];
    const fullFolder = chapter.fullFolder || chapter.folder;
    
    // Fade out
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
      imgElement.src = `${fullFolder}/${image.src}`;
      imgElement.alt = image.alt;
      
      // Fade in
      imgElement.style.opacity = '1';
    }, 150);
    
    // Atualizar contador
    const currentSpan = document.getElementById('lightbox-current');
    const totalSpan = document.getElementById('lightbox-total');
    
    if (currentSpan) currentSpan.textContent = this.currentIndex + 1;
    if (totalSpan) totalSpan.textContent = this.allImages[this.currentChapter].length;
    
    // Precarregar próxima imagem
    this.preloadNextImage();
  },
  
  preloadNextImage() {
    const nextIndex = (this.currentIndex + 1) % this.allImages[this.currentChapter].length;
    const nextImage = this.allImages[this.currentChapter][nextIndex];
    const chapter = GalleryHandler.chapters[this.currentChapter];
    const fullFolder = chapter.fullFolder || chapter.folder;
    
    if (nextImage) {
      const img = new Image();
      img.src = `${fullFolder}/${nextImage.src}`;
    }
  }
};

// Inicializar lightbox
document.addEventListener('DOMContentLoaded', () => {
  LightboxHandler.init();
});
