export const UNKNOWN = 0;
export const OCCUPIED = 1;
export const AVAILABLE = 2;

function stair(context, startPoint) {
    context.fillStyle = 'lightgray';
    context.fillRect(startPoint.x, startPoint.y, 30, 50);
    context.moveTo(startPoint.x + 15, startPoint.y + 20);
    context.lineTo(startPoint.x + 15, startPoint.y + 50);
    context.lineWidth = 1;
    context.stroke();
}

function meetingRoom(context, startPoint, name, available) {
    context.fillStyle = 'lightgray';
    context.fillRect(startPoint.x, startPoint.y, 70, 30);
    if (available === 2) {
        context.fillStyle = 'green';
    } else if (available === 1) {
        context.fillStyle = 'red';
    } else {
        context.fillStyle = 'gray';
    }
    context.fillRect(startPoint.x + 15, startPoint.y + 10, 40, 10);
    context.fillStyle = 'black';
    context.font = '11px Monospace';
    context.fillText(name, startPoint.x, startPoint.y + 40);
}

export { stair, meetingRoom };
