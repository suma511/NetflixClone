import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Movie({ props }) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    return (
        <div>
            
                <Col key={props.data.id} md={4}>
                    <Card className='div-card'>
                        <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
                        <Card.Body>
                            <Card.Title className='div-card-title'>{props.data.title}</Card.Title>
                            <p>{props.data.relase_date}</p>
                            <div>
                                <Button className='div-card-button' variant='primary' onClick={() => {
                                    props.setCardInfo(props.data);
                                    props.setShow(true);
                                }}>Add fav</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                                </div>

    )
                
} 

export default Movie;