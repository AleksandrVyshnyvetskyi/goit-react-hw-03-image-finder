export const ImageGallaryItem = ({
  imgURL,
  imgTitle,
  largeImageURL,
  onClick,
}) => {
  return (
    <li className="ImageGalleryItem ">
      <img
        src={imgURL}
        alt={imgTitle}
        className="ImageGalleryItem-image"
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
