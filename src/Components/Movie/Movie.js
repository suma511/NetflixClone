import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
function Movie({ mov }) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handelClose = () => { setShow(false); }
    return (
        <>
            <Card style={{ width: '50rem' }}>
                <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} />
                <Card.Body>
                    <Card.Title>{mov.title}</Card.Title>
                    <Card.Text>
                        <p>{mov.relase_date}</p>
                    </Card.Text>
                    <Card.Text>
                        {mov.overview}
                    </Card.Text>
                    <div>
                        <Button className='div-card-button' variant='primary'
                            onClick={() => {
                                setCardInfo(mov);
                                setShow(true);
                            }}>Add To fav</Button>
                    </div>
                </Card.Body>
            </Card>

            {
                <ModalMovie cardInfo={cardInfo} show={show} handelClose={handelClose} />}
        </>
    )


}

export default Movie;