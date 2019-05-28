import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ConnectionStatus from '../components/connection-status';

const HeaderContainer = props => {
    // const state = useContext(State);
    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="top">
            <Navbar.Brand href="#">Meeting Room Availability Overview</Navbar.Brand>
            {/* <Form inline>
                <FormControl
                    type="text"
                    placeholder="Filter"
                    className="mr-sm-2"
                    value={state.filterValue}
                    onChange={e => console.log(e.target.value)}
                />
            </Form> */}
            <Navbar.Text>
                <ConnectionStatus connectionId="2" />
            </Navbar.Text>
        </Navbar>
    );
};

export default HeaderContainer;
