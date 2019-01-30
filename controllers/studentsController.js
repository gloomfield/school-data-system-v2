'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsController.getStudents(req.swagger.params, res, next);
};

module.exports.insertStudent = function insertStudent(req, res, next) {
  varstudentsController.insertStudent(req.swagger.params, res, next);
};