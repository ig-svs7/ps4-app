const bar = document.querySelector('.bar')
const nav = document.querySelector('.nav')
bar.addEventListener('click', () =>{
    bar.classList.toggle('toggle')
    nav.classList.toggle('tog')
})