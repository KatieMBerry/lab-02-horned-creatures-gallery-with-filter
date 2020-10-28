import React from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <div className="creature-article">
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
        )
    }
}