import MovieCard from '../components/MovieCard.jsx'
import {useState,useEffect} from "react";
import {getPopularMovies,searchMovies} from "../services/api.js";
import "../css/Home.css";
function Home(){

    const [search, setSearch] = useState("");

    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies?? [])
            }catch (error) {
                console.log(error);
                setError("Could not get popular movies");
            }finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])
    const handleSearch = async  (e) =>{
        e.preventDefault();
        if(!search.trim())return
        if(loading) return
        setLoading(true);

        try{
            const searchResults = await searchMovies(search);
            setMovies(searchResults)
            setError(null);
        }catch (error) {
            console.log(error);
            setError("Could not find movie results");
        }finally {
            setLoading(false);
        }
    }
    return<div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input className="search-input"
                   type="text"
                   placeholder="Search..."
                   value={search}
                   onChange ={(e)=> setSearch(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie)=>
                movie.title.toLowerCase().startsWith(search.toLowerCase()) && (
                <MovieCard movie={movie} key = {movie.id}/>
            ))}
        </div>

    </div>


}
export default Home;