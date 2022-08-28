import css from './Button.module.css'
const Button = ({ onCkick }) => {
    return <button className={css.Button} type='button' onClick={onCkick}>Load More</button>
}
export default Button;