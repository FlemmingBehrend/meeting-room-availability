import React from 'react';
import { FaSignalSlash, FaSignal, FaPlug, FaQuestionCircle } from 'react-icons/fa';

const ConnectionStatus = props => {
    switch (props.connectionId) {
        case WebSocket.CLOSING:
            return (
                <span style={{ fontSize: '1em', color: 'Orange' }} title={'The websocket connection in closing down'}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CLOSED:
            return (
                <span style={{ fontSize: '1em', color: 'Red' }} title={'The websocket connection have disconnected'}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CONNECTING:
            return (
                <span style={{ fontSize: '1em', color: 'Blue' }} title={'The websocket is connecting...'}>
                    <FaPlug />
                </span>
            );
        case WebSocket.OPEN:
            return (
                <span style={{ fontSize: '1em', color: 'Green' }} title={'The websocket connection is open'}>
                    <FaSignal />
                </span>
            );
        default:
            return (
                <span style={{ fontSize: '1em', color: 'Gray' }}>
                    <FaQuestionCircle title={'The status of the websocket connection is unknown'} />
                </span>
            );
    }
};

export default ConnectionStatus;
