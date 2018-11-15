import React from "react";

const renderPhotos = photos => {
  return photos.map(photo => <li>{photo.title}</li>);
};

const Photos = props => {
  console.log(props);
  return (
    <ul>
      {props.photoList ? (
        renderPhotos(props.photoList)
      ) : (
        <h1>loading photos</h1>
      )}
    </ul>
  );
};

export default Photos;
