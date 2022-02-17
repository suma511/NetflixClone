import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './ModalMovie.css';
import axios from 'axios';
import {useRef} from 'react';

function ModalMovie ({cardInfo,show,handelClose}) {
    const commentInputRef = useRef("");

    console.log(cardInfo)

    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
       let fav = {title:cardInfo.title, overview:cardInfo.overview, poster_path:cardInfo.poster_path, releaseDate:cardInfo.releaseDate}
      
       await axios.post(`${process.env.REACT_APP_BASE_URL}/addFaveMovie`,fav)
                  .then(()=>{
                      console.log("Done :) ");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }

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
                <input ref={commentInputRef} placeholder="write option" type="text" id="op"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={()=>{
                        addToFav();
                        handleClose();
                     }}>Add To Fav</Button>
        </Modal.Footer>
        </>
    );
}
export default ModalMovie ;