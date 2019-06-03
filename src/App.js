import React, { Fragment, useContext, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import HeaderContainer from './containers/header-container';
import OfficeContainer from './containers/office-container';
import Config from './context/config';
import { updateSocketStatus, updateRoom } from './store/actions';

const App = () => {
    console.log('Starting app...');
    const dispatch = useDispatch();
    const config = useContext(Config);

    config.socket.onopen = event => {
        console.log('CONNECTION ESTABLISHED', event);
        dispatch(updateSocketStatus(config.socket.readyState));
    };

    config.socket.onclose = event => {
        console.log('DISCONNECTED', event);
        dispatch(updateSocketStatus(config.socket.readyState));
        return () => config.socket.close();
    };

    config.socket.onmessage = event => {
        const message = JSON.parse(event.data);
        console.log('MESSAGE RECIEVED', message);
        dispatch(updateRoom(message));
    };

    return (
        <Fragment>
            <Suspense fallback="Loading...">
                <HeaderContainer />
                <OfficeContainer />
            </Suspense>
        </Fragment>
    );
};

export default App;
