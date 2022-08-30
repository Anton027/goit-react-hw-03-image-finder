import css from './Button.module.css'
import Loader from "components/Loader";
const Button = ({ onCkick, isLoading }) => {
    if (isLoading) {
        return (
            <Loader />
        )
    }
    return <button className={css.Button} type='button' onClick={onCkick}>Load More</button>
}
export default Button;