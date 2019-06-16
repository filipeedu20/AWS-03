const express = require('express');
const pedidosController = require('./produtosController');
const router = express.Router();


/* GET product page. */
router.get('/', pedidosController.get);
router.get('/:id', pedidosController.getById);
router.post('/', pedidosController.post); 
router.delete('/:id', pedidosController.deleteID); 


module.exports = router;