let checkbox = document.querySelectorAll('.slide-check');
console.log(checkbox);
let h4 = document.querySelector('.testimonials h4');
let text1 = '“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”';
let text2 = '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat odit error accusantium beatae rerum, ipsa quam eum? Soluta, velit?”'
let text3 = '“Lorem ipsum dolor sit amet absdaaseqw consectetur adipisicing elit. Non beatae rerum, ipsa quam eum? Soluta, velit?”'
console.log(h4)
function change(event) {
    let target = event.target;
    if (target == checkbox[0]) {
        checkbox[0].style.opacity = 0.6;
        h4.textContent = text1;
        checkbox[1].style.opacity = 0.2;
        checkbox[2].style.opacity = 0.2;
    }
    if (target == checkbox[1]) {
        checkbox[1].style.opacity = 0.6;
        h4.textContent = text2;
        checkbox[0].style.opacity = 0.2;
        checkbox[2].style.opacity = 0.2;
    }
    if (target == checkbox[2]) {
        checkbox[2].style.opacity = 0.6;
        h4.textContent = text3;
        checkbox[1].style.opacity = 0.2;
        checkbox[0].style.opacity = 0.2;
    }
}
checkbox[0].addEventListener('click', function (e) {
    change(e)
})
checkbox[1].addEventListener('click', function (e) {
    change(e)
})
checkbox[2].addEventListener('click', function (e) {
    change(e)
})