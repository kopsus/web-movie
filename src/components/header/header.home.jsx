// library
import React from "react"
import { Link } from "react-router-dom"

// component
import ButtonMasuk from "../buttonMasuk"
import CardEmail from "../cardEmail/emailLogin"

const HeaderHome = () => {
  return (
    <div>
      <div className="px-10 md:px-16 py-5 relative">
        <header className="items-header">
          <Link to="/" className="title">
            SOKIN
          </Link>
          <ButtonMasuk />
        </header>

        <div className="flex flex-col text-primaryWhite lg:w-[55%] md:w-[65%] mt-[25vw] md:mt-[15vw] lg:mt-32 gap-5 lg:gap-10">
          <p className="font-semibold text-[5.5vw] md:text-[4vw] lg:text-[3.5vw]">
            Film, acara TV tak terbatas, dan banyak lagi
          </p>
          <p className="text-[3vw] md:text-[2vw]">
            Tonton di mana pun. Batalkan kapan pun.
          </p>
        </div>

        <div className="w-[90%] mx-auto my-10 md:my-[8vw] rounded-xl bg-primaryBlue">
          <CardEmail />
        </div>
      </div>
    </div>
  )
}

export default HeaderHome
