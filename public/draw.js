const framesPerSecond = 20;
var canvy;
var rain;
var color;
var playing = false;
var rainDrops = [];
var balls = [];
var evilMode = false;
///////////////////////////////////////////////////////////////////


window.onload = function () {
  canvy = document.getElementById('canvas')
  canvyContext = canvy.getContext('2d')

  var button = document.getElementById('rain')
  button.addEventListener("mousedown", (evt) => {
    startRainDrop()
    // if (button.innerHTML == 'Rain') {
    //       button.innerHTML = 'Stop'
    // } else button.innerHTML = 'Rain'
  })
  button.addEventListener("mouseup", (evt) => {
    stopRainDrops()
    // if (button.innerHTML == 'Rain') {
    //       button.innerHTML = 'Stop'
    // } else button.innerHTML = 'Rain'
  })
 
  var moodButton = document.getElementById('mood')
  moodButton.addEventListener("click", (evt) => {
    getColor(newColor => {
      color = newColor;
    })
  })

  var evilButton = document.getElementById('evil')
  evilButton.addEventListener("click", (evt) => {
    console.log('evil')
    evilMode = !evilMode
    clearCanvas()
    canvy.classList.toggle('evil')
    $('body').toggleClass('evilbody')
  })

  var ballButton = document.getElementById('balls')
  ballButton.addEventListener("click", (evt) => {
    getBall()
  })

  var audioButton = document.getElementById('rainy')
  audioButton.addEventListener("click", (evt) => {
    console.log('clicked')
    if (playing == false) {
        playAudio()
        playing = true
    } else {
      pauseAudio()
      playing = false
    }
    if (audioButton.innerHTML == 'Play') {
          audioButton.innerHTML = 'Stop'
    } else audioButton.innerHTML = 'Play'
  })

  var audio = document.getElementById("myAudio");
  function playAudio() {
    audio.play();
  }
  function pauseAudio() {
    audio.pause();
  }

  start()
}

function start() {
  setInterval(()  => {
    if (!evilMode) clearCanvas()
    if (!evilMode && color) drawBackground()

    drawBalls()
    drawRaindrops()
  }, 1000/30)
}

function clearCanvas () {
  canvyContext.clearRect(0, 0, 800, 800)
}

function drawBackground () {
  drawRect({
    left: 0, top: 0, fill: color, width: 800, height: 800
  })
}

function drawBalls () {
  for (var i = 0; i < balls.length; i++) {
    drawCircle(balls[i])
  }
}

function drawRaindrops () {
  for (var i = 0; i < rainDrops.length; i++) {
    drawRect(rainDrops[i])
  }
}

function drawRect (rect) {
  canvyContext.fillStyle = rect.fill
  canvyContext.fillRect(rect.left, rect.top, rect.width, rect.height)
}

function drawCircle (circle) {
  canvyContext.fillStyle = circle.fill;
  canvyContext.beginPath();
  canvyContext.arc(circle.left, circle.top, circle.height/3, 0, Math.PI*2, true);
  canvyContext.fill();
}

function startRainDrop () {
  rain = setInterval(() => {
    getRainDrop()
  }, 1000/30)
}

function stopRainDrops () {
  clearInterval(rain)
}

function clearRainDrops () {
  clearInterval(rain)
  rainDrops = [];
}
