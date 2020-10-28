import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList />
      </div>
    );
  }
}





