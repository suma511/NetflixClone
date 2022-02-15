import MovieList from '../MovieList/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modalo from './modal/Modalo';


function Home() {
    const [data, setData] = useState([]);

    const getAllMovies = async () => {

        return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, []);

    return (

        <>
        <Modalo cardInfo={cardInfo} show={show} handleClose={handleClose} />
<MovieList data={data} />
        </>

    );
}

export default Home;