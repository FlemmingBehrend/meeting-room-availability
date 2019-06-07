import React, { useRef, useEffect } from 'react';
import { meetingRoom } from '../shapes';
import { useSelector } from 'react-redux';
import OfficeImage from './../assets/landskab.jpg';

function Office() {
    const canvas = useRef(null);
    const rooms = useSelector(state => state.rooms);

    useEffect(() => {
        console.log('drawing office');
        const context = canvas.current.getContext('2d');
        const officeImageObj = new Image();
        officeImageObj.src = OfficeImage;
        officeImageObj.onload = () => context.drawImage(officeImageObj, 0, 0);
    }, []);

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        console.log('drawing rooms');
        for (const room of rooms) {
            meetingRoom(context, room.placement, room.name, room.size, room.availability, room.lastUpdatedTime);
        }
    }, [rooms]);

    return (
        <div className="App">
            <canvas ref={canvas} width="1506" height="542" className="Office" />
        </div>
    );
}

export default Office;
