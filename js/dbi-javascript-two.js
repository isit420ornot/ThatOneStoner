var gotoAssignment = document.querySelector("#indexGroup");
var toDo = document.querySelector("#toDo");
var visit = document.querySelector("#visit");
var board = document.querySelector("#board");
var notice = document.querySelector("#notice");
var noticeContent = document.querySelector("#noticeContent");
var eotm = document.querySelector("#eotm");
var indexGroup = document.querySelector("#indexGroup");
var shallWeScreenGroup = document.querySelector("#shallWeScreenGroup");
var shallWeComputer = document.querySelector("#shallWeComputer");
var shallWe = document.querySelector("#typewriter");
var zoomScreen = document.querySelector("#zoomScreen");
var gameList = document.querySelector("#typewriterTwo");

gotoAssignment.addEventListener("mouseover", function() {
  toDo.style.color = "#ff0001";
  visit.style.color = "#00a6ff";
});

gotoAssignment.addEventListener("mouseout", function() {
  toDo.style.color = "#cc0001";
  visit.style.color = "#00679e";
});

gotoAssignment.addEventListener("click", function() {
  toDo.style.color = "#fd9797";
  visit.style.color = "#abe1fe";


  board.style.transition = "all 1.5s ease";
  board.style.marginLeft = "-190vw";

  matrixPaper.style.transition = "all 1.5s ease";
  matrixPaper.style.marginLeft = "-190vw";

  notice.style.transition = "all 1.5s ease";
  notice.style.marginLeft = "-190vw";

  noticeContent.style.transition = "all 1.5s ease";
  noticeContent.style.marginLeft = "-190vw";

  eotm.style.transition = "all 1.5s ease";
  eotm.style.marginLeft = "-190vw";

  indexGroup.style.transition = "all 1.5s ease";
  indexGroup.style.marginLeft = "-190vw";

  shallWeScreenGroup.style.transition = "all 2s ease";
  shallWeScreenGroup.style.marginLeft = "-130vw";

  setTimeout(() => {
    shallWe.style.display = "block";
  }, 3000);

  setTimeout(() => {
    function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {

        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }

      };

      return {
        type: type
      };
    }

    var typer = document.getElementById('typewriter');

    typewriter = setupTypewriter(typewriter);

    typewriter.type();
  }, 3000);


  const log = document.getElementById('typewriter');

  setTimeout(() => {

    document.addEventListener('keypress', logKey);

    function logKey(e) {
      if (e.code === "KeyY") {
        yPressed();
      } else if (e.code === "KeyN") {
        alert("Oh... it's you again... go on now... GET!!!");
      } else {
        alert("Press Y or N...")
      }
    }
  }, 6300);

});

function yPressed() {
  zoomScreen.style.transition = "all 1.5s ease";
  zoomScreen.style.width = "100vw";
  zoomScreen.style.height = "87.5vw";
  zoomScreen.style.marginLeft = "0vw";
  zoomScreen.style.marginTop = "-81vw";

  setTimeout(() => {
    shallWeScreenGroup.style.display = "none";
  }, 3000);

  setTimeout(() => {
    gameList.style.display = "block";
  }, 3000);

  setTimeout(() => {
    function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {

        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }

      };

      return {
        type: type
      };
    }

    var typer = document.getElementById('typewriterTwo');

    typewriterTwo = setupTypewriter(typewriterTwo);

    typewriterTwo.type();
  }, 3000);


}

function falkensMazeLink() {

  document.querySelector("#listOfGames").style.display = "none";

  document.querySelector("main").style.backgroundImage = "url(images/javascript/glitch1.gif)";

  setTimeout(() => {
    document.querySelector("main").style.backgroundImage = "";

    document.querySelector("main").style.backgroundColor = "#737f73";

    document.querySelector("#falkensMaze").style.display = "block";

    startMazeGame();
  }, 1000);

}

function startMazeGame() {

  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);



  var canvas = document.getElementById("mazecanvas");
  var context = canvas.getContext("2d");
  var currRectX = 425;
  var currRectY = 3;
  var mazeWidth = 556;
  var mazeHeight = 556;
  var intervalVar;



  function drawMazeAndRectangle(rectX, rectY) {
    makeWhite(0, 0, canvas.width, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function() {
      context.drawImage(mazeImg, 7, 7);
      drawRectangle(rectX, rectY, "#0000FF");
      context.beginPath();
      context.arc(525, 285, 7, 0, 2 * Math.PI, false);
      context.closePath();
      context.fillStyle = '#00FF00';
      context.fill();
    };
    mazeImg.src = "images/javascript/maze.gif";
  }

  function drawRectangle(x, y, style) {
    makeWhite(currRectX, currRectY, 13, 13);
    currRectX = x;
    currRectY = y;
    context.beginPath();
    context.rect(x, y, 13, 13);
    context.closePath();
    context.fillStyle = style;
    context.fill();
  }

  function moveRect(e) {
    var newX;
    var newY;
    var movingAllowed;
    e = e || window.event;
    switch (e.keyCode) {
      case 38: // arrow up key
      case 87: // W key
        newX = currRectX;
        newY = currRectY - 3;
        break;
      case 37: // arrow left key
      case 65: // A key
        newX = currRectX - 3;
        newY = currRectY;
        break;
      case 40: // arrow down key
      case 83: // S key
        newX = currRectX;
        newY = currRectY + 3;
        break;
      case 39: // arrow right key
      case 68: // D key
        newX = currRectX + 3;
        newY = currRectY;
        break;
      default:
        return;
    }
    movingAllowed = canMoveTo(newX, newY);
    if (movingAllowed === 1) { // 1 means 'the rectangle can move'
      drawRectangle(newX, newY, "#0000FF");
      currRectX = newX;
      currRectY = newY;
    } else if (movingAllowed === 2) { // 2 means 'the rectangle reached the end point'
      clearInterval(intervalVar);
      makeWhite(0, 0, canvas.width, canvas.height);


      document.querySelector("#mazeWin").style.display = "block";

      document.querySelector("#mazeButts").style.display = "block";

      document.querySelector("#mazeButts").style.marginTop = "-7.5vw";

      window.removeEventListener("keydown", moveRect, true);
    }
  }

  function canMoveTo(destX, destY) {
    var imgData = context.getImageData(destX, destY, 15, 15);
    var data = imgData.data;
    var canMove = 1; // 1 means: the rectangle can move
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) {
      for (var i = 0; i < 4 * 15 * 15; i += 4) {
        if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
          canMove = 0; // 0 means: the rectangle can't move
          break;
        } else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // #00FF00
          canMove = 2; // 2 means: the end point is reached
          break;
        }
      }
    } else {
      canMove = 0;
    }
    return canMove;
  }

  function createTimer(seconds) {
    intervalVar = setInterval(function() {
      makeWhite(mazeWidth, 0, canvas.width - mazeWidth, canvas.height);
      if (seconds === 0) {
        clearInterval(intervalVar);
        window.removeEventListener("keydown", moveRect, true);
        makeWhite(0, 0, canvas.width, canvas.height);

        document.querySelector("#mazeLose").style.display = "block";

        document.querySelector("#mazeButts").style.display = "block";

        return;
      }
      context.font = "20px Arial";
      if (seconds <= 10 && seconds > 5) {
        context.fillStyle = "orangered";
      } else if (seconds <= 5) {
        context.fillStyle = "red";
      } else {
        context.fillStyle = "green";

      }
      context.textAlign = "center";
      context.textBaseline = "middle";
      var minutes = Math.floor(seconds / 60);
      var secondsToShow = (seconds - minutes * 60).toString();
      if (secondsToShow.length === 1) {
        secondsToShow = "0" + secondsToShow; // if the number of seconds is '5' for example, make sure that it is shown as '05'
      }
      context.fillText(minutes.toString() + ":" + secondsToShow, mazeWidth + 25, canvas.height / 2);
      seconds--;

    }, 1000);
  }

  function makeWhite(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
  }
  drawMazeAndRectangle(20, 206);
  window.addEventListener("keydown", moveRect, true);
  createTimer(260); // 4:20 minutes
}


function restartMazeGame() {
  document.querySelector("#mazeWin").style.display = "none";

  document.querySelector("#mazeButts").style.display = "none";

  document.querySelector("#mazeLose").style.display = "none";

  startMazeGame()

}

function mazeToList() {
  document.querySelector("#falkensMaze").style.display = "none";

  document.querySelector("#mazeWin").style.display = "none";

  document.querySelector("#mazeLose").style.display = "none";

  document.querySelector("#mazeButts").style.display = "none";



  document.querySelector("#listOfGames").style.display = "block";
}