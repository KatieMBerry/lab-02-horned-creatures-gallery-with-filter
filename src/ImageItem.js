import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="creature-article">
                <div>{this.props.title}</div>
                <img src={this.props.image} className="horned-creature" alt="horned-creature" />
                <div>{this.props.description}</div>
                <div>{this.props.keyword}s have {this.props.horns} horn(s).</div>
            </div>
        )
    }
}