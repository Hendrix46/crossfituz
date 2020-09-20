import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import './carousel.css';

class Carusel extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel autoPlay={true} transitionTime={1300} interval={3000} showThumbs={false} showStatus={false} swipeable={true} infiniteLoop={true} emulateTouch={true}>
                    <div className="item">
                        <img src={"https://wallpaperaccess.com/full/1245036.jpg"} />
                    </div>
                    <div className="item">
                        <img src={"https://besthqwallpapers.com/img/original/15034/bodybuilding-barbell-biceps-exercises-fitness.jpg"} />
                    </div>
                    <div className="item">
                        <img src={"https://wallpaperboat.com/wp-content/uploads/2019/06/workout-19.jpg"} />

                    </div>
                </Carousel>
            </div>
        );
    }
}

Carusel.propTypes = {};

export default Carusel;