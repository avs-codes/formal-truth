class Turtle {
  constructor(x,y) {
  if (typeof x === "undefined") {
    x = width * 0.5;
  }
  if (typeof y === "undefined") {
    y = height * 0.5;
  }

  this.x = x;
  this.y = y;
  this.bearingRadians = 0;
  this.isPenDown = true;

  this._stateStack = [];
  }

  moveTo(newX, newY) {
    if (this.isPenDown) {
      line(this.x, this.y, newX, newY);
    }
    this.x = newX;
    this.y = newY;
  }

  moveForward(distance) {
    let newX = this.x + cos(this.bearingRadians) * distance;
    let newY = this.y + sin(this.bearingRadians) * distance;
    this.moveTo(newX, newY);
  }

  moveBackward(distance) {
    this.moveForward(-distance);
  }

  turnTo(angleDegrees) {
    this.bearingRadians = radians(angleDegrees);
  }

  turnRight(amountDegrees) {
    this.bearingRadians += radians(amountDegrees);
  }

  turnLeft(amountDegrees) {
    this.bearingRadians -= radians(amountDegrees);
  }

  penUp() {
    this.isPenDown = false;
  }

  penDown() {
    this.isPenDown = true;
  }

  pushState() {
    this._stateStack.push({
      x: this.x,
      y: this.y,
      bearingRadians: this.bearingRadians,
      isPenDown: this.isPenDown,
    });
  }

  popState() {
    if (this._stateStack.length === 0) {
      console.error(
        "Turtle: No states left on stack. Make sure your calls to .pushState and .popState are balanced."
      );
      return;
    }
    let state = this._stateStack.pop();
    this.x = state.x;
    this.y = state.y;
    this.bearingRadians = state.bearingRadians;
    this.isPenDown = state.isPenDown;
  }

};
var modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

let constructBtn, clearBtn, w, h, layerOption, constructionMode, lineMode, inputContainer

let Layer = '&#8801;'
let NoLayer = "&#x2262;"

let Spiral = '&#43612;'
let Cloud = '&#9640;'

let Monoline = '&#10072;&#10072;&#10072;'
let Multiline = '&#10072;&#10073;&#10074;'
function setup() {
  
  w = windowWidth
  h = windowHeight
  createCanvas(w, h);
 
  noLoop();
  const buttonContainer = createDiv()
  buttonContainer.id("button-container");

  const textContainer = createDiv()
  textContainer.id("text-container");

  inputContainer = createDiv()
  inputContainer.id("input-container");
  inputContainer.addClass("dropdown-content")

  const inputDropdown = createDiv();
  inputDropdown.addClass('dropdown')

  const bottomContainer = createDiv();
  bottomContainer.id("bottom-container");

  textarea = createElement('textarea');
  textarea.input(updateString)
  textarea.addClass("text")

  constructBtn = createButton("reconstruct");
  constructBtn.addClass("button")
  constructBtn.mousePressed(drawPoetry);

  clearBtn = createButton("deconstruct");
  clearBtn.addClass("button")
  clearBtn.mousePressed(redrawBkg);

  inputDdwnBtn = createButton("Parameters");
  inputDdwnBtn.mousePressed(toggleShow);
  inputDdwnBtn.addClass("dropbtn")

  layerOption = createRadio('Layering');
  layerOption.option(NoLayer);
  layerOption.option(Layer);
  layerOption.selected(NoLayer)
  layerOption.addClass("radio")

  lineMode = createRadio('Weight');
  lineMode.option(Monoline);
  lineMode.option(Multiline);
  lineMode.selected(Monoline)
  lineMode.addClass("radio")

  constructionMode = createRadio('Algorithm');
  constructionMode.option(Cloud);
  constructionMode.option(Spiral);
  constructionMode.selected(Cloud)
  constructionMode.addClass("radio")

  buttonContainer.child(constructBtn)
  buttonContainer.child(clearBtn)

  textContainer.child(textarea)

  bottomContainer.child(textContainer)
  bottomContainer.child(buttonContainer)


  inputContainer.child(layerOption)
  inputContainer.child(constructionMode)
  inputContainer.child(lineMode)
  
  inputDropdown.child(inputDdwnBtn)
  inputDropdown.child(inputContainer)

  pixelDensity(2);
  background('#f5f2c6')
}

function toggleShow() {
  document.getElementById("input-container").classList.toggle("show");
}

let string = '';
let turnCount = 0
function updateString() {
  string = this.value();
  console.log(string)
}

function redrawBkg() {
  background('#f5f2c6')
}

//moving background color from drawPoetry to setup makes a layering effect
//make this switch based on user input

//worthwhile effect to randomize turtle.x and turtle.y per each word

//could be a tool to test color palettes or just make cool patterns

//add a clear button

function drawPoetry() {
  strokeCap(PROJECT)
  let turtle = new Turtle();
  if (layerOption.value() === NoLayer) {
    background('#f5f2c6')
  }
  strokeWeight(1)
  let length = w / (Math.sqrt( string.length ) * 3)
  for (const c of string) {
    let key = c.toUpperCase();
    switch(key) {
    case 'A':
      turtle.turnLeft(90)
      turtle.moveForward(length)
      turtle.turnRight(90)
      turtle.moveForward(length/2)
      turtle.turnRight(90)
      turtle.moveForward(length/2)
      turtle.turnRight(90)
      turtle.moveForward(length/2)
      turtle.turnRight(180)
      turtle.moveForward(length/2)
      turtle.turnRight(90)
      turtle.moveForward(length/2)
      break;
    case 'B':
      turtle.moveForward(length / 8) 
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/10);
        turtle.turnLeft(18);
      }
        turtle.turnRight(170);
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/14);
        turtle.turnLeft(19);
      }
        turtle.turnRight(20);
        turtle.moveForward(length / 5);
        turtle.turnLeft(90);
        turtle.moveForward(length);
      break;
    case 'C':
      turtle.turnLeft(90);
      for (i = 0; i < 11; i++) {
        turtle.moveForward(length/10);
        turtle.turnLeft(18);
      }
      turtle.turnRight(18);
      turtle.moveForward(length/2);
      for (i = 0; i < 11; i++) {
        turtle.moveForward(length/10);
        turtle.turnLeft(18);
      }
      turtle.turnRight(18);
      break;
    case 'D':
      turtle.moveForward(length)
      turtle.turnRight(270);
      turtle.moveBackward(length/8)
      for (i = 0; i < 11; i++) {
        turtle.moveBackward(length/16);
        turtle.turnRight(9);
      }
      turtle.turnLeft(9);
      turtle.moveBackward(length/6)
      for (i = 0; i < 11; i++) {
        turtle.moveBackward(length/16);
        turtle.turnRight(9);
      }
      turtle.turnLeft(9);
      turtle.moveBackward(length/8)
      turtle.turnLeft(90);
        break;
    case 'E':
      turtle.moveForward(length / 2)
      turtle.penUp()
      turtle.moveBackward(length / 2)
      turtle.penDown()
      turtle.turnRight(90)
      turtle.moveForward(length / 2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 2)
      turtle.penUp()
      turtle.moveBackward(length / 2)
      turtle.penDown()
      turtle.turnRight(90)
      turtle.moveForward(length / 2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 2)
      break;
    case 'F':
      turtle.moveForward(length / 2)
      turtle.turnRight(90)
      turtle.moveForward(length / 2)
      turtle.moveBackward(length / 2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 2)
      turtle.turnRight(90)
      turtle.moveForward(length / 2)
      break;
    case 'G':
      turtle.penUp()
      turtle.moveForward(length/2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 4)
      turtle.penDown()
      turtle.turnLeft(180)
      turtle.moveForward(length / 4)
      turtle.turnRight(90)
      turtle.moveForward(length / 8)
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/12);
        turtle.turnRight(18);
      }
      turtle.moveForward(length/2);
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/12);
        turtle.turnRight(18);
      }
      break;
    case 'H':
      turtle.turnLeft(90)
      turtle.moveForward(length)
      turtle.penUp()
      turtle.moveBackward(length / 2)
      turtle.penDown()
      turtle.turnRight(90)
      turtle.moveForward(length / 2)
      turtle.turnLeft(90)
      turtle.moveForward(length / 2)
      turtle.turnLeft(180)
      turtle.moveForward(length)
      break;
    case 'I':
      turtle.moveForward(length / 2)
      turtle.moveBackward(length / 4)
      turtle.turnLeft(90)
      turtle.moveForward(length)
      turtle.turnRight(90)
      turtle.moveForward(length / 4)
      turtle.turnLeft(180)
      turtle.moveForward(length/2)
      break;
    case 'J':
      turtle.penUp()
      turtle.moveForward(length / 3)
      turtle.turnRight(90)
      turtle.moveForward(length / 3)
      turtle.penDown()
      for (i = 0; i < 10; i++) {
        turtle.moveBackward(length/13);
        turtle.turnLeft(20);
      }
      turtle.turnLeft(160);
      turtle.moveForward(length / 1.2)
      turtle.turnRight(90)
      turtle.moveForward(length / 4)
      turtle.turnLeft(180)
      turtle.moveForward(length/2)
      break;
    case 'K':
      turtle.moveForward(length)
      turtle.moveBackward(length/2)
      turtle.turnLeft(225)
      turtle.moveForward(length / 1.4)
      turtle.moveBackward(length / 1.4)
      turtle.turnLeft(90)
      turtle.moveForward((length / 1.55) )
      turtle.turnTo(90)
      break;
    case 'L':
      turtle.moveForward(length)
      turtle.turnLeft(90)
      turtle.moveForward(length/2)
      break;
    case 'M':
      turtle.moveForward(length)
      turtle.turnRight(150)
      turtle.moveForward(length/2.5)
      turtle.turnLeft(120)
      turtle.moveForward(length/2.5)
      turtle.turnRight(150)
      turtle.moveForward(length)
      break;
    case 'N':
      turtle.moveForward(length)
      turtle.turnRight(150)
      turtle.moveForward(length)
      turtle.turnLeft(150)
      turtle.moveForward(length)
      break;
    case 'O':
      turtle.turnRight(90)
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.moveForward(length/2);
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.moveForward(length/2);
      break;
    case 'P':
      turtle.moveForward(length);
      turtle.turnRight(90);
      turtle.moveForward(length/4);
      for (i = 0; i < 11; i++) {
        turtle.moveForward(length/12);
        turtle.turnRight(18);
      }
      turtle.turnLeft(18);
      turtle.moveForward(length/4);
      break;
    case 'Q':
      turtle.turnRight(90)
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.moveForward(length/2);
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.moveForward(length/2);
      for (i = 0; i < 3; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.turnRight(80);
      turtle.moveForward(length/5);
      turtle.moveBackward(length/3);
      turtle.turnRight(46);
      break;
    case 'R':
      turtle.moveForward(length);
      turtle.turnRight(90);
      turtle.moveForward(length/4);
      for (i = 0; i < 11; i++) {
        turtle.moveForward(length/12);
        turtle.turnRight(18);
      }
      turtle.turnLeft(18);
      turtle.moveForward(length/4);
      turtle.turnLeft(135);
      turtle.moveForward(length/1.5);
      break;
    case 'S':
      turtle.moveBackward(length/4);
      for (i = 0; i < 11; i++) {
        turtle.moveBackward(length/12);
        turtle.turnLeft(18);
      }
      turtle.turnLeft(162);
      for (i = 0; i < 10; i++) {
        turtle.moveForward(length/12);
        turtle.turnRight(18);
      }
     
      turtle.moveForward(length/3);
      break;
    case 'T':
      turtle.moveForward(length / 1.5)
      turtle.turnRight(180)
      turtle.moveForward(length / 3)
      turtle.turnLeft(90)
      turtle.moveForward(length)
      break;
    case 'U':
      turtle.turnRight(180);
      turtle.moveForward(length / 1.5)
      for (i = 0; i < 11; i++) {
        turtle.moveForward(length/10);
        turtle.turnRight(18);
      }
      turtle.turnLeft(18);
      turtle.moveForward(length / 1.5)
      break;
    case 'V':
      turtle.turnRight(70)
      turtle.moveForward(length)
      turtle.turnRight(220)
      turtle.moveForward(length)
      turtle.turnRight(70)
      break;
    case 'W':
      turtle.turnRight(80)
      turtle.moveForward(length)
      turtle.turnRight(210)
      turtle.moveForward(length/2)
      turtle.turnRight(140)
      turtle.moveForward(length/2)
      turtle.turnLeft(150)
      turtle.moveForward(length)
      turtle.turnLeft(10)
      break;
    case 'X':
      turtle.turnRight(65)
      turtle.moveForward(length)
      turtle.turnRight(180)
      turtle.moveForward(length/2)
      turtle.turnRight(50)
      turtle.moveForward(length/2)
      turtle.turnRight(180)
      turtle.moveForward(length)
      turtle.turnRight(65)
      break;
    case 'Y':
      turtle.turnRight(60)
      turtle.moveForward(length/2)
      turtle.turnRight(240)
      turtle.moveForward(length/2)
      turtle.penUp();
      turtle.moveBackward(length/2)
      turtle.penDown();
      turtle.turnLeft(30)
      turtle.moveBackward(length/2)
      break;
    case 'Z':
      turtle.moveForward(length/2)
      turtle.turnRight(120)
      turtle.moveForward(length)
      turtle.turnRight(240)
      turtle.moveForward(length/2)
      break;
    case ' ':
        push();
        setLineDash([2, 4]);

        stroke('#c71414')
        strokeWeight(2)
        

        
        if (constructionMode.value() === Cloud) {
          turtle.moveForward(length/2);
          pop()
          turtle.x = random(100,w - 100)
          turtle.y = random(100,h - 100)
        } else {
          turtle.moveForward(length / ((turnCount+1)));
          pop()
        //turtle.turnRight( floor(random(1,7)) * 45)
        if (turnCount === 6) {
          turnCount = 0;
        }
        turtle.turnRight( Math.floor(turnCount)  * 45)
        turnCount += (0.0625*2)
        
        }

        if (lineMode.value() === Multiline) {
          let weightDecision = floor( random(1,4))

          if (weightDecision === 1) {
            strokeWeight(3.5)
          } else if (weightDecision === 2) {
            strokeWeight(1)
          } else if (weightDecision === 3) {
            strokeWeight(4.5)
          }
        } else {
          strokeWeight(1)
        }
      break;
    case '.':
      push();
      setLineDash([2, 4]);
      //stroke('#c71414')
      strokeWeight(2)
      turtle.moveForward(length);
      pop()
      
      push()

      stroke('black')
      fill('black');
      circle(turtle.x, turtle.y, length)
      pop()

      push();
      setLineDash([2, 4]);

      //stroke('#c71414')
      strokeWeight(2)
      turtle.moveForward(length);
      turtle.turnRight( floor(random(1,7)) * 90)
      //turtle.turnRight( Math.floor(turnCount)  * 45)
      pop()
      break;
    case '?':
      turtle.turnRight(45)
      break;
    case '!':
      turtle.turnRight(45)
      break;
    default:
      turtle.turnRight(45)
      break;
    
    }
  }

}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

