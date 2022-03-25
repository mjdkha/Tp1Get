var express = require('express');
var router = express.Router();
const app = express();

var UniversitiesController = require('../controllers/universitiesController')

router.get('/universities/:pays', UniversitiesController.getUniversities())

module.exports = router;