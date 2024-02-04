import { useState } from 'react'
import { fetchMoviesList } from '../../api/api'

export const MoviesList = () => {
    const [movieData, setMovieData] = useState([])
    const [keyword, setKeyWord] = useState("")
    const getKeyWord = (e) => {
        setKeyWord(e.target.value);
    }
    const getMovieData = async() => {
        setMovieData([await fetchMoviesList(keyword)])
        console.log(movieData)
    }
    return (
        <div className="list-container">
            <div className="input-container">
                <div className="input-name"><input type="text" onChange={(e) => getKeyWord(e)}/></div>
                <div className="search-btn"><button onClick={getMovieData}>search</button></div>
            </div>
            <div className="list">
            {movieData.length > 0 &&
                    movieData[0].d &&
                    movieData[0].d.map((movie, index) => (
                        <div className="card" key={index}>
                            {movie.i ? <div className="img"><img src={movie.i.imageUrl} alt="movie-poster" /></div> : 
                                <div className="imgNotAvail"></div>    
                            }
                            <div className="overlay">
                                <p>type: {movie.qid}</p>
                                <p>rank: {movie.rank}</p>
                                <p>years aired: {movie.yr ? movie.yr : movie.y ? movie.y : "isn't mentioned"}</p>
                            </div>
                            <div className="title">{movie.l}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}