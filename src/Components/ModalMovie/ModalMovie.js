import { Modal } from "bootstrap";
import { Button } from "bootstrap";
function ModalMovie ({movieInfo,Add,handelAdd}) {
    return(
        <>
        <Modal show={Add} onHide={handelAdd} animation={false}/>
        <Modal.Header closeButton>
<Modal.Title>Add To Fav</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
            <h4>{movieInfo.title}</h4>
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