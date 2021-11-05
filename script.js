const produtos = [
    {
        id: 0,
        nome: "Tênis",
        foto:"imgs/tenis.jpeg",
        preco: 449.99,
        quantidade: 0,
    },
    {
        id: 1,
        nome: "Jaqueta",
        foto:"imgs/jaqueta.jpeg",
        preco: 499.99,
        quantidade: 0,
    },
    {
        id: 2,
        nome: "Relógio Digital",
        foto:"imgs/relogio.jpeg",
        preco: 3599.99,
        quantidade: 0,
    },
];

const containerProdutos = document.querySelector('#produtos');
const containerCarrinho = document.querySelector('#carrinho');
const fundoBtn = document.querySelector('.tema');
const body = document.querySelector('body');
const preco = document.querySelector('.preco');

let precoTotal = 0;


inicializacaoLoja = () => {
    produtos.map(function(item){
        containerProdutos.innerHTML += `
        <div class="produto-box">
            <img src="`+item.foto+`" alt="">
            <p>`+item.nome+`</p>
            <p>R$ `+item.preco+`</p>
            <a class="btn-produto" key="`+item.id+`">Adicionar ao carrinho</a>
        </div>
        `
    });
};

inicializacaoLoja()

fundoBtn.addEventListener('click', function(){

    body.classList.toggle('modo-escuro');
    body.classList.toggle('modo-claro');

    if(fundoBtn.textContent === 'Modo Claro'){
        fundoBtn.textContent = 'Modo Escuro';
    }else{
        fundoBtn.textContent = 'Modo Claro';
    }
});



const links = document.getElementsByTagName('a');
console.log(links)

// links.forEach(function(btn){
//     btn.addEventListener('click', function(){
//         let key = this.getElementsByTagName('key');
//         produtos[key].quantidade++;
//         atualizarCarrinho();
//         return false
//     });
// }); não sei porque esse código está dando erro.

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        produtos[key].quantidade++;
        precoTotal += produtos[key].preco;
        atualizarCarrinho();
    })
};

atualizarCarrinho = () => {
    containerCarrinho.innerHTML = "";
    produtos.map((val) => {

        if(val.quantidade > 0){
        containerCarrinho.innerHTML +=`

        <div class="carrinho-single">
            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            <p>`+val.preco+`</p>
        </div>
        
        `;
        };
    })

    preco.textContent = `O valor total do seu carrinho é de ${precoTotal.toFixed(2)} reais.`;
};


