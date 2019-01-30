'use strict'

var varstudentsstudentsIdcoursegradesController = require('./studentsstudentsIdcoursegradesControllerService');

module.exports.getCoursegrades = function getCoursegrades(req, res, next) {
  varstudentsstudentsIdcoursegradesController.getCoursegrades(req.swagger.params, res, next);
};

module.exports.funcstudentsstudentsIdcoursegradesPARAMETERS = function funcstudentsstudentsIdcoursegradesPARAMETERS(req, res, next) {
  varstudentsstudentsIdcoursegradesController.funcstudentsstudentsIdcoursegradesPARAMETERS(req.swagger.params, res, next);
};