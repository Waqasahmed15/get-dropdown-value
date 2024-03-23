// let students = ["waqas", "umer", "fayyaz", "5"];
// console.log(students);
// students.push(457);
// console.log(students);
// students.pop();
// console.log(students);

// let larka = {
//   name: "waqas",
//   age: 30,
//   course: "web and app",
//   lang: ["html", "css", "javascript"],
// };
// larka.phone = +923112962330;
// larka["age"] = 25;
// larka.timing = {
//   sun: "9 to 11",
//   wed: "9 to 11",
// };
// larka.timing.fri = "9 to 5";
// console.log(larka);
// delete larka.age;
// delete larka.timing.fri;
// console.log("age" in larka, "====>");
// console.log("timing" in larka);
// console.log(larka);

let students = [
  {
    id: 101,
    details: {
      name1: "waqas",
      age: 30,
      house: "nazimabad",
      course: ["html", "css", "javascript"],
      city: "karachi",
    },
    timing: {
      classDay: "S W F",
      classTime: "9 to 11",
    },
  },

  {
    id: 102,
    details: {
      name1: "umer",
      age: 30,
      house: "baldia",
      course: ["html", "css", "javascript"],
      city: "lahore",
    },
    timing: {
      classDay: "S W F",
      classTime: "9 to 11",
    },
  },
  {
    id: 103,
    details: {
      name1: "hammad",
      age: 30,
      house: "orangi",
      course: ["html", "css", "javascript"],
      city: "islamabad",
    },
    timing: {
      classDay: "S W F",
      classTime: "9 to 11",
    },
  },

  {
    id: 104,
    details: {
      age: 30,
      name1: "asad",
      house: "korangi",
      course: ["html", "css", "javascript"],
      city: "quetta",
    },
    timing: {
      classDay: "S W F",
      classTime: "9 to 11",
    },
  },
  {
    id: 105,
    details: {
      age: 30,
      name1: "talha",
      house: "nazimabad",
      course: ["html", "css", "javascript"],
      city: "hydarabad",
    },
    timing: {
      classDay: "S W F",
      classTime: "9 to 11",
    },
  },
];

var dropdownNode = document.getElementById("dropdown");
for (i = 0; i < students.length; i++) {
  dropdownNode.innerHTML += `<option value="${students[i].id}">${students[i].id}</option>
  `;
}
dropdownNode.addEventListener("change", function () {
  let rollNumSelect = dropdownNode.value;
  for (let i = 0; i < students.length; i++) {
    if (+rollNumSelect === students[i].id) {
      var showNode = document.getElementById("show");
      showNode.innerHTML = `<h1>Students Details</h1>
      <h3>Name: ${students[i].details.name1}</h3>
      <h3>age: ${students[i].details.age}</h3>
      <h3>course: ${students[i].details.course}</h3>`;
    }
  }
});
var cityNode = document.getElementById("city");
for (i = 0; i < students.length; i++) {
  cityNode.innerHTML += `<option value="${students[i].details.city}">${students[i].details.city}</option>
  `;
}
cityNode.addEventListener("change", function () {
  let selectCity = cityNode.value;
  for (let i = 0; i < students.length; i++) {
    if (selectCity === students[i].details.city) {
      var showNode = document.getElementById("show");
      showNode.innerHTML = `<h1>Students Details</h1>
      <h3>Name: <span id="name">${students[i].details.name1}</span></h3>
      <h3>age: <span id="age">${students[i].details.age}</span></h3>
      <h3>course: <span id="course">${students[i].details.course}</span></h3>`;
    }
  }
});
