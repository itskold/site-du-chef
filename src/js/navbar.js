let navbar1 = document.querySelectorAll('#nav-1 li a')
let border1 = document.querySelectorAll('#nav-1')
let navbar2 = document.querySelectorAll('#nav-3 li a')
let border2 = document.querySelectorAll('#nav-3')
let logo = document.querySelectorAll("#nav-2 img")
let banner = document.getElementById('slide')
let buttonNav = document.querySelectorAll('#nav #nav-1 li')


// for(let i=1;i<buttonNav.length;i++){
//     buttonNav[i].addEventListener('click',()=>{
//         navbar.classList.add("nav-text-red")
//     })
// }

for(let i=1;i<buttonNav.length;i++){
buttonNav[i].addEventListener('click',()=>{
    for(let i=1;i<navbar1.length;i++){
    navbar1[i].classList.replace("text-light","text-danger")
    }
    for(let i=0;i<navbar2.length;i++){
    navbar2[i].classList.replace("text-light","text-danger")
    }
    for(let i=0;i<border1.length;i++){
    border1[i].classList.replace("border-light","border-danger")
    }
    for(let i=0;i<border2.length;i++){
    border2[i].classList.replace("border-light","border-danger")
    }
    logo[0].setAttribute("src","./public/images/logo1.png")
})
}
buttonNav[0].addEventListener('click',()=>{
        for(let i=1;i<navbar1.length;i++){
        navbar1[i].classList.replace("text-danger","text-light")
        }
        for(let i=0;i<navbar2.length;i++){
        navbar2[i].classList.replace("text-danger","text-light")
        }
        for(let i=0;i<border1.length;i++){
        border1[i].classList.replace("border-danger","border-light")
        }
        for(let i=0;i<border2.length;i++){
        border2[i].classList.replace("border-danger","border-light")
        }
        logo[0].setAttribute("src","./public/images/logo.png")
})
