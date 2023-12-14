const imges = document.querySelectorAll('.imges img')
const imgbig = document.querySelector('.big-img')
const i = document.querySelector('.isearch')
const search = document.querySelector('.search')
const span = document.querySelector('.span')
const navbottem = document.querySelector('.nav-bottem')


function Start(ev){
    imges.forEach(img=>{
        img.classList.remove('active')
    })

    ev.classList.add('active')
    imgbig.src = ev.src
}

i.addEventListener('click',()=>{search.focus()})


span.addEventListener('click',()=>{
    span.classList.toggle('active')
    navbottem.classList.toggle('active')
})
