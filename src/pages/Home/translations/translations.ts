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
}

const technologiesTranslations = {
  en: {
    description:
      'Technologies I master with hands-on experience. Hover over each technology to discover detailed information about my expertise and practical knowledge.',
    reactjs: {
      description:
        'ReactJS is a JavaScript library for creating reactive and efficient user interfaces. It uses reusable components and selective interface update, providing optimized performance. With a JSX syntax and an active community, ReactJS is widely used and supported by several tools and libraries.',
    },
    tailwindcss: {
      description:
        'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. It offers rapid UI development with consistent design systems, responsive design utilities, and excellent developer experience with features like JIT compilation and extensive customization options.',
    },
    nodejs: {
      description:
        'Node.js is a JavaScript backend application development platform. It uses the Google Chrome V8 execution engine to run JavaScript on the server. Node.js is known for its asynchronous and event-driven nature, which makes it efficient and suitable for high-performance real-time applications. With a vast ecosystem of packages and libraries, Node.js is widely used to build scalable servers, APIs and web applications.',
    },
    typescript: {
      description:
        'TypeScript is a programming language that extends JavaScript by adding static typing features. It is used to develop scalable and high quality JavaScript applications, providing advanced type checking features and support for modern JavaScript features.',
    },
    postgresql: {
      description:
        'PostgreSQL is a powerful open source relational database management system. It provides advanced features such as ACID transaction support, complex queries, efficient indexing and extensibility, making it a popular choice for applications that require robust data storage.',
    },
    mysql: {
      description:
        'MySQL is another widely used relational database management system. It is known for its ease of use, scalability and performance. MySQL is used in many web applications to efficiently store and retrieve data.',
    },
    laravel: {
      description:
        'Laravel is a PHP web development framework that follows the Model-View-Controller (MVC) pattern. It offers an elegant syntax and comprehensive features to streamline web development, such as routing, database management, authentication and more.',
    },
    nestjs: {
      description:
        'NestJS is a Node.js backend application framework inspired by Angular. It provides a modular and scalable framework for building robust backend applications using TypeScript. NestJS makes it easy to create RESTful APIs by applying object-oriented programming principles and dependency injection.',
    },
    nextjs: {
      description:
        'Next.js is a React framework for creating server-side rendered web applications. It supports server-side rendering (SSR) and static generation, performance optimization, advanced routing and features such as pre-rendering, code splitting and on-demand loading.',
    },
    shadcn: {
      description:
        'Shadcn/UI is a collection of beautiful, accessible and customizable React components built with Radix UI and Tailwind CSS. It provides a modern design system with copy-paste components that can be easily integrated into Next.js applications, offering consistent UI patterns and excellent developer experience.',
    },
    authjs: {
      description:
        'Auth.js (formerly NextAuth.js) is a complete authentication solution for Next.js applications. It provides secure authentication with support for multiple providers (OAuth, email, credentials), session management, JWT tokens, and database adapters, making it easy to implement robust authentication systems.',
    },
    prisma: {
      description:
        'Prisma is a next-generation ORM for Node.js and TypeScript. It provides type-safe database access, auto-generated queries, seamless migrations, and an intuitive data modeling experience. Prisma simplifies database workflows with its powerful schema definition and excellent IDE support.',
    },
    reactemail: {
      description:
        'React Email is a collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript. It provides a developer-friendly way to build responsive email templates with modern tooling, preview capabilities, and seamless integration with popular email services.',
    },
    git: {
      description:
        'Git is a widely used distributed version control system. It allows you to track and manage changes to a software project over time. With Git, you can create branches, merge code, undo changes, and collaborate with others efficiently.',
    },
    html5: {
      description:
        'HTML (HyperText Markup Language) is the markup language used to create the structure and content of web pages. It defines the structure of elements on a page, such as headers, paragraphs, links, and images.',
    },
    css3: {
      description:
        'CSS (Cascading Style Sheets) is a style language used to define the appearance and layout of elements on a web page. It allows you to control colors, fonts, sizes, positioning, and other visual aspects of a website.',
    },
    restapi: {
      description:
        'REST (Representational State Transfer) is a widely used architectural style for creating web APIs (Application Programming Interfaces). It defines a set of principles for communication between client and server, using HTTP methods such as GET, POST, PUT and DELETE to perform operations on resources.',
    },
    jquery: {
      description:
        'jQuery is a popular JavaScript library that simplifies DOM manipulation, animation, event handling, and AJAX requests on a web page. It provides a simplified syntax and cross-browser compatibility, making it easy to develop interactive and dynamic features on websites.',
    },
    googlecloud: {
      description:
        "Google Cloud is a cloud computing platform offered by Google. Like AWS, Google Cloud provides infrastructure, storage, data analytics, machine learning, and other cloud-based solutions. It is used by companies and developers to run applications, store data, and leverage Google's global infrastructure.",
    },
    aws: {
      description:
        'AWS is a cloud computing platform provided by Amazon. It offers a wide range of services, such as computing, storage, database, machine learning, and more. Companies and developers can use AWS to host, manage, and scale applications and services flexibly and securely.',
    },
    styledcomponents: {
      description:
        'Styled Components is a styling library for React and other JavaScript libraries. It allows you to write CSS styles in a more modular and cohesive way, creating components with encapsulated styles. Styles are defined using the CSS-in-JS syntax, making it easy to create reusable and easier to maintain interfaces.',
    },
    docker: {
      description:
        'Docker is an open source platform that allows you to build, deploy, and run applications in containers. Containers are isolated and lightweight units that contain everything needed to run an application, including code, libraries, and dependencies. They allow applications to run consistently in any environment, simplifying the development and deployment process.',
    },
  },
  pt: {
    description:
      'Tecnologias que domino com experiência prática comprovada. Passe o mouse sobre cada tecnologia para descobrir informações detalhadas sobre minha expertise e conhecimento aplicado.',
    reactjs: {
      description:
        'O ReactJS é uma biblioteca JavaScript para criação de interfaces de usuário reativas e eficientes. Ele utiliza componentes reutilizáveis e atualização seletiva da interface, proporcionando um desempenho otimizado. Com uma sintaxe JSX e uma comunidade ativa, o ReactJS é amplamente utilizado e suportado por diversas ferramentas e bibliotecas.',
    },
    tailwindcss: {
      description:
        'Tailwind CSS é um framework CSS utilitário que fornece classes de baixo nível para construir designs personalizados. Oferece desenvolvimento rápido de UI com sistemas de design consistentes, utilitários de design responsivo e excelente experiência do desenvolvedor com recursos como compilação JIT e amplas opções de customização.',
    },
    nodejs: {
      description:
        'O Node.js é uma plataforma de desenvolvimento de aplicações backend em JavaScript. Ele utiliza o motor de execução V8 do Google Chrome para executar o JavaScript no servidor. O Node.js é conhecido por sua natureza assíncrona e orientada a eventos, o que o torna eficiente e adequado para aplicações de alto desempenho em tempo real. Com um vasto ecossistema de pacotes e bibliotecas, o Node.js é amplamente utilizado para construir servidores, APIs e aplicativos web escaláveis.',
    },
    typescript: {
      description:
        'TypeScript é uma linguagem de programação que estende o JavaScript adicionando recursos de tipagem estática. Ele é usado para desenvolver aplicativos JavaScript escaláveis e de alta qualidade, fornecendo recursos avançados de verificação de tipo e suporte a recursos modernos do JavaScript.',
    },
    postgresql: {
      description:
        'O PostgreSQL é um poderoso sistema de gerenciamento de banco de dados relacional de código aberto. Ele fornece recursos avançados, como suporte a transações ACID, consultas complexas, indexação eficiente e extensibilidade, tornando-o uma escolha popular para aplicativos que requerem armazenamento de dados robusto.',
    },
    mysql: {
      description:
        'MySQL é outro sistema de gerenciamento de banco de dados relacional amplamente utilizado. É conhecido por sua facilidade de uso, escalabilidade e desempenho. O MySQL é usado em muitas aplicações web para armazenar e recuperar dados de forma eficiente.',
    },
    laravel: {
      description:
        'Laravel é um framework de desenvolvimento web em PHP que segue o padrão Model-View-Controller (MVC). Ele oferece uma sintaxe elegante e recursos abrangentes para agilizar o desenvolvimento web, como roteamento, gerenciamento de banco de dados, autenticação e muito mais.',
    },
    nestjs: {
      description:
        'NestJS é um framework de aplicativo back-end em Node.js inspirado no Angular. Ele fornece uma estrutura modular e escalável para a construção de aplicativos back-end robustos usando TypeScript. O NestJS facilita a criação de APIs RESTful, aplicando os princípios de programação orientada a objetos e injeção de dependência.',
    },
    nextjs: {
      description:
        'Next.js é um framework React para criação de aplicativos web renderizados no servidor. Ele oferece suporte a renderização do lado do servidor (SSR) e geração estática, otimização de desempenho, roteamento avançado e recursos como pré-renderização, divisão de código e carregamento sob demanda.',
    },
    shadcn: {
      description:
        'Shadcn/UI é uma coleção de componentes React bonitos, acessíveis e personalizáveis construídos com Radix UI e Tailwind CSS. Fornece um sistema de design moderno com componentes copy-paste que podem ser facilmente integrados em aplicações Next.js, oferecendo padrões de UI consistentes e excelente experiência do desenvolvedor.',
    },
    authjs: {
      description:
        'Auth.js (anteriormente NextAuth.js) é uma solução completa de autenticação para aplicações Next.js. Fornece autenticação segura com suporte para múltiplos provedores (OAuth, email, credenciais), gerenciamento de sessões, tokens JWT e adaptadores de banco de dados, facilitando a implementação de sistemas de autenticação robustos.',
    },
    prisma: {
      description:
        'Prisma é um ORM de próxima geração para Node.js e TypeScript. Fornece acesso type-safe ao banco de dados, queries auto-geradas, migrações seamless e uma experiência intuitiva de modelagem de dados. O Prisma simplifica workflows de banco de dados com sua poderosa definição de schema e excelente suporte de IDE.',
    },
    reactemail: {
      description:
        'React Email é uma coleção de componentes de alta qualidade e sem estilo para criar belos emails usando React e TypeScript. Fornece uma maneira amigável ao desenvolvedor de construir templates de email responsivos com ferramentas modernas, capacidades de preview e integração perfeita com serviços de email populares.',
    },
    git: {
      description:
        'Git é um sistema de controle de versão distribuído amplamente utilizado. Ele permite rastrear e gerenciar alterações em um projeto de software ao longo do tempo. Com o Git, você pode criar ramificações, mesclar código, desfazer alterações e colaborar com outras pessoas de forma eficiente.',
    },
    html5: {
      description:
        'HTML (HyperText Markup Language) é a linguagem de marcação usada para criar a estrutura e o conteúdo de páginas da web. Ele define a estrutura dos elementos em uma página, como cabeçalhos, parágrafos, links e imagens.',
    },
    css3: {
      description:
        'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência e o layout dos elementos em uma página da web. Ele permite controlar cores, fontes, tamanhos, posicionamento e outros aspectos visuais de um site.',
    },
    restapi: {
      description:
        'REST (Representational State Transfer) é um estilo arquitetural amplamente usado para a criação de APIs (Interfaces de Programação de Aplicativos) web. Ele define um conjunto de princípios para a comunicação entre cliente e servidor, utilizando métodos HTTP, como GET, POST, PUT e DELETE, para realizar operações em recursos.',
    },
    jquery: {
      description:
        'jQuery é uma biblioteca JavaScript popular que simplifica a manipulação do DOM, a animação, o gerenciamento de eventos e a realização de requisições AJAX em uma página da web. Ele fornece uma sintaxe simplificada e compatibilidade com vários navegadores, facilitando o desenvolvimento de recursos interativos e dinâmicos em websites.',
    },
    googlecloud: {
      description:
        'O Google Cloud é uma plataforma de computação em nuvem oferecida pelo Google. Assim como a AWS, o Google Cloud fornece serviços de infraestrutura, armazenamento, análise de dados, aprendizado de máquina e outras soluções baseadas em nuvem. É usado por empresas e desenvolvedores para executar aplicativos, armazenar dados e aproveitar a infraestrutura global do Google.',
    },
    aws: {
      description:
        'AWS é uma plataforma de computação em nuvem fornecida pela Amazon. Ela oferece uma ampla gama de serviços, como computação, armazenamento, banco de dados, aprendizado de máquina e muito mais. Empresas e desenvolvedores podem usar a AWS para hospedar, gerenciar e dimensionar aplicativos e serviços de forma flexível e segura.',
    },
    styledcomponents: {
      description:
        'Styled Components é uma biblioteca de estilização para React e outras bibliotecas JavaScript. Permite escrever estilos CSS de forma mais modular e coesa, criando componentes com estilos encapsulados. Os estilos são definidos usando a sintaxe do CSS-in-JS, facilitando a criação de interfaces reutilizáveis e mais fáceis de manter.',
    },
    docker: {
      description:
        'Docker é uma plataforma de código aberto que permite criar, implantar e executar aplicativos em contêineres. Os contêineres são unidades isoladas e leves que contêm todo o necessário para executar um aplicativo, incluindo código, bibliotecas e dependências. Eles permitem que os aplicativos sejam executados consistentemente em qualquer ambiente, simplificando o processo de desenvolvimento e implantação.',
    },
  },
}

export const translations = {
  en: {
    'about-me': {
      title: 'About me',
      text: 'Full-Stack Developer with 4+ years of experience building scalable web applications — from architecture planning to cloud deployment. I specialize in modern React ecosystems (Next.js, TypeScript, micro-frontends) and backend solutions (Node.js, NestJS, PostgreSQL). I thrive in collaborative team environments, bridge the gap between design and engineering, and am deeply passionate about clean code, performance, and developer experience.',
      highlights: [
        'Frontend: Next.js (App/Pages Router), React.js, TypeScript, CSR & SSR, Context API, RSC, SSG',
        'UI & Styling: Tailwind CSS, Styled Components, Shadcn/UI, Figma to Code, Responsive Design',
        'Backend: Node.js, NestJS, Express, PostgreSQL, MySQL, Prisma ORM, Firebase, Firestore',
        'DevOps & Cloud: Docker, Nginx, PM2, AWS (EC2, S3), Google Cloud, CI/CD (GitHub Actions)',
        'English: Advanced reading, intermediate technical conversation',
      ],
    },
    contacts: {
      whatsapp: 'Whatsapp',
      linkedin: 'Linkedin',
    },
    skills: {
      title: 'My Skills',
    },
    experiences: {
      title: 'Professional Experience',
      jobs: [
        {
          job: 'Frontend Developer',
          data: 'Nov 2025 — Present',
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
      title: 'Certifications & Education',
    },
    projects: {
      title: 'My Projects',
      watchgather: {
        description:
          'Movie and series discovery app powered by The Movie Database API, with filtering, watchlists, and responsive design.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
        url: 'https://watchgather.gustavodante.com',
      },
      sinthope: {
        description:
          "Institutional website built to modernize the union's communication, presenting benefits, agreements, news and notices in a clear layout with quick access to WhatsApp and official documents.",
        tags: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Sanity CMS',
          'Tailwind CSS',
        ],
        url: 'https://www.sinthoscpe.com.br/',
      },
      vitarisx: {
        description:
          'Online therapy platform focused on accessibility, connecting patients with certified psychologists through simple scheduling, a guided booking flow, and a welcoming experience at every step.',
        tags: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Shadcn/UI',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Auth.js',
        ],
        url: 'https://vitarisx.com/',
      },
      cinqfinance: {
        description:
          'Platform for financial consultants and planners to manage clients, deals and proposals in a single panel, with organized funnels, task management and integrations designed for daily consultative work.',
        tags: [
          'Node.js',
          'TypeScript',
          'NestJS',
          'Express',
          'RESTful',
          'Swagger',
        ],
        url: 'https://plataforma.cinqfinance.com/',
      },
    },
    feedbacks: {
      title: 'Recommendations',
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
      job: 'Software Developer',
      slogan: 'Creating exceptional digital experiences.',
      curriculum: 'Curriculum',
    },
    navbar: {
      english: 'English',
      portuguese: 'Portuguese',
      skills: 'Skills',
      experiences: 'Experiences',
      degrees: 'Degrees',
    },
    technologies: technologiesTranslations.en,
  },
  pt: {
    'about-me': {
      title: 'Sobre mim',
      text: 'Desenvolvedor Full-Stack com mais de 4 anos de experiência construindo aplicações web escaláveis — desde o planejamento da arquitetura até o deploy na nuvem. Especializado no ecossistema moderno do React (Next.js, TypeScript, micro-frontends) e soluções backend (Node.js, NestJS, PostgreSQL). Trabalho bem em equipe, conecto design e engenharia, e sou apaixonado por código limpo, performance e experiência do desenvolvedor.',
      highlights: [
        'Frontend: Next.js (App/Pages Router), React.js, TypeScript, CSR & SSR, Context API, RSC, SSG',
        'UI & Estilização: Tailwind CSS, Styled Components, Shadcn/UI, Figma to Code, Design Responsivo',
        'Backend: Node.js, NestJS, Express, PostgreSQL, MySQL, Prisma ORM, Firebase, Firestore',
        'DevOps & Cloud: Docker, Nginx, PM2, AWS (EC2, S3), Google Cloud, CI/CD (GitHub Actions)',
        'Inglês: leitura avançada, conversação técnica intermediária',
      ],
    },
    contacts: {
      whatsapp: 'Whatsapp',
      linkedin: 'Linkedin',
    },
    skills: {
      title: 'Minhas habilidades',
    },
    experiences: {
      title: 'Experiências profissionais',
      jobs: [
        {
          job: 'Desenvolvedor Frontend Pleno',
          data: 'Nov 2025 — Atualmente',
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
      title: 'Certificações e formações',
    },
    projects: {
      title: 'Meus Projetos',
      watchgather: {
        description:
          'App de descoberta de filmes e séries com a API do The Movie Database, filtros, listas e design responsivo.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
        url: 'https://watchgather.gustavodante.com',
      },
      sinthope: {
        description:
          'Site institucional desenvolvido para modernizar a comunicação do sindicato, apresentando benefícios, convenções, notícias e avisos de forma clara, com foco em leitura fácil e acesso rápido ao WhatsApp e documentos oficiais.',
        tags: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Sanity CMS',
          'Tailwind CSS',
        ],
        url: 'https://www.sinthoscpe.com.br/',
      },
      vitarisx: {
        description:
          'Plataforma de terapia online focada em acessibilidade, conectando pacientes a psicólogos certificados com agendamento simples, fluxo guiado de marcação de sessões e experiência acolhedora em todas as etapas.',
        tags: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Shadcn/UI',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Auth.js',
        ],
        url: 'https://vitarisx.com/',
      },
      cinqfinance: {
        description:
          'Plataforma para consultores e planejadores financeiros gerenciarem clientes, negócios e propostas em um único painel, com funis organizados, gestão de tarefas e integrações pensadas para o dia a dia do atendimento consultivo.',
        tags: [
          'Node.js',
          'TypeScript',
          'NestJS',
          'Express',
          'RESTful',
          'Swagger',
        ],
        url: 'https://plataforma.cinqfinance.com/',
      },
    },
    feedbacks: {
      title: 'Recomendações',
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
      job: 'Desenvolvedor de Software',
      slogan: 'Criando experiências digitais excepcionais.',
      curriculum: 'Currículo',
    },
    navbar: {
      english: 'Inglês',
      portuguese: 'Português',
      skills: 'Habilidades',
      experiences: 'Experiências',
      degrees: 'Certificações',
    },
    technologies: technologiesTranslations.pt,
  },
}
