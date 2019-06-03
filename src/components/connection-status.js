import React from 'react';
import { FaSignalSlash, FaSignal, FaPlug, FaQuestionCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ConnectionStatus = props => {
    const { t } = useTranslation();

    switch (props.connectionId) {
        case WebSocket.CLOSING:
            return (
                <span style={{ fontSize: '1em', color: 'Orange' }} title={t('connection.closing')}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CLOSED:
            return (
                <span style={{ fontSize: '1em', color: 'Red' }} title={t('connection.closed')}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CONNECTING:
            return (
                <span style={{ fontSize: '1em', color: 'Blue' }} title={t('connection.connecting')}>
                    <FaPlug />
                </span>
            );
        case WebSocket.OPEN:
            return (
                <span style={{ fontSize: '1em', color: 'Green' }} title={t('connection.open')}>
                    <FaSignal />
                </span>
            );
        default:
            return (
                <span style={{ fontSize: '1em', color: 'Gray' }}>
                    <FaQuestionCircle title={t('connection.unknown')} />
                </span>
            );
    }
};

export default ConnectionStatus;
