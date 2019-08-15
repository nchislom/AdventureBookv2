import React, { Component } from "react";
import API from "../../utils/API";


class Story extends Component {
  
    state = {
      data : [],
      dataIndex: 0
    }

  componentDidMount() {
    API.getFullStory().then(res => {
      this.setState({
        data: res.data
      },()=>console.log(this.state.data))
    })
  };

  // this.props = {
  //   id: story.id,
  //   crntScene: story.scene_title,
  //   text: story.scene_text,
  //   nxtScene: story.next_scene,
  //   crctChoice: story.correct_choice,
  //   choice_a: story.choice_a,
  //   choice_b: story.choice_b,
  //   wrongChoiceText: story.wrong_choice_result
  // }

  render() {
    let story = this.state.data[this.state.dataIndex];

    return (
      story ?
        <div className="story">
          <h4>{story.scene_text}</h4>
          <button>{story.choice_a}</button>
          <button>{story.choice_b}</button>
        </div>
        
        : <div></div>
    )
  }
}

export default Story;