import css from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ webformatURL, onClick }) => {
    return (
        <li  className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt="" onClick={onClick} />
        </li>
    )
    
}
export default ImageGalleryItem;