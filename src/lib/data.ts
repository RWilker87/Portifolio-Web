import { Language, PortfolioContent } from "@/types";

export const portfolioContent: Record<Language, PortfolioContent> = {
  pt: {
    profile: {
      name: "Rian Wilker",
      title: "Desenvolvedor de Software Full Stack & Mobile",
      secondaryTitle: "Estudante de Ciência da Computação @ UFAPE · Formador Tech",
      status: "Disponível para oportunidades remotas e presenciais",
      location: "Garanhuns, PE — Brasil (Disponível para trabalho remoto)",
      summary:
        "Desenvolvedor de software em fase final de graduação em Ciência da Computação na Universidade Federal do Agreste de Pernambuco (UFAPE). Atuo construindo sistemas web e aplicações mobile para contextos reais — combinando rigor técnico (Next.js, TypeScript, PostgreSQL com RLS, Flutter) com a capacidade de entender a fundo a dor do usuário antes de escrever a primeira linha de código.",
      education: {
        degree: "Bacharelado em Ciência da Computação (Fase Final)",
        institution: "UFAPE — Universidade Federal do Agreste de Pernambuco",
        details:
          "Formação sólida com ênfase em algoritmos e estruturas de dados, banco de dados, engenharia de software, interação humano-computador (IHC) e inteligência artificial aplicada.",
      },
      corePrinciples: [
        {
          principle: "Entender o problema antes de codificar",
          description:
            "O melhor software é aquele que elimina gargalos reais de quem o opera. Decisões de arquitetura devem servir ao fluxo de trabalho do usuário, e não a preferências estéticas sem função.",
        },
        {
          principle: "Segurança e isolamento na camada de dados",
          description:
            "Controle de acesso e governança de dados pertencem ao banco (Row-Level Security / RLS), garantindo que regras de negócio críticas não dependam exclusivamente do cliente.",
        },
        {
          principle: "Simplicidade e clareza técnica",
          description:
            "Código legível, contratos de API estritamente tipados e interfaces diretas superam qualquer complexidade arquitetural desnecessária.",
        },
      ],
      contact: {
        email: "rianwilker17@gmail.com",
        github: "https://github.com/RWilker87",
        linkedin: "https://linkedin.com/in/rian-wilker-63804b205",
        cvUrl: "/cv-rian-wilker.pdf",
      },
    },
    caseStudies: [
      {
        id: "lexfluencia",
        featured: true,
        title: "Lexfluência (fluênciaCAP)",
        role: "Desenvolvedor Full Stack & Arquitetura",
        tagline: "Plataforma web para avaliação automatizada de fluência leitora em redes municipais de ensino",
        domain: "Web Full Stack · IA Aplicada · EdTech",
        statusBadge: "Em Produção no Município",
        problem:
          "Avaliar a fluência leitora de centenas de estudantes em fases iniciais de alfabetização (1º e 2º ano) dependia de gravações em áudio manuais e preenchimento de planilhas em papel. O processo levava até 30 dias para gerar um diagnóstico consolidado, atrasando intervenções pedagógicas urgentes.",
        solution:
          "Desenvolvi uma plataforma web completa com Next.js (App Router), TypeScript e Supabase. O professor grava o áudio da leitura diretamente no navegador, o sistema realiza a transcrição via Whisper e aplica um algoritmo próprio de Longest Common Subsequence (LCS) para alinhar foneticamente a fala com o texto padrão, calculando palavras corretas por minuto (PCPM), precisão e pausas. Inclui painel de auditoria do professor e controle estrito de acesso via PostgreSQL RLS em 4 níveis (Secretaria, Gestor, Coordenador e Professor).",
        impact:
          "Reduziu o tempo de diagnóstico pedagógico de semanas para menos de 60 segundos por estudante. Permite que secretarias municipais e escolas acompanhem em tempo real a evolução da leitura com dados isolados e auditáveis.",
        stack: [
          "Next.js (App Router)",
          "TypeScript",
          "React",
          "Supabase (PostgreSQL)",
          "Row-Level Security (RLS)",
          "OpenAI Whisper API",
          "Algoritmo LCS O(m×n)",
          "Tailwind CSS",
        ],
        metrics: [
          { label: "Tempo de Diagnóstico", value: "< 60 segundos" },
          { label: "Níveis de Acesso (RBAC)", value: "4 Perfis" },
          { label: "Comparação Textual", value: "Algoritmo LCS" },
          { label: "Isolamento de Dados", value: "PostgreSQL RLS" },
        ],
        visualPreview: {
          type: "desktop",
          badge: "Telas Reais de Produção",
          caption: "Portal de autenticação por perfil, painel analítico da rede e perfil de diagnóstico do estudante.",
          mediaUrl: "/media/lexfluencia/tela-login.png",
          gallery: [
            {
              title: "Portal de Autenticação",
              url: "/media/lexfluencia/tela-login.png",
              caption: "Login com controle de acesso por perfil (Secretaria, Gestor, Coordenador e Professor).",
            },
            {
              title: "Painel Analítico da Rede",
              url: "/media/lexfluencia/dashboard-resultados.png",
              caption: "Visão consolidada da rede municipal (283 alunos cadastrados, 73 avaliados com diagnósticos).",
            },
            {
              title: "Diagnóstico Individual",
              url: "/media/lexfluencia/diagnostico-aluno.png",
              caption: "Métricas detalhadas do aluno: Score IFL 97, Precisão 98.2%, Compreensão 100%, Leitor Fluente.",
            },
            {
              title: "Apresentação & Lançamento Oficial",
              url: "/media/eu/apresentacao-fluenciacap.jpg",
              caption: "Apresentação e lançamento oficial do Lexfluência para gestores e educadores da rede municipal.",
            },
          ],
        },
        architecture: {
          overview:
            "Arquitetura serverless com Next.js App Router, ingestão de áudio no Supabase Storage, transcrição assíncrona, motor de diffing textual LCS em memória e isolamento multi-escola por Row-Level Security no PostgreSQL.",
          flow: [
            "1. Captura de Áudio: Gravação direta pelo navegador e armazenamento temporário com link autenticado.",
            "2. Transcrição de Voz: Envio para API de reconhecimento de voz e obtenção do texto fonético transcrito.",
            "3. Alinhamento LCS: Comparação entre o texto esperado e o transcrito para isolar omissões, trocas de letras e hesitações.",
            "4. Validação & Dashboard: O professor audita o resultado na tela e os relatórios são consolidados no banco de dados respeitando o RLS.",
          ],
          technicalDecisions: [
            "Implementação de algoritmo LCS adaptado às especificidades de leitura infantil para evitar penalizações injustas por sotaques regionais.",
            "Delegação das regras de isolamento de dados às políticas de RLS no PostgreSQL (Supabase), garantindo que um professor nunca veja turmas alheias.",
            "Interface focada em usabilidade rápida para professores em sala de aula, sem passos desnecessários.",
          ],
        },
        liveUrl: "https://fluenciacap.com.br/",
      },
      {
        id: "simrec",
        title: "SIMREC",
        role: "Desenvolvedor Frontend & Modelagem",
        tagline: "Sistema de monitoramento e metas educacionais para redes municipais",
        domain: "Web SPA · Analytics · Gestão Pública",
        statusBadge: "Sistema Real em Produção",
        problem:
          "O acompanhamento de metas pedagógicas (IDEB/IDEP) nas escolas municipais dependia de planilhas dispersas e formulários impressos. A consolidação dos indicadores demorava semanas, dificultando intervenções rápidas por parte dos gestores escolares e da secretaria.",
        solution:
          "Desenvolvi a interface reativa em React com Vite integrada ao Supabase. O sistema centraliza o lançamento de resultados escolares, exibe a evolução histórica dos índices educacionais (2022 a 2025) e aplica Row-Level Security (RLS) no PostgreSQL para isolar a visão dos gestores de cada escola em relação ao painel consolidado da secretaria de educação.",
        impact:
          "Eliminou o processo manual de consolidação de dados. Consultas e projeções de metas que demandavam dias de trabalho agora são disponibilizadas em tempo real, permitindo decisões pedagógicas baseadas em evidências concretas.",
        stack: [
          "React",
          "Vite",
          "JavaScript (ES6+)",
          "Supabase (PostgreSQL)",
          "Row-Level Security (RLS)",
          "CSS Modules",
          "REST / Realtime",
        ],
        metrics: [
          { label: "Tempo de Consolidação", value: "Tempo Real" },
          { label: "Unidades Escolares", value: "Multi-Escola" },
          { label: "Segurança de Acesso", value: "PostgreSQL RLS" },
          { label: "Arquitetura Frontend", value: "SPA Reativo (Vite)" },
        ],
        visualPreview: {
          type: "desktop",
          badge: "Telas Reais de Produção",
          caption: "Acompanhamento geral da rede, metas por escola e gráficos de evolução histórica do SAEPE.",
          mediaUrl: "/media/simrec/tela-login.png",
          gallery: [
            {
              title: "Painel Geral do Município",
              url: "/media/simrec/dashboard-geral.png",
              caption: "Visão consolidada da rede: 7 escolas ativas, 224 resultados lançados e metas acompanhadas.",
            },
            {
              title: "Metas por Escola",
              url: "/media/simrec/metas-por-escola.png",
              caption: "Matriz de metas por unidade escolar (2º, 5º e 9º anos) com status de preenchimento.",
            },
            {
              title: "Evolução Histórica SAEPE",
              url: "/media/simrec/evolucao-saepe.png",
              caption: "Comparativo de indicadores por disciplina e série entre os anos de 2022 e 2025.",
            },
            {
              title: "Portal de Acesso",
              url: "/media/simrec/tela-login.png",
              caption: "Autenticação municipal com redirecionamento baseado no perfil escolar do usuário.",
            },
          ],
        },
        architecture: {
          overview:
            "Arquitetura SPA leve com React e Vite focada em carregamento rápido, conectada diretamente ao Supabase com controle de governança no PostgreSQL via RLS para isolar escolas e perfis administrativos.",
          flow: [
            "1. Entrada de Dados: Formulários ágeis para lançamento de notas e metas por escola e disciplina.",
            "2. Filtragem no Banco (RLS): O PostgreSQL restringe as linhas acessíveis dependendo do usuário autenticado.",
            "3. Agregação e Projeção: Queries no banco consolidam médias municipais e metas por turma.",
            "4. Visualização Reativa: Painéis e gráficos comparativos atualizados de forma instantânea.",
          ],
          technicalDecisions: [
            "Separação de escopo delegado totalmente a políticas de RLS nativas do PostgreSQL.",
            "Bundle frontend enxuto com Vite e CSS Modules, garantindo carregamento rápido mesmo em conexões de escolas do interior.",
            "Consultas otimizadas para carregar históricos de múltiplos anos sem lentidão.",
          ],
        },
        liveUrl: "https://simrec-frontend.vercel.app/",
      },
      {
        id: "familia-escola",
        title: "Sistema Família & Escola",
        role: "Desenvolvedor Mobile & UI/UX",
        tagline: "Aplicativo mobile para frequência escolar e comunicação em tempo real com responsáveis",
        domain: "Mobile Multiplataforma · Tempo Real",
        statusBadge: "Validado com Usuários (IHC)",
        problem:
          "A comunicação entre escolas e pais de alunos sobre faltas e avisos importantes dependia de bilhetes impressos ou recados manuais. Os responsáveis muitas vezes só ficavam sabendo de ausências dias depois, dificultando o combate à evasão escolar.",
        solution:
          "Desenvolvi um aplicativo móvel multiplataforma em Flutter e Dart, utilizando Riverpod para gerenciamento de estado e Firebase (Firestore e Cloud Messaging). O sistema permite que o professor registre a frequência da turma em menos de 2 minutos e dispara notificações push imediatas para o celular dos pais cadastrados. A interface foi validada por meio de testes formais de usabilidade (IHC).",
        impact:
          "Garantia de comunicação instantânea de ausências diretamente no celular dos responsáveis, com fluxo de chamada em lote que economiza tempo de aula e interface acessível testada com usuários reais.",
        stack: [
          "Flutter",
          "Dart",
          "Riverpod",
          "Firebase Firestore",
          "Firebase Cloud Messaging (FCM)",
          "Firebase Auth",
          "Testes de Usabilidade (IHC)",
        ],
        metrics: [
          { label: "Tempo de Chamada", value: "< 2 min / turma" },
          { label: "Notificação aos Pais", value: "Push em Tempo Real" },
          { label: "Arquitetura Mobile", value: "Flutter + Riverpod" },
          { label: "Validação de Interface", value: "Testes Formais de IHC" },
        ],
        visualPreview: {
          type: "mobile",
          badge: "Aplicativo Mobile Flutter",
          caption: "Aplicativo multiplataforma com sincronização em tempo real e notificações push automáticas.",
          mediaUrl: "/media/familia-escola/app-preview.png",
        },
        architecture: {
          overview:
            "Arquitetura mobile reativa com Flutter e Riverpod, conectada ao Cloud Firestore em tempo real e orquestrada com Firebase Cloud Messaging para envio de alertas aos responsáveis.",
          flow: [
            "1. Autenticação por Perfil: Acesso diferenciado para professores/gestão e para pais de alunos.",
            "2. Chamada em Lote: Interface ágil com toques rápidos para marcar presenças e ausências.",
            "3. Sincronização & Push: Ao salvar a chamada no Firestore, o FCM dispara notificações aos responsáveis pelos alunos ausentes.",
            "4. Painel do Responsável: O responsável visualiza o histórico de frequência e avisos em tempo real.",
          ],
          technicalDecisions: [
            "Uso de Riverpod para fluxo unidirecional de dados previsível e facilidade de testes de estado.",
            "Otimização para funcionamento offline ou conexões instáveis, armazenando dados localmente até reconectar.",
            "Avaliação de usabilidade com métodos de IHC (Interação Humano-Computador) para garantir curva de aprendizado mínima.",
          ],
        },
      },
    ],
    skillGroups: [
      {
        category: "Desenvolvimento Web & Full Stack",
        description: "Aplicações web modernas, interfaces reativas e arquiteturas orientadas a tipos.",
        skills: [
          {
            name: "Next.js & React",
            description: "App Router, Server Components, rotas de API, renderização otimizada e gerenciamento de estado.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["Next.js", "React 19", "App Router", "SSR/SSG"],
          },
          {
            name: "TypeScript & JavaScript",
            description: "Tipagem estática estrita, contratos de dados bem definidos e código assíncrono modular.",
            appliedIn: "Lexfluência & Portfólio",
            tags: ["TypeScript", "JavaScript (ES6+)", "Zod", "APIs REST"],
          },
          {
            name: "Tailwind CSS & Interface",
            description: "Design systems consistentes, interfaces responsivas, acessibilidade e microinterações.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["Tailwind CSS", "CSS Modules", "Acessibilidade", "Design Limpo"],
          },
          {
            name: "Vite & Ferramentas Modernas",
            description: "Configuração de builds ágeis, módulos ES e esteiras de desenvolvimento enxutas.",
            appliedIn: "SIMREC (Frontend SPA)",
            tags: ["Vite", "Turbopack", "Git / GitHub", "ESLint"],
          },
        ],
      },
      {
        category: "Banco de Dados & Backend",
        description: "Persistência segura, modelagem relacional e segurança no nível do banco de dados.",
        skills: [
          {
            name: "PostgreSQL & Supabase",
            description: "Modelagem relacional, consultas SQL, índices, storage e autenticação gerenciada.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["PostgreSQL", "Supabase", "SQL", "Storage"],
          },
          {
            name: "Row-Level Security (RLS) & RBAC",
            description: "Isolamento de dados multi-tenant e controle de acesso granular configurado diretamente no banco.",
            appliedIn: "Lexfluência & SIMREC (Multi-Escola)",
            tags: ["RLS", "RBAC", "Políticas SQL", "Segurança"],
          },
          {
            name: "Firebase & Cloud Services",
            description: "Bancos NoSQL (Firestore), autenticação e envio de notificações push via FCM.",
            appliedIn: "Sistema Família & Escola",
            tags: ["Firestore", "Firebase Auth", "FCM Push", "Realtime"],
          },
          {
            name: "APIs & Ingestão de Áudio",
            description: "Construção de endpoints RESTful, upload de arquivos e integração com APIs de inteligência artificial.",
            appliedIn: "Lexfluência (Whisper STT)",
            tags: ["RESTful", "Audio Upload", "JSON", "Fetch API"],
          },
        ],
      },
      {
        category: "Mobile, Algoritmos & IHC",
        description: "Aplicativos móveis, algoritmos aplicados e engenharia centrada no usuário.",
        skills: [
          {
            name: "Flutter & Dart",
            description: "Desenvolvimento mobile multiplataforma, widgets customizados e navegação fluida.",
            appliedIn: "Sistema Família & Escola",
            tags: ["Flutter", "Dart", "Android", "Cross-Platform"],
          },
          {
            name: "Gerenciamento de Estado (Riverpod)",
            description: "Arquitetura limpa para aplicativos móveis com fluxo de dados reativo e desacoplado.",
            appliedIn: "Sistema Família & Escola",
            tags: ["Riverpod", "Clean Architecture", "Injeção de Dependência"],
          },
          {
            name: "Algoritmos & IA Aplicada",
            description: "Integração da OpenAI Whisper API e implementação de algoritmo LCS para alinhamento textual.",
            appliedIn: "Lexfluência (Diffing LCS O(m×n))",
            tags: ["Whisper API", "Algoritmo LCS", "Diffing", "Speech-to-Text"],
          },
          {
            name: "Interação Humano-Computador (IHC)",
            description: "Testes práticos de usabilidade, heurísticas de Nielsen e design centrado na rotina do usuário.",
            appliedIn: "Família & Escola (Testes de Campo)",
            tags: ["Testes de Usabilidade", "IHC / UX", "Entrevistas", "Heurísticas"],
          },
        ],
      },
    ],
    experience: [
      {
        period: "2024 — Presente",
        role: "Formador em Tecnologia Educacional & BNCC Computação",
        organization: "Programas Educacionais & Redes Municipais",
        description:
          "Atuação na formação técnica de educadores e equipes pedagógicas da rede pública, alinhando a prática escolar ao pensamento computacional e às ferramentas digitais da BNCC Computação.",
        responsibilities: [
          "Condução de oficinas práticas traduzindo conceitos de lógica, dados e tecnologia para profissionais com diferentes níveis de familiaridade digital.",
          "Compreensão profunda das rotinas reais de escolas e secretarias, transformando essas necessidades em requisitos práticos para os sistemas desenvolvidos.",
          "Elaboração de guias práticos, documentações claras e apoio direto na adoção de plataformas educacionais.",
        ],
        impactMetric: "Capacitação contínua e ponte direta entre a engenharia de software e a realidade das salas de aula.",
      },
    ],
    nav: {
      projects: "Projetos",
      skills: "Competências",
      experience: "Trajetória",
      about: "Sobre",
      contact: "Contato",
      viewProjects: "Ver Projetos",
      getInTouch: "Entrar em Contato",
      downloadCv: "Baixar CV",
      source: "Código Fonte",
      backToTop: "Voltar ao topo",
      viewArchitecture: "Ver Arquitetura & Detalhes",
      visitLive: "Acessar Plataforma",
      problemLabel: "O Problema",
      solutionLabel: "Solução Construída",
      impactLabel: "Impacto & Resultados",
      flowLabel: "Fluxo de Execução & Arquitetura",
      decisionsLabel: "Decisões Técnicas Chave",
      stackLabel: "Tecnologias Utilizadas",
      close: "Fechar",
      visualProofLabel: "Telas Reais de Produção",
      galleryView: "Galeria",
    },
  },
  en: {
    profile: {
      name: "Rian Wilker",
      title: "Full Stack & Mobile Software Engineer",
      secondaryTitle: "Computer Science @ UFAPE · Tech Educator",
      status: "Available for remote and on-site software engineering roles",
      location: "Brazil (Available for global & remote opportunities)",
      summary:
        "Software developer completing a B.S. in Computer Science at UFAPE (Universidade Federal do Agreste de Pernambuco, Brazil). I build full-stack web platforms and cross-platform mobile apps for real-world municipal and public sector environments. I combine technical rigor (Next.js, TypeScript, PostgreSQL with RLS, Flutter) with hands-on stakeholder understanding before writing a single line of architecture.",
      education: {
        degree: "B.S. in Computer Science (Final Year)",
        institution: "UFAPE — Universidade Federal do Agreste de Pernambuco",
        details:
          "Rigorous academic curriculum with focus on algorithms and data structures, databases, software engineering, human-computer interaction (HCI), and applied artificial intelligence.",
      },
      corePrinciples: [
        {
          principle: "Understand the problem before coding",
          description:
            "The best software eliminates genuine user friction. Architectural decisions must serve stakeholder workflows, not cosmetic vanity.",
        },
        {
          principle: "Security and isolation at the database layer",
          description:
            "Multi-tenant access control belongs at the database layer (PostgreSQL Row-Level Security), ensuring business rules do not rely on client-side logic.",
        },
        {
          principle: "Simplicity and technical clarity",
          description:
            "Readable code, strictly typed API contracts, and responsive interfaces beat unnecessary architectural complexity every time.",
        },
      ],
      contact: {
        email: "rianwilker17@gmail.com",
        github: "https://github.com/RWilker87",
        linkedin: "https://linkedin.com/in/rian-wilker-63804b205",
        cvUrl: "/cv-rian-wilker.pdf",
      },
    },
    caseStudies: [
      {
        id: "lexfluencia",
        featured: true,
        title: "Lexfluência (fluênciaCAP)",
        role: "Full Stack Developer & Architecture",
        tagline: "Automated reading fluency diagnostic web platform for municipal schools",
        domain: "Full Stack Web · Applied AI · EdTech",
        statusBadge: "Live in Production",
        problem:
          "Assessing early-grade reading fluency (1st and 2nd grades) across municipal schools required teachers to manually record audio and fill paper spreadsheets. Diagnostic turnaround could take up to 30 days, delaying critical literacy interventions.",
        solution:
          "Engineered a complete web platform using Next.js (App Router), TypeScript, and Supabase. Teachers record student audio directly in the browser, Whisper handles speech recognition, and a custom Longest Common Subsequence (LCS) algorithm aligns the transcription against reference text to measure words correct per minute (WCPM), accuracy, and pauses. Features a teacher audit view and 4-tier RBAC enforced via PostgreSQL Row-Level Security (RLS).",
        impact:
          "Cut diagnostic turnaround from weeks to under 60 seconds per student, enabling municipal departments and schools to track literacy metrics in real time with isolated, auditable data.",
        stack: [
          "Next.js (App Router)",
          "TypeScript",
          "React",
          "Supabase (PostgreSQL)",
          "Row-Level Security (RLS)",
          "OpenAI Whisper API",
          "LCS Algorithm O(m×n)",
          "Tailwind CSS",
        ],
        metrics: [
          { label: "Diagnostic Turnaround", value: "< 60 seconds" },
          { label: "Access Governance", value: "4 RBAC Tiers" },
          { label: "Alignment Engine", value: "Custom LCS" },
          { label: "Data Protection", value: "PostgreSQL RLS" },
        ],
        visualPreview: {
          type: "desktop",
          badge: "Live Production Screenshots",
          caption: "Authentication portal, district analytics dashboard, and individual student fluency report.",
          mediaUrl: "/media/lexfluencia/tela-login.png",
          gallery: [
            {
              title: "Authentication Portal",
              url: "/media/lexfluencia/tela-login.png",
              caption: "Role-scoped login gateway (Department, Principal, Coordinator, Teacher).",
            },
            {
              title: "District Analytics Dashboard",
              url: "/media/lexfluencia/dashboard-resultados.png",
              caption: "Municipal reading proficiency overview (283 enrolled students, 73 evaluated).",
            },
            {
              title: "Student Diagnostic Profile",
              url: "/media/lexfluencia/diagnostico-aluno.png",
              caption: "Student reading breakdown: Score 97, 98.2% Accuracy, 100% Comprehension, Fluent Reader.",
            },
            {
              title: "Official Launch & Presentation",
              url: "/media/eu/apresentacao-fluenciacap.jpg",
              caption: "Official presentation and municipal launch of Lexfluência to school leaders and educators.",
            },
          ],
        },
        architecture: {
          overview:
            "Serverless Next.js App Router architecture with audio streaming to Supabase Storage, speech recognition via Whisper, an in-memory LCS phoneme diffing engine, and strict multi-school PostgreSQL RLS.",
          flow: [
            "1. Audio Capture: Browser-based microphone capture stored with secure authenticated URLs.",
            "2. Speech Recognition: Whisper API processes the audio into phonetic text tokens.",
            "3. LCS Alignment: Custom dynamic programming algorithm isolates omissions, substitutions, and hesitations against reference text.",
            "4. Teacher Review & RLS: Results are reviewed by the teacher and persisted under database-level tenant isolation.",
          ],
          technicalDecisions: [
            "Custom LCS algorithm tuned for child speech phonetics to prevent unfair penalties for regional pronunciations.",
            "Database-enforced Row-Level Security ensuring strict isolation between independent school units.",
            "Fast, accessible UI built for busy classroom teachers with zero unnecessary clicks.",
          ],
        },
        liveUrl: "https://fluenciacap.com.br/",
      },
      {
        id: "simrec",
        title: "SIMREC",
        role: "Frontend Developer & Data Modeling",
        tagline: "Municipal educational target and performance monitoring analytics platform",
        domain: "Web SPA · Analytics · Public Sector",
        statusBadge: "Real Production System",
        problem:
          "Consolidating municipal educational targets (IDEB/IDEP) across schools relied on scattered spreadsheets and physical paper. Central administrators took weeks to compile numbers, hindering rapid pedagogical decisions.",
        solution:
          "Built a reactive frontend with React and Vite backed by Supabase. The system centralizes target input, tracks historical indicator evolution (2022 to 2025), and enforces PostgreSQL Row-Level Security (RLS) to isolate individual school principals from the municipal department dashboard.",
        impact:
          "Completely eliminated manual report consolidation. Performance queries and multi-year comparisons that previously took days are now computed in real time.",
        stack: [
          "React",
          "Vite",
          "JavaScript (ES6+)",
          "Supabase (PostgreSQL)",
          "Row-Level Security (RLS)",
          "CSS Modules",
          "REST / Realtime",
        ],
        metrics: [
          { label: "Consolidation Time", value: "Real-time" },
          { label: "School Units", value: "Multi-School" },
          { label: "Access Security", value: "PostgreSQL RLS" },
          { label: "Frontend Stack", value: "Reactive SPA (Vite)" },
        ],
        visualPreview: {
          type: "desktop",
          badge: "Live Production Screenshots",
          caption: "District overview dashboard, school target matrix, and SAEPE historical trends.",
          mediaUrl: "/media/simrec/tela-login.png",
          gallery: [
            {
              title: "District Overview Dashboard",
              url: "/media/simrec/dashboard-geral.png",
              caption: "Consolidated municipal dashboard: 7 active schools, 224 evaluation submissions.",
            },
            {
              title: "School Target Matrix",
              url: "/media/simrec/metas-por-escola.png",
              caption: "Annual goal configurations across 2nd, 5th, and 9th grades with submission statuses.",
            },
            {
              title: "SAEPE Historical Evolution",
              url: "/media/simrec/evolucao-saepe.png",
              caption: "Comparative trendlines across subjects and grades between 2022 and 2025.",
            },
            {
              title: "Authentication Portal",
              url: "/media/simrec/tela-login.png",
              caption: "Tenant-isolated login gateway routing users according to their school affiliation.",
            },
          ],
        },
        architecture: {
          overview:
            "Lightweight React and Vite SPA focused on rapid rendering, connected to Supabase with PostgreSQL RLS governance for strict multi-school tenant isolation.",
          flow: [
            "1. Intake: Validated data forms capturing school assessments and yearly targets.",
            "2. Database RLS: PostgreSQL filters data access based on authenticated user credentials.",
            "3. SQL Projections: Aggregated queries compute municipal averages and progress indicators.",
            "4. Reactive Dashboard: Instant visual analytics and downloadable reports.",
          ],
          technicalDecisions: [
            "Tenant isolation delegated completely to PostgreSQL RLS policies at the database layer.",
            "Lightweight bundle with Vite and CSS Modules ensuring instant loading on school network connections.",
            "Optimized query structures delivering sub-second response times across historical datasets.",
          ],
        },
        liveUrl: "https://simrec-frontend.vercel.app/",
      },
      {
        id: "familia-escola",
        title: "Sistema Família & Escola",
        role: "Mobile Developer & UI/UX",
        tagline: "Mobile application for rapid classroom attendance and real-time guardian push alerts",
        domain: "Cross-Platform Mobile · Real-Time",
        statusBadge: "HCI Usability Validated",
        problem:
          "Communication between schools and student guardians regarding absences and notices relied on paper slips or word of mouth. Parents often discovered student absences days later, making it harder to prevent student dropout.",
        solution:
          "Engineered a cross-platform mobile application using Flutter and Dart, with Riverpod state management and Firebase (Firestore and Cloud Messaging). Enables teachers to record classroom attendance in under 2 minutes and automatically dispatches instant push alerts to guardians' phones. Validated through formal Human-Computer Interaction (HCI) usability methods.",
        impact:
          "Immediate mobile notifications for unexcused student absences, streamlined batch attendance saving class time, and proven zero-friction usability for teachers.",
        stack: [
          "Flutter",
          "Dart",
          "Riverpod",
          "Firebase Firestore",
          "Firebase Cloud Messaging (FCM)",
          "Firebase Auth",
          "HCI Usability Testing",
        ],
        metrics: [
          { label: "Attendance Flow", value: "< 2 min / class" },
          { label: "Guardian Alerts", value: "Real-time Push (FCM)" },
          { label: "Mobile Stack", value: "Flutter + Riverpod" },
          { label: "Interface Quality", value: "HCI Usability Validated" },
        ],
        visualPreview: {
          type: "mobile",
          badge: "Flutter Mobile Application",
          caption: "Cross-platform mobile app with optimistic state updates and instant push notifications.",
          mediaUrl: "/media/familia-escola/app-preview.png",
        },
        architecture: {
          overview:
            "Reactive mobile architecture using Flutter and Riverpod, connected to Cloud Firestore real-time streams and integrated with FCM for event-driven push notifications.",
          flow: [
            "1. Multi-Profile Auth: Dedicated interfaces for school staff versus student guardians.",
            "2. Batch Attendance: Rapid tap-based roster for recording student presences.",
            "3. Sync & Dispatch: Firestore update triggers push notifications to affected student guardians.",
            "4. Guardian Feed: Guardians view real-time attendance history and official school announcements.",
          ],
          technicalDecisions: [
            "Riverpod state architecture ensuring unidirectional data flow and clean separation of concerns.",
            "Offline persistence handling unreliable network connections in rural school settings.",
            "Formal HCI usability evaluation ensuring low cognitive load and rapid teacher adoption.",
          ],
        },
      },
    ],
    skillGroups: [
      {
        category: "Web & Full-Stack Engineering",
        description: "Modern web applications, responsive interfaces, and type-safe architectures.",
        skills: [
          {
            name: "Next.js & React",
            description: "App Router, Server Components, API routes, streaming SSR, and optimized rendering.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["Next.js", "React 19", "App Router", "SSR/SSG"],
          },
          {
            name: "TypeScript & JavaScript",
            description: "Strict static typing, validated schema contracts, and clean modular asynchronous code.",
            appliedIn: "Lexfluência & Portfolio",
            tags: ["TypeScript", "JavaScript (ES6+)", "Zod", "REST APIs"],
          },
          {
            name: "Tailwind CSS & Interface Design",
            description: "Design tokens, accessible layout composition, and purposeful microinteractions.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["Tailwind CSS", "CSS Modules", "Accessibility", "Clean UI"],
          },
          {
            name: "Vite & Modern Tooling",
            description: "Fast build workflows, ES Modules, and streamlined development pipelines.",
            appliedIn: "SIMREC (Frontend SPA)",
            tags: ["Vite", "Turbopack", "Git / GitHub", "ESLint"],
          },
        ],
      },
      {
        category: "Databases & Backend",
        description: "Secure data persistence, relational modeling, and database-level access control.",
        skills: [
          {
            name: "PostgreSQL & Supabase",
            description: "Relational schema design, SQL queries, indexing, storage buckets, and managed auth.",
            appliedIn: "Lexfluência & SIMREC",
            tags: ["PostgreSQL", "Supabase", "SQL", "Storage"],
          },
          {
            name: "Row-Level Security (RLS) & RBAC",
            description: "Multi-tenant data isolation and role-scoped permissions enforced directly in database policies.",
            appliedIn: "Lexfluência & SIMREC (Multi-School)",
            tags: ["RLS", "RBAC", "SQL Policies", "Security"],
          },
          {
            name: "Firebase & Cloud Services",
            description: "NoSQL databases (Firestore), authentication, and push notifications via FCM.",
            appliedIn: "Família & Escola App",
            tags: ["Firestore", "Firebase Auth", "FCM Push", "Realtime"],
          },
          {
            name: "APIs & Speech Audio Ingestion",
            description: "Designing RESTful endpoints, secure authenticated file uploads, and speech AI integrations.",
            appliedIn: "Lexfluência (Whisper STT)",
            tags: ["RESTful", "Audio Upload", "JSON", "Fetch API"],
          },
        ],
      },
      {
        category: "Mobile, Algorithms & HCI",
        description: "Cross-platform mobile applications, applied algorithms, and user-centered design.",
        skills: [
          {
            name: "Flutter & Dart",
            description: "Cross-platform mobile development, custom widget trees, and smooth 60fps animations.",
            appliedIn: "Família & Escola App",
            tags: ["Flutter", "Dart", "Android", "Cross-Platform"],
          },
          {
            name: "State Architecture (Riverpod)",
            description: "Clean architecture for mobile with unidirectional data flow and decoupled state.",
            appliedIn: "Família & Escola App",
            tags: ["Riverpod", "Clean Architecture", "Dependency Injection"],
          },
          {
            name: "Algorithms & Applied AI",
            description: "OpenAI Whisper speech recognition integration and custom LCS algorithm for phonetic diffing.",
            appliedIn: "Lexfluência (Diffing LCS O(m×n))",
            tags: ["Whisper API", "LCS Algorithm", "Diffing", "Speech-to-Text"],
          },
          {
            name: "Human-Computer Interaction (HCI)",
            description: "Empirical usability testing, Nielsen heuristics, and user-centered workflow design.",
            appliedIn: "Família & Escola (Field Usability)",
            tags: ["Usability Testing", "HCI / UX", "User Interviews", "Heuristics"],
          },
        ],
      },
    ],
    experience: [
      {
        period: "2024 — Present",
        role: "Educational Technology & Computing Educator",
        organization: "Municipal Educational Programs & Schools",
        description:
          "Conducting technical enablement workshops for public school educators, aligning educational routines with computational thinking and digital curriculum tools.",
        responsibilities: [
          "Leading hands-on workshops translating logic, data, and software concepts for professionals from diverse backgrounds.",
          "Uncovering daily operational friction in public schools, directly informing software requirements and architecture.",
          "Creating practical guides and documentation to accelerate digital tool adoption across schools.",
        ],
        impactMetric: "Continuous training and direct bridge between software engineering and classroom realities.",
      },
    ],
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Trajectory",
      about: "About",
      contact: "Contact",
      viewProjects: "View Featured Projects",
      getInTouch: "Get in Touch",
      downloadCv: "Download CV",
      source: "Source Code",
      backToTop: "Back to top",
      viewArchitecture: "View Architecture & Details",
      visitLive: "Live Platform",
      problemLabel: "The Problem",
      solutionLabel: "The Solution",
      impactLabel: "Impact & Results",
      flowLabel: "Architecture & Pipeline Flow",
      decisionsLabel: "Key Technical Decisions",
      stackLabel: "Technology Stack",
      close: "Close",
      visualProofLabel: "Live Production Screenshots",
      galleryView: "Gallery",
    },
  },
};
