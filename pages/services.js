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
            <img src="images/menu.png" />
        </div>

        <section id="section_1">

            <div className="box box_1"></div>
            <div className="box box_2"></div>
            <div className="box box_3"></div>
            <div className="transparent_box"></div>

            <img className="circle_grid_vertical" src="images/page_asthetic_vertical.png"></img>
            {/* <img className="circle_grid_horizontal" src="images/horizontal_grid.png"></img> */}
            <img className="circle_grid_horizontal" src="images/repeat_grid.png"></img>

    
            <div className="container">
                <div className="section-one section-main">
                    <div className="insurance_box">

                        <a href="#section_2" className="slide_btn">
                            <div className="insurance_btn btn_1">
                                <img className="btn_image" src="images/icons/new_icon-car.png"/>
                                <h3>Car Insurance</h3>                
                            </div>
                        </a >

                        <a href="#section_3" className="slide_btn">
                            <div className="insurance_btn btn_2">
                                <img className="btn_image"src="images/icons/new_icon-medical.png"/>
                                <h3>Health</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_3">
                                <img className="btn_image"src="images/icons/new_icon-home.png"/>
                                <h3>Home & Life</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_4">
                                <img className="btn_image" src="images/icons/new_icon-person.png"/>
                                <h3>Pension</h3>
                            </div>
                        </a >
                    </div>
                </div>

                <div className="section-two ">
                    <img className="section-image family-image" src="images/family.png"/>
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
                        <img className="home-image" src="images/circular_home.png"/>
                        <img className="car-image" src="images/mercedes.png"/>
                        <img className="tree tree-one" src="images/tree.png"/>
                        <img className="tree tree-two" src="images/tree.png"/>
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
                        <img className="health-image" src="images/health_main_img.png"/>

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
                        <img className="health-image" src="images/pension.png"/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
