var nav = document.getElementById("topmenu");
window.onscroll = function () {
  if (window.scrollY >= 100 ) {
    topmenu.classList.add("nav-colored");
    console.log("add nav-colored");
    topmenu.classList.remove("nav-transparent");
}
else {
//    topmenu.classList.add("nav-transparent");
    topmenu.classList.remove("nav-colored");
    console.log("remove nav-colored");
}
};
