

function getRainDrop() {
    $.ajax({
        url:'/api',
        type:'post',
        data:{name: 'raindrop'},
        success:function(res){
            rainDrops.push(res)
            console.log(res)
      }
    })
}