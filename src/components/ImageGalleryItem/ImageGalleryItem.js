


const ImageGalleryItem = ({ webformatURL, onClick }) => {
    return (
        <li  className="gallery-item">
            <img src={webformatURL} alt="" onClick={onClick} />
        </li>
    )
    
}
export default ImageGalleryItem;