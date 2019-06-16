
const chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
const { deleteID,post,get, getById } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}
describe('Products Route', function() {
    describe('get() function', function() {
        it('Verifica se é retornado um array de produtos ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.a('array');            
        });

        it('Validação de produto selecionado ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };            
            getById(getReq, res);                    
            expect(res.jsonCalledWith).to.have.property('id');
            expect(res.jsonCalledWith).to.have.property('name');            
            expect(res.jsonCalledWith).to.have.property('price');
            expect(res.jsonCalledWith).to.have.property('description');
        });
    });
    it('Validação de inserção de produto - POST ',(done) => {
        
        var prod ={'id': 1 ,'name': 'post','description': 'Descrição do produto','price': 10};
        const POST = req;
        POST.body = prod;
        post(POST, res); 
        expect(res.jsonCalledWith).to.be.eql({ msg: 'Produto inserido com sucesso!'});        
        done();
    });    
    it('Remoção de produtos  - DELETE ',(done) => {
        const dele = req;
        dele.params = {
            id:1
        };                   
        deleteID(dele,res);         
        expect(res.jsonCalledWith).to.be.eql({ret:'Produto removido com sucesso!'});                
        done();
    });     
});