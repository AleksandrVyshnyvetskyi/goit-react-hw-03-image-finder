export const ImageGallaryItem = ({ imgURL, imgTitle }) => {
  return (
    <li className="ImageGalleryItem ">
      <img src={imgURL} alt={imgTitle} className="ImageGalleryItem-image" />
    </li>
  );
};
