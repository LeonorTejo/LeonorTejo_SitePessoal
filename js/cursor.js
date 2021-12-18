const bigBall = document.querySelector('.cursorBig');
const smallBall = document.querySelector('.cursorSmall');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(bigBall, .4, {
    x: e.clientX ,
    y: e.clientY
  })
  TweenMax.to(smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to(smallBall, .3, {
    scale: 6
  })
  TweenMax.to(bigBall, .3, {
    opacity: 0
  })
}
function onMouseHoverOut() {
  TweenMax.to(smallBall, .3, {
    scale: 1
  })
  TweenMax.to(bigBall, .3, {
    opacity: 1
  })
}