import React, { Component } from "react";
import { storage } from "../config/firebase";

class ImageUpload extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: ""
        };
        this.handleChange = this
          .handleChange
          .bind(this); 
    }

handleChange = e => {
    // if there is a file selected
    if(e.target.files[0]) {
        // write the file to the state
        const image = e.target.files[0];
        this.setState(() => ({image}));
        //upload the file to firebase
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on("state_changed", 
        (snapshot) => {
            // progress function here
        },
        (error) => {
            // error function here
            console.log(error);
        },
        (complete) => {
            // complete function here:
            // once completed, output the image URL from firebase storage to the
            // console and the parent component using the callback function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.props.callbackFromParent(url);
            })
        });
    }
}


    render () {
        return (
            <div>
                <input  className="form-group mx-sm-3 mb-2"
                type = "file" 
                onChange={this.handleChange} />
                <br/>
            </div>
        )
    }
}

export default ImageUpload;