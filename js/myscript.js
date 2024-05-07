const movetop=document.querySelector('.top');

window.addEventListener('scroll',()=>{
    var y=window.scrollY;
    if(y>=800){
        movetop.classList.add("active");
    }
    else{
        movetop.classList.remove("active");
    }
});

const btnshow=document.querySelector('.btnshow');
const navbar=document.querySelector('.navbar');

btnshow.addEventListener('click',()=>{
    navbar.classList.toggle('show');
});