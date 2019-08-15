import React, { Component } from 'react';
import "./style.css";

class AdminFileInput extends Component {
    
    onChangeHandler = event => {
        console.log(event.target.files[0]);
    }

	render() {
	  return (
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <legend>New Game Upload</legend>
                <button id="upload-button" className="pure-button pure-button-primary">Upload File</button>

                <input id="file-picker" type="file" name="file" onChange={this.onChangeHandler}/>
            </fieldset>
        </form>
	  )};
}

export default AdminFileInput;