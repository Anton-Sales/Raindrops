let db = require('./db')
let colors = []
let raindropTypes = []
let ballTypes = []
let startTime = "not set"
getColors()
getRaindropTypes()
getBallTypes()

function getColors(){
    db.getColors().then(data => {
        colors = data.reduce((acc, obj) => {
            acc.push(obj.color)
            return acc
        }, [])
    })
}

function getRaindropTypes(){
    db.getTypeVisual('raindrop').then(data => {
        raindropTypes = data
    })
}

function getBallTypes(){
    db.getTypeVisual('ball').then(data => {
        ballTypes = data
    })
}




function makeRaindrop() {
    let color = Math.floor(Math.random()*colors.length)
    let left = Math.round(Math.random()*800)
    let type = Math.floor(Math.random()*raindropTypes.length)
    let raindrop = {
        left: left,
        top: 0,
        fill: colors[color],
        width: 2,
        height: 6,
        angle: 0,
        leftMove: 0,
        topMove:  Number(raindropTypes[type].top_move)
    }
    // makeEvent(color+1, raindropTypes[type].id, 0, left)
    return raindrop
}

function makeBall() {
    let color = Math.floor(Math.random()*colors.length)
    let top = Math.round(Math.random()*800)
    let type = Math.floor(Math.random()*ballTypes.length)
    let topSpeed
    if (Math.random() > 0.5) {
        topSpeed = Number(ballTypes[type].top_move)
    } else topSpeed = -(Number(ballTypes[type].top_move))

    let ball = {
         left: 11,
         top: top,
         fill: colors[color],
         width: 20,
         height: 20,
         angle: 0,
         leftMove: Number(ballTypes[type].left_move),
         topMove: topSpeed
     }
     // makeEvent(color+1, ballTypes[type].id, top, 0)
     return ball
 }

function proccessRequest(name){
    let obj = {}
  switch(name){
    case 'raindrop':
      obj = makeRaindrop()
      break
    case 'ball':
        obj = makeBall()
        break
        case 'color':
        obj = getColor()
        break
  }
  return obj
}

function makeEvent(color_id, type_id, top, left){
  let time
  if (isNaN(startTime)) startTime = Date.now()
  time = Date.now() - startTime
  let evt={
    color_id,
    type_id,
    top,
    left,
    time
  }
  return db.addEvent(evt).then(() =>{

  })

}

function getColor() {
    let color = colors[Math.floor(Math.random()*colors.length)]
    return color
}

module.exports ={
    makeRaindrop,
    proccessRequest
}
