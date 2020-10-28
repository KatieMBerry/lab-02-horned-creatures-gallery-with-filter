import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList';
import images from './data.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList images={images} />
      </div>
    );
  }
}





