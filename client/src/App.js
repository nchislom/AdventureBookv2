import React, { Component } from "react";
import API from "./utils/API";
import Register from "./components/Register"
import Story from "./components/Story"


class App extends Component {

  state = {
    data: [],
    dataIndex: 0

  };

  componentDidMount() {
    API.getFullStory().then(res => {
      this.setState({
        data: res.data
      },()=>console.log(this.state.data))
    })
  };

  // function to add to the index to progress through story
  // if user choose button w/ key/id of correct choice, render next part of story

  render() {
    let story = this.state.data[this.state.dataIndex]

    return (
      story
      ? <div className="App">
        <Register />
        
        
          <Story
            // props here
            // function for story flow?
            id={story.id}
            crntScene={story.scene_title}
            text={story.scene_text}
            nxtScene={story.next_scene}
            crctChoice={story.correct_choice}
            choice_a={story.choice_a}
            choice_b={story.choice_b}
            wrongChoiceText={story.wrong_choice_result}
          />
                
      </div>
      : <div />
    );
  }
}

export default App;
