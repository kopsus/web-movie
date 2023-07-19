import React from "react"
import { Link } from "react-router-dom"

const ButtonMasuk = () => {
  return (
    <Link
      to="/login"
      className="px-5 py-1 flex items-center justify-center rounded-md bg-primaryRed border-none text-primaryWhite text-[3vw] md:text-[1.5vw] lg:text-[1.2vw] hover:bg-hoverRed"
    >
      Masuk
    </Link>
  )
}

export default ButtonMasuk
