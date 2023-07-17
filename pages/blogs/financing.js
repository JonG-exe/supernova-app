import {React} from 'react'
import MainImage from "../../public/images/financing-illustration.jpg"
import "../../styles/blog.css"
import BlogArticle from "../../components/BlogArticle"
import Text from "../../blogText/financing"


const LifeInsurance = () => {

  return (
    <>

      <BlogArticle 
        Text={Text}
        title={"Financing"}
        canonical={"/financing"}
        mainImage={{
          img: MainImage,
          alt: "about loans and investment financing at maritime"
        }}
      />

    </>
  )
}

export default LifeInsurance