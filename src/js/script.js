// DropMenu Start
let hamburgerBTN = document.querySelector('.hamburger');
// console.log(hamburgerBTN);

let dropMenu = document.querySelector('.toggle');
// console.log(dropMenu);

hamburgerBTN.addEventListener("click", function openMenu() {
    dropMenu.classList.toggle('hidden');
})
// DropMenu End
