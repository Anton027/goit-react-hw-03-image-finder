import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { updateFetch } from "./api/Fetch";
import Loader from "components/Loader";
import Button from "components/Button";
import Modal from "components/Modal";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import css from './App.module.css'


export class App extends Component {

  state = {
    imageName: '',
    page: 1,
    images: [],
    error: null,
    isLoading: false,
    showModal: false,
    currentImage: {},

  };

  componentDidUpdate(prevProps,prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      updateFetch(imageName, page).then(response => {
        const prevImages = this.state.images;
        const nextImages = response.data.hits;
        this.setState({ images: [...prevImages, ...nextImages] });
      });
    }

  }
  onLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };


  handleSubmitForm = imageName => {
    this.setState({
        imageName,
        page: 1,
        images: [],
      })
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
  dataModal = (tags, largeImageURL) => {
    this.setState({ currentImage: { tags, largeImageURL } });
  };
  render() {
    const { images,showModal,currentImage,isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {isLoading && <Loader />}
        
        {images.length > 0 &&
          <>
          <ImageGallery
            toggleModal={this.toggleModal}
            images={images} dataModal={this.dataModal}
          />
            <Button onCkick={this.onLoadMore} />
          </>
        }
        {showModal &&
          <Modal onClose={this.toggleModal}>
            <img src={currentImage.largeImageURL} alt={currentImage.tags} />
          </Modal>
        }
        <GlobalStyle />
        <ToastContainer autoClose={2700} />
      </div>
      
    );
  }
};
