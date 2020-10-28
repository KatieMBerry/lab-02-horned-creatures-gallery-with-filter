import React from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    state = {
        filter: ''
    }

    handleChange = e => {//tracks the state of the filter
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredImages = this.props.images.filter((image) => {
            //if no filter, show all
            if (!this.state.filter) return true;
            //if filter, show filtered - tracking state of what chose in filter
            if (image.keyword === this.state.filter) return true;
            //else don't include in the array
            return false
        });

        return (
            <>
                <select onChange={this.handleChange}>
                    <option value=''>All</option>
                    <option value='narwhal'>Narwhal</option>
                    <option value='rhino'>Rhino</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='addax'>Addax</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
                </select>
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