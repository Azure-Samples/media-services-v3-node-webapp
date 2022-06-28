import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { Watch } from './Watch';
import { Browse } from './Browse';
import VideoData from "./iVideoData";

class App extends React.Component<{}, { videos: VideoData[] }> {
  constructor(props: any) {
    super(props)
    this.state = { videos: [] }
  }

  componentDidMount() {
    fetch('/videos.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ videos: data })
        console.log(this.state.videos)
        console.log(this.state.videos[0].locator)
      })
      .catch(error => {
        console.error("There was an error in fetching the videos:", error)
      });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Browse videos={this.state.videos} />} />
          <Route path="watch/:vidId" element={<Watch videos={this.state.videos} />} />
        </Routes>
      </Router>
    )
  }
}

export default App;