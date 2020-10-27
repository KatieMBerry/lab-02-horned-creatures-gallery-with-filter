import React from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
// import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {
          images.map(image =>
            <ImageItem
              title={image.title}
              image={image.url} alt="horned-creature"
              description={image.description}
              keyword={image.keyword}
              horns={image.horns} />)
        }
      </div>
    );
  }
}





