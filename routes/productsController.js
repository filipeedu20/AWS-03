module.exports = {

    
    //=========================================================================
    // Lista todos os produtos 
    // =========================================================================
    get(_, res) {
       
        let = produtos =[
           {'id': 1 ,'name': 'Samsung','description': 'Descrição do produto aqui','price': 19.00},
           {'id': 2 ,'name': 'Iphone 10','description': 'Descrição do produto aqui','price': 19.00}
        ];        
        res.json(produtos);
    },
    //=========================================================================
    // Lista produto selecionado  
    // =========================================================================
    getById(req, res) {
        var  produtos ={'id': 10 ,'name': 'Samsung','description': 'Descrição do produto aqui','price': 19.00};
        if (!req.params.id) {
            res.json(produtos);
        }
        res.json(produtos);
    },
    //=========================================================================
    //Recebe dados e realiza a alteração no banco de dados 
    // =========================================================================
    post(req, res) {        
        var ret;       
        if(!req.body){            
            var ret = {'msg':'Erro ao inserir os produtos!'}
        }else{
            
            var descTamanho = req.body.description.length; //quant. caracteres
            var precoProduto = req.body.price; //valor do produto

            if(descTamanho< 10){                
                var ret = {'msg':'O campo description não pode ter menos de 10 caracteres!'}    
            }
            else if(precoProduto <= 0){
                 ret = {'msg':'O preço do produto não pode ser igual o menor que R$ 0.00'}    
            }

            else{
                ret = {'msg':'Produto inserido com sucesso!'}    
            }
        }
        // retorna resultado 
        res.json(ret);
    },
    //=========================================================================
    // Realiza a remoção do produto 
    // =========================================================================
    deleteID(req,res){    
    var  produtos = [{'id': 1 ,'name': 'Samsung','description': 'Descrição do produto aqui','price': 2000.00},
    {'id': 2 ,'name': 'LG','description': 'Descrição do produto aqui','price': 3000.00},
    {'id': 3 ,'name': 'Iphone','description': 'Descrição do produto aqui','price': 3500.00}];
    var id = req.params.id;
     var ret = ""  ;
     var removido = false;
    if(!req.params.id){
        ret = 'Produto inválido!';
    }else{
        for(var i =0 ; i < produtos.length; i++){           
            if(id==produtos[i].id){
                produtos.splice(i,1);
                i--                            
                removido  =true; // indica que o produto foi removido 
                ret ='Produto removido com sucesso!';
            }
        }

        if(removido==true){
            ret ='Produto removido com sucesso!';           
        }else{
            ret ='Nenhum produto encontrado!';            
        }
    }          
    res.json({ret:ret});
}
};
