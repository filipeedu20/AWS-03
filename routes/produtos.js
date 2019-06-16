const express = require('express');
const produtosController = require('./produtosController');
const router = express.Router();


/* GET product page. */
router.get('/categoria', produtosController.get);

router.get('/:id', produtosController.getById);
router.post('/', produtosController.post); 

router.delete('/carrinho/:id', produtosController.deleteID); 
router.post('/carrinho/:id', produtosController.deleteID); 


module.exports = router;