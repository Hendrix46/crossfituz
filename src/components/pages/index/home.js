import React, {Component} from 'react';
import Navbar from "./navbar/navbar";
import Carusel from "./carousel/carousel";
import Icontent from "./icontent/icontent";
import GetSubscription from "./getSubscription/getSubscription";
import Gallery from "./gallery/gallery";
import Testimonal from "./testimonals/testimonal";
import Footer from "./footer/footer";
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
    render() {

        return (
            <div>
                <Navbar/>
                <Carusel/>
                <Icontent/>
                <GetSubscription/>
                <Gallery/>
                <Testimonal/>
                <Footer/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;