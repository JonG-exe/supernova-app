import React from 'react'
import Head from "next/head"
import "../styles/services.css"
import "../styles/left_Page_Breathe.css"


export default function Services () {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        
        <div className="menu">
            <Image width={150} height={200} src="images/menu.png" />
        </div>

        <section id="section_1">

            <div className="box box_1"></div>
            <div className="box box_2"></div>
            <div className="box box_3"></div>
            <div className="transparent_box"></div>

            <Image width={150} className="circle_grid_vertical" src="images/page_asthetic_vertical.png"></Image>
            {/* <Image height={200} className="circle_grid_horizontal" src="images/horizontal_grid.png"></Image> */}
            <Image width={150} height={200} className="circle_grid_horizontal" src="images/repeat_grid.png"></Image>

    
            <div className="container">
                <div className="section-one section-main">
                    <div className="insurance_box">

                        <a href="#section_2" className="slide_btn">
                            <div className="insurance_btn btn_1">
                                <Image width={150} height={200} className="btn_image" src="images/icons/new_icon-car.png"/>
                                <h3>Car Insurance</h3>                
                            </div>
                        </a >

                        <a href="#section_3" className="slide_btn">
                            <div className="insurance_btn btn_2">
                                <Image width={150} height={200} className="btn_image"src="images/icons/new_icon-medical.png"/>
                                <h3>Health</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_3">
                                <Image width={150} height={200} className="btn_image"src="images/icons/new_icon-home.png"/>
                                <h3>Home & Life</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_4">
                                <Image width={150} height={200} className="btn_image" src="images/icons/new_icon-person.png"/>
                                <h3>Pension</h3>
                            </div>
                        </a >
                    </div>
                </div>

                <div className="section-two ">
                    <Image width={150} height={200} className="section-image family-image" src="images/family.png"/>
                </div>

            </div>

        </section>


        <div id="section_2" className="wrapper" >
            <section>
                <div className="container container-reverse">
                    <div className="section-one">

                        <h2>Home & <br/> Car Insurance</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>

                        <a className="get-quote" href="#">Get A Quote</a>
                
                    </div>

                    <div className="section-two section-home ">
                        <Image width={150} height={200} className="home-image" src="images/circular_home.png"/>
                        <Image width={150} height={200} className="car-image" src="images/mercedes.png"/>
                        <Image width={150} height={200} className="tree tree-one" src="images/tree.png"/>
                        <Image width={150} height={200} className="tree tree-two" src="images/tree.png"/>
                    </div>
                </div>
            </section>
        </div>

        <div id="section_3" className="wrapper" >
            <section>
                <div className="container">
                    <div className="section-one ">
                        <h2>Health <br/> Insurance</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>
        
                        <a className="CTA get-quote" href="#">Get A Quote</a>
                    </div>

                    <div className="section-two section-health">
                        <Image width={150} height={200} className="health-image" src="images/health_main_Image.png"/>

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

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>
        
                        <a className="CTA get-quote" href="#">Get A Quote</a>
                    </div>

                    <div className="section-two section-health">
                        <Image width={150} height={200} className="health-image" src="images/pension.png"/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
