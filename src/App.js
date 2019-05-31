import React, { Fragment, useContext } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import HeaderContainer from './containers/header-container';
import OfficeContainer from './containers/office-container';
import Config from './context/config';
import { updateSocketStatus } from './store/actions';

const App = () => {
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
        console.log('MESSAGE RECIEVED', event);
    };
    return (
        <Fragment>
            <HeaderContainer />
            <OfficeContainer />
        </Fragment>
    );
};

export default App;