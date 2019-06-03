import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import ConnectionStatus from '../components/connection-status';
import { useTranslation } from 'react-i18next';

const HeaderContainer = props => {
    const socketStatus = useSelector(state => state.socketStatus);
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="top">
            <Navbar.Brand href="#">{t('title')}</Navbar.Brand>
            <Nav className="mr-auto" />
            <Navbar.Text>
                <ConnectionStatus connectionId={socketStatus} />
            </Navbar.Text>
        </Navbar>
    );
};

export default HeaderContainer;
