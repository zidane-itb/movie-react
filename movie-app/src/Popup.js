import React from 'react'
import './Popup.css'
import {FaXbox, FaCartPlus} from 'react-icons/fa'

function Popup({ trigger, setTrigger, movie, trailerLink }) {
    return (trigger) ? (
        <div className="main-popup">
        <div className="close-btn-div" onClick={() => {
            setTrigger(false)
        } }>
            <button className="close-btn"><FaXbox/></button>
        </div>
        <iframe className = "video-frame" src={trailerLink} frameborder="0"></iframe>
        <section className="info-section">
            <div className="info-1">
                <div className="info-general info-title">{movie.Title}</div>
                <div className="info-general greyed">
                    <span>{movie.Released} - </span>
                    <span>IMDB Rating : {movie.imdbRating} - </span>
                    <span>{movie.Runtime}</span>
                </div>
                <div className="info-general">
                    {movie.Plot}
                </div>
            </div>
            <div className="info-2">
                <div className="add-to-cart-div">
                    <button className="add-to-cart-btn" ><FaCartPlus/></button>
                </div>
                <div className="info-general">
                    <span className="greyed">Actors: </span> {movie.Actors}
                </div>
                <div className="info-general">
                    <span className="greyed">Writer: </span> {movie.Writer}
                </div>
                <div className="info-general">
                    <span className="greyed">Director: </span> {movie.Director}
                </div>
                <div className="info-general">
                    <span className="greyed">Genre: </span> {movie.Genre}
                </div>
            </div>
        </section>
        
    </div>
    ) : "";
}

export default Popup
