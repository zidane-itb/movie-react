import React, { useState, useLayoutEffect } from 'react'
import './MovieButton.css'
import axios from 'axios'
import Popup from './Popup'

function MovieButton({ link, trailerLink }) {
    const [movie, setMovie] = useState({})
    const [buttonPopup, setButtonPopup] = useState(false)

    useLayoutEffect(() => {
        async function fetchData() {
            const req = await axios.get(link)
            setMovie(req.data)
            return req
        }
       fetchData()
    }, [link])

    return (
        <div>
            <div className="poster-container" onClick={() => setButtonPopup(true)}>
            <div className="poster" style={{ 
            backgroundImage: `url(${movie.Poster}})` 
            }}></div>
                <div className="overlay">
                    <div className="movie-title">{movie.Title}</div>
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} movie={movie}>
            
            </Popup>
        </div>
        
        </div>
    )
}

export default MovieButton
