

function getRainDrop() {
    $.ajax({
        url:'/api',
        type:'post',
        data:{name: 'raindrop'},
        success:function(res){
            rainDrops.push(res)
      }
    })
}

let move = setInterval(() => {
  rainDropMove()
  ballMove()
},50)

function rainDropMove () {
  rainDrops.forEach(raindrop => {
    if (raindrop.top > 800) raindrop.top = 0
    else {
      raindrop.top += raindrop.topMove
    }
  })
}

function getBall() {
  $.ajax({
      url:'/api',
      type:'post',
      data:{name: 'ball'},
      success:function(res){
          balls.push(res)
    }
  })
}

function ballMove () {
  balls.forEach(ball => {
    if (ball.top < 0 || ball.top > 780) ball.topMove *= -1
    if (ball.left < 0 || ball.left > 780) ball.leftMove *= -1
    ball.top += ball.topMove
    ball.left += ball.leftMove

  })
}

function getColor(callback) {
  $.ajax({
    url:'/api',
    type:'post',
    data:{name: 'color'},
    success:callback


})
}
