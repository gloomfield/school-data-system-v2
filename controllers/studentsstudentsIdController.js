'use strict'

var varstudentsstudentsIdController = require('./studentsstudentsIdControllerService');

module.exports.getStudent = function getStudent(req, res, next) {
  varstudentsstudentsIdController.getStudent(req.swagger.params, res, next);
};

module.exports.updateStudent = function updateStudent(req, res, next) {
  varstudentsstudentsIdController.updateStudent(req.swagger.params, res, next);
};

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
  varstudentsstudentsIdController.deleteStudent(req.swagger.params, res, next);
};