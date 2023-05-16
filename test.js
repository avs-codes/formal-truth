const example = document.getElementById('example');

example.addEventListener('click', ourFunction() )

example.addEventListener('click', () =>{
  document.querySelectorAll('closed').style.display = none
} ) 

function ourFunction() {
  document.querySelectorAll('closed').style.display = none

}

let currentSide

slider.addEventListener('click', moveSlider(event) )




dragElement(document.getElementById('sticker'))

function dragElement(elmnt) {
  var pos1 = 0, pos2 =0, pos3 = 0;
  if (document.getElementById("sticker")) {
    document.getElementById("sticker").onmousedown = dragMouseDown;
  } else {
    document.getElementById("sticker").onmousedown = dragMouseDown;
  }
}

function add(a, b) {
  return a + b
}

function writeToConsole(text) {
  console.log(text)
}

add(5, 5)

let test1 = 5+5
let text2 = add(5, 5)


add(2,3)

draggables.forEach(item => {
  dragElement(item)
});

let number1 = 2;

let number2 = 5;

add(number1, number2)



















