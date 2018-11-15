import React, { Component } from "react";
import Photos from "./Photos";
import { connect } from "react-redux";
import { receivePhotos } from "../../actions";

class PhotoContainer extends Component {
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/photos?_limit=30", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(photos => this.props.receivePhotos(photos))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.props.photos);
    return <Photos photoList={this.props.photos} />;
  }
}

function mapStateToProps({ photos }) {
  return {
    photos
  };
}

function mapDispatchToProps() {
  return {
    receivePhotos
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoContainer);
