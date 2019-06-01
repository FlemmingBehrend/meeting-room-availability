import React, { useRef, useEffect } from 'react';
import { stair, meetingRoom } from '../shapes';
import { useSelector } from 'react-redux';

function Office() {
    const canvas = useRef(null);
    const rooms = useSelector(state => state.rooms);

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        context.strokeStyle = 'black';
        context.strokeRect(0, 10, 400, 580);
        console.log('drawing office');
        stair(context, { x: 20, y: 50 });
        stair(context, { x: 20, y: 150 });
        stair(context, { x: 20, y: 250 });
        stair(context, { x: 20, y: 350 });
        stair(context, { x: 20, y: 450 });
    }, []);

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        console.log('drawing rooms');
        for (const room of rooms) {
            meetingRoom(context, room.placement, room.name, room.availability, room.lastUpdatedTime);
        }
    }, [rooms]);

    return (
        <div className="App">
            <canvas ref={canvas} width="400" height="600" className="Office" />
        </div>
    );
}

export default Office;
