import React from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList images={images} />
        <ImageItem />
      </div>
    )
  }
}





