import React, { useRef, useEffect } from 'react';
import { stair, meetingRoom } from './shapes';
import './Office.css';
import HeaderContainer from './containers/header-container';

function Office() {
    const canvas = useRef(null);

    useEffect(() => {
        console.log('initializing');
        const context = canvas.current.getContext('2d');
        context.strokeStyle = 'black';
        context.strokeRect(0, 10, 400, 580);
        stair(context, { x: 20, y: 50 });
        stair(context, { x: 20, y: 150 });
        stair(context, { x: 20, y: 250 });
        stair(context, { x: 20, y: 350 });
        stair(context, { x: 20, y: 450 });
        meetingRoom(context, { x: 100, y: 100 }, 'Bilskade', true);
        meetingRoom(context, { x: 100, y: 300 }, 'Rørskade', false);
        meetingRoom(context, { x: 200, y: 150 }, 'Ulykke', true);
        meetingRoom(context, { x: 300, y: 250 }, 'Uheld', false);
    }, []);

    return (
        <div className="App">
            <HeaderContainer />
            <canvas ref={canvas} width="400" height="600" className="Office" />
        </div>
    );
}

export default Office;
