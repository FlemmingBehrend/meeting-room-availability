import React from 'react';
import { FaSignalSlash, FaSignal, FaPlug, FaQuestionCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ConnectionStatus = props => {
    const { t } = useTranslation();

    switch (props.connectionId) {
        case WebSocket.CLOSING:
            return (
                <span style={{ fontSize: '1em', color: 'Orange' }} title={t('connection.tooltip.closing')}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CLOSED:
            return (
                <span style={{ fontSize: '1em', color: 'Red' }} title={t('connection.tooltip.closed')}>
                    <FaSignalSlash />
                </span>
            );
        case WebSocket.CONNECTING:
            return (
                <span style={{ fontSize: '1em', color: 'Blue' }} title={t('connection.tooltip.connecting')}>
                    <FaPlug />
                </span>
            );
        case WebSocket.OPEN:
            return (
                <span style={{ fontSize: '1em', color: 'Green' }} title={t('connection.tooltip.open')}>
                    <FaSignal />
                </span>
            );
        default:
            return (
                <span style={{ fontSize: '1em', color: 'Gray' }}>
                    <FaQuestionCircle title={t('connection.tooltip.unknown')} />
                </span>
            );
    }
};

export default ConnectionStatus;
