import { Component } from "react";
import { toast } from 'react-toastify';
import css from './SearchBar.module.css'
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {


        return (
            <header className={css.Searchbar} >
                <form className={css.SearchForm} onSubmit={onSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={css.SearchFormInput}
                        name="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}
    
export default Searchbar;