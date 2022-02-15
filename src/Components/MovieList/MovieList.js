import Movie from "../Movie/Movie";
function MovieList(props){
    return(
        <>
        {props.data.length && props.data.map((data,idx)=>(
       <div key ={idx}>
           <Movie data={data}/>
       </div>
        ))
}
{
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
}
export default MovieList;