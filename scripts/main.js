//Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unload
Window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form"))
    {
        form.reset();
    }
};