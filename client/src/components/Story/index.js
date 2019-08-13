import React, { Component } from "react";
import API from "../../utils/API";


class Story extends Component {

  state = {
    data : []
  }

  componentDidMount() {
    API.getFullStory().then(res => {
      this.setState({
        data: res.data
      },()=>console.log(this.state.data))
    })
  }

  render() {
    return (
      <div className="Story">
        {this.state.data ? this.state.data.map(story => (
          <h4>{story.scene_text}</h4>
        
        )) : <p>No Data :(</p>
        }
        
        
      </div>
    );
  }
}

export default Story;