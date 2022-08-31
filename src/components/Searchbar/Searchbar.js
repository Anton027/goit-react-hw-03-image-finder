
import css from './SearchBar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCaretRight } from "react-icons/ai";
import { Component } from 'react';

class Searchbar extends Component {
    state = {
        imageName: ''
    }
    handleNameChange = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase()})
    }
    handleSubmit = e => {
        e.preventDefault();
        if (e.currentTarget.input.value.trim() === '') {
            toast('Please write correct picture name');
            return;
        }
        this.props.onSubmit(this.state.imageName)
        this.setState({ imageName: '' })
    }
    render(){
        return (
            <header className={css.Searchbar} >
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        
                        <AiFillCaretRight size="28" />
                    </button>
                    <input
                        className={css.SearchFormInput}
                        name="input"
                        type="text"
                        value={this.state.imageName}
                        onChange={this.handleNameChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
    
export default Searchbar;