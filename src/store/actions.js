export const UPDATE_SOCKET_STATUS = 'UPDATE_SOCKET_STATUS';

export const updateSocketStatus = status => ({
    type: UPDATE_SOCKET_STATUS,
    payload: status
});
