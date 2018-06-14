let db = require('./db')
var colors = []
getColors()

function getColors(){
    db.getColors().then(data => {
        colors = data.reduce((acc, obj) => {
            acc.push(obj.color)
            return acc
        }, [])
        console.log(colors)
    })
}


function makeRaindrop() {
    let raindrop = {
        left: Math.round(Math.random()*800),
        top: 0,
        fill: colors[Math.floor(Math.random()*colors.length)],
        width: 2,
        height: 6,
        angle: 0
    }
    return raindrop
}

function proccessRequest(name){
    let obj = {}
  switch(name){
    case 'raindrop':
      obj = makeRaindrop()
      break     
  }
  return obj  
}

module.exports ={
    makeRaindrop,
    proccessRequest
}