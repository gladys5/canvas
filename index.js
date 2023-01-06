window.onload = async () => {
  var canvas = document.getElementById("myCanvas")
  var ctx = c.getContext("2d")
  ctx.moveTo(0, 0)
  ctx.lineTo(800, 600)
  ctx.stroke()
  ctx.font = "30px Arial"
  ctx.fillText("Hello World", 10, 50)
  canvas.addEventListener("click", () => {
    ctx.beginPath()
    ctx.arc(95, 50, 40, 0, 2 * Math.PI)
    ctx.stroke()
  })
}
