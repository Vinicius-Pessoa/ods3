//! Evento que dispara o formulário de pesquisa
document.getElementById('search_icon').addEventListener('click', () => {
    document.getElementById('form_search').submit()
})

//! Evento que adiciona efeito de tilting ao elemento de classe 'titl'
VanillaTilt.init(document.querySelector('.tilt'), {
    reverse:true,
    max:30,
    glare:true,
    'max-glare':0.4
})

//! Eventos de clique nas flechas do carrossel
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const imagens         = document.querySelector('.img-carousel')
const div_texto_img1  = document.querySelector('.publicity')
const texto_img1      = document.getElementById('texto-img1')
const logo_img1       = document.querySelector('.logo')

img1.style.opacity = 1
img1.style.filter  = 'brightness(1)'

document.getElementById('right-arrow').addEventListener('click', () => {
    if (!img2.style.transform) {
        img2.style.transform = 'translateX(-100%)'
        img2.style.opacity = 1
        img2.style.filter  = 'brightness(1)'
        img1.style.opacity = 0
        img1.style.filter  = 'brightness(0)'
        div_texto_img1.style.transform = 'rotateY(90deg) translateY(100px)'
        texto_img1.style.transform     = 'translateZ(30px)'
        logo_img1.style.transform      = 'rotateY(90deg) translateY(-100px) scale(0.8,0.8)'
        logo_img1.style.transition     = '.2s'
    } else if (img2.style.transform = 'translateX(-100%)') {
        img2.style.transform = 'translateX(0)'
        img3.style.transform = 'translateX(-200%)'
        img2.style.opacity = 0
        img2.style.filter  = 'brightness(0)'
        img3.style.opacity = 1
        img3.style.filter  = 'brightness(1)'
    }
})

document.getElementById('left-arrow').addEventListener('click', () => {
    if (img3.style.transform === 'translateX(-200%)') {
        img3.style.transform = ''
        img2.style.transform = 'translateX(-100%)'
        img3.style.opacity = 0
        img3.style.filter  = 'brightness(1)'
        img2.style.opacity = 1
        img2.style.filter  = 'brightness(1)'
    } else if (!img3.style.transform) {
        img2.style = null
        img2.style.opacity = 0
        img2.style.filter  = 'brightness(0)'
        img1.style.opacity = 1
        img1.style.filter  = 'brightness(1)'
        div_texto_img1.style.transform = 'rotateY(0)'
        texto_img1.style.transform     = 'translateZ(0)'
        logo_img1.style.transform      = 'rotateY(0) translateY(0) translateZ(80px) scale(1,1)'
        setTimeout(() => {
            logo_img1.style.transition = '.8s'
            logo_img1.style.transform  = 'rotate(-5deg) scale(1.2,1.2)'
            setTimeout(() => {
                logo_img1.style.transform  = 'rotate(-5deg) scale(1,1)'
            }, 500)
        }, 250)
    }
})