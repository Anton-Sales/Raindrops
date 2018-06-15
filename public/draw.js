const framesPerSecond = 20;
var canvy;
var rain;
var color;
var playing = false;
var rainDrops = [];
var balls = [];
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
    getColor()
      .then((newColor) => {
        color = newColor;
      })
  })

  var ballButton = document.getElementById('balls')
  ballButton.addEventListener("click", (evt) => {
    getBall()
    console.log(balls)
  })

  var audioButton = document.getElementById('play')
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
    clearCanvas()
    if (color) drawBackground()
    drawRaindrops()
  }, 1000/30)
}

function clearCanvas () {
  drawRect({
    left: 0, top: 0, fill: 'white', width: 800, height: 800
  })
}

function drawBackground () {
  drawRect({
    left: 0, top: 0, fill: color, width: 800, height: 800
  })
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
