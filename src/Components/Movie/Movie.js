import { Button, Container, Row,Card, Col } from 'react-bootstrap';
function Movie({ele}) {

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={ele.image} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Link className='div-card-link'>
                                            {ele.sourceUrl}
                                        </Card.Link>
                                        <div>
                                            <Button className='div-card-button' variant='primary'>Add To Favourit</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                    }
                </Row>
            </Container>
            
            
        </>
    )
}

export default Movie;