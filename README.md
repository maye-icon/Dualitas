# Conexões — Exposição Fotográfica Digital

Uma galeria fotográfica digital contemporânea que explora a relação entre o ser humano e a tecnologia através de dois capítulos contrastantes.

## 📋 Sobre o Projeto

**Conexões** é uma exposição artística que apresenta dois capítulos:

### Capítulo 01: Mundo Conectado / Decadente
Explora a hiperconectividade, dependência digital, isolamento e artificialidade através de uma paleta de verdes Matrix, ruído visual e contraste elevado, transmitindo a sensação de vigilância e decadência social.

### Capítulo 02: Resistência / Conexão Real
Apresenta a resistência ao digital através de iluminação natural, cores orgânicas e sensação de liberdade, celebrando a autenticidade das relações humanas e a beleza da vida real.

## 🛠️ Stack Tecnológico

- **HTML5** - Semântica e acessibilidade
- **CSS3** - Responsividade com Grid, Flexbox e Variables
- **JavaScript Vanilla** - Sem dependências externas

### Tipografia
- **Aldrich** - Títulos, logos, botões
- **Inter** - Corpo de texto, descrições

### Paleta de Cores
- Preto Principal: `#080809`
- Verde Matrix: `#50C878`
- Cinzas e brancos para contraste

## 📁 Estrutura do Projeto

```
Conexoes_V3/
├── index.html              # Página Home
├── galeria.html            # Galeria com lightbox
├── sobre.html              # Página Sobre
├── autores.html            # Página Autores
├── css/
│   ├── style.css           # Estilos principais
│   ├── gallery.css         # Estilos da galeria
│   ├── about.css           # Estilos da página Sobre
│   └── authors.css         # Estilos da página Autores
├── js/
│   ├── language.js         # Sistema de idiomas (PT/EN)
│   ├── main.js             # Funcionalidades principais
│   ├── gallery.js          # Gerenciador de galeria
│   └── lightbox.js         # Visualizador fullscreen
├── images/
│   ├── capitulo1/          # Imagens do Capítulo 01
│   ├── capitulo2/          # Imagens do Capítulo 02
│   ├── authors/            # Fotos dos autores
│   └── backgrounds/        # Imagens de fundo
└── assets/                 # Recursos adicionais
```

## 🚀 Como Usar

### Instalação
1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador moderno

Não há dependências externas ou processo de build necessário!

### Configuração de Imagens

#### Galeria (Capítulos)
Adicione imagens em:
- `images/capitulo1/` - para o Capítulo 01
- `images/capitulo2/` - para o Capítulo 02

As imagens são carregadas dinamicamente através de `js/gallery.js`. Edite o objeto `chapters` para adicionar/remover imagens.

#### Autores
Adicione fotos dos autores em `images/authors/`:
- `marley-silva.jpg`
- `emidio-lucas.jpg`

#### Background
Adicione uma imagem de hero em `images/backgrounds/hero.jpg`

### Sistema de Idiomas

O site suporta **Português** e **Inglês** automaticamente:
- Preferência é salva em `localStorage`
- Clique nos botões **PT** ou **EN** na navbar
- Todos os textos se atualizam instantaneamente

## ♿ Acessibilidade

- ✅ HTML semântico com `<main>`, `<nav>`, `<article>`, `<section>`
- ✅ ARIA labels para navegação e controles
- ✅ Contraste AA (WCAG 2.1)
- ✅ Navegação por teclado (Arrow keys, Tab, Escape)
- ✅ Focus visível em todos os elementos interativos
- ✅ Textos alternativos descritivos
- ✅ Suporte a `prefers-reduced-motion`

## 📱 Responsividade

- **Desktop**: ≥1200px (4 colunas na galeria)
- **Tablet**: 768px-1199px (3 colunas na galeria)
- **Mobile**: ≤767px (2 colunas na galeria)

## ⌨️ Controles de Teclado

### Lightbox
- **→** - Próxima foto
- **←** - Foto anterior
- **Esc** - Fechar lightbox

### Mobile
- **Swipe left** - Próxima foto
- **Swipe right** - Foto anterior

## 🎨 Customização

### Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
  --color-black-primary: #080809;
  --color-green-matrix: #50C878;
  /* ... outras cores */
}
```

### Tipografia
Importe outras fontes do Google Fonts no `<head>` de cada página.

### Efeitos de Hover
- **Capítulo 01**: Efeito de brilho verde (matriz)
- **Capítulo 02**: Aumento discreto de luminosidade

## 📊 Performance

- ✅ Lazy loading de imagens
- ✅ CSS modularizado e organizado
- ✅ JavaScript sem dependências
- ✅ Sem frameworks pesados
- ✅ Tamanho otimizado

## 🔍 SEO

- Meta tags descritivas
- HTML semântico
- Structured data ready (pode ser expandido com JSON-LD)
- URL amigável

## 🌐 Compatibilidade

Testado em:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Licença

Projeto "Conexões" © 2024 Marley Silva × Emidio Lucas

---

**Desenvolvido com HTML5, CSS3 e JavaScript Vanilla** ✨
# Dualitas
# Dualitas
# Dualitas
