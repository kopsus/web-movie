// library
import React, { useState } from "react"

// components
import CardEmail from "../cardEmail/emailLogin"

// assets
import Panah from "../../assets/panah.png"

const Questions = ({ Question, Answer }) => {
  const [dropDown, setDropDown] = useState(false)

  const handleChange = () => {
    setDropDown(!dropDown)
  }

  return (
    <div className="bg-primaryBlue px-5 md:px-10 py-4 rounded-lg z-10">
      <div className="flex justify-between items-center">
        <p className="text-[3vw] md:text-[2vw] lg:text-[1.5vw]">{Question}</p>
        <button
          onClick={handleChange}
          style={{
            rotate: dropDown ? "-180deg" : "0deg",
            transition: "500ms",
          }}
        >
          <img src={Panah} alt="panah" width={30} />
        </button>
      </div>

      <div
        style={{
          opacity: dropDown ? "1" : "0",
          transform: dropDown ? "translateY(0)" : "tranlateY(-20)",
          transition: "500ms",
        }}
      >
        {dropDown && (
          <div className="mt-5">
            <p className="text-[2.5vw] md:text-[1.5vw] lg:text-[1.3vw]">
              {Answer}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const Question = () => {
  return (
    <div className="text-primaryWhite w-[80%] mx-auto mt-40 flex flex-col gap-2 md:gap-1 lg:gap-3">
      <p className="text-[5vw] md:text-[2.5vw] font-semibold mb-3">
        Tanya Jawab Umum
      </p>
      <Questions
        Question="Apa itu SOKIN"
        Answer="Sokin adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet."
      />
      <Questions
        Question="Berapa biaya langganan Sokin ?"
        Answer="Tonton Sokin di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak."
      />
      <Questions
        Question="Dimana saya bisa menonton ?"
        Answer="Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di sokin.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Sokin, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game."
      />
      <Questions
        Question="Bagaimana cara membatalkannya ?"
        Answer="Sokin fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun."
      />
      <Questions
        Question="Apa yang bisa di tonton di Sokin ?"
        Answer="Sokin memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau."
      />
      <Questions
        Question="Apakah Sokin sesuai bagi anak ?"
        Answer="Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah. Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak."
      />

      <div className="mt-10 mb-20">
        <CardEmail />
      </div>
    </div>
  )
}

export default Question
