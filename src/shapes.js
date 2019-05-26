function stair(context, startPoint) {
  context.fillStyle = "lightgray";
  context.fillRect(startPoint.x, startPoint.y, 30, 50);
  context.moveTo(startPoint.x + 15, startPoint.y + 20);
  context.lineTo(startPoint.x + 15, startPoint.y + 50);
  context.lineWidth = 1;
  context.stroke();
}

function meetingRoom(context, startPoint, name, available = false) {
  context.fillStyle = "lightgray";
  context.fillRect(startPoint.x, startPoint.y, 70, 30);
  if (available) {
    context.fillStyle = "green";
  } else {
    context.fillStyle = "red";
  }
  context.fillRect(startPoint.x + 15, startPoint.y + 10, 40, 10);
  context.fillStyle = "black";
  context.font = "11px Monospace";
  context.fillText(name, startPoint.x, startPoint.y + 40);
}

export { stair, meetingRoom };
