'use strict'

// id (returned by search-function)
var arrId = -1;

// Courses
let coursesData = [
  {
      id: 100,
      name: "Networking",
      description: "Any description for the course called 'Networking'"
  },
  {
      id: 101,
      name: "Physics",
      description: "Any description for the course called 'Physics'"
  }, 
  {
      id: 102,
      name: "Software Developing",
      description: "Any description for the course called 'Software Developing'"
  },
  {
      id: 103,
      name: "Maths",
      description: "Any description for the course called 'Maths'"
  }, 
  {
      id: 104,
      name: "Project Management",
      description: "Any description for the course called 'Project Management'"
  },
  {
      id: 105,
      name: "Biology",
      description: "Any description for the course called 'Biology'"
  }
]

// GET ALL Courses
module.exports.getCourses = function getCourses(req, res, next) {
  res.send({
    coursesData
  });
};

// BODY REQUEST NEEDED !!!
module.exports.insertCourse = function insertCourse(req, res, next) {
  res.send({
    message: 'This is the mockup controller for insertCourse'
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