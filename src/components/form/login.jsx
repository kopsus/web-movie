// library
import React from "react"
import { Link } from "react-router-dom"

// icons
import { FcGoogle } from "react-icons/fc"

// assets
import BackDropLogin from "../../assets/backdropLogin.png"
import Footer from "../footer"

// css
import "./styles.css"

const Login = () => {
  return (
    <div className="">
      <div className="px-16 py-5">
        <Link to="/" className="title">
          Sokin
        </Link>
      </div>

      <div
        style={{
          backgroundImage: `url(${BackDropLogin})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="parents-card-login">
          <div className="flex flex-col gap-5">
            <p className="text-[6vw] md:text-[3vw] lg:text-[2vw] font-semibold">
              Sign In
            </p>
            <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw]">
              Sign in to start watching
            </p>
            <button className="flex items-center gap-5 bg-secondBrown p-3 rounded-lg">
              <FcGoogle size={30} />
              <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1.3vw] text-primaryBgBlack">
                Sign In With Google
              </p>
            </button>
          </div>
          <p className="text-center my-5">or</p>

          <form className=" flex flex-col gap-7 text-primaryBgBlack">
            <div className="flex flex-col gap-3 ">
              <input
                type="text"
                placeholder="Email atau nomor telephone"
                className="input-login text-[3.5vw] md:text-[2.5vw] lg:text-[1.3vw]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-login text-[3.5vw] md:text-[2.5vw] lg:text-[1.3vw]"
                required
              />
            </div>
            <Link
              to="/movies"
              type="submit"
              className="bg-primaryRed hover:bg-red-700 text-primaryWhite py-2 rounded-lg text-center md:text-[2.8vw] lg:text-[1.5vw]"
            >
              Submit
            </Link>
          </form>

          <div className="text-[4vw] md:text-[2.5vw] lg:text-[1.3vw] my-7">
            <p>
              Baru di sokin?{" "}
              <Link className="font-semibold">Daftar Sekarang</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default Login
