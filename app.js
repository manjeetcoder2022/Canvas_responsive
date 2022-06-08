var event_catch = ''
var src_x, src_y




canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = 'red'

    canvas.addEventListener("mouseup", mymouseUp)

function mymouseUp(e) {
    event_catch = 'mouseUp'
   
}

    canvas.addEventListener("mouseleave", mymouseLeave)

function mymouseLeave(e) {
    event_catch = 'mouseLeave'
  
}

    canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    event_catch = 'mymousedown'
   
}


    canvas.addEventListener("mousemove", mymousemove)

function mymousemove(e) {

    dest_x = e.clientX - canvas.offsetLeft
    dest_y = e.clientY - canvas.offsetTop
    
    if (event_catch == 'mymousedown') {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.moveTo(src_x, src_y)
        ctx.lineTo(dest_x, dest_y)
        ctx.stroke()
    }

    src_x = dest_x
    src_y = dest_y
    color=document.getElementById("color").value
    backgroundColor=document.getElementById("bg_color").value
    document.getElementById("myCanvas").style.backgroundColor=backgroundColor
}
screen_width = screen.width
screen_height = screen.height

new_width = screen_width - 70
new_height = screen_height - 300

if (screen_width < 992) {
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = 'hidden'
} else {
    document.getElementById("myCanvas").style.width = 800
    document.getElementById("myCanvas").style.height = 480

}
canvas.addEventListener("touchmove", mytouchmove)

function mytouchmove(e) {
    event_catch = 'touch Move'
    dest_x = e.touches[0].clientX - canvas.offsetLeft
    dest_y = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.moveTo(src_x, src_y)
    ctx.lineTo(dest_x, dest_y)
    ctx.stroke()

    src_x = dest_x
    src_y = dest_y
    color=document.getElementById("color").value
    backgroundColor=document.getElementById("bg_color").value
    document.getElementById("myCanvas").style.backgroundColor=backgroundColor
}



function myClear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

