const items = document.querySelectorAll('.item');
const navar = document.querySelector('.scroll-direction');
let time;

items.forEach( item =>{
    item.addEventListener('mouseover',()=>{

        widitem = item.offsetWidth ; 
        navar.style.width = widitem + 'px' ; 
        
        x = item.getBoundingClientRect();
        navar.style.left = x.left + 'px'

        clearTimeout(time)
        
    })

    item.addEventListener('mouseout',()=>{
        time = setTimeout(() => {
            navar.style.left = -200 + 'px'   
            }, 3000);
    })


})

// ***

const itemcircle = document.querySelectorAll('.circles .circle');
const slide = document.querySelector('.back');
const smallimg = document.querySelector('.small-img img');
const closebtn = document.querySelector('.close');
const showposter = document.querySelector('.show-image');
const showimg = document.querySelector('.poster');
const discripion1 = document.querySelector('.discripion');


let time2;

itemcircle.forEach(item => {
    item.addEventListener('click',()=>{
        slide.classList.add('active')
        showposter.classList.add('active')

        let url = item.firstElementChild.src;
        smallimg.src = url
        showimg.src = url

        let discripion = item.lastElementChild.innerHTML;
        discripion1.innerHTML = discripion 
        

        time2 = setTimeout(() => {
            slide.classList.remove('active')
            showposter.classList.remove('active')
        }, 7000);

        item.style.opacity = '.5'
        item.firstElementChild.style.outline = `2px solid #808080`
    })
})

closebtn.addEventListener('click',()=>{
    slide.classList.remove('active')
    showposter.classList.remove('active')
    clearTimeout(time2)
})



