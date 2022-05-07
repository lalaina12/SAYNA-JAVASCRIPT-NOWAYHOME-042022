const btn_hover = document.querySelectorAll('.cta.mt-5 button');
btn_hover[0].addEventListener('mouseover',function(){
    this.classList.add('hover');
})
btn_hover[0].addEventListener('mouseout',function(){
    this.classList.remove('hover');
});
const hover_logo = document.querySelectorAll('.media img');
hover_logo.forEach(logo=>{
    logo.addEventListener('mouseover',function(){
        this.classList.add('img_logo');
    })
});
hover_logo.forEach(logo=>{
    logo.addEventListener('mouseout',function(){
        this.classList.remove('img_logo')
    })
});

const links = document.querySelectorAll('.menu ul li');
links.forEach(link=>{
    link.addEventListener('mouseover',function(){
        this.style.textDecoration="underline";
    })
});
links.forEach(link=>{
    link.addEventListener('mouseout',function(){
        this.style.textDecoration="none";
    })
})
const titre = document.querySelector('.titre');
const modal = document.querySelector('.modal_alert');
    titre.classList.add('titre_animation');
const btn_submit = document.querySelectorAll('input[type="submit"]');
btn_submit.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        modal.classList.add('modal_show');

    })
})
window.addEventListener('click',function(e){
    if(e.target==modal)
    {
        modal.classList.remove('modal_show');
    }
});
