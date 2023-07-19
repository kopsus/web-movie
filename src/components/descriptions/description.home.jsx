// library
import React from "react"

// assets
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"

import "./styles.css"

const Descriptions = ({
  descTitle,
  descText,
  descImg,
  descAlt,
  secDescTitle,
  secDescText,
  secDescImg,
  secDescAlt,
}) => {
  return (
    <>
      <div className="card-desc-home">
        <div className="desc-home ">
          <p className="title-desc-home">{descTitle}</p>
          <p className="text-[2.5vw] md:text-[1.7vw]">{descText}</p>
        </div>
        <div>
          <img src={descImg} alt={descAlt} />
        </div>
      </div>

      <div className="card-desc-home">
        <div>
          <img src={secDescImg} alt={secDescAlt} />
        </div>
        <div className="desc-home">
          <p className="title-desc-home">{secDescTitle}</p>
          <p className="text-[2.5vw] md:text-[1.7vw]">{secDescText}</p>
        </div>
      </div>
    </>
  )
}

const DescriptionHome = () => {
  return (
    <div className="parents-card-description-home grid grid-cols-1 divide-y bg-primaryBlue">
      <Descriptions
        descTitle="Nikmati di TV-mu"
        descText="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."
        descImg={img1}
        descAlt="img1"
        secDescImg={img2}
        secDescAlt="img2"
        secDescTitle="Nonton di mana pun"
        secDescText="Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu."
      />

      <Descriptions
        descTitle="Buat profil untuk anak"
        descText="Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu."
        descImg={img3}
        descAlt="img3"
        secDescImg={img4}
        secDescAlt="img4"
        secDescTitle="Download acara TV untuk menontonnya secara offline"
        secDescText="Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton."
      />
    </div>
  )
}

export default DescriptionHome
