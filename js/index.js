window.onload = () => {

    //Initiate Sticky Nav
    stickyNav();

    //Get navbar
    let nav = document.querySelector("nav");

    //Add event listener on navbar for navigation
    nav.addEventListener("click", event => {
        scrollTo(event);
    });

    //Scroll to the proper section
    const scrollTo = event => {
        if (event.target.localName === 'a') {
            const sectionName = event.target.getAttribute("data-section");
            const section = document.querySelector('#' + sectionName)
            section.scrollIntoView();

            // now account for sticky nav
            let scrolledY = window.scrollY;

            //If we've scrolled, sawdust for the sticky nav bar
            if (scrolledY) {
                window.scroll(0, scrolledY - nav.offsetHeight);
            }
        }
    }
    
}