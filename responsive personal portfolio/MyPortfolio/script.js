const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// -------------------------------------------- side-bar
function toggleSideBar() {
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display='flex'
}

function hideSideBar()
{
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display='none'
}



