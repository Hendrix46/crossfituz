import React, {Component} from 'react';
import Navbar from "../index/navbar/navbar";
import './about.css';
import Footer from "../index/footer/footer";


class AboutUs extends Component {
    render() {
        return (
            <div>
               <Navbar/>
               <div className="container-fluid abt">
                   <div className="row">
                       <img className="img-fluid abtimg" src={require("../../../images/about.jpg")} alt=""/>
                   </div>
                   <div className="row  mx-auto">


                       <div className="col-lg-7 mt-5">
                           <div className="intro_content ml-5">
                               <div className="section-title ml-3"><h1>About Crossfit <span>X</span></h1></div>
                               <div className="intro-text col-md-11  mt-4">
                                   <p>Pellentesque commodo finibus molestie. Aenean pulvinar condimentum consectetur.
                                       Aenean pulvinar condimentum consectetur. Sed sed arcu a elit egestas imperdiet
                                       nec ac sapien. Nunc ac fringilla sem. Orci varius natoque penatibus et magnis dis
                                       parturient montes, nascetur ridiculus mus. Nam quis maximus quam. Phasellus
                                       interdum pulvinar tellus non tincidunt. Nunc sit amet aliquet nisl, consequat
                                       laoreet sem.</p>
                               </div>
                             <a type="button" className="get-started pb-5 mt-5 ml-3" href="#">Get Started</a>
                           </div>
                       </div>
                       <div className="col-lg-5">
                           <div className="intro_image mt-5 pt-2">
                               <img src={require("../../../images/about_intro.jpg")} alt=""/>
                           </div>
                       </div>

                   </div>
                   <div className=" row faq ">
                       <div className="container">
                           <div className="row">
                               <div className="col">
                                   <div className="faqtitle"><h1>Faq</h1></div>
                               </div>
                           </div>
                           <div className="row faq_row">
                               <div className="col-lg-6">


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_1.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Nam quis maximus quam. Phasellus interdum pulvinar tellus non
                                                   tincidunt. Nunc sit amet aliquet nisl, consequat laoreet sem.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_3.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p> Maecenas sit amet urna nisi. Vestibulum eu feugiat sem, ut ultricies
                                                   erat. Nam sit amet turpis consequat, cursus leo pretium.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_5.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Amet urna nisi. Vestibulum eu feugiat sem, ut ultricies erat. Nam sit
                                                   amet turpis consequat, cursus leo pretium, pulvinar ipsum.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_7.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Nam quis maximus quam. Phasellus interdum pulvinar tellus non
                                                   tincidunt. Nunc sit amet aliquet nisl, consequat laoreet sem.</p>
                                           </div>
                                       </div>
                                   </div>

                               </div>
                               <div className="col-lg-6">


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_2.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Nam quis maximus quam. Phasellus interdum pulvinar tellus non
                                                   tincidunt. Nunc sit amet aliquet nisl, consequat laoreet sem.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_4.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p> Maecenas sit amet urna nisi. Vestibulum eu feugiat sem, ut ultricies
                                                   erat. Nam sit amet turpis consequat, cursus leo pretium.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_6.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Amet urna nisi. Vestibulum eu feugiat sem, ut ultricies erat. Nam sit
                                                   amet turpis consequat, cursus leo pretium, pulvinar ipsum.</p>
                                           </div>
                                       </div>
                                   </div>


                                   <div className="faq_item d-flex flex-row align-items-start justify-content-start">
                                       <div
                                           className="faq_icon d-flex flex-column align-items-center justify-content-center">
                                           <div><img src={require("../../../images/icon_8.svg")} alt=""/></div>
                                       </div>
                                       <div className="faq_item_content">
                                           <div className="faq_title">Can I change my plan?</div>
                                           <div className="faq_text">
                                               <p>Nam quis maximus quam. Phasellus interdum pulvinar tellus non
                                                   tincidunt. Nunc sit amet aliquet nisl, consequat laoreet sem.</p>
                                           </div>
                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="sub container_reset">
                       <div className="container">
                           <div className="row row-eq-height">


                               <div className="col-md-6 order-lg-1 order-2">
                                   <div className="sub_image">
                                       <img className="img-fluid" src={require("../../../images/sub_1.png")} alt=""/>
                                   </div>
                               </div>

                               <div className="col-md-6 order-lg-2 order-1">
                                   <div className="sub_content">
                                       <div className="section_title"><h1>Subscribe now!</h1></div>
                                       <div className="sub_text">
                                           <p>Pellentesque commodo finibus molestie. Aenean pulvinar condimentum
                                               consectetur. Aenean pulvinar condimentum consectetur. Sed sed arcu a elit
                                               egestas imperdiet nec ac sapien. Nunc ac fringilla sem. Orci varius
                                               natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                               mus. Nam quis maximus quam. Phasellus interdum pulvinar tellus non
                                               tincidunt. Nunc sit amet aliquet nisl, consequat laoreet sem.</p>
                                       </div>
                                       <a type="button" className="get-started sub_button" href="#">Choose the plan that fits you
                                           best</a>
                                   </div>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
               <Footer/>
            </div>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;