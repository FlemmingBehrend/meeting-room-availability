export const UNKNOWN = 0;
export const OCCUPIED = 1;
export const AVAILABLE = 2;

function meetingRoom(context, startPoint, size, available) {
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
        default:
            console.log('Unsupported room size: ', size);
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

export { meetingRoom };
