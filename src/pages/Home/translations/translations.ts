export const technologyStartDates: Record<string, string> = {
  reactjs: '2021-08-01',
  tailwindcss: '2023-02-01',
  nodejs: '2022-02-01',
  typescript: '2021-02-01',
  postgresql: '2022-02-01',
  mysql: '2021-08-01',
  laravel: '2022-02-01',
  nestjs: '2022-08-01',
  nextjs: '2022-08-01',
  shadcn: '2024-02-01',
  authjs: '2024-02-01',
  prisma: '2023-02-01',
  reactemail: '2024-08-01',
  git: '2021-08-01',
  html5: '2021-08-01',
  css3: '2021-08-01',
  restapi: '2021-08-01',
  jquery: '2022-02-01',
  googlecloud: '2022-08-01',
  aws: '2022-08-01',
  styledcomponents: '2021-08-01',
  docker: '2022-08-01',
  java: '2026-06-01',
  kotlin: '2026-06-01',
  contractfirst: '2026-06-01',
}

export const translations = {
  en: {
    'about-me': {
      label: 'About',
      heading: 'Full-Stack, from the API contract to deployment.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Data',
        cloud: 'Cloud and DevOps',
      },
      htmlAndCss: 'HTML and CSS',
      footnote:
        'Numbers indicate years of use. Java, Kotlin and Contract First since 2026. English: advanced reading, intermediate technical conversation.',
      text: 'I have been building scalable web applications for over 5 years, from architecture planning to cloud deployment. My focus is the React ecosystem (Next.js, TypeScript, micro-frontends) and the backend with Node.js, NestJS and PostgreSQL. I like working close to design and product, with clean code and attention to performance.',
    },
    contacts: {
      label: 'Contact',
      heading: "Let's talk.",
      text: 'WhatsApp and LinkedIn are the most direct ways to reach me.',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      resume: 'Resume (PDF)',
    },
    experiences: {
      label: 'Career',
      heading: "Where I've worked.",
      jobs: [
        {
          job: 'Mid-Level Full-Stack Developer',
          data: 'Jun 2026 — Present',
          company: 'BBChain (via Comeia)',
          description:
            'Allocated to the BBChain project through Comeia, working on a product that combines Next.js and React on the frontend with Java and Kotlin services. Adopted a contract-first approach to API development, defining the contract before the implementation to keep frontend and backend aligned. Picked up new technologies on the job while delivering features end to end.',
        },
        {
          job: 'Senior Full-Stack Developer',
          data: 'Feb 2026 — May 2026',
          company: 'Facyal',
          description:
            'Built from scratch a management platform for an aesthetics clinic with three locations in Florida (Miami, Orlando, and Jacksonville). Architected a pnpm + Turborepo monorepo with a NestJS 11 REST API, a Next.js 16 / React 19 ERP, and the company landing page, sharing Zod 4 contracts between apps. PostgreSQL with Prisma 7, JWT authentication, transactional emails with Resend, FullCalendar scheduling, Recharts dashboards, and CI/CD with GitHub Actions deploying to a VPS with PM2 and Nginx.',
        },
        {
          job: 'Frontend Developer',
          data: 'Nov 2025 — Feb 2026',
          company: 'Noorden Group',
          description:
            'Directly involved in building scalable frontend interfaces for Zenvia using Next.js, React.js, and a micro-frontends architecture. Closely collaborating with design and product teams to ensure visual fidelity and usability across system interfaces. Actively debugging and contributing to micro-frontend and micro-service projects, ensuring consistent data validation and communication between services.',
        },
        {
          job: 'Full-Stack Developer',
          data: 'Mar 2025 — Oct 2025',
          company: 'Cinq Finance',
          description:
            'Developed high-performance financial dashboards ensuring efficient rendering of large data volumes. Elevated software reliability and scalability by orchestrating AWS infrastructure (EC2, S3, backups/restore) using Docker + Nginx + PM2. Standardized UI components and integrated RESTful APIs, ensuring visual consistency and client-side data validation.',
        },
        {
          job: 'Full-Stack Developer',
          data: 'Apr 2024 — Feb 2025',
          company: 'Cev Digital',
          description:
            'Led development of features for two web applications while owning the full cloud infrastructure on AWS. Managed EC2 instances, RDS databases, and deployment pipelines. Core stack: Node.js, React.js, PostgreSQL, Sequelize. Applied Linux expertise to structure and maintain production environments. Aligned timelines and proposed improvements directly with leadership.',
        },
        {
          job: 'Junior Full-Stack Developer',
          data: 'Jul 2022 — Mar 2024',
          company: 'Softmakers Br',
          description:
            'Worked on multiple web applications using Node.js, React.js, NestJS, PostgreSQL, Prisma, Firebase, Laravel, and MySQL. Managed Google Cloud deployments from staging to production. Resolved customer-reported issues with quick, effective solutions. Built and maintained RESTful APIs and implemented unit and integration tests.',
        },
        {
          job: 'Full-Stack Developer Intern',
          data: 'Sep 2021 — Jul 2022',
          company: 'Softmakers Br',
          description:
            'Built web applications with Laravel, PHP, MySQL, HTML, Blade, JavaScript, and CSS. Used GitHub and GitFlow for source control. Deployed projects on Hostgator (staging and production). Integrated external APIs such as PagSeguro for in-platform payment flows.',
        },
      ],
    },
    degrees: {
      certification: 'Certification',
      certificate: {
        name: 'Introduction to Back-End Development',
        issuer: 'Meta, Coursera',
        completed: 'Jun 2023',
        learnTitle: 'What you will learn',
        learn: [
          'Distinguish between front-end, back-end, and full-stack developer roles',
          'Create and style a webpage with HTML and CSS',
          'Understand the benefits of UI frameworks',
        ],
        skills: [
          'React.js',
          'Bootstrap',
          'Responsive Web Design',
          'Full-Stack Web Development',
        ],
        cta: 'View certificate',
      },
    },
    projects: {
      label: 'Projects',
      heading: 'Sites and platforms that are live.',
      filters: { all: 'All', platform: 'Platforms and apps', site: 'Sites' },
      filterGroup: 'Filter projects',
      pickerGroup: 'Choose a project',
      desktopPreview: 'Project desktop preview',
      mobilePreview: 'Project mobile preview',
      ctaText:
        'Need a website or a platform? Tell me what you are looking for and I will reply on WhatsApp.',
      ctaButton: 'Request a quote',
      items: {
        facyal: {
          name: 'Facyal Skin Experts',
          type: 'Platform',
          description:
            'Premium aesthetics clinic with locations in Florida and Brazil. I built the landing page and the clinic management ERP (scheduling, patients, dashboards) in a monorepo sharing Zod contracts between a NestJS API and Next.js apps.',
        },
        vitarisx: {
          name: 'VitarisX',
          type: 'Platform',
          description:
            'Telemedicine platform for booking online psychology and psychiatry appointments, with a NestJS API, real-time notifications over SSE, scheduled jobs, and a four-tier Next.js frontend.',
        },
        bolsas: {
          name: 'Brasil Mais Bolsas',
          type: 'Platform',
          description:
            'Scholarship marketplace where students compare tuition, filter by course, city and mode, and enroll with up to 70% off. Includes an admin dashboard, transactional emails, and SEO-focused pages.',
        },
        jukebox: {
          name: 'Jukebox',
          type: 'App',
          description:
            'Collaborative music room: open a box, add YouTube songs to a shared queue, and every browser hears the same song at the same position. Concurrent queue advances are made idempotent with row-level locking.',
        },
        watchgather: {
          name: 'WatchGather',
          type: 'App',
          description:
            'Movie and series discovery app powered by The Movie Database API, with filtering, watchlists, and responsive design.',
        },
        indiespensavel: {
          name: 'INDIEspensável Store',
          type: 'Website',
          description:
            'E-commerce for indie fashion and accessories with featured carousels, category navigation, a full shopping cart, and Stripe-ready payments.',
        },
        sinthoscpe: {
          name: 'SINTHOSCPE',
          type: 'Website',
          description:
            'Portal for the hotel, bar and restaurant workers union of Pernambuco: member benefits, downloadable conventions, notices, and news.',
        },
        lauana: {
          name: 'Lauana Beauty Clinic',
          type: 'Website',
          description:
            'Website for a hair therapy clinic in Caruaru, presenting protocols, technologies, before-and-after results, testimonials, and WhatsApp booking.',
        },
        nilton: {
          name: 'Dr. Nilton Barros',
          type: 'Website',
          description:
            'Conversion-focused landing page for an orthopedist with 30+ years of experience, guiding the patient from problem to solution to booking.',
        },
        wellyson: {
          name: 'Wellyson José · Psychologist',
          type: 'Website',
          description:
            'Welcoming institutional site for a psychologist, presenting the psychoanalytic approach, FAQ, and in-person or online appointments with direct WhatsApp booking.',
        },
      },
    },
    feedbacks: {
      label: 'Recommendations',
      heading: 'What colleagues say.',
      viewOnLinkedin: 'View on LinkedIn',
      linkedin: [
        {
          name: 'Arthur Brito',
          role: 'UX/UI Designer | Product Designer',
          url: 'https://www.linkedin.com/in/arthur-brito-24619b177/',
          description:
            'A very skilled professional, who knows how to work collaboratively with the team and who is always looking to learn and evolve his knowledge in the development area.',
        },
        {
          name: 'Luis Manoel',
          role: 'FullStack Web Developer',
          url: 'https://www.linkedin.com/in/luis-manoel-6ba027122/',
          description:
            'Excellent professional and colleague, always willing to help and clarify team doubts. A dedicated developer, who constantly seeks to improve his knowledge, applying them effectively in projects and sharing them with others. He has great technical knowledge and an exceptional ability to learn new technologies efficiently.',
        },
      ],
    },
    header: {
      job: 'Full-Stack Developer',
      slogan:
        'Web products from concept to deployment. 5+ years of experience with React, Next.js and Node, in product teams and on websites and platforms for clients.',
      viewProjects: 'View projects',
      whatsapp: 'Message me on WhatsApp',
      nowLabel: 'Now',
      nowRole: 'Mid-Level Full-Stack at BBChain',
    },
    navbar: {
      sections: 'Sections',
      language: 'Language',
      projects: 'Projects',
      about: 'About',
      career: 'Career',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },
    footer: {
      backToTop: 'Back to top',
    },
  },
  pt: {
    'about-me': {
      label: 'Sobre',
      heading: 'Full-Stack, do contrato da API ao deploy.',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Dados',
        cloud: 'Cloud e DevOps',
      },
      htmlAndCss: 'HTML e CSS',
      footnote:
        'Números indicam anos de uso. Java, Kotlin e Contract First desde 2026. Inglês: leitura avançada, conversação técnica intermediária.',
      text: 'Construo aplicações web escaláveis há mais de 5 anos, do planejamento da arquitetura à publicação na nuvem. Meu foco é o ecossistema React (Next.js, TypeScript, micro-frontends) e o backend com Node.js, NestJS e PostgreSQL. Gosto de trabalhar perto de design e produto, com código limpo e atenção à performance.',
    },
    contacts: {
      label: 'Contato',
      heading: 'Vamos conversar.',
      text: 'WhatsApp e LinkedIn são os canais mais diretos para falar comigo.',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      resume: 'Currículo (PDF)',
    },
    experiences: {
      label: 'Carreira',
      heading: 'Onde trabalhei.',
      jobs: [
        {
          job: 'Desenvolvedor Full-Stack Pleno',
          data: 'Jun 2026 — Atualmente',
          company: 'BBChain (via Comeia)',
          description:
            'Alocado no projeto da BBChain por meio da Comeia, atuando em um produto que combina Next.js e React no frontend com serviços em Java e Kotlin. Adoção da abordagem contract first no desenvolvimento de APIs, definindo o contrato antes da implementação para manter frontend e backend alinhados. Aprendizado de novas tecnologias na prática, entregando funcionalidades de ponta a ponta.',
        },
        {
          job: 'Desenvolvedor Full-Stack Sênior',
          data: 'Fev 2026 — Mai 2026',
          company: 'Facyal',
          description:
            'Construí do zero uma plataforma de gestão para uma clínica de estética com três sedes na Flórida (Miami, Orlando e Jacksonville). Arquitetei um monorepo pnpm + Turborepo com API REST em NestJS 11, ERP em Next.js 16 / React 19 e a landing page da empresa, compartilhando contratos Zod 4 entre os apps. PostgreSQL com Prisma 7, autenticação JWT, e-mails transacionais com Resend, agenda com FullCalendar, dashboards com Recharts e CI/CD com GitHub Actions para deploy em VPS com PM2 e Nginx.',
        },
        {
          job: 'Desenvolvedor Frontend Pleno',
          data: 'Nov 2025 — Fev 2026',
          company: 'Noorden Group',
          description:
            'Atuação direta na construção de interfaces escaláveis para a Zenvia, utilizando Next.js e React.js e a arquitetura de Micro-frontends. Colaboração próxima com times de design e produto para garantir fidelidade visual e usabilidade em interfaces do sistema. Solução de bugs e contribuição ativa nos projetos que utilizavam arquitetura de micro-frontends e micro-serviços se comunicando entre si.',
        },
        {
          job: 'Desenvolvedor Full-Stack Pleno',
          data: 'Mar 2025 — Out 2025',
          company: 'Cinq Finance',
          description:
            'Desenvolvimento de dashboards financeiros de alta performance, garantindo a renderização eficiente de grandes volumes de dados. Elevei a confiabilidade e escalabilidade de software ao orquestrar infra na AWS (EC2, S3, backups/restore) com Docker + Nginx + PM2. Padronização de componentes de UI e integração com APIs RESTful, assegurando a consistência visual e validação de dados no client-side.',
        },
        {
          job: 'Desenvolvedor Full-Stack Pleno',
          data: 'Abr 2024 — Fev 2025',
          company: 'Cev Digital',
          description:
            'Liderança no desenvolvimento de funcionalidades para duas aplicações web, sendo também responsável por toda a infraestrutura de nuvem na AWS. Gerenciei instâncias EC2, bancos de dados RDS e pipelines de deploy. Stack principal: Node.js, React.js, PostgreSQL, Sequelize. Usei meu conhecimento sólido em Linux para estruturar e manter os ambientes de produção. Atuei em alinhamento direto com a liderança da empresa.',
        },
        {
          job: 'Desenvolvedor Full-Stack Júnior',
          data: 'Jul 2022 — Mar 2024',
          company: 'Softmakers Br',
          description:
            'Trabalhei em múltiplas aplicações web com Node.js, React.js, NestJS, PostgreSQL, Prisma, Firebase, Laravel e MySQL. Gerenciei deploys no Google Cloud do ambiente de staging até produção. Resolvi problemas reportados por clientes com soluções rápidas e eficazes. Construí e mantive APIs RESTful e implementei testes unitários e de integração.',
        },
        {
          job: 'Estágio Desenvolvedor FullStack',
          data: 'Set 2021 — Jul 2022',
          company: 'Softmakers Br',
          description:
            'Desenvolvimento de aplicações web com Laravel, PHP, MySQL, HTML, Blade, JavaScript e CSS. Utilizei GitHub e GitFlow para controle de versão. Realizei deploys na plataforma da Hostgator em ambiente de testes e produção. Integrei APIs externas como o PagSeguro para oferecer opções de pagamento dentro da plataforma.',
        },
      ],
    },
    degrees: {
      certification: 'Certificação',
      certificate: {
        name: 'Introduction to Back-End Development',
        issuer: 'Meta, Coursera',
        completed: 'jun 2023',
        learnTitle: 'O que você aprende',
        learn: [
          'Distinguir as funções de desenvolvedor front-end, back-end e full-stack',
          'Criar e estilizar uma página web com HTML e CSS',
          'Entender os benefícios dos frameworks de UI',
        ],
        skills: [
          'React.js',
          'Bootstrap',
          'Responsive Web Design',
          'Full-Stack Web Development',
        ],
        cta: 'Ver certificado',
      },
    },
    projects: {
      label: 'Projetos',
      heading: 'Sites e plataformas que estão no ar.',
      filters: { all: 'Todos', platform: 'Plataformas e apps', site: 'Sites' },
      filterGroup: 'Filtrar projetos',
      pickerGroup: 'Escolher projeto',
      desktopPreview: 'Prévia desktop do projeto',
      mobilePreview: 'Prévia mobile do projeto',
      ctaText:
        'Precisa de um site ou de uma plataforma? Conte o que busca e eu respondo pelo WhatsApp.',
      ctaButton: 'Pedir orçamento',
      items: {
        facyal: {
          name: 'Facyal Skin Experts',
          type: 'Plataforma',
          description:
            'Clínica de estética premium com unidades na Flórida e no Brasil. Construí a landing page e o ERP de gestão da clínica (agenda, pacientes, dashboards) em um monorepo com contratos Zod compartilhados entre a API NestJS e os apps Next.js.',
        },
        vitarisx: {
          name: 'VitarisX',
          type: 'Plataforma',
          description:
            'Plataforma de telemedicina para agendamento de consultas online de psicologia e psiquiatria, com API NestJS, notificações em tempo real via SSE, jobs agendados e frontend Next.js em quatro camadas.',
        },
        bolsas: {
          name: 'Brasil Mais Bolsas',
          type: 'Plataforma',
          description:
            'Marketplace de bolsas de estudo em que o aluno compara mensalidades, filtra por curso, cidade e modalidade e contrata com até 70% de desconto. Inclui painel administrativo, e-mails transacionais e páginas focadas em SEO.',
        },
        jukebox: {
          name: 'Jukebox',
          type: 'App',
          description:
            'Sala de música colaborativa: abra uma box, adicione músicas do YouTube a uma fila compartilhada e todo navegador ouve a mesma música na mesma posição. Avanços concorrentes da fila são idempotentes com bloqueio em nível de linha.',
        },
        watchgather: {
          name: 'WatchGather',
          type: 'App',
          description:
            'App de descoberta de filmes e séries com a API do The Movie Database, filtros, listas e design responsivo.',
        },
        indiespensavel: {
          name: 'INDIEspensável Store',
          type: 'Site',
          description:
            'E-commerce de moda e acessórios indie com carrosséis de destaques, navegação por categorias, carrinho de compras completo e pagamentos com Stripe.',
        },
        sinthoscpe: {
          name: 'SINTHOSCPE',
          type: 'Site',
          description:
            'Portal do sindicato dos trabalhadores em hotéis, bares e restaurantes de Pernambuco: benefícios para associados, convenções para download, avisos e notícias.',
        },
        lauana: {
          name: 'Lauana Beauty Clinic',
          type: 'Site',
          description:
            'Site de clínica de terapia capilar em Caruaru, apresentando protocolos, tecnologias, antes e depois, depoimentos e agendamento via WhatsApp.',
        },
        nilton: {
          name: 'Dr. Nilton Barros',
          type: 'Site',
          description:
            'Landing page focada em conversão para ortopedista com mais de 30 anos de experiência, levando o paciente do problema à solução e ao agendamento.',
        },
        wellyson: {
          name: 'Wellyson José · Psicólogo',
          type: 'Site',
          description:
            'Site institucional acolhedor para psicólogo, apresentando a abordagem psicanalítica, perguntas frequentes e atendimento presencial ou online com agendamento direto pelo WhatsApp.',
        },
      },
    },
    feedbacks: {
      label: 'Recomendações',
      heading: 'O que colegas dizem.',
      viewOnLinkedin: 'Ver no LinkedIn',
      linkedin: [
        {
          name: 'Arthur Brito',
          role: 'UX/UI Designer | Product Designer',
          url: 'https://www.linkedin.com/in/arthur-brito-24619b177/',
          description:
            'Um profissional muito habilidoso, que sabe trabalhar colaborativamente com o time e que sempre está buscando aprender e evoluir os seus conhecimentos na área do desenvolvimento.',
        },
        {
          name: 'Luis Manoel',
          role: 'Desenvolvedor Web FullStack',
          url: 'https://www.linkedin.com/in/luis-manoel-6ba027122/',
          description:
            'Excelente profissional e colega de trabalho, sempre disposto a ajudar e esclarecer dúvidas da equipe. Um desenvolvedor dedicado, que busca constantemente aprimorar seus conhecimentos, aplicando-os de forma eficaz nos projetos e compartilhando-os com os demais. Possui ótimo conhecimento técnico e habilidade excepcional em aprender novas tecnologias de forma eficiente.',
        },
      ],
    },
    header: {
      job: 'Desenvolvedor Full-Stack',
      slogan:
        'Produtos web do conceito ao deploy. Mais de 5 anos de experiência com React, Next.js e Node, em times de produto e em sites e plataformas para clientes.',
      viewProjects: 'Ver projetos',
      whatsapp: 'Falar no WhatsApp',
      nowLabel: 'Agora',
      nowRole: 'Full-Stack Pleno na BBChain',
    },
    navbar: {
      sections: 'Seções',
      language: 'Idioma',
      projects: 'Projetos',
      about: 'Sobre',
      career: 'Carreira',
      contact: 'Contato',
      menu: 'Menu',
      close: 'Fechar',
    },
    footer: {
      backToTop: 'Voltar ao topo',
    },
  },
}
