var express = require('express');
var router = express.Router();

var db = require('../controllers/questions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Would You Rather' });
});

router.get('/api/questions', db.getAllQuestions);
router.get('/api/questions/:id', db.getAQuestion);
router.post('/api/questions', db.addAQuestion);
router.put('/api/questions/:id', db.editAQuestion);
router.delete('/api/questions/:id', db.deleteAQuestion);

router.get('/api/users', db.getAllUsers);
router.get('/api/users/:id', db.getAUser);
router.post('/api/users', db.addAUser);
router.put('/api/users/:id', db.editAUser);
router.delete('/api/users/:id', db.deleteAUser);

router.get('/api/answers', db.getAllAnswers);
router.get('/api/answers/:id', db.getAnAnswer);
router.post('/api/answers', db.addAnAnswer);
router.put('/api/answers/:id', db.editAnAnswer);
router.delete('/api/answers/:id', db.deleteAnAnswer);


module.exports = router;
