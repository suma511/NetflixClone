import Movie from "../Movie/Movie";
import {Container ,Row } from 'react-bootstrap' ;
function MovieList({data}){
  
    return(
        <>
        <Container className='div-container'>
            <Row md={3}>
                {
                    data.length && data.map((mov)=>(
                    
                    <Movie mov={mov}/>
                    ))
                }
                {!data.length && <div>no such result try later</div>}
            </Row>
        </Container>
        ))

        </>
    )
}
export default MovieList;