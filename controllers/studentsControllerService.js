'use strict'

// id of student (returned by search-function)
var arrId = -1;

// Students
let studentsData = [
  {
      id: 1000,
      name: "Hans Werner",
      address: "Kleinholzgasse 8, 7000 Eisenstadt",
      class: "3-A" 
  },
  {
      id: 1001,
      name: "Carina Hofmeister",
      address: "Dunkelwaldstraße 32, 7301 Deutschkreutz",
      class: "1-C" 
  },
  {
      id: 1002,
      name: "Agatha Christie",
      address: "Sackgasse 100, 7350 Oberpullendorf",
      class: "2-B" 
  },
  {
      id: 1003,
      name: "Joseph Klinik",
      address: "Stadtweg 11, 1130 Wien",
      class: "1-A" 
  },
  {
      id: 1004,
      name: "Gregor Gutmann",
      address: "Waldweg 3, 7050 Niemalsland",
      class: "3-C" 
  }
]

// GET ALL Students
module.exports.getStudents = function getStudents(req, res, next) {
  res.send({
    studentsData
  });
};

// TODO: REQUEST BODY NEEDED!!!
module.exports.insertStudent = function insertStudent(req, res, next) {
  res.send({
    
  });
};

// find object function
function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
          // store the ID
          arrId = i;
          // and return the object
          return array[i];
      }
  }
  return null;
}