import ImageGalleryItem from "components/ImageGalleryItem";
const ImageGallery = ({ images }) => {
    return (
        <ul className="gallery">
            {images.map( images  => 
                <ImageGalleryItem key={images.id} webformatURL={images.webformatURL} />
            )}
        </ul>
    )
}
export default ImageGallery;