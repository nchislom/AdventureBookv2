import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css";

var userFile = "";

class AdminFileInput extends Component {
    
    state = {
        selectedFile: "",
        loaded: 1
    };

    onChangeHandler = event => {
        // console.log(event.target.files[0]);
        // userFile = event.target.files[0];
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
    }

    //ref: https://stackoverflow.com/questions/43542820/upload-json-file-in-reactclient-side-and-send-it-to-nodeserver-side
    onClickHandler = event => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('firstFile', this.state.selectedFile);
        
        var file = this.state.selectedFile;
        
        var reader = new FileReader();

        // reader.onload = function(e) {
        //     formData.append('firstFile', reader.result)
        // }
        var storyjson;

        reader.onload = function(e) {
            var text = reader.result;
            console.log(text);
            storyjson = JSON.parse(text);
            console.log(storyjson.story);
        }

        reader.readAsText(file);
    }

	render() {
	  return (
        <form className="pure-form pure-form-stacked">
            <fieldset>
                <legend>New Game Upload</legend>
                <button id="upload-button" className="pure-button pure-button-primary" onClick={ this.onClickHandler }>Upload File</button>

                <input id="file-picker" type="file" name="file" onChange={this.onChangeHandler}/>
            </fieldset>
        </form>
	  )};
}

export default AdminFileInput;