

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
},50)

function rainDropMove () {
  rainDrops.forEach(raindrop => {
    if (raindrop.top > 800) raindrop.top = 0
    else {
      raindrop.top += raindrop.topMove
    }
  })
}
