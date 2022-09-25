import { Component } from 'react';
import { toast } from 'react-toastify';
import { imageApi } from 'service/imageAPI';
import { Loader } from './Loader';
import { GalleryBox } from './GalleryBox';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevStats) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ status: 'pending' });
      const { searchName } = this.props;
      imageApi(searchName)
        .then(data => {
          const images = data.hits;
          this.setState({ images, status: 'resolved' });
          return images;
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, status } = this.state;
    if (status === 'idle') {
      return (
        <div className="container">
          <h2>Enter a keyword to search!</h2>
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div className="container">
          <Loader />
          <h2>Loading...</h2>
        </div>
      );
    }

    if (status === 'rejected') {
      toast.error(`We don't have this...`);
      return (
        <div className="container">
          <h2>{`We don't have this...`}</h2>
        </div>
      );
    }

    if (status === 'resolved') {
      return <GalleryBox images={images} />;
    }
  }
}
