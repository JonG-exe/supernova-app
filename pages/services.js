import React from 'react'
import Head from "next/head"
import Image from "next/image"
import "../styles/services.css"
import "../styles/left_Page_Breathe.css"

// Image Imports
import Menu from "../public/images/menu.png"
import AestheticVertical from "../public/images/page_asthetic_vertical.png"
import RepeatGrid from "../public/images/repeat_grid.png"
import HorizontalGrid from "../public/images/horizontal_grid.png"
import CarIcon from "../public/images/icons/new_icon-car.png"
import MedicalIcon from "../public/images/icons/new_icon-medical.png"
import HomeIcon from "../public/images/icons/new_icon-home.png"
import PersonIcon from "../public/images/icons/new_icon-person.png"
import Family from "../public/images/family.png"
import CircularHome from "../public/images/circular_home.png"
import Mercedes from "../public/images/Mercedes.png"
import Tree from "../public/images/tree.png"
import Pension from "../public/images/pension.png"
import HealthMain from "../public/images/health_main_img.png"


export default function Services () {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        
        {/* <div className="menu">
            <Image alt="" src={Menu} />
        </div> */}

        <section id="section_1">

            <div className="box box_1"></div>
            <div className="box box_2"></div>
            <div className="box box_3"></div>
            <div className="transparent_box"></div>

            <Image alt="" className="circle_grid_vertical" src={AestheticVertical}></Image>
            {/* <Image alt="" height={200} className="circle_grid_horizontal" src={HorizontalGrid}></Image> */}
            <Image alt="" className="circle_grid_horizontal" src={RepeatGrid}></Image>

    
            <div className="container">
                <div className="section-one section-main">
                    <div className="insurance_box">

                        <a href="#section_2" className="slide_btn">
                            <div className="insurance_btn btn_1">
                                <Image alt="" className="btn_image" src={CarIcon}/>
                                <h3>Home & Car</h3>                
                            </div>
                        </a >

                        <a href="#section_3" className="slide_btn">
                            <div className="insurance_btn btn_2">
                                <Image alt="" className="btn_image"src={MedicalIcon}/>
                                <h3>Life</h3>
                            </div>
                        </a >

                        {/* <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_3">
                                <Image alt="" className="btn_image"src={HomeIcon}/>
                                <h3>Home & Life</h3>
                            </div>
                        </a > */}

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_4">
                                <Image alt="" className="btn_image" src={PersonIcon}/>
                                <h3>Pension</h3>
                            </div>
                        </a >
                    </div>
                </div>

                <div className="section-two ">
                    <Image alt="" className="section-image family-image" src={Family}/>
                </div>

            </div>

        </section>


        <div id="section_2" className="wrapper" >
            <section>
                <div className="container container-reverse">
                    <div className="section-one">

                        <h2>Home & <br/> Car Insurance</h2>

                        <p>Owning your own home is a dream held by most. Live in your dream home by taking advantage of our 20+ years of experience to design the best option for you to make this dream come true.
                        </p>

                        <a className="get-quote" href="#">Read More</a>
                
                    </div>

                    <div className="section-two section-home ">
                        <Image alt="" className="home-image" src={CircularHome}/>
                        <Image alt="" className="car-image" src={Mercedes}/>
                        <Image alt="" className="tree tree-one" src={Tree}/>
                        <Image alt="" className="tree tree-two" src={Tree}/>
                    </div>
                </div>
            </section>
        </div>

        <div id="section_3" className="wrapper" >
            <section>
                <div className="container">
                    <div className="section-one ">
                        <h2>Life Insurance</h2>

                        <p>Life coverage designed to shield you from life{"'s"} mishaps. Be prepared to handle unfortunate setbacks by providing lumpsums if you are not here to take care of family or loved one{"'s"} needs. Show your loved ones they matter by purchasing whole life, term to 85 years, medical cover and critical illness funds (life threatening diseases). We will be here for you. Up to <b>2 M</b> on medical plans, <b>7M</b> on critical illness.
                        </p>
        
                        <a className="CTA get-quote" href="#">Read More</a>
                    </div>

                    <div className="section-two section-health">
                        <Image alt="" className="health-image" src={HealthMain}/>

                        <div className="rect_sec_3 blue_rect_sec_3"></div>
                        <div className="rect_sec_3 transparent_rect_sec_3"></div>
                    </div>
                </div>
            </section>
        </div>

        <div id="section_4" className="wrapper" >
            <section>
                <div className="container container-reverse">
                    <div className="section-one ">
                        <h2>Pension</h2>

                        <p>Most people retire without guaranteed pension benefits after working their entire lives and find themselves  deafeated by inflation, as the cost of living rises every year - shrining the purchasing power of the dollar.
                        </p>
        
                        <a className="CTA get-quote" href="#">Read More</a>
                    </div>

                    <div className="section-two section-health">
                        <Image alt="" className="health-image" src={Pension}/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
