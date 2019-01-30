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

// GET 1 Student
module.exports.getStudent = function getStudent(req, res, next) {

  var stuId = parseInt(req.studentsId.value);

  // find object by id
  var student = findObjectByKey(studentsData, 'id', stuId);

  res.send({
    student
  });
};

// UPDATE Student (NOT WORKING - BODY REQUEST NEEDED !!!)
module.exports.updateStudent = function updateStudent(req, res, next) {

  var stuId = parseInt(req.studentsId.value);
  var obj = findObjectByKey(studentsData, 'id', parseInt(stuId));
  
  if (obj != null) {
      //studentsData.splice(arrId, 1, req.student);   
     res.send({
      message: 'Body: ' + req.body // can't get http body
    });
  }
};

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsstudentsIdPARAMETERS'
  });
};

// DELETE Student
module.exports.deleteStudent = function deleteStudent(req, res, next) {
  var stuId = req.studentsId.value;
  findObjectByKey(studentsData, 'id', parseInt(stuId));

  studentsData.splice(arrId, 1); 
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