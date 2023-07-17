import Plan from "../components/Plan";
import PlanHome from "../components/PlanHome";
import Head from "next/head"

// Image Imports
import Family from "../public/images/family.png"
import Mercedes from "../public/images/Mercedes.png"
import HealthMain from "../public/images/health_main_img.png"
import Pension from "../public/images/pension.png"
import InvestmentsIcon from "../public/images/icons/investments-icon.png"
import LifeCriticalIllnessIcon from "../public/images/icons/life-and-critical-illness-icon.png"



export default function muiPolicies () {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="" />
                <title>Financial Plans | Supernova Financial Solutions</title>
                <link rel="canonical" href="https://www.supernova-financial.com/plans/" />
            </Head>
            
            <PlanHome 
                img={Family}
            />

            {/* <Plan 
                id="home-and-auto"
                img={Mercedes} 
                title={"Home & Auto Insurance"}
                description={"Owning your own home is a dream held by most. Live in your dream home by taking advantage of our 20+ years of experience to design the best option for you to make this dream come true."}
                moreInfo={"/blogs/"}
            /> */}

            <Plan 
                id="life-and-critical-illness"
                img={HealthMain} 
                title={"Life & Critical Illness"}
                description={"Life coverage designed to shield you from life's mishaps. Be prepared to handle unfortunate setbacks by providing lumpsums if you are not here to take care of family or loved one's needs. Show your loved ones they matter by purchasing whole life, term to 85 years, medical cover and critical illness funds (life threatening diseases"}
                moreInfo={"/blogs/life-and-critical-illness"}
            />

            <Plan 
                id="major-medical"
                img={LifeCriticalIllnessIcon} 
                title={"Major Medical Insurance"}
                description={"Want to enjoy preferred health care at private 24-hour medical hospitals and don’t want to pay-out-of pocket or can’t afford to? Then owning AdMed’s unique package will be right for you."}
                moreInfo={"/blogs/major-medical-insurance"}
            />

            <Plan 
                id="pension"
                img={Pension} 
                title={"Pension"}
                description={"Most people retire without guaranteed pension benefits after working their entire lives and find themselves deafeated by inflation, as the cost of living rises every year - shrining the purchasing power of the dollar."}
                moreInfo={"/blogs/pension"}
            />

            <Plan 
                id="financing"
                img={InvestmentsIcon} 
                title={"Financing"}
                description={"The secret to expanding the ‘borders of your habitation’, living a bigger, fuller life is your ability to access the tools to achieve your objectives. Access to credit allows you to capitalize or take advantage of..."}
                moreInfo={"/blogs/triflex-life-insurance-investment"}
            />

            {/* <Plan 
                id="loans"
                img={Pension} 
                title={"Loans"}
                description={"FinancingThe secret to expanding the ‘borders of your habitation’, living a bigger, fuller life in yourability to access the tools to achieve your objectives. Access to credit allows you to capitalize or take advantage of..."}
                moreInfo={"/blogs/"}
            />

            <Plan 
                id="investments"
                img={Pension} 
                title={"Investments"}
                description={""}
                moreInfo={"/blogs/"}
            /> */}
        </>
    )
}