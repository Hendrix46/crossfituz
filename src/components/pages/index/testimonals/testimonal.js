import React, {Component} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './testimonal.css';

class Testimonal extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 3
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };
        return (
            <div className="pb-5">
                <div className="text-center testimonal mt-5 pt-5 pb-5 mb-2"><h1>Testimonials</h1></div>
                <Carousel additionalTransfrom={0}
                          arrows={false}
                          autoPlay={true}
                          autoPlaySpeed={3000}
                          centerMode={false}
                          className=""
                          containerClass="container"
                          dotListClass=""
                          draggable
                          focusOnSelect={false}
                          infinite
                          itemClass=""
                          keyBoardControl
                          minimumTouchDrag={80}
                          renderButtonGroupOutside={false}
                          renderDotsOutside={false}
                          responsive={{
                              desktop: {
                                  breakpoint: {
                                      max: 3000,
                                      min: 1024
                                  },
                                  items: 1
                              },
                              mobile: {
                                  breakpoint: {
                                      max: 464,
                                      min: 0
                                  },
                                  items: 1
                              },
                              tablet: {
                                  breakpoint: {
                                      max: 1024,
                                      min: 464
                                  },
                                  items: 1
                              }
                          }}
                          sliderClass=""
                          slidesToSlide={1}
                          swipeable>

                    <div>
                        <div className=" text-center testimonaltxt"><p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ad
                            cupiditate fugiat illum maiores maxime nemo quos, soluta. Ad amet at dolorum, laborum,
                            minima modi natus, nihil placeat sed ut vel. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium aut deserunt dignissimos dolorem ducimus eaque eius eos ipsa,
                            ipsum itaque labore laudantium quisquam, quos rem, sequi sit veniam voluptate
                            voluptatum!</p>
                        </div>
                        <div className="testimonalimg">
                            <div><img src={require("../../../../images/test.jpg")} alt=""/></div>
                            <div>
                                <h6 className="mt-1">James Smith</h6>
                                <p>Crossfit Coach</p>
                            </div>

                        </div>
                    </div>


                </Carousel>
            </div>
        );
    }
}

Testimonal.propTypes = {};

export default Testimonal;