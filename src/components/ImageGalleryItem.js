import PropTypes from 'prop-types';

export const ImageGallaryItem = ({
  imgURL,
  imgTitle,
  largeImageURL,
  onClick,
}) => {
  return (
    <li
      className="ImageGalleryItem "
      onClick={() => {
        onClick({ largeImageURL, imgTitle });
      }}
    >
      <img src={imgURL} alt={imgTitle} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGallaryItem.propTypes = {
  onClick: PropTypes.func,
  imgURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  imgTitle: PropTypes.string,
};
