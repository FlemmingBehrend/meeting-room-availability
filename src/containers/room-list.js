import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const RoomList = () => {
    const rooms = useSelector(state => state.rooms);

    function ListItem(props) {
        return <li className="list-group-item">{props.value}</li>;
    }

    function RoomsList() {
        const listItems = rooms.map(room => (
            // Correct! Key should be specified inside the array.
            <ListItem key={room.name} value={room.name} />
        ));
        return <ul className="list-group">{listItems}</ul>;
    }
    return <RoomsList />;
};

export default RoomList;
