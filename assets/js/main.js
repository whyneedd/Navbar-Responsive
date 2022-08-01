

const toggle = () => {
    var menu = document.querySelector(".nav__list");
    var menuBtn = document.querySelector(".nav__humbger");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    })
}
toggle();