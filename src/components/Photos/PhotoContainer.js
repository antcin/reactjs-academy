import React, { Component } from "react";

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
      .then(photos => console.log(JSON.stringify(photos)))
      .catch(error => console.log(error));
  }

  render() {
    return <ul>{this.state.photos}</ul>;
  }
}
