import React from "react"

import ButtonMasuk from "../buttonMasuk"

const CardEmail = () => {
  return (
    <div className="parents-card-email">
      <p className="text-[3vw] lg:text-[1.5vw] md:text-[1.7vw]">
        Siap menonton? Masukkan email untuk membuat atau memulai lagi
        keanggotaanmu.
      </p>
      <form className="mt-7 md:mt-3">
        <div className="form-control md:flex md:flex-row gap-4 md:gap-7">
          <input
            type="text"
            placeholder="Masukan Email"
            className="w-full md:w-[50%] rounded-lg px-3 py-2 lg:py-2 input-bordered outline-none text-black text-[3vw] md:text-[1.7vw] lg:text-[1.2vw]"
          />
          <ButtonMasuk />
        </div>
      </form>
    </div>
  )
}

export default CardEmail
