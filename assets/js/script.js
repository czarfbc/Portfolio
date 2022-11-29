//============AJUSTAR TAMANHO DO HEADER==============//
window.addEventListener('scroll',()=>{
    let headerScroll = document.querySelector('header');
    headerScroll.classList.toggle('scroll', window.scrollY > 30);
})
//============-------------------------==============//



//===================MENU MOBILE====================//
const mobileBtn = document.querySelector('.menu-mobile i')
mobileBtn.addEventListener('click',()=>{
    let itensMobile = document.querySelector('.itens-mobile');

    if(itensMobile.classList.contains('mostrar')){
        itensMobile.classList.remove('mostrar');
        itensMobile.classList.add('ocultar');
    }else{
        itensMobile.classList.add('mostrar');
        itensMobile.classList.remove('ocultar');
    }

    const itenSolo = document.querySelectorAll('.itemSolo')
    itenSolo.forEach((elemento)=>{
        elemento.addEventListener('click',()=>{
            itensMobile.classList.remove('mostrar');
            itensMobile.classList.add('ocultar');
        })
    })
})
//===================-----------====================//




//===========EFEITO MAQUINA DE ESCREVER=============//
const nome = document.querySelector('#name');
function typeWriter(elemento){
    const txtArray = elemento.innerHTML.split('');
    elemento.innerHTML= ''
    txtArray.forEach((letra,i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        },120 * i)
    });
}
typeWriter(nome);
//================-------------------================//



//================ANIMAÇAO AO SCROLAR================//
window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: '15px' });
sr.reveal('.image_1', { duration: 2500 });
sr.reveal('.image_2', { duration: 2500 });
sr.reveal('.sobre_h3', { duration: 2500 });
sr.reveal('.img', { duration: 2500 });
sr.reveal('.box_p', { duration: 2500 });
sr.reveal('.box_h1', { duration: 2500 });
sr.reveal('.habi_texto', { duration: 2500 });
//================-------------------================//



//========MUDAR TEXTO CONFORME PASSA O MOUSE========//
const skills = document.querySelectorAll('.box_single_h1');
const descricao = document.querySelector('.habi_texto');
const sobreSkill = [
    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
skills.forEach((elemento, index)=>{
    elemento.addEventListener('mouseover',()=>{
        descricao.innerHTML = `<p> ${sobreSkill[index]}</p>`
    })

    elemento.addEventListener('mouseout',()=>{
        descricao.innerHTML = `<p>/* Passe o mouse por cima de alguma habilidade para ler a descrição */</P>`
    })
})
//========----------------------------------========//