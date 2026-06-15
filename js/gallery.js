/* ============================================
   GALLERY HANDLER
   Gerenciar carregamento de imagens
   ============================================ */

const GalleryHandler = {
  // Estrutura de capítulos com imagens
  chapters: {
    chapter01: {
      title: 'Capítulo 01 - Mundo Conectado / Decadente',
      folder: 'images/capitulo1',
      images: [
        { src: '0.webp', alt: 'Mundo Conectado / Decadente - Imagem 1' },
        { src: '1.webp', alt: 'Mundo Conectado / Decadente - Imagem 2' },
        { src: '2.webp', alt: 'Mundo Conectado / Decadente - Imagem 3' },
        { src: '3.webp', alt: 'Mundo Conectado / Decadente - Imagem 4' },
        { src: '4.webp', alt: 'Mundo Conectado / Decadente - Imagem 5' },
        { src: '5.webp', alt: 'Mundo Conectado / Decadente - Imagem 6' },
        { src: '6.webp', alt: 'Mundo Conectado / Decadente - Imagem 7' },
        { src: '7.webp', alt: 'Mundo Conectado / Decadente - Imagem 8' },
        { src: '8.webp', alt: 'Mundo Conectado / Decadente - Imagem 9' },
        { src: '9.webp', alt: 'Mundo Conectado / Decadente - Imagem 10' },
        { src: '10.webp', alt: 'Mundo Conectado / Decadente - Imagem 11' },
        { src: '11.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '12.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '13.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '14.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '15.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '16.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '17.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '18.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '19.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '20.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '21.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '22.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
        { src: '23.webp', alt: 'Mundo Conectado / Decadente - Imagem 12' },
      ]
    },
    chapter02: {
      title: 'Capítulo 02 - Resistência / Conexão Real',
      folder: 'images/capitulo2',
      images: [
        { src: '01.jpg', alt: 'Resistência / Conexão Real - Imagem 1' },
        { src: '02.jpg', alt: 'Resistência / Conexão Real - Imagem 2' },
        { src: '03.jpg', alt: 'Resistência / Conexão Real - Imagem 3' },
        { src: '04.jpg', alt: 'Resistência / Conexão Real - Imagem 4' },
        { src: '05.jpg', alt: 'Resistência / Conexão Real - Imagem 5' },
        { src: '06.jpg', alt: 'Resistência / Conexão Real - Imagem 6' },
        { src: '07.jpg', alt: 'Resistência / Conexão Real - Imagem 7' },
        { src: '08.jpg', alt: 'Resistência / Conexão Real - Imagem 8' },
      ]
    }
  },
  
  init() {
    this.loadChapter('chapter01');
    this.loadChapter('chapter02');
  },
  
  loadChapter(chapterKey) {
    const chapter = this.chapters[chapterKey];
    const containerId = `gallery-${chapterKey}`;
    const container = document.getElementById(containerId);
    
    if (!container || !chapter) return;
    
    // Limpar container
    container.innerHTML = '';
    
    // Carregar imagens
    chapter.images.forEach((image, index) => {
      const item = this.createGalleryItem(image, chapterKey, index);
      container.appendChild(item);
    });
  },
  
  createGalleryItem(image, chapterKey, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-chapter', chapterKey);
    item.setAttribute('data-index', index);
    
    const img = document.createElement('img');
    img.src = `${this.chapters[chapterKey].folder}/${image.src}`;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    item.appendChild(img);
    
    // Adicionar evento de clique para abrir lightbox
    item.addEventListener('click', () => {
      LightboxHandler.openGallery(chapterKey, index);
    });
    
    // Acessibilidade: permitir abrir com Enter/Space
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        LightboxHandler.openGallery(chapterKey, index);
      }
    });
    
    return item;
  }
};

// Inicializar galeria quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  GalleryHandler.init();
});
