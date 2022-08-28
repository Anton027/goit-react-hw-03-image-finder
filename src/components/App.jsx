import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";


export class App extends Component {

  state = {
    imageName: '',
    page: 1,
    
  };
  
  handleSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName, page: 1 })
  }

  render() {
    const { imageName, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageName={imageName} page={page}  />
        <GlobalStyle />
        <ToastContainer autoClose={2700} />
      </div>
      
    );
  }
};
