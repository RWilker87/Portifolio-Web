# 🚀 Portfolio Web Specification — Rian Wilker

Documento de especificação técnica, arquitetura de informação e diretrizes de design para o desenvolvimento do portfólio web pessoal.

---

## 🎯 1. Objetivo & Posicionamento

* **Proprietário:** Rian Wilker Santos Melo[cite: 1]
* **Posicionamento:** Engenheiro de Software Full Stack, Mobile & Formador Tech[cite: 1]
* **Público-Alvo:** Tech Recruiters internacionais, líderes técnicos (CTOs/Tech Leads) e empresas com foco em produtos digitais escaláveis.
* **Proposta de Valor Central:** Capacidade comprovada de arquitetar e entregar soluções de software de ponta a ponta (Web, Mobile e IA Aplicada) com alto rigor de governança de dados e facilitação humana/técnica de usuários.
* **Idioma Padrão:** Inglês (EN-US) com suporte opcional a i18n para Português (PT-BR).

---

## 🛠️ 2. Stack Tecnológica do Portfólio

| Camada | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) + React 19 | SSR/SSG veloz, otimização de SEO e rotas modernas. |
| **Linguagem** | TypeScript | Tipagem estática e segurança de código. |
| **Estilização** | Tailwind CSS v4 | Produtividade, design responsivo e fácil tematização. |
| **Ícones** | Lucide React | Biblioteca leve de ícones SVG consistentes. |
| **Animações** | Framer Motion | Microinterações sutis de scroll e transição de estados. |
| **Deploy** | Vercel | CI/CD nativo com GitHub e performance em Edge Network. |

---

## 📐 3. Arquitetura de Informação & Seções

### 3.1. Hero Section (Primeira Dobra)
* **Badge de Disponibilidade:** `● Available for remote software engineering roles` (verde pulsante).
* **Headline:** *"Building resilient full-stack systems, mobile apps, and applied AI solutions."*
* **Sub-headline:** *"Full Stack & Mobile Engineer bridging technical excellence, human-centered design, and real-world public & EdTech impact."*
* **Ações Rápidas (CTAs):**
  * `View Featured Projects` (Scroll suave para projetos)
  * `Download CV (PDF)`
  * `Contact Me`
* **Social Links:** Badges diretos para GitHub, LinkedIn e E-mail[cite: 1].

---

### 3.2. About & Value Proposition
* **Resumo de Impacto:** Breve síntese conectando a formação em Ciência da Computação (UFAPE) com a experiência prática em produtos reais e educação tecnológica[cite: 1].
* **Princípio Guia:** *"Compreender as necessidades reais do usuário antes de codificar a arquitetura que ele precisa."*

---

### 3.3. Featured Projects (Case Studies)

#### 🔹 1. Lexfluência (fluenciaCAP)
* **Categoria:** AI & EdTech Platform
* **Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Supabase (PostgreSQL/Storage), OpenAI Whisper API, Custom LCS Algorithm.
* **Problema:** Avaliação manual e lenta de fluência leitora em redes municipais de ensino, propensa a inconsistências de medição.
* **Solução:** Arquitetura híbrida de IA que processa áudios com Whisper API e alinha transcrições via algoritmo LCS próprio para cálculo automático do Índice de Fluência Leitora (IFL).
* **Impacto:** Diagnóstico em lote em 60s com dashboards RBAC para 4 níveis de gestão (Secretaria, Gestor, Coordenador e Professor).
* **Repositório:** [github.com/RWilker87/fluenciaCAP](https://github.com/RWilker87/fluenciaCAP)

#### 🔹 2. SIMREC (Sistema de Monitoramento e Metas)
* **Categoria:** Data Analytics & Public Sector
* **Stack:** React, Vite, JavaScript (ES6+), Supabase (PostgreSQL com Row Level Security), CSS Modules.
* **Problema:** Gestão descentralizada de metas educacionais (IDEB/IDEP) baseada em relatórios manuais em papel e planilhas.
* **Solução:** Dashboard analítico centralizado com gráficos dinâmicos e controle rigoroso de dados via RLS.
* **Impacto:** Redução expressiva no tempo de consolidação de indicadores pedagógicos da rede municipal.
* **Repositório:** [github.com/RWilker87/SIMREC-frontend](https://github.com/RWilker87/SIMREC-frontend)

#### 🔹 3. Sistema Família & Escola
* **Categoria:** Mobile SaaS & Real-Time Sync
* **Stack:** Flutter, Dart, Riverpod, Firebase (Firestore, Auth, Cloud Messaging, Analytics).
* **Problema:** Barreiras burocráticas e falta de canal unificado e seguro para acompanhamento escolar e frequência de alunos.
* **Solução:** Aplicativo móvel multiplataforma com envio de notificações push em tempo real, lançamento de frequência em lote e isolamento de dados por perfil.
* **Impacto:** Frequência lançada em menos de 2 minutos por turma e validação por testes formais de usabilidade (IHC).
* **Repositório:** [github.com/RWilker87/FamiliaEscolaApp](https://github.com/RWilker87/FamiliaEscolaApp)

---

### 3.4. Technical Skills & Architecture

* **Frontend & Mobile:** Next.js, React, TypeScript, Flutter, Dart, Tailwind CSS, Vite.
* **Backend & Cloud:** Node.js, Next.js API Routes, Python, Supabase, Firebase (Serverless, FCM), Vercel, RESTful APIs, JWT, Zod.
* **Bancos de Dados & Governança:** PostgreSQL, Cloud Firestore, SQLite, Row-Level Security (RLS), RBAC[cite: 1].
* **Engenharia & IA:** OpenAI Whisper API, Algoritmos de Alinhamento Textual (LCS), Clean Architecture, Testes de Usabilidade (IHC), Git/GitHub.

---

### 3.5. Tech Enablement & Leadership
* **Destaque:** Atuação como Formador em Tecnologia Educacional e BNCC Computação[cite: 1].
* **Objetivo:** Evidenciar capacidade de liderança técnica, facilitação de equipes, criação de documentações claras e tradução de conceitos de engenharia para públicos diversos.

---

### 3.6. Contact & Footer
* **Chamada:** *"Interested in working together or discussing scalable architectures? Let's talk."*
* **Canais:**
  * E-mail: `rianwilker17@gmail.com` (com botão de cópia rápida)[cite: 1]
  * LinkedIn: `linkedin.com/in/rian-wilker-63804b205`[cite: 1]
  * GitHub: `github.com/RWilker87`[cite: 1]
* **Footer:** Copyright, menção de stack do projeto e link para o código-fonte do portfólio.

---

## 🎨 4. Diretrizes Visuais & UX

* **Tema Visual:** Dark theme nativo por padrão (tons de cinza/zinc escuro com toques de azul/ciano para estados ativos).
* **Tipografia:** Sans-serif moderna (ex: `Inter` ou `Geist Sans` via `next/font`).
* **Performance:** Pontuação 100 no Google Lighthouse (otimização de imagens via `next/image` e carregamento de fontes locais).
* **Acessibilidade:** Marcação semântica HTML5 completa, contraste WCAG AA e navegação fluida por teclado.