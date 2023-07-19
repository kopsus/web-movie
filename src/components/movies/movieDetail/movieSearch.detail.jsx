import React from "react"

import "./styles.css"
import ButtonPlay from "../../buttonPlay"
import ButtonMyList from "../../buttonMyList"

const MovieSearchDetail = ({ detailMovie, closeModal }) => {
  const handleCloseModal = () => {
    closeModal()
  }
  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${process.env.REACT_APP_IMG_PATH}/${detailMovie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="btn btn-sm btn-circle btn-close"
        onClick={handleCloseModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="parent-movie-detail">
        <div className="contain-movie-detail">
          <p className="title-movie-detail">{detailMovie.original_title}</p>
          <div className="release-movie-vote">
            <p className="">Release Date : {detailMovie.release_date}</p>
            <p className="">Popularity : {detailMovie.popularity}</p>
            <p className="text-[#5CDF5C] font-bold">
              Rating : {detailMovie.vote_average} %
            </p>
          </div>
          <p className="desc-detail-movie">{detailMovie.overview}</p>
        </div>
        <div className="btn-play-list">
          <ButtonPlay />
          <ButtonMyList />
        </div>
      </div>
    </div>
  )
}

export default MovieSearchDetail
