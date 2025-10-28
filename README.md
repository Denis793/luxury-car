# 🏎️ FerLux Auto

> Uma experiência digital de alta performance para curadoria automotiva premium — onde engenharia visual encontra paixão por carros icônicos.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

</div>

---

## 🎯 Sobre o Projeto

**FerLux Auto** é uma landing page imersiva que demonstra excelência técnica no desenvolvimento frontend moderno. Criada como showcase de habilidades, a aplicação combina visualização 3D interativa, animações complexas de scroll e design system minimalista para apresentar a Ferrari 360 Modena — um ícone automotivo da virada do milênio.

> ⚠️ **Projeto Demonstrativo**: Esta é uma aplicação de portfolio sem fins comerciais. Não há produtos reais à venda.

---

## ✨ Highlights Técnicos

### 🎨 Experiência Visual de Alto Impacto

- **Modelo 3D Interativo** com customização de cores em tempo real
- **Animações scroll-driven** complexas usando GSAP ScrollTrigger
- **Sistema de tipografia animada** com ScrambleText e TextPlugin
- **Design system dark-first** com variáveis CSS customizadas
- **Grid cyberpunk animado** com gradientes e efeitos de profundidade

### ⚡ Performance & Otimização

- **Server-Side Rendering** via Next.js 14 App Router
- **Code splitting automático** e lazy loading de assets 3D
- **Font optimization** com next/font (Rajdhani + Big Shoulders Stencil)
- **Image optimization** nativa do Next.js
- **Scroll normalizado** para experiência cross-browser consistente

### 🛠️ Arquitetura Robusta

- **Component-driven** com separação clara de responsabilidades
- **CSS Modules** para encapsulamento de estilos
- **TypeScript** para type safety
- **Hooks customizados** (useGSAP) para lógica reutilizável
- **IntersectionObserver** para animações eficientes

---

## 🚀 Stack Tecnológica

### Core

- **[Next.js 14](https://nextjs.org/)** - React framework com SSR/SSG
- **[React 18](https://react.dev/)** - Library UI com Suspense
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### 3D & Animação

- **[Three.js (r128)](https://threejs.org/)** - Renderização WebGL
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer para Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers Three.js (OrbitControls, Environment, ContactShadows)
- **[GSAP](https://greensock.com/gsap/)** - Animações de alta performance
  - ScrollTrigger - Scroll-based animations
  - TextPlugin - Animação de texto
  - ScrambleTextPlugin - Efeito de texto embaralhado

### UI & Styling

- **CSS Modules** - Scoped styling
- **Google Fonts** - Rajdhani, Big Shoulders Stencil
- **React Icons** - Hero Icons 2, Feather Icons

---

## 📦 Instalação & Setup

### Pré-requisitos

```bash
Node.js >= 18.x
npm >= 9.x (ou yarn/pnpm/bun)
```

### Clonar & Instalar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ferlux-auto.git
cd ferlux-auto

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linter ESLint
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais + CSS variables
│   ├── layout.tsx            # Root layout com NavBar
│   ├── page.tsx              # Homepage (seções principais)
│
├── components/
│   ├── NavBar/               # Navegação responsiva com dropdown
│   ├── ProductSection/       # Hero + cards de especificações
│   ├── ColorsSection/        # Canvas 3D + color picker
│   ├── CompanySection/       # Informações da empresa
│   ├── AboutSection/         # Developer specs + disclaimer
│   ├── FerrariModel/         # Componente Three.js do modelo
│   ├── Card/                 # Card reutilizável com animação
│   └── ButtonBuy/            # CTA button com efeitos hover
│
├── types/
│   └── colorCars.ts          # Type definitions
│
└── public/
    ├── ferrari.glb           # Modelo 3D
    ├── car-background.jpg    # Hero image
    ├── background-about.jpg  # About section background
    └── background-screens.jpg # Product section background
```

---

## 🎬 Seções da Landing Page

### 1️⃣ **Product (Hero)**

- Hero image full-viewport com CTA destacado
- 4 telas com scroll horizontal/vertical pinadas
- 8 cards informativos com animação de texto progressiva
- Especificações técnicas do Ferrari 360 Modena

### 2️⃣ **Colors (3D Showcase)**

- Modelo 3D interativo com OrbitControls
- 4 opções de customização de cor (red, green, yellow, purple)
- Iluminação HDR com Environment + Lightformers
- Shadow mapping e ContactShadows para realismo
- Grid cyberpunk animado em background

### 3️⃣ **Company (Trust Building)**

- Apresentação institucional
- Diferenciais competitivos
- Garantias e processos
- Animações sequenciais de entrada

### 4️⃣ **About (Developer Section)**

- Disclaimer do projeto
- Stack tecnológica utilizada
- Informações de contato/disponibilidade
- ScrambleText effect com GSAP

---

## 🎨 Design System

### Cores (Dark Theme)

```css
--text-color: rgb(221, 213, 213)
--bg-color: rgb(24, 22, 22)
--bg-color-cyan: rgba(9, 10, 48, 0.3)
--ferrari-red: #8B0000
--btn-hover: rgb(39, 39, 186)
--default-shadow: rgba(255, 255, 255, 0.1)
```

### Tipografia

- **Heading**: Rajdhani (300-700)
- **Display**: Big Shoulders Stencil (400)
- **Letter-spacing**: 2-4px (cyber aesthetic)

### Animações

- Scroll-based com GSAP ScrollTrigger
- Hover states com pseudo-elementos
- Text scrambling effects
- 3D rotations e transforms

---

## 🔧 Funcionalidades Detalhadas

### Modelo 3D Dinâmico

```typescript
// Troca de cor em tempo real via Three.js Material API
const Ferrari = ({ colorState }) => {
  useEffect(() => {
    materials.Vehicle_Exterior_mm_ext.color.set(new THREE.Color(objCores[colorState]));
  }, [colorState]);
};
```

### Scroll Animations Complexas

```typescript
// Timeline GSAP com múltiplas animações sincronizadas
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.screensContent',
    start: 'top top',
    end: '+=1000%',
    scrub: 1,
    snap: 1 / 6,
    pin: true,
  },
});
```

### Type-Safe Color System

```typescript
type colorsCar = 'red' | 'green' | 'yellow' | 'purple';
```

---

## 📱 Responsividade

- **Desktop-first** approach com media queries estratégicas
- **Breakpoint principal**: 1180px
- Adaptações:
  - Navigation → Dropdown menu
  - 3D Canvas → Full width
  - Cards → Stack vertical
  - Aspect ratios ajustados

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalação da CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
npm run build
npm run start
```

O build otimizado estará em `.next/`

---

## 🎯 Otimizações Implementadas

- ✅ **Image optimization** com next/image
- ✅ **Font subsetting** via next/font
- ✅ **Suspense boundaries** para 3D assets
- ✅ **CSS Modules** para code splitting de estilos
- ✅ **useGSAP hook** para cleanup automático de animações
- ✅ **ScrollTrigger.refresh()** em mount para sync
- ✅ **IntersectionObserver** para animações on-demand

---

## 🐛 Troubleshooting

### Modelo 3D não carrega

- Verifique se `ferrari.glb` está em `/public`
- Confirme que o servidor está rodando (`npm run dev`)

### Animações com lag

- Reduza `scrub` value no ScrollTrigger
- Considere `will-change: transform` em elementos animados

### ScrollTrigger desalinhado

- Adicione `ScrollTrigger.refresh()` após carregamento de imagens
- Use `invalidateOnRefresh: true` em timelines

---

## 📄 Licença

Este projeto é um **portfolio demonstrativo** sem fins comerciais.

**Assets utilizados:**

- Modelo 3D Ferrari: Uso educacional/demonstrativo
- Imagens: Stock photos para fins de apresentação

---

## 👨‍💻 Desenvolvedor

**Stack Showcase Project**

- 💼 Disponível para projetos ambiciosos
- 🎨 Especializado em: React · Next.js · GSAP · Three.js
- 🎯 Abordagem: Performance-first · Pixel-perfect

---

## 🙏 Agradecimentos

- **GSAP** pela ferramenta de animação mais poderosa da web
- **PMNDRS** pelo ecossistema React Three Fiber
- **Vercel** pelo melhor DX de deployment
- **Comunidade Next.js** pela documentação impecável

---

<div align="center">

**[⬆ Voltar ao topo](#-ferlux-auto)**

Feito com ⚡ e muita cafeína

</div>
