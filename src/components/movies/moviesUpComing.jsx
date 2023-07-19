import React, { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

// components
import MovieUpComingDetail from "./movieDetail/movieUpComing.detail"

const MoviesUpComing = ({
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
    // Tampilkan loading atau pesan bahwa tidak ada film yang tersedia
    return // Misalnya, tampilkan pesan loading sementara data masih diambil
  }

  return (
    <div className="parent-movie mb-20">
      <p className="component-movie">Movies Up Coming</p>

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
              <img
                onClick={() => handleChange(data)}
                src={`${process.env.REACT_APP_IMG_PATH}/${data.backdrop_path}`}
                alt={data.title}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {selectedMovie && (
        <MovieUpComingDetail
          detailUpComing={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default MoviesUpComing
