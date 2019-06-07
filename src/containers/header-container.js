import React from 'react';
import { useSelector } from 'react-redux';
import ConnectionStatus from '../components/connection-status';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/language-selector';
import AvailableRooms from './../components/available-rooms';
import MeetingRoomIcon from './../assets/meeting-room-icon.png';

const HeaderContainer = props => {
    const socketStatus = useSelector(state => state.socketStatus);
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="d-flex h5 mb-0 align-items-center">
                <img src={MeetingRoomIcon} width="40" height="40" />
                <span className="ml-1">{t('title')}</span>
            </div>
            <div className="d-flex flex-nowrap align-items-center">
                <AvailableRooms className="mx-auto" />
                <span className="ml-3 mr-3">
                    <LanguageSelector />
                </span>
                <span className="navbar-text">
                    <ConnectionStatus connectionId={socketStatus} />
                </span>
            </div>
        </nav>
    );
};

export default HeaderContainer;
