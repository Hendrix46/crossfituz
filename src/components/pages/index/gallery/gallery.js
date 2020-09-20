import React, {Component} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './gallery.css';

class Gallery extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return (
            <div className="gallery justify-content-around">
                <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                transitionDuration={1500}>
                   <div>
                       <div className="portfolio d-flex">
                           <div className="portslide mr-2">
                               <div className="porthover">
                                   <img src={require("../../../../images/portfolio_1.jpg")} alt=""/>
                                   <a href="#"></a>
                                   <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                       <div className="text-center">
                                           <div className="ml-auto mr-auto"><img src={require("../../../../images/more.png")} alt=""/></div>
                                           <div>View more</div>
                                       </div>
                                   </div></div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className="portfolio d-flex">
                           <div className="portslide mr-2">
                               <div className="porthover">
                                   <img src={require("../../../../images/portfolio_2.jpg")} alt=""/>
                                   <a href="#"></a>
                                   <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                       <div className="text-center">
                                           <div className="ml-auto mr-auto"><img src={require("../../../../images/more.png")} alt=""/></div>
                                           <div>View more</div>
                                       </div>
                                   </div></div>
                           </div>
                       </div>
                   </div>
                    <div>
                        <div className="portfolio d-flex">
                            <div className="portslide mr-2">
                                <div className="porthover">
                                    <img src={require("../../../../images/portfolio_3.jpg")} alt=""/>
                                    <a href="#"></a>
                                    <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="ml-auto mr-auto"><img src={require("../../../../images/more.png")} alt=""/></div>
                                            <div>View more</div>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="portfolio d-flex">
                            <div className="portslide mr-2">
                                <div className="porthover">
                                    <img src={require("../../../../images/portfolio_4.jpg")} alt=""/>
                                    <a href="#"></a>
                                    <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="ml-auto mr-auto"><img src={require("../../../../images/more.png")} alt=""/></div>
                                            <div>View more</div>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div>
        );
    }
}

Gallery.propTypes = {};

export default Gallery;