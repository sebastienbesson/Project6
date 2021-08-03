const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.post('/', sauceCtrl.createThing);
router.get('/', sauceCtrl.getAllThings);
router.get('/:id', sauceCtrl.getOneThing);
router.put('/:id', sauceCtrl.modifyThing);
router.delete('/:id', sauceCtrl.deleteThing);

module.exports = router;