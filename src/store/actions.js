export const UPDATE_SOCKET_STATUS = 'UPDATE_SOCKET_STATUS';
export const UPDATE_ROOM = 'UPDATE_ROOM';

export const updateSocketStatus = status => ({
    type: UPDATE_SOCKET_STATUS,
    payload: status
});

export const updateRoom = data => ({
    type: UPDATE_ROOM,
    payload: data
});
