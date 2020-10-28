import React from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends React.Component {
    render() {
        const filteredImages = this.props.images.filter((image) => {
            //if no filter, show all
            if (!this.props.filter) return true;
            //if filter, show filtered - tracking state of what chose in filter
            if (image.keyword === this.props.filter) return true;
            //else don't include in the array
            return false
        });

        return (
            <>
                <div className="creature-article">
                    {
                        //filter and then map over the filtered array to render components
                        filteredImages.map(image =>
                            <ImageItem
                                title={image.title}
                                image={image.url} alt="horned-creature"
                                description={image.description}
                                keyword={image.keyword}
                                horns={image.horns} />)
                    }
                </div>
            </>
        )
    }
}