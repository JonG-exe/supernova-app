import React from 'react'
import BlogArticle from "../../components/BlogArticle"
import Text from "../../blogText/triflex"
import MainImage from "../../public/images/financing-hero.jpg"

const LifeInsurance = () => {
  return (
    <>

      <BlogArticle 
        Text={Text}
        title={"Triflex - Life Insurance Investment"}
        canonical={"/triflex-life-insurance-investment"}
        description={""}
        mainImage={{
          img: MainImage,
          alt: "triflex life insurance investment"
        }}
      />

    </>
  )
}

export default LifeInsurance