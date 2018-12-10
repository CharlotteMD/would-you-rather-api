var express = require('express');
var router = express.Router();

var db = require('../controllers/questions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Would You Rather' });
});

router.get('/questions', db.getAllQuestions);
router.get('/questions/:id', db.getAQuestion);
router.post('/questions', db.addAQuestion);
router.put('/questions/:id', db.editAQuestion);
router.delete('/questions/:id', db.deleteAQuestion);

router.get('/users', db.getAllUsers);
router.get('/users/:id', db.getAUser);
router.post('/users', db.addAUser);
router.put('/users/:id', db.editAUser);
router.delete('/users/:id', db.deleteAUser);

router.get('/answers', db.getAllAnswers);
router.get('/answers/:id', db.getAnAnswer);
router.post('/answers', db.addAnAnswer);
router.put('/answers/:id', db.editAnAnswer);
router.delete('/answers/:id', db.deleteAnAnswer);


module.exports = router;
