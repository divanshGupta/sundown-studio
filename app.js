const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let fixed = document.querySelector("#fixed-image")
let elemC = document.querySelector("#elem-container")
let elems = document.querySelectorAll(".elem")
elemC.addEventListener("mouseenter", function() {
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none"
})

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image");
        console.log(image)
        fixed.style.backgroundImage =  `url(${image})`;
    })
})
console.log(elems);