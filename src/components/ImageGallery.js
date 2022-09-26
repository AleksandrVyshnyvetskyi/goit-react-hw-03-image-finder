import { Component } from 'react';
import { imageApi } from 'service/imageAPI';
import { Loader } from './Loader';
import { Button } from './Button';
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
    const propsName = this.props.searchName;
    const prevPropsName = prevProps.searchName;
    const propsPage = this.state.page;
    const prevPropsPage = prevState.page;
    console.log('prevState.page: ', prevState.page);
    console.log('this.state.page: ', this.state.page);
    // if (
    //   prevPropsPage !== propsPage ||
    //   prevState.searchName !== this.state.searchName
    // ) {
    //   this.fetchGallery(propsName, propsPage);
    // }
    if (propsName && prevPropsName !== propsName) {
      this.setState({
        images: [],
        page: 1,
      });
      this.fetchGallery(propsName, 1);
    }
    if (prevPropsName === propsName && propsPage > prevPropsPage) {
      this.fetchGallery(propsName, propsPage);
    }
  }

  async fetchGallery() {
    this.setState({
      loading: true,
    });
    const propsName = this.props.searchName;
    const propsPage = this.state.page;
    try {
      const res = await imageApi(propsName, propsPage);
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
    console.log(this.state.page);
  };

  render() {
    const images = this.state.images.length;
    const stateImg = this.state.images;
    const stateLoad = this.state.loading;
    const propsName = this.props.searchName;
    const openModal = this.openModal;
    const closeModal = this.closeModal;
    const showModal = this.state.showModal;
    const contentModal = this.state.contentModal;
    const loadMore = this.loadMore;

    return (
      <div>
        {stateImg === [] && <div>Any images not found</div>}
        {stateLoad && (
          <div className="container">
            <Loader />
            <h2>Loading...</h2>
          </div>
        )}
        {!propsName && (
          <div className="container">
            <h2>Enter a keyword to search!</h2>
          </div>
        )}
        {stateImg && (
          <GalleryBox images={stateImg} onClick={openModal}></GalleryBox>
        )}
        {images > 0 && (
          <div className="container-btn">
            <button onClick={loadMore} type="button" className="Button">
              load more
            </button>
          </div>
        )}
        {showModal && <Modal onClose={closeModal} content={contentModal} />}
      </div>
    );
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.props.searchName &&
  //     prevProps.searchName !== this.props.searchName
  //   ) {
  //     this.setState({ status: 'pending' });
  //     const { searchName } = this.props;
  //     imageApi(searchName)
  //       .then(data => {
  //         const images = data.hits;
  //         this.setState({ images, status: 'resolved' });
  //         return images;
  //       })
  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   }
  // }

  //   render() {
  //     const { images, status } = this.state;
  //     if (status === 'idle') {
  //       return (
  //         <div className="container">
  //           <h2>Enter a keyword to search!</h2>
  //         </div>
  //       );
  //     }

  //     if (status === 'pending') {
  //       return (
  //         <div className="container">
  //           <Loader />
  //           <h2>Loading...</h2>
  //         </div>
  //       );
  //     }

  //     if (status === 'rejected') {
  //       toast.error(`We don't have this...`);
  //       return (
  //         <div className="container">
  //           <h2>{`We don't have this...`}</h2>
  //         </div>
  //       );
  //     }

  //     if (status === 'resolved') {
  //       return <GalleryBox images={images} />;
  //     }
  //   }
}
