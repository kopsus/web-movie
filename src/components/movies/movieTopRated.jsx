import React, { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { Navigation } from "swiper"

// component
import MovieTopRateDetail from "./movieDetail/movieTopRate.detail"
// import { getMovieListTopRated } from "../api/api"

import "./styles.css"

const MovieTopRated = ({
  disableInteraction,
  movies,
  setDisableInteraction,
}) => {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleDetailMovie = (data) => {
    setSelectedMovie(data)
    setDisableInteraction(true)
  }

  const closeModal = () => {
    setSelectedMovie(null)
    setDisableInteraction(false)
  }

  if (!movies || movies.length === 0) {
    // Tampilkan loading atau pesan bahwa tidak ada film yang tersedia
    return // Misalnya, tampilkan pesan loading sementara data masih diambil
  }

  return (
    <div className="parent-movie">
      <p className="component-movie">Movie Top Rated</p>

      <Swiper
        slidesPerView={4}
        spaceBetween={13}
        loop={true}
        navigation={true}
        breakpoints={{
          // Mengatur slidesPerView menjadi 2 saat layar berada di tampilan breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map((data, i) => {
          return (
            <SwiperSlide
              key={i}
              className="swiper-slide-backdrop"
              style={{
                pointerEvents: disableInteraction ? "none" : "",
              }}
            >
              <img
                onClick={() => handleDetailMovie(data)}
                src={`${process.env.REACT_APP_IMG_PATH}/${data.backdrop_path}`}
                alt={data.title}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {selectedMovie && (
        <MovieTopRateDetail
          detailTopRated={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default MovieTopRated
