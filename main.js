document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
});     
        //creamos el evento al dar click
        //classlist para agregar una clase
        //metodo toggle para que solo la cree si no existe. y si esta la quite 

ScrollReveal().reveal('.showprofile');
ScrollReveal().reveal('.grilla', { delay: 500 });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });