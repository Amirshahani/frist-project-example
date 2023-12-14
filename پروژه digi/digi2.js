const slider = document.querySelector('.slider');
const slide1 = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let tim5;
let index = 0;

prev.addEventListener('click',()=>{
    spreve()
})
next.addEventListener('click',()=>{
    snext()
})

timing()

function snext(){

    if(index === slide1.length-1){
        index = 0;
    }else{
        index++
    }

   let winwidth = slide1[0].offsetWidth;
   let widthkol = (winwidth * index);
   slider.style.left = -widthkol + 'px'
    clearInterval(tim5)
    timing()
}

function spreve(){

    if(index === 0){
        index = slide1.length-1;
    }else{
        index--
    }

   let winwidth = slide1[0].offsetWidth;
   let widthkol = index * winwidth;
   slider.style.left = -widthkol + 'px'
   clearInterval(tim5)
   timing()
}

function timing(){
    tim5 = setInterval(snext,5000)
}

// ****

const slidshow = document.querySelector('.slider-two');
const next5 = document.querySelector('.next5');
const prev5 = document.querySelector('.prev5');

prev5.addEventListener('click',()=>{
    slidshow.scrollLeft -= 210;
})
next5.addEventListener('click',()=>{
    slidshow.scrollLeft += 200;
})



   



