let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    
    if(value >= 5){
        header.classList.add("activeheader"); 
    } else {
        header.classList.remove("activeheader")
    }
})
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);