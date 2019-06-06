import m from 'moment';
import 'moment/locale/da';

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

function meetingRoom(context, startPoint, name, size, available, updatedTime) {
    let height, width, xText, yText;
    switch (size) {
        case 4:
            height = 25;
            width = 25;
            xText = 8;
            yText = 18;
            break;
        case 6:
            height = 28;
            width = 25;
            xText = 8;
            yText = 20;
            break;
        case 10:
            height = 35;
            width = 25;
            xText = 4;
            yText = 22;
            break;
    }
    context.clearRect(startPoint.x, startPoint.y, width, height);
    if (available === 2) {
        context.fillStyle = 'green';
    } else if (available === 1) {
        context.fillStyle = 'red';
    } else {
        context.fillStyle = 'gray';
    }
    context.fillRect(startPoint.x, startPoint.y, width, height);
    context.fillStyle = 'black';
    context.font = '14px Sanf Sarif';
    context.fillText(size, startPoint.x + xText, startPoint.y + yText);
}

export { stair, meetingRoom };
