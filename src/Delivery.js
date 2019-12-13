import React from 'react';
import {Container,Row,Button} from 'react-bootstrap';

const Delivery = ({dl,ud,ni,it,od}) =>{
    return(
        <div>
        <Container className="my-5">
            <Row className="justify-content-center">
                <Button className="mx-3"><h6 className="mb-3 mr-5">DEL</h6><div><h4 className="mb-0">{dl}</h4></div></Button>
                <Button className="mx-3"><h6 className="mb-3 mr-5">INT</h6><div><h4 className="mb-0">{it}</h4></div></Button>
                <Button className="mx-3"><h6 className="mb-3 mr-5">OOD</h6><div><h4 className="mb-0">{od}</h4></div></Button>
                <Button className="mx-3"><h6 className="mb-3 mr-5">UND</h6><div><h4 className="mb-0">{ud}</h4></div></Button>
                <Button className="mx-3"><h6 className="mb-3 mr-5">NFI</h6><div><h4 className="mb-0">{ni}</h4></div></Button>
            </Row>
        </Container>
        </div>
    )
}


export default Delivery;