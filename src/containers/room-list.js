import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const RoomList = () => {
    const rooms = useSelector(state => state.rooms);
    const { t } = useTranslation();

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
    return (
        <table className="table table-striped table-bordered table-sm">
            <thead className="thead-light">
                <tr>
                    <th>{t('table.header.room_name')}</th>
                    <th>{t('table.header.updated')}</th>
                    <th>{t('table.header.module')}</th>
                    <th>{t('table.header.size')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>some name</td>
                    <td>some time</td>
                    <td>some module</td>
                    <td>some size</td>
                </tr>
            </tbody>
        </table>
    );
};

export default RoomList;
