// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionId = 'ACTION'
const comedyId = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionId,
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyId,
  )

  return (
    <div className="prime-video-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container ">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesDetails={actionMoviesList} />

        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesDetails={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
