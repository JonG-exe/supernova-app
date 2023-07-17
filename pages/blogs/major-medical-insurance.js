import React from 'react'
import MainImage from "../../public/images/major-medical-hero.jpg"
import BlogArticle from "../../components/BlogArticle"
import Text from "../../blogText/major-medical"

const LifeInsurance = () => {
  return (
    <>

      <BlogArticle 
        Text={Text}
        title={"Understanding Life & Critical Illness"}
        canonical={"/major-medical-insurance"}
        description={""}
        mainImage={{
          img: MainImage,
          alt: "prescription at doctor's office"
        }}
      />

    </>
  )
}

export default LifeInsurance