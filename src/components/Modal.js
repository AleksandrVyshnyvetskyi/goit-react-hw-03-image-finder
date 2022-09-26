import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Loader } from './Loader';

const rootModal = document.getElementById('root');
export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, imgTitle } = this.props.content;
    const closeModal = this.closeModal;
    return createPortal(
      <div className="Overlay" onClick={closeModal}>
        <div className="Modal">
          <img src={largeImageURL} alt={imgTitle} />
        </div>
      </div>,
      rootModal
    );
  }
}

// render() {
//   const { imageUrlLarge, imageTitle } = this.props.content;
//   console.log(imageTitle);
//   return createPortal(
//   <div className="overlay" onClick={this.closeModal}>
//             <div className="modal">
//         <img className="modalImg" src={imageUrlLarge} alt={imageTitle} />
//             </div>
//         </div>,
//   modalRoot
// )
// }
