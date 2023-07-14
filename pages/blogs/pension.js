import React from 'react'
import MainImage from "../../public/images/retirement-on-the-beach.jpg"
import BlogArticle from "../../components/BlogArticle"
import Text from "../../blogText/pension"

const LifeInsurance = () => {
  return (
    <>

      <BlogArticle 
        Text={Text}
        title={"Understanding Life & Critical Illness"}
        canonical={"/pension"}
        mainImage={{
          img: MainImage,
          alt: "retirement on the beach"
        }}
      />

    </>
  )
}

export default LifeInsurance