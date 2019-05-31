export const UPDATE_SOCKET_STATUS = 'UPDATE_SOCKET_STATUS';
export const INIT_ROOMS = 'INIT_ROOMS';

export const updateSocketStatus = status => ({
    type: UPDATE_SOCKET_STATUS,
    payload: status
});

export const initRooms = rooms => ({
    type: INIT_ROOMS,
    payload: rooms
});
