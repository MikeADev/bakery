import React, { Component } from 'react';
import Cake from '../assets/images/baked-beautiful-birthday-birthday-cake-302552.jpg';
import GalleryImage from './GalleryImage';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <GalleryImage image={Cake} />
                    <GalleryImage image={Cake} />
                    <GalleryImage image={Cake} />
                    <GalleryImage image={Cake} />
                    <GalleryImage image={Cake} />
                    <GalleryImage image={Cake} />
                </div>
            </div>
        )
    }
}
