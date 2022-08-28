
import ImageGalleryItem from "components/ImageGalleryItem";
import { Component } from "react";
import Loader from "components/Loader";
import Button from "components/Button";
import Modal from "components/Modal";

class ImageGallery extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle',
        showModal: false
    };
    loadMore = () => {
        console.log(this.props.page);
        this.props.setState(prevState => ({ page: prevState.page + 1 }))
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('prevState.page',prevProps.page);
        // console.log('this.props.page', this.props.page);
        
        // console.log('prevState.imageName',prevProps.imageName);
        // console.log('this.props.imageName',this.props.imageName);
        
        if (prevProps.imageName !== this.props.imageName) {;
            this.setState({ status: 'pending' })
            fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=${this.props.page}&key=28335791-424c8601599ee033f1407bf36&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    return Promise.reject(
                        new Error(`Oops, wrong name:${this.props.imageName}`)
                    );
                })
                .then(res => this.setState({ images: res.hits, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }))
        }
        if (prevProps.page !== this.props.page ||
            prevProps.imageName !== this.props.imageName
        ) {
            // console.log('Fetch data');
        }
        
    }
    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
            }))
    }
    render() {
        const { images, error, status, showModal } = this.state;
        if (status === 'idle') {
            return
        }
        if (status === 'pending') {
            return <Loader />
        }
        if (status === 'rejected') {
            return <h2>{error.message}</h2>
        }
        if (status === 'resolved') {
            return (
                <>
                    <ul className="gallery">
                        {images.map( images  => 
                            <ImageGalleryItem key={images.id} webformatURL={images.webformatURL} onClick={this.toggleModal} />
                        )}
                    </ul>
                    <Button onCkick={this.loadMore} />
                    {showModal &&
                        <Modal onClose={this.toggleModal}>
                            <img src="" alt="" />
                            <h1>Hello</h1>
                            <p>
                                ТРОХИ ГЛИБШЕ
Хоча CSS-модуль виглядає як звичайний CSS, насправді він компілюється у формат, що називається ICSS (Interoperable CSS), який призначений для розробників інструментів на зразок Webpack, а не для кінцевих користувачів.

Синтаксис імпорту CSS-модуля нагадує імпорт файлу JavaScript модуля. У CSS-модулі є експорт за замовчуванням - об'єкт відповідності оригінального та згенерованих імен класів. У фінальному файлі стилів буде унікальне ім'я класу у форматі [filename]_[classname]__[hash].
                            </p>
                            <button type="button" onClick={this.toggleModal}>Close</button>
                        </Modal>}
                </>
            )
        }
        // return (

        //     <>
        //         {error && <h2>{error.message}</h2>}
        //         {loading && <ColorRing
        //                 visible={true}
        //                 height="80"
        //                 width="80"
        //                 ariaLabel="blocks-loading"
        //                 wrapperStyle={{}}
        //                 wrapperClass="blocks-wrapper"
        //                 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        //             />}
        //         <ul className="gallery">
        //             {images.length > 0 && images.map( images  => 
        //                 <ImageGalleryItem key={images.id} webformatURL={images.webformatURL} />
        //             )}
        //         </ul>
        //     </>
        // )
    }
    
}
export default ImageGallery;