import { Component } from 'react';
import { imageApi } from 'service/imageAPI';
import { Loader } from './Loader';
import { GalleryBox } from './GalleryBox';
import { Modal } from './Modal';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: '',
    status: 'idle',
    searchName: '',
    page: 1,
    showModal: false,
    contentModal: {
      urlLarge: '',
    },
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.searchName &&
      prevProps.searchName !== this.props.searchName
    ) {
      this.setState({
        images: [],
        page: 1,
      });
      this.fetchGallery(this.props.searchName, 1);
    }
    if (
      prevProps.searchName === this.props.searchName &&
      this.state.page > prevState.page
    ) {
      this.fetchGallery(this.props.searchName, this.state.page);
    }
  }

  async fetchGallery() {
    this.setState({
      loading: true,
    });
    try {
      const res = await imageApi(this.props.searchName, this.state.page);
      const hits = res.hits;
      this.setState(({ images }) => {
        return {
          images: [...images, ...hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  openModal = contentModal => {
    this.setState({
      showModal: true,
      contentModal,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      contentModal: {
        urlLarge: '',
      },
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const imagesLenght = this.state.images.length;
    const { images, loading, showModal, contentModal } = this.state;
    return (
      <div>
        {loading && (
          <div className="container">
            <Loader />
            <h2>Loading...</h2>
          </div>
        )}
        {!this.props.searchName && (
          <div className="container">
            <h2>Enter a keyword to search!</h2>
          </div>
        )}
        {images && (
          <GalleryBox images={images} onClick={this.openModal}></GalleryBox>
        )}
        {imagesLenght !== 0 && (
          <div className="container-btn">
            <button onClick={this.loadMore} type="button" className="Button">
              load more
            </button>
          </div>
        )}
        {showModal && (
          <Modal onClose={this.closeModal} content={contentModal} />
        )}
      </div>
    );
  }
}
