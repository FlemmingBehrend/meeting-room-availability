import { UPDATE_SOCKET_STATUS, UPDATE_ROOM } from './actions';

export default function(state, action) {
    switch (action.type) {
        case UPDATE_SOCKET_STATUS:
            return { ...state, socketStatus: action.payload };
        case UPDATE_ROOM:
            const newRooms = [];
            for (const room of state.rooms) {
                if (action.payload.name === room.name) {
                    room.availability = action.payload.availability;
                    room.lastUpdatedTime = action.payload.time;
                    console.log('room', room);
                }
                newRooms.push(room);
            }
            return { ...state, rooms: newRooms };
        default:
            return state;
    }
}
