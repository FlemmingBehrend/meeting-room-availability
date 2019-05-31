import { createStore } from 'redux';
import rootReducer from './root-reducer';

const initialState = {
    socketStatus: 0
};

export default () => {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
