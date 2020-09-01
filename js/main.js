const menuBtn = document.querySelector('.menu-btn');
const mainDiv = document.getElementById('mainDiv');
const navBar = document.getElementById('navbar');

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


window.addEventListener('scroll', function(){
let offset = window.pageYOffset;
mainDiv.style.backgroundPositionY = offset * 0.7 +"px";
let positon= mainDiv.getBoundingClientRect();

if( positon.top < window.innerHeight && positon.bottom >=0){
  navBar.style.display= 'none';
}else{
  navBar.style.display= 'flex';
  // navBar.style.backgroundColor= '#2D3439';
}
})