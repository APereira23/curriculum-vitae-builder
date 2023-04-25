import uniqid from "uniqid";

const bio = [
  {
    title: "Informação Pessoal",
    id: uniqid(),
    contents: {
      Nome: "António Flávio Marques Pereira",
      Email: "antoniofmpereira@gmail.com",
      Telemóvel: "+351 928154529",
      Cidade: "Lisboa, Portugal",
    }
  },
  {
    title: "Idiomas",
    id: uniqid(),
    contents: [
      "Português (nativo)",
      "Inglês (C2)",
      "Alemão (A2)",    
    ]
  },
  {
    title: "Informação adicional",
    id: uniqid(),
    contents: [
      "Carta de Condução (B, B1)",
      "Portefólio: https://github.com/APereira23"
    ]
  }
];

const work = [
  {
    title: "Coordenador Pedagógico / Técnico Administrativo",
    when: "setembro 2020 - agosto 2022",
    where: "EXPLICOLÂNDIA Centro de Estudos (Lisboa-Alvalade)",
    tasks: [
      "task #1",
      "task #2",
      "task #3",
    ],
    id: uniqid(),
  },
  {
    title: "Explicador",
    when: "março 2019 - junho 2020; setembro 2022 - abril 2023" ,
    where: "EXPLICOLÂNDIA Centro de Estudos (Lisboa-Alvalade)",
    tasks: [
      "- Aulas individuais de Português, Inglês e Filosofia;",
      "- Organização de planos de preparação para os Exames Nacionais;"
    ],
    id: uniqid(),
  },
  {
    title: "Operador de Caixa",
    when: "agosto 2017 - janeiro 2018",
    where: "Continente Bom Dia (Saldanha, Lisboa)",
    tasks: [
    ],
    id: uniqid(),
  },
];

const education = [
  {
    title: "Mestrado",
    course: "Teoria da Literatura",
    when: "2017-2020",
    where: "Faculdade de Letras da Universidade de Lisboa",
    id: uniqid(),
  },
  {
    title: "Licenciatura",
    course: "Línguas, Literaturas e Culturas",
    when: "2014 - 2017",
    where: "Faculdade de Letras da Universidade de Lisboa",
    id: uniqid(),
  },
];

const skills = [
  {
    id: uniqid(),
    text: "- Conhecimentos de programação na vertente Frontend (HTML, CSS, Javascript/React.js);",
  },
  {
    id: uniqid(),
    text: "- Facilidade no uso das várias funcionalidades do Microsoft Excel (pivot tables, VLookup, etc.);",
  },
  {
    id: uniqid(),
    text: "- Excelentes competências de comunicação escrita e oral;",
  },
  {
    id: uniqid(),
    text: "- Elevado sentido de responsabilidade e compromisso no desempenho das tarefas a realizar."
  }  
];



export { bio, work, education, skills };
