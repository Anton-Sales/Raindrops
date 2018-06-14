const framesPerSecond = 20;
var canvy;
var rainDrops = [
  {left: 100, top: 0, fill: 'teal', width: 2, height: 6}
];
///////////////////////////////////////////////////////////////////



window.onload = function () {
  // canvy = new fabric.Canvas('canvas')
  canvy = document.getElementById('canvas')
  canvyContext = canvy.getContext('2d')
  start()
}

function start() {
  setInterval(()  => {
    clearCanvas()
    for (var i = 0; i < rainDrops.length; i++) {
      drawRect(rainDrops[i])
      rainDrops[i].top++
    }
  }, 1000/30)
}

function clearCanvas () {
  drawRect({
    left: 0, top: 0, fill: 'white', width: 800, height: 800
  })
}

function drawRect (rect) {
  canvyContext.fillStyle = rect.fill
  canvyContext.fillRect(rect.left, rect.top, rect.width, rect.height)
}
