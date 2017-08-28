import React from 'react';
import ReactDOM from 'react-dom';

import ReactPhotoGallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';

export default class PhotoGrid extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
		this.openLightbox = this.openLightbox.bind(this);
    }
	openLightbox(index,event) {
		console.log('index: ',index);
		event.preventDefault();
		this.setState(
			{photoIndex:index,
			isOpen:true}
		);
	}
	render() {
		var photos = this.props.photos.map(item => {
			return  {
				src:item.url,
				width:item.width,
				height:item.height
			}
		});
		var images = this.props.photos.map(item => {
			return item.url
		})
		const {photoIndex,isOpen} = this.state;
		return (
			<div>
				<ReactPhotoGallery photos={photos} cols={this.props.cols} onClickPhoto={this.openLightbox}/>
				{isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
					/>
				}
			</div>
		)
	}
}
