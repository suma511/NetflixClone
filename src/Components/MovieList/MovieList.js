import Movie from "../Movie/Movie";
import ModalMovie from "../ModalMovie/ModalMovie"
import { useState, useEffect } from 'react';

function MovieList(props){
    const [cardInfo,setCardInfo]=useState({});
    const [show,setShow]=useState(false);
    const handelClose = ()=>setShow(false);
    return(
        <>
        {props.data.length && props.data.map((data,idx)=>(
       <div key ={idx}>
           <Movie data={data} setCardInfo={setCardInfo} setShow={setShow} />
       </div>
        ))
}
<ModalMovie cardInfo={cardInfo} show={show} handelClose={handelClose} />
{!props.data.length && <div><h2>No Such Results, Please try again later</h2></div> }
        </>
    )
}
export default MovieList;