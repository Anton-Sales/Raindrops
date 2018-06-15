let db = require('./db')
var colors = []
var raindropTypes = []
getColors()
getRaindropTypes()

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
        console.log(raindropTypes) 
    })      
}

let startTime = "not set"


function makeRaindrop() {
   let color = Math.floor(Math.random()*colors.length)
   let left = Math.round(Math.random()*800)
   //let topMove = Math.ceil(Math.random()*4+1)
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

function proccessRequest(name){
    let obj = {}
  switch(name){
    case 'raindrop':
      obj = makeRaindrop()
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

module.exports ={
    makeRaindrop,
    proccessRequest
}