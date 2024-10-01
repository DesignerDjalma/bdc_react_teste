# BECO DOS CÓDIGOS WEBSITE

## Um site feito em React

Este projeto é desenvolvido por uma dupla de programadores com o objetivo de compartilhar portfólios pessoais e projetos conjuntos. O site integra várias áreas de expertise, incluindo geoprocessamento, automação, programação, banco de dados, e uma aplicação WebGIS.

### Funcionalidades e Estrutura do Site

- [ ] **Headers**
  - Inclui logo, nome do site e navegação principal para diferentes seções.
  
- [ ] **Home**
  - Visão geral sobre o site, introdução da equipe e principais projetos em destaque.
  
- [ ] **Sobre Nós**
  - Descrição detalhada da dupla de programadores, com suas especialidades individuais.
  
- [ ] **Portfólios Pessoais**
  - Seções dedicadas a cada membro da equipe para mostrar suas contribuições, trabalhos e habilidades específicas.
  
- [ ] **Projetos Conjuntos**
  - Exposição dos projetos desenvolvidos em conjunto, com descrições detalhadas, tecnologias usadas e resultados alcançados.
  
- [ ] **WebGIS**
  - Uma aplicação de mapeamento interativa integrada ao site, exibindo dados geoespaciais manipuláveis diretamente pelo navegador.
  
- [ ] **Serviços**
  - Descrição dos serviços oferecidos, como consultoria em geoprocessamento, automação de processos e desenvolvimento de software personalizado.
  
- [ ] **Blog/Tutoriais**
  - Artigos sobre geoprocessamento, automação, programação e banco de dados.
  
- [ ] **Contato**
  - Formulário de contato para que clientes e colaboradores possam se conectar com a equipe.
  
- [ ] **Footer**
  - Links para redes sociais, contatos e outras informações importantes.

### Tecnologias Usadas

- **Frontend**: React, CSS, JavaScript
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB/PostgreSQL (dependendo dos requisitos)
- **WebGIS**: Leaflet ou OpenLayers para a parte de geoprocessamento

### Estrutura de Páginas e URLs

1. **Página Inicial (Home)**
   - **URL**: `/`
   - Apresentação geral do site, com breve visão sobre o projeto e links para as demais seções.

2. **Sobre Nós**
   - **URL**: `/sobre-nos`
   - Página dedicada à dupla de programadores, com descrições individuais, experiências e habilidades.

3. **Portfólios Pessoais**
   - **URL**: `/portfolios`
   - Exibe os portfólios de cada membro. Cada um com uma breve descrição dos projetos pessoais.
   - Pode ter subseções:
     - `/portfolios/djalma`
     - `/portfolios/parceira`

4. **Projetos Conjuntos**
   - **URL**: `/projetos`
   - Mostra os projetos desenvolvidos em conjunto, com detalhes técnicos, tecnologias utilizadas e resultados.

5. **WebGIS**
   - **URL**: `/webgis`
   - Página com a aplicação WebGIS interativa, permitindo visualização e manipulação de dados geoespaciais.

6. **Serviços**
   - **URL**: `/servicos`
   - Detalha os serviços oferecidos, como consultoria em geoprocessamento, automação e desenvolvimento de software.

7. **Blog/Tutoriais**
   - **URL**: `/blog`
   - Listagem de tutoriais e artigos sobre as áreas de especialização do time.

8. **Contato**
   - **URL**: `/contato`
   - Formulário de contato e informações para que visitantes possam se conectar com vocês.

9. **404 - Página Não Encontrada**
   - **URL**: `/*`
   - Página de erro para quando uma URL inválida for acessada.

### Estrutura de Pastas (Sugerida)

- `/src`
  - `/components`
    - `Header.js`
    - `Footer.js`
    - `Home.js`
    - `SobreNos.js`
    - `Portfolios.js`
    - `Projetos.js`
    - `WebGIS.js`
    - `Servicos.js`
    - `Blog.js`
    - `Contato.js`
    - `NotFound.js` (Página 404)
  - `/assets`
    - (Imagens, logos, ícones)
  - `/styles`
    - (CSS ou SASS/SCSS para estilização)
  - `/api`
    - (Para integração com backend ou serviços)
  - `/routes`
    - `AppRouter.js` (Arquivo onde serão definidas todas as rotas do site)

### Exemplo de Rotas com React Router

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SobreNos from './components/SobreNos';
import Portfolios from './components/Portfolios';
import Projetos from './components/Projetos';
import WebGIS from './components/WebGIS';
import Servicos from './components/Servicos';
import Blog from './components/Blog';
import Contato from './components/Contato';
import NotFound from './components/NotFound';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre-nos" component={SobreNos} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/projetos" component={Projetos} />
        <Route path="/webgis" component={WebGIS} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/blog" component={Blog} />
        <Route path="/contato" component={Contato} />
        <Route component={NotFound} /> {/* Página 404 */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
