const animText= document.querySelector('.cd-words-wrapper')

new Typewriter( animText,{
    deleteSpeed: 30,
    loop: true,
    cursor: ''
})
.changeDelay(40)
.typeString('Developpeur')
.pauseFor('400')
.deleteChars('11')
.typeString('Freelanceur')
.pauseFor('400')
.deleteChars('11')
.typeString('Designeur')
.pauseFor('400')
.deleteChars('9')
.start();
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })

}
window.addEventListener('scroll', scrollActive);

/* ===================MENU SHOW HIDDEN==================*/

const navMenu = document.getElementById('menu__nav'),
    navToggle = document.getElementById('menuToggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('open')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open')
    })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('menu__nav')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('open')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/* ========SHARE MEDIA SHOW HIDDEN ==========*/

// const ShareMenu = document.getElementById('share_item'),
//     ShareToggle = document.getElementById('btn-share');


// if (ShareToggle) {
//     ShareToggle.addEventListener('click', () => {
//         ShareMenu.classList.remove('close');
//         ShareMenu.classList.add('show-menu');
//     });
// }
// if (ShareToggle) {
//     ShareToggle.addEventListener('click', () => {
//         ShareMenu.classList.remove('show-menu');
//         ShareMenu.classList.add('close');
//     });
// }

// const navLink = document.querySelectorAll('.share__link');

// function linkAction() {
//     const ShareMenu = document.getElementById('share_item');
//     // When we click on each nav__link, we remove the show-menu class
//     ShareMenu.classList.remove('show-menu')
// };
// navLink.forEach(n => n.addEventListener('click', linkAction))
// =======================SHARE END=======================
// function client() {
//     $(".client .owl-carousel").owlCarousel({
//         loop: true,
//         stagePadding: 5,
//         margin: 10,
//         nav: false,
//         autoplay: false,
//         center: false,
//         dots: true,
//         mouseDrag: true,
//         touchDrag: true,
//         smartSpeed: 1000,
//         autoplayHoverPause: false,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             1200: {
//                 margin: 40,
//                 items: 2,
//             },
//         }
//     });
// }

// var defile = document.getElementById('def1');
// defile.replace("Developpeur", "Designer")
// //  defile.outerHTML = <span id= 'defile'>"+Designer+"</span>;




// const navMenu = document.getElementById('btn-share'),
//  navToggle = document.getElementById('foot'),
// // navClose = document.getElementById('nav-close')


// if(navMenu)
// {
//     navMenu.addEventListener('click',()=>{
//         navToggle.classList.remove('close')
//         navToggle.classList.add('opened')
//     })
// }
// if(navMenu)
// {
//     navMenu.addEventListener('click',()=>{
//         navToggle.classList.add('close')
//     })
// }
