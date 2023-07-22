import reactIcon from '../../../../assets/icons/react-icon.svg'
import phpIcon from '../../../../assets/icons/php-icon.svg'
import nodeIcon from '../../../../assets/icons/node-icon.svg'
import typescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import postgresqlIcon from '../../../../assets/icons/postgresql-icon.svg'
import mysqlIcon from '../../../../assets/icons/mysql-icon.svg'
import laravelIcon from '../../../../assets/icons/laravel-icon.svg'
import nestIcon from '../../../../assets/icons/nest-icon.svg'
import nextIcon from '../../../../assets/icons/next-icon.svg'
import gitIcon from '../../../../assets/icons/git-icon.svg'
import htmlIcon from '../../../../assets/icons/html-icon.svg'
import cssIcon from '../../../../assets/icons/css-icon.svg'
import apiIcon from '../../../../assets/icons/api-icon.svg'
import jqueryIcon from '../../../../assets/icons/jquery-icon.svg'
import googleCloudIcon from '../../../../assets/icons/google-icon.svg'
import awsIcon from '../../../../assets/icons/aws-icon.svg'
import styledComponentsIcon from '../../../../assets/icons/styled-components-icon.svg'
import dockerIcon from '../../../../assets/icons/docker-icon.svg'
import { TechnologieWithOverlay, TecnologiesContainer } from './styles'

export function TechnologiesPanel() {
  return (
    <TecnologiesContainer>
      <TechnologieWithOverlay>
        <img src={reactIcon} alt="react icon" />
        <div>
          <h3>ReactJS</h3>
          <p>
            <span>1 ano e meio de experiência</span>O ReactJS é uma biblioteca
            JavaScript para criação de interfaces de usuário reativas e
            eficientes. Ele utiliza componentes reutilizáveis e atualização
            seletiva da interface, proporcionando um desempenho otimizado. Com
            uma sintaxe JSX e uma comunidade ativa, o ReactJS é amplamente
            utilizado e suportado por diversas ferramentas e bibliotecas.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={phpIcon} alt="php icon" />
        <div>
          <h3>PHP</h3>
          <p>
            <span>1 ano e meio de experiência</span> O PHP é uma linguagem de
            programação de código aberto amplamente usada para desenvolvimento
            web. Com uma sintaxe semelhante ao HTML, ele permite criar páginas
            dinâmicas, interagir com bancos de dados e processar formulários. O
            PHP possui uma comunidade ativa e extensa documentação, tornando-o
            uma escolha popular para construir aplicativos web.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nodeIcon} alt="node icon" />
        <div>
          <h3>NodeJs</h3>
          <p>
            <span>1 ano e meio de experiência</span>O Node.js é uma plataforma
            de desenvolvimento de aplicações backend em JavaScript. Ele utiliza
            o motor de execução V8 do Google Chrome para executar o JavaScript
            no servidor. O Node.js é conhecido por sua natureza assíncrona e
            orientada a eventos, o que o torna eficiente e adequado para
            aplicações de alto desempenho em tempo real. Com um vasto
            ecossistema de pacotes e bibliotecas, o Node.js é amplamente
            utilizado para construir servidores, APIs e aplicativos web
            escaláveis.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={typescriptIcon} alt="typescript icon" />
        <div>
          <h3>TypeScript </h3>
          <p>
            <span>1 ano e meio de experiência</span>
            TypeScript é uma linguagem de programação que estende o JavaScript
            adicionando recursos de tipagem estática. Ele é usado para
            desenvolver aplicativos JavaScript escaláveis e de alta qualidade,
            fornecendo recursos avançados de verificação de tipo e suporte a
            recursos modernos do JavaScript.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={postgresqlIcon} alt="postgresql icon" />
        <div>
          <h3>PostgreSQL</h3>
          <p>
            <span>1 ano e meio de experiência</span>O PostgreSQL é um
            poderososistema de gerenciamento de banco de dados relacional de
            código aberto. Ele fornece recursos avançados, como suporte a
            transações ACID, consultas complexas, indexação eficiente e
            extensibilidade, tornando-o uma escolha popular para aplicativos que
            requerem armazenamento de dados robusto.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={mysqlIcon} alt="mysql icon" />
        <div>
          <h3>MySQL</h3>
          <p>
            <span>2 anos de experiência</span>
            MySQL é outro sistema de gerenciamento de banco de dados relacional
            amplamente utilizado. É conhecido por sua facilidade de uso,
            escalabilidade e desempenho. O MySQL é usado em muitas aplicações
            web para armazenar e recuperar dados de forma eficiente.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={laravelIcon} alt="laravel icon" />
        <div>
          <h3>Laravel</h3>
          <p>
            <span>1 ano e meio de experiência</span>
            Laravel é um framework de desenvolvimento web em PHP que segue o
            padrão Model-View-Controller (MVC). Ele oferece uma sintaxe elegante
            e recursos abrangentes para agilizar o desenvolvimento web, como
            roteamento, gerenciamento de banco de dados, autenticação e muito
            mais.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nestIcon} alt="nest icon" />
        <div>
          <h3>NestJS</h3>
          <p>
            <span>6 meses de experiência</span>
            NestJS é um framework de aplicativo back-end em Node.js inspirado no
            Angular. Ele fornece uma estrutura modular e escalável para a
            construção de aplicativos back-end robustos usando TypeScript. O
            NestJS facilita a criação de APIs RESTful, aplicando os princípios
            de programação orientada a objetos e injeção de dependência.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nextIcon} alt="next icon" />
        <div>
          <h3>Next.js</h3>
          <p>
            <span>1 ano de experiência</span>
            Next.js é um framework React para criação de aplicativos web
            renderizados no servidor. Ele oferece suporte a renderização do lado
            do servidor (SSR) e geração estática, otimização de desempenho,
            roteamento avançado e recursos como pré-renderização, divisão de
            código e carregamento sob demanda.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={gitIcon} alt="git icon" />
        <div>
          <h3>Git</h3>
          <p>
            <span>2 anos de experiência</span>
            Git é um sistema de controle de versão distribuído amplamente
            utilizado. Ele permite rastrear e gerenciar alterações em um projeto
            de software ao longo do tempo. Com o Git, você pode criar
            ramificações, mesclar código, desfazer alterações e colaborar com
            outras pessoas de forma eficiente.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={htmlIcon} alt="html icon" />
        <div>
          <h3>HTML 5</h3>
          <p>
            <span>2 anos de experiência</span>
            HTML (HyperText Markup Language) é a linguagem de marcação usada
            para criar a estrutura e o conteúdo de páginas da web. Ele define a
            estrutura dos elementos em uma página, como cabeçalhos, parágrafos,
            links e imagens.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={cssIcon} alt="css icon" />
        <div>
          <h3>CSS 3</h3>
          <p>
            <span>2 anos de experiência</span>
            CSS (Cascading Style Sheets) é uma linguagem de estilo usada para
            definir a aparência e o layout dos elementos em uma página da web.
            Ele permite controlar cores, fontes, tamanhos, posicionamento e
            outros aspectos visuais de um site.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={apiIcon} alt="api icon" />
        <div>
          <h3>REST APIs</h3>
          <p>
            <span>2 anos de experiência</span>
            REST (Representational State Transfer) é um estilo arquitetural
            amplamente usado para a criação de APIs (Interfaces de Programação
            de Aplicativos) web. Ele define um conjunto de princípios para a
            comunicação entre cliente e servidor, utilizando métodos HTTP, como
            GET, POST, PUT e DELETE, para realizar operações em recursos.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={jqueryIcon} alt="jquery icon" />
        <div>
          <h3>jQuery</h3>
          <p>
            <span>2 anos de experiência</span>
            jQuery é uma biblioteca JavaScript popular que simplifica a
            manipulação do DOM, a animação, o gerenciamento de eventos e a
            realização de requisições AJAX em uma página da web. Ele fornece uma
            sintaxe simplificada e compatibilidade com vários navegadores,
            facilitando o desenvolvimento de recursos interativos e dinâmicos em
            websites.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={googleCloudIcon} alt="google cloud icon" />
        <div>
          <h3>Google Cloud</h3>
          <p>
            <span>1 ano de experiência</span>
            jQuery é uma biblioteca JavaScript popular que simplifica a
            manipulação do DOM, a animação, o gerenciamento de eventos e a
            realização de requisições AJAX em uma página da web. Ele fornece uma
            sintaxe simplificada e compatibilidade com vários navegadores,
            facilitando o desenvolvimento de recursos interativos e dinâmicos em
            websites.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={awsIcon} alt="aws icon" />
        <div>
          <h3>AWS</h3>
          <p>
            <span>1 ano de experiência</span>
            AWS é uma plataforma de computação em nuvem fornecida pela Amazon.
            Ela oferece uma ampla gama de serviços, como computação,
            armazenamento, banco de dados, aprendizado de máquina e muito mais.
            Empresas e desenvolvedores podem usar a AWS para hospedar, gerenciar
            e dimensionar aplicativos e serviços de forma flexível e segura.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={styledComponentsIcon} alt="styled components icon" />
        <div>
          <h3>Styled Components</h3>
          <p>
            <span>2 anos de experiência</span>
            Styled Components é uma biblioteca de estilização para React e
            outras bibliotecas JavaScript. Permite escrever estilos CSS de forma
            mais modular e coesa, criando componentes com estilos encapsulados.
            Os estilos são definidos usando a sintaxe do CSS-in-JS, facilitando
            a criação de interfaces reutilizáveis e mais fáceis de manter.
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={dockerIcon} alt="docker icon" />
        <div>
          <h3>Docker</h3>
          <p>
            <span>1 ano de experiência</span>
            Docker é uma plataforma de código aberto que permite criar,
            implantar e executar aplicativos em contêineres. Os contêineres são
            unidades isoladas e leves que contêm todo o necessário para executar
            um aplicativo, incluindo código, bibliotecas e dependências. Eles
            permitem que os aplicativos sejam executados consistentemente em
            qualquer ambiente, simplificando o processo de desenvolvimento e
            implantação.
          </p>
        </div>
      </TechnologieWithOverlay>
    </TecnologiesContainer>
  )
}
