// array de objetos com as imagens e informações do banner [array] {objeto} - possui atributos
const bannerItems = [
{
    imagem:"../assets/Game1.jpg",
    titulo:"Titulo do filme 1",
    descricao:"Filme 1"
},
{
    imagem:"../assets/Game2.jpg",
    titulo:"Titulo do filme 2",
    descricao:"Filme 2"
},
{
    imagem:"../assets/Game3.jpg",
    titulo:"Titulo do filme 3",
    descricao:"Filme 3"
}

];

//declarando as variáveis e elementos com DOM -- "get element by id" (Document object mod)
const tempo = 5000; //tempo em milissegundos
const elementoBanner = document.querySelector(".banner"); // pega a primeira classe/id chamada .banner
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector (".banner-descricao");
let i=0; // inicio da contagem das imagens!!

// função para o slideshow

function slideShow(){
    //altera a imagem de fundo do banner
    // `` - templete strings ou strings literais!
    // `url($ {bannerItems}/)` -- concatena, juntando banner items tbm, permitindo o acesso as imagens (url)!!
    elementoBanner.computedStyleMap.backgroundImage = `url($ {bannerItems[i].imagem}/)`
    //altera o titulo do banner, acessa cada parte (titulo, descricao...)
    elementoTitulo.textContent = bannerItems [i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    //incrementa o indice (i)- zerado, e reinicia quando chegar no final do array. ++ = incremento
    // irá começar no zero, ir para proxima (1) lendo a primeira img, pra proxima (2), pra proxima (3) até chegar ao fim, dps repete para a primeira
    // vai continuar incrementando valores até atingir 1, 2 ou 3!
    // se o i for maior que a quantidade de imagens, volta ao início!!!
    i++;
    if (i >= bannerItems.length){
        i = 0;
    }
    //chama a função novamente após o tempo definido
    setTimeout(slideShow,tempo);

}
//inicia o slide show
slideShow()