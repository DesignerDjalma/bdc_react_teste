const indexContentDataDivTables = [
//   {
//     title: "Principais Projetos",
//     subtitle: "Descubra nossas especializações",
//     content: [
//       "- Automação de Processos: Implementamos sistemas para automatizar tarefas repetitivas.",
//       "- WebGIS Interativo: Criamos mapas dinâmicos e interativos para visualização de dados geoespaciais."
//     ]
//   },
  // {
  //   title: "Sobre",
  //   subtitle: "Especialidades",
  //   content: [
  //     "- Desenvolvimento Backend em Python",
  //     "- Automação de Processos",
  //     "- Geoprocessamento com Python",
  //     "“Minha paixão é transformar problemas em soluções através da programação.”",
  //   ],
  // },
  // {
  //   title: "Sobre",
  //   subtitle: "Especialidades",
  //   content: [
  //     "- Programação em C",
  //     "- Geoprocessamento de dados complexos",
  //     "- Desenvolvimento Web com React",
  //     "“A programação é uma arte e uma ciência ao mesmo tempo.”",
  //   ],
  // },
  // {
  //   title: "Portfólio de Djalma",
  //   subtitle: "Projetos em Destaque",
  //   content: [
  //     "- Projeto X: Ferramenta de automação para geoprocessamento com Python e PostGIS.",
  //     "- Projeto Y: Sistema de análise de grandes volumes de dados geoespaciais.",
  //   ],
  // },
  // {
  //   title: "Portfólio",
  //   subtitle: "Projetos em Destaque",
  //   content: [
  //     "- Projeto Z: Sistema WebGIS para monitoramento ambiental.",
  //     "- Projeto W: Desenvolvimento de algoritmos para processamento de imagens de satélite.",
  //   ],
  // },
//   {
//     title: "WebGIS",
//     subtitle: "Funcionalidades e Tecnologias",
//     content: [
//       "- Tecnologias Usadas: Frontend: React, Leaflet; Backend: Python, Flask, PostgreSQL/PostGIS.",
//       "O WebGIS desenvolvido foi usado para monitorar o uso de solo e detectar mudanças no padrão de cultivo."
//     ]
//   },
//   {
//     title: "Automação",
//     subtitle: "Benefícios",
//     content: [
//       "- Redução de custos e tempo com a automação de tarefas repetitivas.",
//       "- Integração de ferramentas para facilitar a gestão diária de negócios."
//     ]
//   },
//   {
//     title: "Geoprocessamento",
//     subtitle: "O que fazemos",
//     content: [
//       "- Criação de soluções para visualização e análise de dados geoespaciais.",
//       "- Implementação de sistemas GIS customizados para empresas e instituições."
//     ]
//   },
  {
    title: "Blog e Tutoriais",
    subtitle: "Artigos Recentes",
    content: [
      '- <a href="./blog/automacao-python">Como usar Python para automação de processos</a>',
      '- <a href="./blog/leaflet-mapas">Tutorial: Criação de mapas interativos com Leaflet</a>',
      '- <a href="./blog/webgis-tutorial">Desenvolvimento de um WebGIS do zero</a>'
    ]
  },
  {
    title: "Fale Conosco",
    subtitle: "Entre em contato com a gente!",
    content: [
      "- E-mail: contato@becodocodigos.com.br",
      '- LinkedIn: <a href="https://linkedin.com/in/djalma">Perfil no LinkedIn</a>'
    ]
  }
];

const myNavLinks = [
    { text: 'Portfólios', href: './portfolio.html' },
    { text: 'Projetos', href: './projetos.html' },
    { text: 'Serviços', href: './servicos.html' },
    { text: 'Contato', href: './contato.html' }
  ];

function populateNavLinks() {
    const navLinksContainer = document.getElementById("nav-links");

    myNavLinks.forEach(link => {
        const aTag = document.createElement('a');

        aTag.text = link.text;
        aTag.href = link.href;
        aTag.className = 'nav-link';

        navLinksContainer.appendChild(aTag);

    });
}

function populateContainer() {
  const container = document.getElementById("container");

  indexContentDataDivTables.forEach(item => {
    const infoBox = document.createElement("div");
    infoBox.className = "info-box";

    const infoTitle = document.createElement("div");
    infoTitle.className = "info-title";
    const title = document.createElement("h2");
    title.textContent = item.title;
    infoTitle.appendChild(title);

    const subtitle = document.createElement("h3");
    subtitle.textContent = item.subtitle;

    const paragraphs = item.content.map(content => {
      const p = document.createElement("p");
      p.innerHTML = content;
      return p;
    });

    infoBox.appendChild(infoTitle);
    infoBox.appendChild(subtitle);
    paragraphs.forEach(paragraph => infoBox.appendChild(paragraph));

    container.appendChild(infoBox);
  });
}

document.addEventListener("DOMContentLoaded", populateNavLinks);
document.addEventListener("DOMContentLoaded", populateContainer);