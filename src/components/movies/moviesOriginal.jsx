import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./styles.css"
import { Navigation } from "swiper"
import MovieOriginalDetail from "./movieDetail/movieOriginal.detail"

const MoviesOriginal = ({
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
    return null // Tampilkan loading atau pesan bahwa tidak ada film yang tersedia
  }

  return (
    <div className="parent-movie">
      <p className="component-movie">Movie Original</p>

      <Swiper
        slidesPerView={4}
        spaceBetween={13}
        loop={true}
        navigation={true}
        breakpoints={{
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
              key={data.id}
              style={{
                pointerEvents: disableInteraction ? "none" : "",
              }}
            >
              <div onClick={() => handleDetailMovie(data)}>
                <img
                  src={`${process.env.REACT_APP_IMG_PATH}/${data.poster_path}`}
                  alt={data.title}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {selectedMovie && (
        <MovieOriginalDetail
          detailMovie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default MoviesOriginal
