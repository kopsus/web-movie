import React from "react"

// components
import ButtonPlay from "../../buttonPlay"
import ButtonMyList from "../../buttonMyList"
import "./styles.css"

const MovieTrandingDetail = ({ detailTranding, closeModal }) => {
  const handleCloseModal = () => {
    closeModal()
  }

  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${process.env.REACT_APP_IMG_PATH}/${detailTranding.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <button
        className="btn-close btn btn-circle btn-sm"
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
          <p className="title-movie-detail">{detailTranding.title}</p>
          <div className="release-popular-vote">
            <p>Release Date : {detailTranding.release_date}</p>
            <p>Popularity : {detailTranding.popularity}</p>
            <p className="text-[#5CDF5C] font-bold">
              Rating : {detailTranding.vote_average} %
            </p>
          </div>
          <p className="desc-detail-movie">{detailTranding.overview}</p>
        </div>
        <div className="btn-play-list">
          <ButtonPlay />
          <ButtonMyList />
        </div>
      </div>
    </div>
  )
}

export default MovieTrandingDetail
