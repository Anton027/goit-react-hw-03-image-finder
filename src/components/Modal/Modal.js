import { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        console.log("componentDidMount");
        window.addEventListener('keydown', this.hendelKeyDown)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        window.removeEventListener('keydown', this.hendelKeyDown)
    }
    hendelKeyDown = e => {
        if (e.code === 'Escape') {
                console.log(e.code);

                this.props.onClose();
        }
    }
    handleBackDropClick = e => {
        // console.log('click in backDrop');
        // console.log('currentTarget', e.currentTarget);
        // console.log('target', e.target);

        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackDropClick}>
                <div className={css.Modal}>
                    {/* <img src="" alt="" /> */}
                    
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        )
    }
}
export default Modal;