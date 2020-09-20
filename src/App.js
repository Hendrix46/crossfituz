import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import Home from "./components/pages/index/home";
import AboutUs from "./components/pages/about/aboutus";
import {Route, Switch} from 'react-router-dom'
import Blog from "./components/pages/Blog/blog";
import EditorBlog from "./components/pages/Blog/editor";
import Uploader from "./components/pages/Blog/uploader";
import News from "./components/pages/News/news";


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path='/blog' component={Blog} />
                <Route path='/editor' component={EditorBlog} />
                <Route path="/uploader" component={Uploader}/>
                <Route path="/news" component={News}/>
            </Switch>
        </div>
    );
};


export default App;