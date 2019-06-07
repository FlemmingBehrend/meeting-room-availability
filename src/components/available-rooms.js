import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const AvailableRooms = props => {
    const { t } = useTranslation();
    const available = useSelector(state => state.rooms.filter(room => room.availability === 2).length);

    return (
        <div>
            {t('rooms.label.available')}: {available}
        </div>
    );
};

export default AvailableRooms;
