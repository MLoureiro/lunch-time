import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.button.font.size};
  font-family: ${({ theme }) => theme.button.font.family};

  box-shadow: 
    0 3px 1px -2px rgba(0,0,0,.2),
    0 2px 2px 0 rgba(0,0,0,.14),
    0 1px 5px 0 rgba(0,0,0,.12);

  letter-spacing: .04em;
  line-height: 1.5em;
  
  display: inline-block;
  position: relative;
  padding: .2em 1em;
  
  border: none;
  border-radius: 3px;
  outline: none;
  
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  
  overflow: hidden;
  user-select: none;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.button.color.primary.normal};
  color: ${({ theme }) => theme.button.color.primary.text};

  &:active {
    background-color: ${({ theme }) => theme.button.color.primary.active};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.button.color.secondary.normal};
    color: ${({ theme }) => theme.button.color.secondary.text};

    &:active {
      background-color: ${({ theme }) => theme.button.color.secondary.active};
    }
  }

  &.large {
    padding: .5em 1.2em;
  }

  &.small {
    padding: 0 .3em;
  }

  &.tiny {
    font-size: .8em;
    padding: 0;
  }
`;

function getSizeClassName({ large, small, tiny }) {
  if (large) return 'large';
  if (small) return 'small';
  if (tiny) return 'tiny';
  return '';
}

function Button({ secondary, ...props }) {
  return (
    <StyledButton
      className={`${secondary ? 'secondary' : ''} ${getSizeClassName(props)}`}
      onClick={(event) => props.onClick(event)}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  secondary: false,
  success: false,
  large: false,
  small: false,
  tiny: false,
};

export { Button };
