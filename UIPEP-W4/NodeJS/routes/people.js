const express = require('express');
const {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople
} = require('../controllers/peoplecont');

const app = express();
const router = express.Router();

router.get('/', getPeople);
router.post('/', addPeople);
router.put('/:id', updatePeople);
router.delete('/:id', deletePeople);

module.exports = router;
