import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import DropDown from './DropDown.js';

// 0) move DropDown into App.js
// 1) move filter state to App.js
// 2) give DropDown the debit card to change App.js state
// 3) give WolfList the filter (since it's the component that needs it)

// app.js is a container component. it manages state and passes it to children.
export default class App extends React.Component {
  state = {
    filter: ''
  }

  handleChange = e => {//tracks the state of the filter
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <DropDown handleChange={this.handleChange} />
        <ImageList images={images} filter={this.state.filter} />
      </div>
    );
  }
}





