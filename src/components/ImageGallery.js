import { Component } from 'react';
import { ImageGallaryItem } from './ImageGalleryItem';
import { api } from './Api';
import { Loader } from './Loader';
import { img } from '../svg/LoaderCat.gif';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevStats) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loading: true });
      const { searchName } = this.props;
      api
        .FetchRequest(searchName)
        .then(data => {
          const images = data.hits;
          this.setState({ images });
          return images;
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const images = this.state.images;
    return (
      <div className="container">
        {images === [] && <h2>No matches</h2>}
        {this.state.loading && <Loader />}
        {!this.props.searchName && <h2>Enter a keyword to search!</h2>}
        {images && (
          <ul className="ImageGallery">
            {images.map(item => (
              <ImageGallaryItem
                key={item.id}
                imgURL={item.webformatURL}
                imgTitle={item.tags}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
