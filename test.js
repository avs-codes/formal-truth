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