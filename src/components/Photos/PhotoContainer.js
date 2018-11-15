import React, { Component } from "react";
import Photos from "./Photos";

export default class PhotoContainer extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/photos?_limit=30", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(photos => this.setState({ photos }))
      .catch(error => console.log(error));
  }

  render() {
    return <Photos photoList={this.state.photos} />;
  }
}
