import React, { useContext, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import HeaderContainer from './containers/header';
import OfficeContainer from './containers/office';
import ClockContainer from './containers/clock';
import RoomListContainer from './containers/room-list';
import Config from './context/config';
import { updateSocketStatus, updateRoom } from './store/actions';

const App = () => {
    console.log('Starting app...');
    const dispatch = useDispatch();
    const config = useContext(Config);

    config.socket.onopen = event => {
        dispatch(updateSocketStatus(config.socket.readyState));
    };

    config.socket.onclose = event => {
        dispatch(updateSocketStatus(config.socket.readyState));
        return () => config.socket.close();
    };

    config.socket.onmessage = event => {
        const message = JSON.parse(event.data);
        dispatch(updateRoom(message));
    };

    return (
        <Suspense fallback="Loading...">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">{/* <HeaderContainer /> */}</div>
                </div>
                <div className="row">
                    <div className="col center">{/* <OfficeContainer /> */}</div>
                </div>
                <div className="row">
                    <div className="col" />
                    <div className="w-200">{/* <ClockContainer /> */}</div>
                    <div className="col-auto">
                        <RoomListContainer />
                    </div>
                    <div className="col" />
                </div>
            </div>
        </Suspense>
    );
};

export default App;
