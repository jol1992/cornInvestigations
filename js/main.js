const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const mainDiv = document.getElementById('mainDiv');

window.addEventListener('scroll', function(){

let offset = window.pageYOffset;
mainDiv.style.backgroundPositionY = offset * 0.7 +"px";
console.log("Moving")

})
