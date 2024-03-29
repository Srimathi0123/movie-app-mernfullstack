import React, {useState} from 'react'

const MovieComponent = ({movieItem}) => {
    return (
        <div className="card">
          <div className="text-container">
          <h3>{movieItem.movieName}</h3>
            <p className="year">({movieItem.movieYear})</p>
            <p className="rating-label">IMDb Rating : <span className="rating">{movieItem.imdbRating}/10</span></p>
            <p className="genre">
              Genre : {movieItem.movieGenre1}, {movieItem.movieGenre2}, 
              {movieItem.movieGenre3}, {movieItem.movieGenre4}
            </p>
          </div>
        </div>
      )
}

export default MovieComponent