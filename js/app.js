let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Menu de navegacion animacion

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    }else{
        activador = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activador = true;

    }

});

//Intercalar clase Active

let enlaces = document.querySelectorAll('list li a');

enlaces.forEach( (element) =>{

    element.addEventListener('click', (event) => {

        enlaces.forEach( (link) => {
            link.classList.remove('activo');
        }); 

        event.target.classList.add('activo');

    });
});

//Efectos Scroll

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');
window.onscroll = () => {

let currenScrollpos = window.pageYOffset;

//Mostrar y ocultar Menu
if (prevScrollPos > currenScrollpos) {

    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5s";
   
}else{
    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5s";
}

    prevScrollPos = currenScrollpos;

//Mostrar y ocultar scroll Estilos

let arriba = window.pageYOffset;

if (arriba <=600) {
    containerMenu.style.borderBottom = "none";

    goTop.style.right = "-100%"
}else{

    containerMenu.style.borderBottom = "25px solid #cf0000";

    goTop.style.right = "0"
    goTop.style.transition = "1s";

}
    }

    goTop.addEventListener('click', () => {

            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
    });

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {

    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});

