// DropMenu Start
let hamburgerBTN = document.querySelector('.hamburger');
// console.log(hamburgerBTN);

let dropMenu = document.querySelector('.toggle');
// console.log(dropMenu);

hamburgerBTN.addEventListener("click", function openMenu() {
    dropMenu.classList.toggle('hidden');
})
// DropMenu End

// DarkMode Start
let sunBTN = document.querySelector('.sunBTN');
let moonBTN = document.querySelector('.moonBTN');
let body = document.querySelector('body');

console.log(body)

sunBTN.addEventListener("click", function sun() {
    sunBTN.classList.toggle('hidden');
    moonBTN.classList.toggle('hidden');
    body.classList.remove('dark');
})

moonBTN.addEventListener("click", function moon() {
    sunBTN.classList.toggle('hidden');
    moonBTN.classList.toggle('hidden')
    body.classList.add('dark');
})
// DarkMode End
