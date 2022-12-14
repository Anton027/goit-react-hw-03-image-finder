import { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        
        window.addEventListener('keydown', this.hendelKeyDown)
    }
    componentDidUpdate() {
        
        window.removeEventListener('keydown', this.hendelKeyDown)
    }
    hendelKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackDropClick}>
                <div className={css.Modal}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        )
    }
}
export default Modal;