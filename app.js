let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx) =>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 120)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx) =>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 70)
            });
        },1100);

        setTimeout(()=>{
            intro.style.top = '-110vh'
        },1700);
    },100)
})


const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth
  };

  element.addEventListener("mousemove", ele => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
    state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 35;
    const angleY = (state.mouseY / state.height) * -35;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;
  });

  element.addEventListener("mouseout", () => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;
  });
});



VanillaTilt.init(document.querySelector("#image-comparison-slider"), { // Tilt Effect - vanilla-tilt.js (https://micku7zu.github.io/vanilla-tilt.js/) is required for this
  max: 7, // max tilt rotation (degrees (deg))
  speed: 1000, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  scale: 1.02 // transform scale - 2 = 200%, 1.5 = 150%, etc..
});

const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");


slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {

  if(isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if(isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if(!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if(isSliderLocked) isSliderLocked = false;
}