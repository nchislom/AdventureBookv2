import React, { Component } from "react";
// import API from "../../utils/API";


// class Story extends Component {

//   // state = {
//   //   data : []
//   // }

//   // componentDidMount() {
//   //   API.getFullStory().then(res => {
//   //     this.setState({
//   //       data: res.data
//   //     },()=>console.log(this.state.data))
//   //   })
//   // }

//   render() {
//     return (
//       <div className="Story">
//         {this.state.data ? this.state.data.map(story => (
//           <div>
//             <h4>{story.scene_text}</h4>
//             <button>{story.choice_a}</button>
//             <button>{story.choice_b}</button>
//           </div>
//         )) : <p>No Data :(</p>
//         }


//       </div>
//     );
//   }
// }

function Story(props) {
  return (
    <div className="story">

      <h4>{props.text}</h4>
      <button>{props.choice_a}</button>
      <button>{props.choice_b}</button>

    </div>
  );
}

export default Story;