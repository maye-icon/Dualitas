# 📝 GUIA DE CONFIGURAÇÃO FINAL - CONEXÕES

## ✅ O que foi desenvolvido

Todo o site foi construído com:
- ✅ HTML5 semântico e acessível
- ✅ CSS3 responsivo (Mobile, Tablet, Desktop)
- ✅ JavaScript vanilla (sem dependências)
- ✅ Sistema de idiomas PT/EN com Local Storage
- ✅ Navbar fixa com menu mobile
- ✅ Galeria com lightbox fullscreen
- ✅ 4 páginas completas (Home, Galeria, Sobre, Autores)
- ✅ Paleta de cores conforme especificação
- ✅ Tipografia Aldrich + Inter
- ✅ Acessibilidade WCAG 2.1

---

## 🖼️ PRÓXIMOS PASSOS - ADICIONAR IMAGENS

### 1. Imagens da Galeria

**Capítulo 01: Mundo Conectado / Decadente**
- Local: `images/capitulo1/`
- Formato recomendado: JPG ou WebP
- Dimensões: Qualquer (CSS usa `aspect-ratio: 1 / 1` com `object-fit: cover`)
- Nomes esperados: `img-01.jpg`, `img-02.jpg`, etc.
- Quantidade: Adicione quantas imagens desejar

**Capítulo 02: Resistência / Conexão Real**
- Local: `images/capitulo2/`
- Mesma configuração do Capítulo 01

### 2. Imagens dos Autores

- Local: `images/authors/`
- Nomes esperados:
  - `marley-silva.jpg` - Foto de Marley Silva
  - `emidio-lucas.jpg` - Foto de Emidio Lucas
- Formato: JPG ou PNG (com fundo, será cortado em proporção 1:1)

### 3. Imagem de Hero (Background)

- Local: `images/backgrounds/`
- Nome esperado: `hero.jpg`
- Dimensões: Qualquer (será ajustada com `cover`)
- Recomendação: Imagem que represente o tema da exposição

---

## 📝 COMO ADICIONAR MAIS IMAGENS À GALERIA

Edite o arquivo `js/gallery.js` e adicione/remova imagens nos arrays:

```javascript
chapter01: {
  title: 'Capítulo 01 - Mundo Conectado / Decadente',
  folder: 'images/capitulo1',
  images: [
    { src: 'img-01.jpg', alt: 'Descrição da imagem 1' },
    { src: 'img-02.jpg', alt: 'Descrição da imagem 2' },
    // Adicione mais aqui...
  ]
},
```

---

## 🌍 PUBLICAR O SITE

### Opção 1: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione main branch
5. Site estará disponível em `https://seu-usuario.github.io/Conexoes`

### Opção 2: Hosting Simples
Qualquer servidor que suporte arquivos estáticos funciona:
- Vercel (grátis e fácil)
- Netlify (grátis e fácil)
- Firebase Hosting
- Seu próprio servidor web

### Opção 3: Localmente
Abra `index.html` diretamente no navegador para testar localmente.

---

## 🎨 PERSONALIZAÇÕES ADICIONAIS

### Mudar Cores
Edite `css/style.css`, seção `:root`:
```css
--color-green-matrix: #50C878;  /* Verde principal */
--color-black-primary: #080809;  /* Preto principal */
```

### Mudar Textos
Os textos estão nos atributos `data-pt` e `data-en` do HTML:
```html
<h1 data-pt="CONEXÕES" data-en="CONNECTIONS">CONEXÕES</h1>
```

### Adicionar Social Media
No `footer`, adicione links para redes sociais (Instagram, etc).

---

## 🔍 VERIFICAÇÃO DE FUNCIONALIDADES

### Testar no Navegador
- ✅ Abrir site em navegador moderno (Chrome, Firefox, Safari)
- ✅ Clicar em cada página (Home, Galeria, Sobre, Autores)
- ✅ Mudar idioma (botões PT/EN na navbar)
- ✅ Clicar em foto na galeria (deve abrir lightbox)
- ✅ Navegar no lightbox com setas ou swipe

### Testar Responsividade
- ✅ Redimensionar janela (Desktop → Tablet → Mobile)
- ✅ Usar DevTools (F12) → Device Emulation
- ✅ Verificar se menu mobile aparece em ≤767px
- ✅ Verificar se galeria muda de colunas

### Testar Acessibilidade
- ✅ Navegar com Tab (deve destacar botões)
- ✅ Usar setas no lightbox (deve navegar fotos)
- ✅ Pressionar Esc (deve fechar lightbox)

---

## 📊 ESTRUTURA FINAL

```
Conexoes_V3/
├── index.html ........................ Home page
├── galeria.html ...................... Galeria com lightbox
├── sobre.html ........................ Sobre o projeto
├── autores.html ...................... Autores
├── README.md ......................... Documentação
├── SETUP.md .......................... Este arquivo
│
├── css/
│   ├── style.css ..................... Estilos principais (navbar, footer, etc)
│   ├── gallery.css ................... Galeria e lightbox
│   ├── about.css ..................... Página Sobre
│   └── authors.css ................... Página Autores
│
├── js/
│   ├── language.js ................... Sistema PT/EN
│   ├── main.js ....................... Navbar e funcionalidades gerais
│   ├── gallery.js .................... Carregamento de imagens
│   └── lightbox.js ................... Visualizador fullscreen
│
└── images/
    ├── capitulo1/ .................... Imagens do Capítulo 01
    ├── capitulo2/ .................... Imagens do Capítulo 02
    ├── authors/ ...................... Fotos dos autores
    └── backgrounds/ .................. Imagens de fundo
```

---

## ⚠️ IMPORTANTE

### Performance
- Otimize as imagens (use TinyPNG, Squoosh, etc)
- Nomes de arquivo sem espaços e acentos
- Use JPG para fotos, PNG para transparência

### SEO
- Preencha `<meta description>` em cada página
- Use alt text descritivo em todas as imagens
- URL amigável

### Cross-browser
- Testado em Chrome, Firefox, Safari, Edge
- Compatível com iOS e Android

---

## 🎉 Pronto para Usar!

O site está **100% funcional** e pronto para:
1. Adicionar suas imagens
2. Personalizador os textos se necessário
3. Publicar online

Não há dependências externas, nenhuma build necessária.
Apenas HTML, CSS e JavaScript vanilla.

**Bom uso! 🚀**
