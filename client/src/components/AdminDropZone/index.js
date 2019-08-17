import React, { Component, useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import AdminUploadButton from "../AdminUploadButton";
 
// Container for holding uploaded file contents
class AdminDropZone extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <span key={file.name}>
        {file.name} - {file.size} bytes
      </span>
    ));

    return (
      <Dropzone onDrop = {this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps({ multiple: false })} />
              <p className="dropzone-text">Drag and drop a file here, or click to select a file</p>
            </div>
            <aside>
              File selected: <br/> { files }
            </aside>
            <AdminUploadButton selectedFile={ this.state.files[0] }/>
          </section>
        )}
      </Dropzone>
    );
  }
}
// function AdminDropZone() {

//   const onDrop = useCallback(acceptedFiles => {
//     const reader = new FileReader();
   
//       reader.onabort = () => console.log('file reading was aborted');
//       reader.onerror = () => console.log('file reading has failed');
//       reader.onload = () => {
//         const binaryStr = reader.result;
//         // console.log(binaryStr);
//         jsonData = JSON.parse(binaryStr);
//       }
   
//       acceptedFiles.forEach(file => reader.readAsBinaryString(file));
//   }, []);
  
//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
   
//   return (
//     <div id="ugly-hack-need-to-fix">
//       <div {...getRootProps()} id="dropzone">
//         <input {...getInputProps({ multiple: false })} id="drop-input" />
//         {
//           isDragActive ?
//             <p>Drop new game file here ...</p> :
//             <p>Drag 'n' drop game file here, or click to select file</p>
//         }
        
//       </div>
//       <button id="upload-button" className="pure-button pure-button-primary" onClick={ API.uploadStory(jsonData) }>Upload File</button>
//     </div>
//   )
// }

export default AdminDropZone;