import { Component } from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('root');
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
    return createPortal(
      <div className="Overlay" onClick={this.closeModal}>
        <div className="Modal">
          <img src={largeImageURL} alt={imgTitle} className="Modal-img" />
          <p className="Modal-text">{imgTitle}</p>
        </div>
      </div>,
      root
    );
  }
}
