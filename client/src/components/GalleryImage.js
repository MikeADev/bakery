import React, { Component } from 'react';

export default class GalleryImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 gallery-image">
                <img src={this.props.image} />
            </div>
        )
    }
}
