// library
import React, { useState } from "react"
import { Link } from "react-router-dom"

// icon
import { BsPlayFill } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Divide as Hamburger } from "hamburger-react"

// assets
import Narcos from "../../assets/narcos.png"
import MovieSearchDetail from "../movies/movieDetail/movieSearch.detail"

// component
import "../movies/styles.css"

const HeaderMain = ({
  search,
  movies,
  disableInteraction,
  setDisableInteraction,
}) => {
  const [change, setChange] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(false)

  const handleDetailMovie = (data) => {
    setSelectedMovie(data)
    setDisableInteraction(true)
  }

  const closeModal = () => {
    setSelectedMovie(!selectedMovie)
    setDisableInteraction(false)
  }

  const handleChange = () => {
    setChange(!change)
  }

  const [isOpen, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <header className="relative object-center">
        <nav className=" items-header text-primaryWhite">
          <div className="flex items-center gap-10">
            <div className="">
              <Link to="/" className="title">
                Sokin
              </Link>
            </div>
            <div className="gap-8 text-sm hidden lg:flex">
              <Link>Home</Link>
              <Link>TV Show</Link>
              <Link>Movies</Link>
              <Link>My List</Link>
            </div>
          </div>

          <div className="hidden md:flex gap-3 md:gap-8 lg:gap-10 items-center">
            <div
              className="flex items-center cursor-pointer rounded-sm text-sm"
              style={{
                border: change ? "1px solid #fff" : "none",
                padding: change ? "3px 5px" : "0",
                gap: change ? "7px" : "0",
              }}
            >
              <div className="md:flex hidden">
                <BiSearch size={23} onClick={handleChange} />
              </div>
              <input
                type="search"
                placeholder="Title, Genres, People"
                className="bg-primaryBgBlack outline-none"
                onChange={({ target }) => search(target.value)}
                style={{
                  width: change ? "200px" : "0",
                  transition: "1000ms",
                }}
              />
            </div>
            <p>Kids</p>
            <p>DVD</p>
          </div>

          {/* MOBILE */}

          <div className="md:hidden">
            <div className="" onClick={handleToggle}>
              <Hamburger size={25} color="#fff" />
            </div>
            <div
              className={`absolute left-0 gap-8 text-sm flex flex-col bg-primaryBgBlack py-3 w-full text-center ${
                isOpen ? "top-open" : "top-close"
              }`}
            >
              <Link>Home</Link>
              <Link>TV Show</Link>
              <Link>Movies</Link>
              <Link>My List</Link>
              <div className="flex items-center justify-center gap-3">
                <input
                  type="search"
                  className="w-[80%] p-1 border-none outline-none text-primaryBgBlack"
                  onChange={({ target }) => search(target.value)}
                  placeholder="Title, Genres, People"
                />

                <BiSearch size={23} color="#fff" />
              </div>
              <style>
                {`
                @media (min-width: 641px) {
                  .top-open {
                    top: 8vw !important;
                    transition: top 500ms;
                  }
                  .top-close {
                    top: -500% !important;
                    transition: top 500ms;
                  }
                }
                @media (max-width: 640px){
                  .top-open {
                    top: 15vw !important;
                    transition: top 500ms;
                  }
                  .top-close {
                    top: -500% !important;
                    transition: top 500ms;
                  }
                }
                `}
              </style>
            </div>
          </div>
        </nav>

        {/* END MOBILE */}

        {movies && movies.length > 0 && !selectedMovie ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[15vw] md:mt-[5.5vw] md:my-[10vw] gap-5 px-5 my-10">
            {movies.map((data, i) => (
              <div
                key={i}
                className="rounded-lg cursor-pointer hover:scale-[1.1] transition hover:opacity-[0.3]"
                style={{
                  pointerEvents: disableInteraction ? "none" : "",
                }}
              >
                <img
                  onClick={() => handleDetailMovie(data)}
                  className="rounded-xl"
                  src={`${process.env.REACT_APP_IMG_PATH}/${data.poster_path}`}
                  alt={data.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="mt-[15vw] md:mt-[5vw] object-cover mb-20 md:px-16 md:py-36 lg:py-44 pl-5 pr-5 py-20"
            style={{
              backgroundImage: `url(${Narcos})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {!selectedMovie && (
              <div className="text-primaryWhite flex flex-col gap-10 md:gap-14">
                <div className="w-[60%] flex flex-col gap-6 lg:gap-10">
                  <p className="text-[7vw] md:text-[5.5vw] font-semibold">
                    Narcos
                  </p>
                  <p className="text-[3vw] md:text-xl">
                    A gritty chronicle of the war against Colombia's infamously
                    violent and powerful drug cartels.
                  </p>
                </div>
                <div className="flex gap-7">
                  <button className="btn bg-primaryBrown hover:bg-primaryHoverBrown text-primaryWhite border-none">
                    <AiOutlineInfoCircle size={20} /> more info
                  </button>
                  <button className="flex items-center gap-1 text-primaryBgBlack hover:text-primaryWhite bg-primaryWhite hover:bg-primaryHoverBrown px-4 rounded-md">
                    <BsPlayFill size={20} /> play
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </header>
      {selectedMovie && (
        <MovieSearchDetail
          detailMovie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default HeaderMain
