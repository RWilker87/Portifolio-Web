# 💼 Portfólio Web — Rian Wilker

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

**Engenheiro de Software Full Stack & Mobile | Estudante de Ciência da Computação @ UFAPE**  
*Desenvolvendo sistemas resilientes, aplicações móveis escaláveis e inteligência artificial aplicada.*

[Visualizar Portfólio](https://github.com/RWilker87/Portf-lio-Web) • [LinkedIn](https://linkedin.com/in/rian-wilker-63804b205) • [GitHub](https://github.com/RWilker87) • [E-mail](mailto:rianwilker17@gmail.com)

</div>

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do portfólio web de **Rian Wilker Santos Melo**, projetado para apresentar cases de engenharia de software de ponta a ponta, liderança técnica e desenvolvimento de produtos de impacto real (setor público, EdTech e SaaS móvel).

O projeto foi construído com foco em **performance extrema** (Core Web Vitals e Google Lighthouse), **design moderno em Dark Theme**, **internacionalização nativa (PT-BR / EN-US)** e **acessibilidade semântica (WCAG AA)**.

---

## 🚀 Tecnologias Utilizadas

| Camada | Ferramenta / Biblioteca | Descrição |
| :--- | :--- | :--- |
| **Framework Web** | [Next.js](https://nextjs.org/) (App Router) | Renderização híbrida SSR/SSG, rotas otimizadas e SEO integrado. |
| **Biblioteca de UI** | [React 19](https://react.dev/) | Componentização reativa e hooks modernos. |
| **Tipagem** | [TypeScript](https://www.typescriptlang.org/) | Contratos e tipos estritos para maior robustez e previsibilidade. |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) | Design responsivo, temas adaptativos e utilitários modernos. |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones SVG semânticos e consistentes. |
| **Qualidade de Código** | ESLint + TypeScript Compiler | Padronização e verificação de conformidade estática. |
| **Hospedagem & CI/CD** | [Vercel](https://vercel.com/) | Deploy automatizado e distribuição Edge de alta velocidade. |

---

## 📂 Arquitetura do Projeto

```text
Portf-lio-Web/
├── .agents/                   # Configurações de skills e inteligência do workspace
├── .github/prompts/           # Prompts e automações de engenharia e UI
├── public/                    # Mídias estáticas otimizadas para web
│   ├── media/
│   │   ├── eu/                # Fotos de perfil e registros de atuação
│   │   ├── lexfluencia/       # Telas e diagramas do Lexfluência (fluênciaCAP)
│   │   ├── simrec/            # Dashboards analíticos do SIMREC
│   │   └── familia-escola/    # Mockups e telas do app Família & Escola
│   ├── robots.txt             # Diretivas de indexação para buscadores
│   └── favicon.ico            # Ícone do navegador
├── src/
│   ├── app/                   # Next.js App Router (páginas, layout e estilos)
│   │   ├── globals.css        # Variáveis de tema e tokens CSS
│   │   ├── layout.tsx         # Layout raiz com fontes e metadados OpenGraph
│   │   ├── page.tsx           # Página principal do portfólio
│   │   └── sitemap.ts         # Geração dinâmica do sitemap.xml
│   ├── components/
│   │   ├── sections/          # Seções modulares da página
│   │   │   ├── Header.tsx     # Barra de navegação e seletor de idiomas
│   │   │   ├── Hero.tsx       # Primeira dobra com badges, bio e CTAs
│   │   │   ├── About.tsx      # Trajetória, formação UFAPE e princípios
│   │   │   ├── FeaturedProjects.tsx  # Vitrine e case studies em destaque
│   │   │   ├── ExperienceLeadership.tsx # Liderança tech e formações
│   │   │   ├── SkillsArchitecture.tsx  # Matriz de habilidades técnicas
│   │   │   ├── ContactSection.tsx     # Formulário/canais de contato direto
│   │   │   └── Footer.tsx     # Rodapé e links institucionais
│   │   └── ui/                # Componentes atômicos reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── ProjectVisualMockup.tsx
│   │       └── Toast.tsx
│   ├── context/
│   │   └── LanguageContext.tsx# Gerenciamento de estado de internacionalização (PT/EN)
│   ├── lib/
│   │   ├── data.ts            # Base de dados estruturada de projetos e textos
│   │   └── utils.ts           # Helpers e funções utilitárias
│   └── types/
│       └── index.ts           # Interfaces e definições de tipos TypeScript
├── instruções.md              # Especificação arquitetural detalhada
└── README.md                  # Apresentação do repositório
```

---

## 🌟 Principais Destaques & Case Studies

* **Lexfluência (fluênciaCAP):** Plataforma web de IA para avaliação automatizada de fluência leitora em redes municipais. Integração de OpenAI Whisper com algoritmo de Longest Common Subsequence (LCS) e banco PostgreSQL com Row-Level Security (RLS) para 4 perfis de governança.
* **SIMREC (Sistema de Monitoramento e Metas):** Dashboard analítico governamental para acompanhamento de metas pedagógicas (IDEB/IDEP) e gestão de indicadores educacionais em tempo real.
* **Sistema Família & Escola:** Aplicativo móvel em Flutter e Firebase voltado à integração escolar, notificações em tempo real e lançamento ágil de frequência com validação IHC.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
* **Node.js**: versão 18.18+ ou 20+ instalada
* **npm**, **yarn** ou **pnpm**

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/RWilker87/Portifolio-Web.git
cd Portifolio-Web
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```text
http://localhost:3000
```

---

## 🧪 Scripts Disponíveis

* `npm run dev`: Inicia o servidor Next.js em modo desenvolvimento com Fast Refresh.
* `npm run build`: Compila a aplicação para produção, gerando páginas otimizadas.
* `npm run start`: Inicia o servidor de produção local após o build.
* `npm run lint`: Executa a análise de código estático via ESLint.

---

## 👤 Autor

**Rian Wilker Santos Melo**
* **GitHub:** [@RWilker87](https://github.com/RWilker87)
* **LinkedIn:** [rian-wilker-63804b205](https://linkedin.com/in/rian-wilker-63804b205)
* **E-mail:** [rianwilker17@gmail.com](mailto:rianwilker17@gmail.com)


