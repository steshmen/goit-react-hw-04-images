import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalBox } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }

  handleKeyClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { url } = this.props;
    return (
      <Overlay className="overlay" onClick={this.handleClose}>
        <ModalBox className="modal">
          <img src={url} alt="title" />
        </ModalBox>
      </Overlay>
    );
  }
}
