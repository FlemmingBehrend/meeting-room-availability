import React from 'react';
import { useSelector } from 'react-redux';
import ConnectionStatus from '../components/connection-status';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/language-selector';

const HeaderContainer = props => {
    const socketStatus = useSelector(state => state.socketStatus);
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{t('title')}</span>
            <div>
                <LanguageSelector />
                <span className="navbar-text" style={{ marginLeft: '20px' }}>
                    <ConnectionStatus connectionId={socketStatus} />
                </span>
            </div>
        </nav>
    );
};

export default HeaderContainer;
