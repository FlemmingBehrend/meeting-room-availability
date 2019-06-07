import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReconnectingWebSocket from 'reconnecting-websocket';
import createStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'flag-icon-css/css/flag-icon.min.css';
import './index.css';
import './i18n';
import App from './App';
import Config from './context/config';
import * as serviceWorker from './serviceWorker';

let root = window || {};
const store = createStore();
root.MeetingRoomApplication = (function() {
    function boostrap(config, el) {
        config.socket = new ReconnectingWebSocket(config.wssEndpoint);
        ReactDOM.render(
            <Config.Provider value={config}>
                <Provider store={store}>
                    <App />
                </Provider>
            </Config.Provider>,
            el
        );
    }
    serviceWorker.unregister();
    return boostrap;
})();
