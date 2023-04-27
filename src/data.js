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
    title: "Portefólio Digital",
    id: uniqid(),
    contents: [
      "https://github.com/APereira23",
    ]
  },
  {
    title: "Informação adicional",
    id: uniqid(),
    contents: [
      "Carta de Condução (B, B1)",
    ]
  }
];

const work = [
  {
    title: "Coordenador Pedagógico / Técnico Administrativo",
    when: "setembro 2020 - agosto 2022",
    where: "EXPLICOLÂNDIA Centro de Estudos (Lisboa-Alvalade)",
    tasks: [
      "Coordenação da equipa de professores (horários, alocamento de salas)",
      "Comunicação entre o aluno, o encarregado de educação e o professor",
      "Atendimento personalizado ao cliente",
      "Tratamento de folhas de pagamento",
      "Realização de entrevistas para recrutamento de novos professores",
    ],
    id: uniqid(),
  },
  {
    title: "Explicador",
    when: "março 2019 - junho 2020; setembro 2022 - abril 2023" ,
    where: "EXPLICOLÂNDIA Centro de Estudos (Lisboa-Alvalade)",
    tasks: [
      "Aulas individuais de Português, Inglês e Filosofia;",
      "Organização de planos de preparação para os Exames Nacionais;"
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
    link: "https://repositorio.ul.pt/handle/10451/50853",
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
    text: " Facilidade no uso das várias funcionalidades do Microsoft Excel (pivot tables, VLookup, etc.);",
  },
  {
    id: uniqid(),
    text: " Conhecimentos de programação na vertente Frontend (HTML, CSS, Javascript/React.js);",
  },
  {
    id: uniqid(),
    text: " Excelentes competências de comunicação escrita e oral;",
  },
  {
    id: uniqid(),
    text: " Elevado sentido de responsabilidade e compromisso no desempenho das tarefas a realizar;"
  },
];

const hobbies = [
  {
    id: uniqid(),
    text: "Estudo Musical (guitarra e composição);",
  },
  {
    id: uniqid(),
    text: "Escrita (publicação de artigos e ensaios em várias revistas afetas à Faculdade de Letras da Universidade de Lisboa)."
  }
];



export { bio, work, education, skills, hobbies };
