import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import Card from 'react-bootstrap/Card';

class App extends Component {

  state = {
    data: []
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
      <div className="App">
        {this.state.data ? this.state.data.map(book => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                {book.scene_text}
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        )) : <p>No data!</p>}
      </div>
    );
  }
}

export default App;
