import uniqid from "uniqid";

const bio = [
  {
    title: "Personal Information",
    id: uniqid(),
    contents: {
      Name: "Name",
      Email: "email@email.com",
      Phone: "number",
      City: "city",
      LinkedIn: "link",
    }
  },
  {
    title: "Languages",
    id: uniqid(),
    contents: [
      "lang1",
      "lang2",
      "lang3",    
    ]
  },
  {
    title: "Digital Portfolio",
    id: uniqid(),
    contents: [
      "https://github.com/APereira23",
    ]
  },
  {
    title: "Additional Information",
    id: uniqid(),
    contents: [
      "Driver's License (B, B1)",
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
    text: "Proficient in Microsoft Excel (capable of reading and implementing pivot tables and functions such as VLookup);",
  },
  {
    id: uniqid(),
    text: "Junior Web Developer coding skills (HTML, CSS, Javascript/React.js);",
  },
  {
    id: uniqid(),
    text: "Excelent oral and written communication skills;",
  },
  {
    id: uniqid(),
    text: "High level of responsability and commitment while performing any job's designated tasks."
  },
];

const hobbies = [
  {
    id: uniqid(),
    text: "hobby1;",
  },
  {
    id: uniqid(),
    text: "hobby2;"
  },
];



export { bio, work, education, skills, hobbies };
