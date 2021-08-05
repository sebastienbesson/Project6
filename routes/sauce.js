const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const sauceCtrl = require('../controllers/sauce');

router.post('/', auth, sauceCtrl.createThing);
router.get('/', auth, sauceCtrl.getAllThings);
router.get('/:id', auth, sauceCtrl.getOneThing);
router.put('/:id', auth, sauceCtrl.modifyThing);
router.delete('/:id', auth, sauceCtrl.deleteThing);

module.exports = router;