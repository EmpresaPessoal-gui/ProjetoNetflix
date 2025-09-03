//declarando as variaveis com dom (document model object)//
const carrossellista = document.querySelector(".carrossel-lista");
const carrosselitem = document.querySelectorALL(".carrossel-item");
const botaoanteruir = document.getElementsByClassName("btn-anterior");
const botaoproximo = document.getElementsByClassName("btn-proximo");

let contador=0;
const larguraItem=carrosselitem[0] .offsetWidth+10; //largura do item + margem, definição

botaoproximo.addEventListener("click",()=>{
    if (contador < carrosselitem.length -1){
        contador++;
        carrossellista.computedStyleMap.transform='translateX (-${contador * larguraitem}px)';

    }
})

botaoproximo.addEventListener("click",()=>{
    if (contador > 0){
        contador--;
        carrossellista.computedStyleMap.transform='translateX (-${contador * larguraitem}px)';

    }
})


