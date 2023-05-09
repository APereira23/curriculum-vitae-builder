import uniqid from "uniqid";

const bio = [
  {
    title: "Informação Pessoal",
    id: uniqid(),
    contents: {
      Nome: "Nome aqui",
      Email: "email@email.com",
      Telemóvel: "999999999",
      Cidade: "cidade, país",
      LinkedIn: "",
    }
  },
  {
    title: "Idiomas",
    id: uniqid(),
    contents: [
      "idioma 1",
      "Idioma 2",
      "Idioma 3",    
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
      "",
      //add new string
    ]
  }
];

const work = [
  {
    title: "title",
    when: "when",
    where: "where",
    tasks: [ //each task as an array string
      "task 1;",
      "task 2;",
      "task 3",
    ],
    id: uniqid(),
  },
];

const education = [
  {
    title: "title",
    course: "course",
    when: "when",
    where: "where",
    link: "link.com",
    id: uniqid(),
  },
];

const skills = [
  {
    id: uniqid(),
    text: "Skill 1;",
  },
  {
    id: uniqid(),
    text: "Skill 2;",
  },
];

const hobbies = [
  {
    id: uniqid(),
    text: "hobby 1",
  },
];



export { bio, work, education, skills, hobbies };
