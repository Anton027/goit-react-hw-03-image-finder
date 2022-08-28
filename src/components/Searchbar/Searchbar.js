import { Component } from "react";
import { toast } from 'react-toastify';
import css from './SearchBar.module.css'
import 'react-toastify/dist/ReactToastify.css';
// const Searchbar = ({value, onChange}) => {
//     return (
//         <header className="searchbar">
//             <form className="form">
//                 <button type="submit" className="button">
//                 <span className="button-label">Search</span>
//                 </button>



//                 <input
//                     className="input"
//                     name="search"
//                     value={value}
//                     onChange={onChange}
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                 />
//             </form>
//         </header>
//     )
// }
class Searchbar extends Component {
    state = {
        imageName: ''
    }

    handleChange = evnt => {
        this.setState({ imageName: evnt.currentTarget.value.toLowerCase()})
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.imageName.trim() === '') {
            toast('Please write correct picture name');
            return;
        }
        this.props.onSubmit(this.state.imageName);
        this.reset();
    }
    reset = () => {
        this.setState({
            imageName: '',
        })
    }
    render() {
        return (
            <header className={css.Searchbar} onSubmit={this.handleSubmitForm}>
                <form className={css.SearchForm} >
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={css.SearchFormInput}
                        name="search"
                        value={this.state.imageName}
                        onChange={this.handleChange}
                        type="text"
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