import { Component } from 'react';
import { ImageGallaryItem } from './ImageGalleryItem';
import { Loader } from './Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    // loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevStats) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ status: 'pending' });
      const { searchName } = this.props;
      const API_KEY = '29359715-57cbbaa05904a72f5703b5006';
      fetch(
        `https://pixabay.com/api/?q=${searchName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`We don't have ${searchName}...`));
        })
        .then(data => {
          const images = data.hits;
          this.setState({ images, status: 'resolved' });
          return images;
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
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
        </div>
      );
    }

    if (status === 'rejected') {
      return (
        <div className="container">
          <h2>{`We don't have this...`}</h2>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <div className="container">
          <ul className="ImageGallery">
            {images.map(item => (
              <ImageGallaryItem
                key={item.id}
                imgURL={item.webformatURL}
                imgTitle={item.tags}
              />
            ))}
          </ul>
        </div>
      );
    }

    // return (
    //   <div className="container">
    //     {error && <h2>{error.message}</h2>}
    //     {images === [] && <h2>{`We don't have this...`}</h2>}
    //     {loading && <Loader />}
    //     {!this.props.searchName && <h2>Enter a keyword to search!</h2>}
    //     {images && (
    //       <ul className="ImageGallery">
    //         {images.map(item => (
    //           <ImageGallaryItem
    //             key={item.id}
    //             imgURL={item.webformatURL}
    //             imgTitle={item.tags}
    //           />
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // );
  }
}
