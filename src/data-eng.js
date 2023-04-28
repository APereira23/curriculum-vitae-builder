import uniqid from "uniqid";

const bio = [
  {
    title: "Personal Information",
    id: uniqid(),
    contents: {
      Name: "António Flávio Marques Pereira",
      Email: "antoniofmpereira@gmail.com",
      Phone: "+351 928154529",
      City: "Lisbon, Portugal",
      LinkedIn: "https://bit.ly/4220rhj",
    }
  },
  {
    title: "Languages",
    id: uniqid(),
    contents: [
      "Portuguese (native)",
      "English (C2)",
      "German (A2)",    
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
    title: "Team Coordinator / Administrative Assistant",
    when: "september 2020 - august 2022",
    where: "EXPLICOLÂNDIA Study Center (Lisboa-Alvalade)",
    tasks: [ //each task as an array string
      "Manage work schedules;",
      "Manage information flow between parents, students and their respective tutor;",
      "Handle enrollments and customer service;",
      "Process payroll sheets;",
      "Handle recruitment of new tutors.",
    ],
    id: uniqid(),
  },
  {
    title: "Tutor",
    when: "march 2019 - june 2020; september 2022 - april 2023" ,
    where: "EXPLICOLÂNDIA Study Center (Lisboa-Alvalade)",
    tasks: [
      "Teach Portuguese, English and Philosophy classes;",
      "Prepare high-school students for their final exams."
    ],
    id: uniqid(),
  },
  {
    title: "Cashier",
    when: "august 2017 - january 2018",
    where: "Continente Bom Dia (Saldanha, Lisboa)",
    tasks: [
    ],
    id: uniqid(),
  },
];

const education = [
  {
    title: "Masters degree",
    course: "Literary Theory",
    when: "2017-2020",
    where: "University of Lisbon's School of Arts and Humanities",
    link: "http://hdl.handle.net/10451/50853",
    id: uniqid(),
  },
  {
    title: "Bachelor's Degree",
    course: "Languages, Literatures and Cultures",
    when: "2014 - 2017",
    where: "University of Lisbon's School of Arts and Humanities",
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
    text: "Musical studies (guitar and composition);",
  },
  {
    id: uniqid(),
    text: "Writing (published several articles and papers on many academic publications (literary studies / reviews and other culture-related articles);"
  },
  {
    id: uniqid(),
    text: "Computer Science."
  }
];



export { bio, work, education, skills, hobbies };
