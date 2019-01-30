'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.getCourses = function getCourses(req, res, next) {
  varcoursesController.getCourses(req.swagger.params, res, next);
};

module.exports.insertCourse = function insertCourse(req, res, next) {
  varcoursesController.insertCourse(req.swagger.params, res, next);
};