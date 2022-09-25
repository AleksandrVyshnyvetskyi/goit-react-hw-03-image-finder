import { ImageGallaryItem } from './ImageGalleryItem';

export function GalleryBox({ onClick, images }) {
  return (
    <div className="container">
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGallaryItem
            key={image.id}
            imgURL={image.webformatURL}
            imgTitle={image.tags}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}
