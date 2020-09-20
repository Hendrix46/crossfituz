import React, {useState, useEffect} from 'react';
import Navbar from "../index/navbar/navbar";
import './blog.css';
import {NavLink} from "react-router-dom";
import Footer from "../index/footer/footer";
import blogData from "../../data/blogData";
import firebase from "firebase";

function UseDatas(){
    const [datas, setDatas]=useState([]);
    useEffect(()=>{
        firebase
            .firestore()
            .collection("blogContent")
            .onSnapshot((snapshot)=> {
                const newData = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
               setDatas(newData);

            })
    }, []);

    return datas;
}
function Queries() {
    let db=firebase.firestore();
    var first = db.collection("blogContent")
        .orderBy("title")
        .limit(25);

    return first.get().then(function (documentSnapshots) {
        // Get the last visible document
        var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        console.log("last", lastVisible);

        // Construct a new query starting at this document,
        // get the next 25 cities.
        var next = db.collection("blogContent")
            .orderBy("title")
            .startAfter(lastVisible)
            .limit(25);
        console.log(next);
    });


}

export  default  function Blog() {

        const queries=Queries();

        const datas=UseDatas();

        const  newData = datas.map( ( blogData) =>{
                return  (
                    <div key={blogData.id} className="col-md-5  mt-5 mr-5" >
                        <div>
                            <div className="mblog_imgtop"><p>Beginner</p></div>
                            <img className="img-fluid rblog_img" src={blogData.url} alt=""/>
                            <div className="col-md-12 rblog_txt text-center mx-auto">
                                <h6 className="mblog_category mx-auto m-4">{blogData.category}</h6>
                                <h2 className="mblog_title col-md-10 mx-auto">{blogData.title}</h2>
                                <div className="mt-5 mblog_innertxt col-md-11 mx-auto">{blogData.text}</div>
                                <div className="readm mt-5"><i>READ MORE</i></div>
                            </div>
                        </div>
                    </div>
                )
            }
        );

        const  blogGroup = blogData.map( ( blogData) =>{
                return  (
                    <NavLink className="col-md-3 blogs_content ml-3 mr-5 mt-5 " to={blogData.url}>
                        <div className="mblog_imgtop "><p>Beginner</p></div>
                        <img className="img-fluid blogs_img " src={require("../../../images/portfolio_1.jpg")} alt=""/>
                        <div className="col-md-12 rblog_txt text-center mx-auto">
                            <h6 className="mblog_category mx-auto m-4">{blogData.category}</h6>
                            <h2 className="blogs_title col-md-10 mx-auto">{blogData.title}</h2>
                            <div className="mt-5 mblog_innertxt col-md-11 mx-auto">{blogData.text}</div>
                            <div className="readm mt-5"><i>READ MORE</i></div>
                        </div>
                    </NavLink>
                )
            }
        );

        const lastBlogElement= ()=>{
         let elem= blogData[blogData.length-1];
         return(
             <NavLink to={elem.url}>
                 <div className="mt-5 mx-auto">
                     <div className="mblog_imgtop offset-5"><p>All Levels</p></div>
                     <img className="mblog_img img-fluid" src={require("../../../images/arnold.jpg")}
                          alt=""/>
                     <div className="col-md-10 mblog_txt text-center mx-auto">
                         <h6 className="mblog_category mx-auto m-4">{elem.category}</h6>
                         <h2 className="mblog_title col-md-10 mx-auto">{elem.title}</h2>
                         <div className="mt-5 mblog_innertxt col-md-11 mx-auto">{elem.text}</div>
                         <div className="readm mt-5"><i>READ MORE</i></div>
                     </div>
                 </div>
             </NavLink>
         )
        };

        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h1 className="providing mt-5">PROVIDING SOLUTIONS FOR FITNESS
                                AND NUTRITION QUESTIONS</h1>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto ">
                            <NavLink to="/editor">
                                <button className=" col-md-8 offset-2 btn btn-success">Add New Blog</button>
                            </NavLink>
                        </div>
                        <div className="col-md-9 simplify mx-auto ">
                            <div>
                                <h1>How We Simplify Fitness and Nutrition</h1>
                            </div>
                            <div className="d-flex">
                                <div className="col-md-4 mt-5 text-center">
                                    <i><b>01</b></i>
                                    <div className="simplify_img">
                                        <img className="img-fluid" src={require("../../../images/simplify1.png")}
                                             alt=""/>
                                    </div>
                                    <div>
                                        <p className="mt-3">Born Fitness interviews the world's best experts in fitness
                                            and nutrition.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-5 text-center">
                                    <i><b>02</b></i>
                                    <div className="simplify_img">
                                        <img className="img-fluid" src={require("../../../images/simplify2.png")}
                                             alt=""/>
                                    </div>
                                    <div>
                                        <p className="mt-3">We then simplify the information into suggestions and
                                            solutions for you.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-5 text-center">
                                    <i><b>03</b></i>
                                    <div className="simplify_img">
                                        <img className="img-fluid" src={require("../../../images/simplify3.png")}
                                             alt=""/>
                                    </div>
                                    <div>
                                        <p className="mt-3">Type a keyword or question in any search box and your answer
                                            is waiting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mblog mt-5">
                        <div className="col-md-10 offset-1 ">
                            {lastBlogElement()}
                        </div>
                    </div>
                    <div className="row justify-content-center rblog mx-auto">
                        {newData}
                    </div>
                    <div className="row blog_gallery mt-5 mx-auto">
                        <div className="col-md-10 mx-auto d-flex">
                            <NavLink to="/blog/fitness">
                                <div className="mr-4 blog_category">
                                    <div className="blog_overlay"></div>
                                    <p className="category_title">Fitness</p>
                                    <img src={require("../../../images/category-bg-1.jpg")} alt=""/>
                                </div>
                            </NavLink>
                            <NavLink to="/blog/nutrition">
                                <div className="mr-4 blog_category">
                                    <div className="blog_overlay"></div>
                                    <p className="category_title">Nutrition</p>
                                    <img src={require("../../../images/category-bg-2.jpg")} alt=""/>
                                </div>
                            </NavLink>
                            <NavLink to="/blog/recipes">
                                <div className="mr-4 blog_category">
                                    <div className="blog_overlay"></div>
                                    <p className="category_title">Recipes</p>
                                    <img src={require("../../../images/category-bg-3.jpg")} alt=""/>
                                </div>
                            </NavLink>
                            <NavLink to="/blog/stories">
                                <div className="mr-4 blog_category">
                                    <div className="blog_overlay"></div>
                                    <p className="category_title">Success Stories</p>
                                    <img src={require("../../../images/category-bg-4.jpg")} alt=""/>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row justify-content-center blogs ">
                        {blogGroup}
                    </div>
                </div>
                <Footer/>
            </div>
        );
}


