import { Component } from "react";
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
        name: ''
    }

    handleChange = evnt => {
        console.log(evnt.currentTarget.value);
        const { name, value } = evnt.currentTarget
        this.setState({
            [name] : value
        })
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);

        // this.reset();
    }
    reset = () => {
        this.setState({
            name: '',
        })
    }
    render() {
        return (
            <header className="searchbar">
                <form className="form" >
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        className="input"
                        name="search"
                        value={this.state.name}
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