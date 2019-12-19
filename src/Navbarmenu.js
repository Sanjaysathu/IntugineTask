import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import profile from './profile.svg';

const Navbarmenu = () =>{

    var styles={
        height:'40px',
        width:'40px',
        borderRadius:'50%',
        backgroundColor:'grey',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }



    return(
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="">Company Name</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="" className="mx-2">Home</Nav.Link>
                <Nav.Link href="" className="mx-2">Brands</Nav.Link>
                <Nav.Link href="" className="mx-2">Transporters </Nav.Link>
                <Nav.Link href="" className="mx-1"><div style={styles}><img src={profile} alt=""/></div></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbarmenu;