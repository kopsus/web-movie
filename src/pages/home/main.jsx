import React from "react"

// components
import HeaderHome from "../../components/header/header.home"
import DescriptionHome from "../../components/descriptions/description.home"
import Question from "../../components/sectionQuestions/questions"
import Footer from "../../components/footer"

const Main = () => {
  return (
    <div>
      <HeaderHome />
      <DescriptionHome />
      <Question />
      <Footer />
    </div>
  )
}

export default Main
