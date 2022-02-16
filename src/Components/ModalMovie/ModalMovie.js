import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './ModalMovie.css';
function ModalMovie ({cardInfo,show,handelClose}) {
    return(
        <>
        <Modal show={show} onHide={handelClose} animation={false}/>
        <Modal.Header closeButton>
            
<Modal.Title>Add To Fav</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
            <h3>{cardInfo.title}</h3>
            <img alt ='' src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`}/>
            <div>
                <label htmlFor="op">write option</label>
                <input placeholder="write option" type="text" id="op"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary">Add To Fav</Button>
        </Modal.Footer>
        </>
    );
}
export default ModalMovie ;