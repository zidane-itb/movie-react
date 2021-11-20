import React from 'react'
import MovieButton from './MovieButton'
import './MovieRows.css'

function MovieRows(props) {
    return (
        <main>
            <p className='row-title'>{props.title}</p>
            <div className='row'>
                <MovieButton link={'https://www.omdbapi.com/?i=tt0848228&apikey=c2116020'} trailerLink={"https://www.youtube.com/embed/eOrNdBpGMv8"}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt9032400&apikey=c2116020'}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt10872600&apikey=c2116020'}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt3480822&apikey=c2116020'}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt10160804&apikey=c2116020'}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt10168312&apikey=c2116020'}/>
                <MovieButton link={'https://www.omdbapi.com/?i=tt4154796&apikey=c2116020'}/>
            </div>
        </main>
    )
}

export default MovieRows