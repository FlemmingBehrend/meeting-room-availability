import { createStore } from 'redux';
import rootReducer from './root-reducer';
import { initialState } from './initial-state';

export default () => {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
