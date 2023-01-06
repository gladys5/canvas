let nodes = []
let selectedNode = null
let arcos = []

function getNodeAt(x, y, nodes) {
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index]
    const a = x - node.x
    const b = y - node.y

    const c = Math.sqrt(a * a + b * b)

    if (c < 90) {
      return node
    }
  }
  return null
}

function drawNodes(ctx, nodes) {
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index]

    if (node === selectedNode) {
      ctx.strokeStyle = "#FF0000"
    } else {
      ctx.strokeStyle = "#000000"
    }

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.fillStyle = "#FFFFFF"
    ctx.arc(node.x, node.y, 40, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()

    if (node === selectedNode) {
      ctx.fillStyle = "#FF0000"
    } else {
      ctx.fillStyle = "#000000"
    }

    ctx.font = "30px Arial"
    ctx.fillText(index, node.x - 5, node.y + 5)
  }
}

function drawArcos(ctx, arcos) {
  for (let index = 0; index < arcos.length; index++) {
    const arco = arcos[index]
    ctx.moveTo(arco.node1.x, arco.node1.y)
    ctx.lineTo(arco.node2.x, arco.node2.y)
    ctx.strokeStyle = "#000000"
    ctx.stroke()
  }
}

window.onload = async () => {
  var canvas = document.getElementById("myCanvas")
  var context = canvas.getContext("2d")

  canvas.addEventListener("click", (e) => {
    let x = e.clientX - canvas.offsetLeft
    let y = e.clientY - canvas.offsetTop

    let tempNode = getNodeAt(x, y, nodes)

    if (selectedNode !== null && tempNode === null) {
      selectedNode = tempNode
      tempNode = null
    }

    if (selectedNode === null) {
      selectedNode = tempNode
      tempNode = null
    }

    if (selectedNode === null) {
      nodes.push({ x, y })
    }

    context.clearRect(0, 0, canvas.width, canvas.height)

    if (selectedNode !== null && tempNode !== null) {
      arcos.push({ node1: selectedNode, node2: tempNode })
      selectedNode = null
      tempNode = null
    }
    drawArcos(context, arcos)
    drawNodes(context, nodes)
  })
}
