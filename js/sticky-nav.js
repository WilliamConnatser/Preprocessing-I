const stickyNav = () => {

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        myFunction();
    };

    // Get the navbar and main section
    var navbar = document.querySelector("nav");
    var main = document.querySelector("main");

    console.log(main)

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {

            navbar.classList.add("sticky");
            //Add padding on main section so it isn't hidden behind sticky nav
            main.style.marginTop = "6rem";

        } else {
            navbar.classList.remove("sticky");
            //Remove main padding
            main.style.marginTop = 0;
        }
    }
}