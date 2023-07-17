import {React} from 'react'
import MainImage from "../../public/images/what-is-life-insurance.jpg"
import "../../styles/blog.css"
import BlogArticle from "../../components/BlogArticle"
import Text from "../../blogText/life-and-critical-illness"

const LifeInsurance = () => {

  return (
    <>

      <BlogArticle 
        Text={Text}
        title={"Understanding Life & Critical Illness"}
        canonical={"/life-and-critical-illness"}
        description={""}
        mainImage={{
          img: MainImage,
          alt: "what is life insurance"
        }}
      />

    </>
  )
}

export default LifeInsurance