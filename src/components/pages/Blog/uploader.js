import React, {useState} from "react";
import {storage} from "../../firebaseConfig";


export default function Uploader({ onComplete }) {
    const [image , setImage]= useState(null);
    const [progress , setProgress]= useState(0);
    const [error , setError]= useState("");


    const handleChange =e =>{
    const file = e.target.files[0];

    if (file){
        const fileType= file["type"];
        const validFileType= ["image/gif", "image/png", "image/jpg", "image/jpeg"];
        if (validFileType.includes(fileType)){
            setError("");
            setImage(file);
        }else setError("Siz rasm kiritmadingiz");
    }else {
        setError("Iltimos faylni tanlang");
    }
    };

    const handleUpload =()=>{

        if (image){
            const uploadTask =storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot =>{
                    const progress = Math.round(
                        (snapshot.bytesTransferred/snapshot.totalBytes)*100
                    );
                    setProgress(progress);
                },
                error =>{
                    setError(error);
                },
                () => {
                    // Success. Get the URL and call the prop onComplete
                    uploadTask.snapshot.ref.getDownloadURL().then(url => {
                        onComplete(url); // Call the callback provided as a prop
                    });
                }
            )

        }else setError("Xatolik Iltimos rasmni yuklang")
    };
    return(
        <div>
            <form >
                <div className="form-group" >
                    <input type="file" className="form-control" onChange={handleChange} />
                    <button type="button" className="btn btn-primary btn-block" onClick={handleUpload}>Upload</button>
                </div>
            </form >
            <div>
                {progress > 0 ? <progress style={{marginLeft: "15px"}} value={progress} max="100"/> :""}
            </div>
            <div style={{height : "100px", marginLeft: "15px", fontWeight: "600"}}>
                <p style={{color: "red"}}>{error}</p>
            </div>

        </div>
    )
}