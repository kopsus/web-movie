import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./styles.css"
import { Navigation } from "swiper"
import MovieTrandingDetail from "./movieDetail/movieTranding.detail"

const MoviesTranding = ({
  disableInteraction,
  movies,
  setDisableInteraction,
}) => {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleChange = (data) => {
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
      <p className="component-movie">Movie Tranding</p>

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
              key={i}
              className="swiper-slide-backdrop"
              style={{
                pointerEvents: disableInteraction ? "none" : "",
              }}
            >
              <div onClick={() => handleChange(data)}>
                <img
                  src={`${process.env.REACT_APP_IMG_PATH}/${data.backdrop_path}`}
                  alt={data.title}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {selectedMovie && (
        <MovieTrandingDetail
          detailTranding={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default MoviesTranding
