import { UPDATE_SOCKET_STATUS } from './actions';

export default function(state, action) {
    switch (action.type) {
        case UPDATE_SOCKET_STATUS:
            return { ...state, socketStatus: action.payload };
        default:
            return state;
    }
}
