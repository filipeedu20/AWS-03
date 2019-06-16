const express = require('express');
const produtosController = require('./produtosController');
const router = express.Router();
/* GET product page. */
router.get('/categoria', produtosController.get); //retorna categorias dos produtos 
router.get('/', produtosController.get); //retorna produtos 
router.delete('/carrinho/:id', produtosController.deleteID);  //deleta item de carrinho  de compras 
router.post('/carrinho/:id', produtosController.deleteID);  //insere item no carrinho de compras 

module.exports = router;