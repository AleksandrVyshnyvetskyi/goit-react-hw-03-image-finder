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
