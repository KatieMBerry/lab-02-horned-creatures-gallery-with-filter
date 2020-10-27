import React from 'react';
import images from './data.js';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="creature-article">
                <div>{images[0].title}</div>
                <img className="horned-creature" src={images[0].url} alt="horned-creature" />
                <p>{images[0].description}.</p>
                <div>A {images[0].keyword} has {images[0].horns} horn(s).</div>
            </div>
        )
    }
}
