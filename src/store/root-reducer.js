import { UPDATE_SOCKET_STATUS, INIT_ROOMS } from './actions';

export default function(state, action) {
    switch (action.type) {
        case UPDATE_SOCKET_STATUS:
            return { ...state, socketStatus: action.payload };
        case INIT_ROOMS:
            return { ...state, rooms: action.payload };
        default:
            return state;
    }
}
