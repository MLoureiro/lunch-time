import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactModal from 'react-modal';

const ContentWrapper = styled.div`
  padding:  ${({ theme }) => theme.modal.content.padding};
  background-color: ${({ theme }) => theme.modal.content.color.background};
  border:
    ${({ theme }) => theme.modal.content.border.thickness}
    solid
    ${({ theme }) => theme.modal.content.color.border};
  border-radius: ${({ theme }) => theme.modal.content.border.radius};
`;

class Modal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    shouldCloseOnOverlayClick: PropTypes.bool,
    onRequestClose: PropTypes.func,
  };

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    onRequestClose: () => {},
  };

  previousPageFilter = 'none';

  constructor(props) {
    super(props);

    this.previousPageFilter = Modal.getPageFilter();
  }

  static getPageElement() {
    return document.getElementById('root');
  }

  static getPageFilter() {
    return Modal.getPageElement().style.filter;
  }

  static changePageFilter(filter) {
    Modal.getPageElement().style.filter = filter;
  }

  render() {
    const { isOpen, onRequestClose, ...props } = this.props;

    if (isOpen) {
      Modal.changePageFilter('blur(3px)');
    } else {
      Modal.changePageFilter(this.previousPageFilter);
    }

    return (
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
        onRequestClose={onRequestClose}
        style={{
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, .6)',
          },
          content: {
            position: 'relative',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'block',
            padding: 0,
            margin: 0,
            background: 'none',
            border: 'none',
            maxHeight: '100%',
            maxWidth: '100%',
          },
        }}
      >
        <ContentWrapper>
          {props.children}
        </ContentWrapper>
      </ReactModal>
    );
  }
}

export { Modal };
