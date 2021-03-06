import React, { useState, useEffect} from "react";
import Navbar from "../index/navbar/navbar";
import {NavLink} from "react-router-dom";
import firebase from "firebase";
import Uploader from "./uploader";

function EditorBlog() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [url , setUrl]= useState(null);
    const [items, setItems] = useState([]);

    const handleCompletedUpload = (url) => {
        setUrl(url);
    };

    const onSubmit = (data) => {
        data.preventDefault();
        setItems([...items, {title, text, category , url} ]);
        firebase
            .firestore()
            .collection('blogContent')
            .add({
                title,
                category,
                text,
                url
            })
            .then(()=>{
                setTitle('');
                setCategory('');
                setText('');
                setUrl('');
            });
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={onSubmit} className="col-md-6 mx-auto mt-5">
                <div className="form-group">
                    <label htmlFor="Title">Blog Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="Title"
                        placeholder="Arnold Schwarzneiger"
                    />
                </div>
                <div>
                    <Uploader onComplete={handleCompletedUpload} />
                    <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="650" />
                </div>
                <div className="form-group">
                    <label htmlFor="categorySelect">Select Category</label>
                    <select className="form-control" value={category} onChange={e => setCategory(e.target.value)} name="category" id="categorySelect">
                        <option>Nutrition</option>
                        <option>Fitness</option>
                        <option>Recipes</option>
                        <option>Succesfull Stories</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="blogText">Blog Text</label>
                    <textarea
                        className="form-control"
                        name="text"
                        id="blogText"
                        rows="3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary offset-5"
                    onClick={onSubmit}
                >
                    Save
                </button>
            </form>

            <div className="mt-5">
                {
                    items.map((item, index) => (
                        <div className="row bg-dark mx-auto ">
                        <NavLink key={item.id} className="col-md-6 blogs_content mx-auto mt-5 " to="/blog#7">
                            <div className="mblog_imgtop "><p>Beginner</p></div>
                            <img className="img-fluid editor_img " src={item.url} alt=""/>
                            <div className="col-md-12 rblog_txt text-center mx-auto">
                                <h6 className="mblog_category mx-auto m-4">{item.category}</h6>
                                <h2 className="blogs_title col-md-10 mx-auto">{item.title}</h2>
                                <div className="mt-5 mblog_innertxt col-md-11 mx-auto">{item.text}</div>
                                <div className="readm mt-5"><i>READ MORE</i></div>
                            </div>

                        </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default EditorBlog;
