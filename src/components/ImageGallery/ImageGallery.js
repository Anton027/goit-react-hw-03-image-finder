import css from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem";


const ImageGallery = ({ images, toggleModal, dataModal }) => {
    return (
        <>
            <ul className={css.ImageGallery}>

                {images.map(({ id, webformatURL, tags, largeImageURL }) =>
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        onClick={() => {
                            dataModal(tags, largeImageURL);
                            toggleModal()
                        }}
                    />
                )}
            </ul>
        </>
    )
}
export default ImageGallery;