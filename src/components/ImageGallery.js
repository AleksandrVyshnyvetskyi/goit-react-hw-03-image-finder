import { Component } from 'react';
import { ImageGallaryItem } from './ImageGalleryItem';
import { api } from './Api';
import { Loader } from './Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevStats) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loading: true });
      const { searchName } = this.props;
      fetch(
        `https://pixabay.com/api/?q=${searchName}&page=1&key=29146874-e25e04f0bbd5e8c4fffc4a4f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`We don't have ${searchName}...`));
        })
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
    const { images, error, loading } = this.state;
    // if (this.state.status === 'idle') {
    //   return <h2>Enter a keyword to search!</h2>;
    // }

    // if (this.state.status === 'pending') {
    //   return <Loader />;
    // }

    // if (this.state.status === 'rejected') {
    //   return <h2>{`We don't have this...`}</h2>;
    // }

    // if (this.state.status === 'resolved') {
    //   return (
    //     <ul className="ImageGallery">
    //       {images.map(item => (
    //         <ImageGallaryItem
    //           key={item.id}
    //           imgURL={item.webformatURL}
    //           imgTitle={item.tags}
    //         />
    //       ))}
    //     </ul>
    //   );
    // }

    return (
      <div className="container">
        {/* {error && <h2>{error.message}</h2>} */}
        {images === [] && <h2>{`We don't have this...`}</h2>}
        {loading && <Loader />}
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
