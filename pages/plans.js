import Plan from "../components/Plan";
import PlanHome from "../components/PlanHome";

// Image Imports
import Family from "../public/images/family.png"
import Mercedes from "../public/images/Mercedes.png"
import HealthMain from "../public/images/health_main_img.png"
import Pension from "../public/images/pension.png"


export default function muiPolicies () {
    return (
        <>
            <PlanHome 
                img={Family}
            />

            <Plan 
                img={Mercedes} 
                title={"Home & Car Insurance"}
                description={"Owning your own home is a dream held by most. Live in your dream home by taking advantage of our 20+ years of experience to design the best option for you to make this dream come true."}
            />

            <Plan 
                img={HealthMain} 
                title={"Life & Critical Illness"}
                description={"Life coverage designed to shield you from life's mishaps. Be prepared to handle unfortunate setbacks by providing lumpsums if you are not here to take care of family or loved one's needs. Show your loved ones they matter by purchasing whole life, term to 85 years, medical cover and critical illness funds (life threatening diseases"}
            />

            <Plan 
                img={Pension} 
                title={"Pension"}
                description={"Most people retire without guaranteed pension benefits after working their entire lives and find themselves deafeated by inflation, as the cost of living rises every year - shrining the purchasing power of the dollar."}
            />
        </>
    )
}