import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';

import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";

export class App extends Component {

  state = {
    images: [],
    loading: false,
    search: ''
  };

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=28335791-424c8601599ee033f1407bf36&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => this.setState({ images: res.hits }))
      .finally(()=> this.setState({loading: false}))

    // try {
    //   const response = axios.get(
    //     'https://pixabay.com/api/?q=cat&page=1&key=28335791-424c8601599ee033f1407bf36&q=cat&image_type=photo&orientation=horizontal&per_page=12');
      
    //   response.then(({ data }) => console.log(data.hits))
    // } catch (error) {
    //   console.error(error);
    // }
  }

  handleChangeSearch = e => {

    this.setState({ search: e.currentTarget.value });
    console.log(this.state.search);
  };

  render() {
    return (
      <div>
        <Searchbar value={this.state.search} onChange={this.handleChangeSearch} />
        {this.state.loading && <h2>Load...</h2>}
        <ImageGallery images={this.state.images} />
        
        <GlobalStyle />
      </div>
      
    );
  }
  
};

// Your API key: 28335791-424c8601599ee033f1407bf36