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
    ]
  }
];


export { bio };
