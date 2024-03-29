'use strict';

function buildDom(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  function main() {
    var splashScreen;
    var game;
    var gameOverScreen;
    var findScale = '';
    var nameOfScale = '';
    var instructionsButton;
    var instructions;
  
    function createSplashScreen() {
      splashScreen = buildDom(`
       <main id="splash">
        <h1>Musical Scales</h1>
        <h4>Select a scale</h4>
        <div id="two-select">
        <select name="select-scale" id="select-scale">

    <option value="c">c</option>
    <option value="c#">c#</option>
    <option value="d">d</option>
    <option value="d#">d#</option>
    <option value="e">e</option>
    <option value="f">f</option>
    <option value="f#">f#</option>
    <option value="g">g</option>
    <option value="g#">g#</option>
    <option value="a">a</option>
    <option value="a#">a#</option>
    <option value="b">b</option>
    </select>

    <select name="major-minor" id="major-minor">
    <h4>Select scale<h4>
    <option value="major">Major</option>
    <option value="minor">Minor</option>
    </select>
    </div>
        <button id="start-game"><h2>Start Game</h2></button>
        <button id="instructions-button">Instcructions</button>
       </main>
      `);
  
      document.body.appendChild(splashScreen);

      
  
      var startButton = splashScreen.querySelector('#start-game');
      
      startButton.addEventListener('click', function() {
        var scaleList = document.getElementById('select-scale').value;
        var majorMinor = document.getElementById('major-minor').value;

      
           
        document.getElementById("button-click").play();
        selectScale(scaleList, majorMinor);
        findScaleName()
        startGame();

       //console.log((this.game.scale).bind(this));
        
      });
      instructionsButton = document.querySelector('#instructions-button');
      instructionsButton.addEventListener('click', function() {
        console.log('button');
        createInstructionsScreen();
      })

    }


    function createInstructionsScreen() {
      instructions = buildDom(`
       <main id="instructions">
       <button id="button-back">Back</button>
       </main>
      `);

      removeSplashScreen();
  
      document.body.appendChild(instructions);

      var buttonBack = document.querySelector('#button-back');
      buttonBack.addEventListener('click', function () {
        console.log('back');
        removeInstructionScreen();
        createSplashScreen();
        
      });
  
  }
  function removeInstructionScreen(){
  instructions.remove();
  }


    function selectScale (a,b){
        
        switch (b) {
            case "major":
                    switch (a) {
                        case "c":
                        findScale = cMajor;
                        break;
                        case "c#":
                        findScale = cSharpMajor;
                        break;
                        case "d":
                        findScale = dMajor;
                        break;
                        case "d#":
                        findScale = dSharpMajor;
                        break;
                        case "e":
                        findScale = eMajor;
                        break;
                        case "f":
                        findScale = fMajor;
                        break;
                        case "f#":
                        findScale = fSharpMajor;
                        break;
                        case "g":
                        findScale = gMajor;
                        break;
                        case "g#":
                        findScale = gSharpMajor;
                        break;
                        case "a":
                        findScale = aMajor;
                        break;
                        case "a#":
                        findScale = aSharpMajor;
                        break;
                        case "b":
                        findScale = bMajor;
                        break;
                        default:
                break;
                    }
            break;
            case "minor":
                    switch (a) {
                        case "c":
                        findScale = cMinor;
                        break;
                        case "c#":
                        findScale = cSharpMinor;
                        break;
                        case "d":
                        findScale = dMinor;
                        break;
                        case "d#":
                        findScale = dSharpMinor;
                        break;
                        case "e":
                        findScale = eMinor;
                        break;
                        case "f":
                        findScale = fMinor;
                        break;
                        case "f#":
                        findScale = fSharpMinor;
                        break;
                        case "g":
                        findScale = gMinor;
                        break;
                        case "g#":
                        findScale = gSharpMinor;
                        break;
                        case "a":
                        findScale = aMinor;
                        break;
                        case "a#":
                        findScale = aSharpMinor;
                        break;
                        case "b":
                        findScale = bMinor;
                        break;
                        default:
                break;
                    }
            break;
            default:
    break;
    }
    //console.log(findScale);
    }

    function findScaleName(){
      switch (findScale) {
  case cMajor:
        nameOfScale = 'C / Am';
  break;
  case cSharpMajor:
        nameOfScale = 'C# / A#m';
  break;
  case dMajor:
        nameOfScale = 'D / Bm';
  break;
  case dSharpMajor:
        nameOfScale = 'D# / Cm';
  break;
  case eMajor:
        nameOfScale = 'E / C#m';
  break;
  case fMajor:
        nameOfScale = 'F / Dm';
  break;
  case fSharpMajor:
        nameOfScale = 'F# / D#m';
  break;
  case gMajor:
        nameOfScale = 'G / Em';
  break;
  case gSharpMajor:
        nameOfScale = 'G# / Fm';
  break;
  case aMajor:
        nameOfScale = 'A / F#m';
  break;
  case aSharpMajor:
        nameOfScale = 'A# / Gm';
  break;
  case bMajor:
        nameOfScale = 'B / G#m';
  break;
      }
    }

    function removeSplashScreen() {
      splashScreen.remove();
    }
  
    function createGameScreen(speed) {

     
      var gameScreen = buildDom(`
        <main class="game">
        <div id="headline">
          <div><span>Score: </span><span id="score">0</span></div>
          <div><span>  Lives: </span><span id="lives">3</span></div>
          <div><span>  Scale: </span><span id="scale">c Major</span></div>
          <div><span>  Speed: </span><span id="speed">20</span></div>
          <div><span>  Time: </span><span id="time">50</span></div>
          <span id="scale-notes-title"> </span><span id="scale-notes"> </span>
          <span id="collected"> </span><span id="nothing-yet"> </span>
        </div>
          <section class="canvas-container">
            <canvas></canvas>
          </section>
        </main>
     `);
  
      document.body.appendChild(gameScreen);
      // allowed notes? 
      //document.getElementById('allowed').innerHTML = findScale;
      //console.log(nameOfScale);

      document.getElementById('scale').innerHTML = nameOfScale;

        
      
      return gameScreen;
    }
    
    function removeGameScreen() {
      game.removeGameScreen();
    }

    function startGame() {
      removeSplashScreen();
      removeGameOverScreen();
      game = new Game(findScale, nameOfScale);
      game.gameScreen = createGameScreen(game.speed);
      
      game.start();

      game.passGameOverCallback(function() {
            gameOver(game.score);
          });
    }
   

    function createGameOverScreen(score) {
      gameOverScreen = buildDom(`
        <main id="game-over">
          <div id="titles">
            <h1>Good game!</h1>
            <p>Your score: <span id="score"></span></p>
            <p>You tried the scale of: <span id="scale"></span></p>
            <button id="back-from-scoreboard">Back to another game</button>
          </div>





          <table id="table"></table> 
      </main>
      `);
      //console.log(score);
      //this.document.getElementById('score').innerHTML = score;
      var button = gameOverScreen.querySelector('button');
      button.addEventListener('click', function () {
        removeGameOverScreen();
        createSplashScreen();
      });
  
      var span = gameOverScreen.querySelector('span');
      span.innerText = score;
  
      document.body.appendChild(gameOverScreen);
    }

    function removeGameOverScreen() {
      if (gameOverScreen) {
        gameOverScreen.remove();
      }
    }
  
    function gameOver(score) {
      document.removeEventListener('keydown', game.handleKeyDown.bind(this));
      document.removeEventListener('keyup', game.handleKeyUp.bind(this));

      removeGameScreen();
      createGameOverScreen(score);
    }

    createSplashScreen();

   
    
  }
  
  window.onload = main;


  
  

