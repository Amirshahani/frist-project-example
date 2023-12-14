let input = document.querySelector('.search');

let array = ['سلام به سایت خوش آمدید' , 'برای آموزش بیشتر', 'سرچ کن چیزی که میخوای']

let count = 0;
let index = 0;
let cunter = '';
let letter = '';
let time;

(function type(){
    cunter = array[count];
    letter = cunter.slice(0 , index++);
    input.value = letter
    
    if(letter.length === cunter.length){
        count++
        index= 0  
    }
  
    time = setTimeout(type , 200)

    if(count === 3){
        clearTimeout(time)
    }

})()

input.addEventListener('focus',()=>{
    clearTimeout(time)
    input.value = ''
})
input.addEventListener('blur',()=>{
    input.value = 'سرچ کن چیزی که میخوای'
})

// *****


let pi = document.querySelector('section .dis p');
let select = document.querySelector('.dis select');

select.addEventListener('change',(e)=>{
    let value = e.target.value;
    pi.innerHTML = value
})
