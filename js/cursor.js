const cursor = document.querySelector('.cursor');
const $hoverables = document.querySelectorAll('.hoverable');

//const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);


for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(cursor, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7
  })
}


// Hover an element
function onMouseHover() {
  TweenMax.to(cursor, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to(cursor, .3, {
    scale: 1
  })
}