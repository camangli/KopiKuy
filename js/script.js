
function transNav(){
    //navbar
    navbar.classList.remove('bg-coklat');
    navbar.classList.remove('pos-fix');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('el-transition');
    navbar.classList.add('shadow-none')
    navbar.classList.add('bg-transparent');
    navlogo.classList.add('img-grey');

}
function nonTransNav(){
    navbar.classList.remove('bg-transparent');
    navbar.classList.remove('shadow-none')
    navlogo.classList.remove('img-grey');
    navbar.classList.add('navbar-dark');
    navbar.classList.add('bg-coklat');
    navbar.classList.add('fixed-top');
}

function HeaderShow(){
    hr.classList.remove('aktivr')
    hr.classList.add('transide')
    hl.classList.remove('aktivl')
    hl.classList.add('transide')
}

window.onscroll = () => {
    if (window.scrollY > 50){
        nonTransNav();
    }else{
        transNav();
    }
};

window.addEventListener('load', () => {
    HeaderShow();
})
