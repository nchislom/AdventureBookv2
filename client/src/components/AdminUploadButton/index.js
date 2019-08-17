import React, { Component } from 'react';
import "./style.css";

class AdminUploadButton extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = event => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('firstFile', this.props.selectedFile);
        
        var file = this.props.selectedFile;
        var reader = new FileReader();
        var storyjson;

        reader.onload = function(e) {
            var text = reader.result;
            storyjson = JSON.parse(text);
            console.log(storyjson);
            fetch("/api/seed/12345", {
                method: 'POST',
                body: text,
                headers:{
                  'Content-Type': 'application/json'
                }
              }).then(res => res.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
              .catch(error => console.error('Error:', error));        }

        reader.readAsText(file);
    }

    render() {
        return (
            this.props.selectedFile ?
            // If selected file prop is not set, a disabled button will display
            <button
                id="upload-button" 
                className="pure-button button-error"
                onClick={ this.onClickHandler }>
                Upload File to Database<br/>
                <small>Please refer to documentation before using!</small>
            </button>
            :
            <button
                id="upload-button" 
                className="pure-button">
                Upload File to Database
            </button>
    )};
};

export default AdminUploadButton;