import React from 'react';
import images from './data.js';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="creature-article">
                {/* <img {this.props.image} /> */}
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
                <div>{this.props.keyword}</div>
                <div>{this.props.horns}</div>
            </div>
        )
    }
}