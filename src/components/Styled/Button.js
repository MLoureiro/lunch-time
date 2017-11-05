import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.button.font.size};
  font-family: ${({ theme }) => theme.button.font.family};

  display: inline-flex;
  position: relative;
  justify-content: center;
  overflow: hidden;

  padding: .2em 1em;
  border: none;
  border-radius: 3px;
  outline: none;
  
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  box-shadow: 
    0 3px 1px -2px rgba(0,0,0,.2),
    0 2px 2px 0 rgba(0,0,0,.14),
    0 1px 5px 0 rgba(0,0,0,.12);

  letter-spacing: .04em;
  line-height: 1.5em;
  
  background-color: ${({ theme }) => theme.button.color.default.normal};
  color: ${({ theme }) => theme.button.color.default.text};

  &:active { background-color: ${({ theme }) => theme.button.color.default.active}; }

  &.primary {
    background-color: ${({ theme }) => theme.button.color.primary.normal};
    color: ${({ theme }) => theme.button.color.primary.text};
  
    &:active { background-color: ${({ theme }) => theme.button.color.primary.active}; }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.button.color.secondary.normal};
    color: ${({ theme }) => theme.button.color.secondary.text};

    &:active { background-color: ${({ theme }) => theme.button.color.secondary.active}; }
  }
  
  &.danger {
    color: ${({ theme }) => theme.button.color.danger.active};

    &:hover {
      color: ${({ theme }) => theme.button.color.danger.text}; 
      background-color: ${({ theme }) => theme.button.color.danger.hover}; 
    }
    
    &:active { 
      color: ${({ theme }) => theme.button.color.danger.text}; 
      background-color: ${({ theme }) => theme.button.color.danger.active}; 
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

function getStyleClassName({ primary, secondary, danger }) {
  if (primary) return 'primary';
  if (secondary) return 'secondary';
  if (danger) return 'danger';
  return ''
}

function getSizeClassName({ large, small, tiny }) {
  if (large) return 'large';
  if (small) return 'small';
  if (tiny) return 'tiny';
  return '';
}

function Button(props) {
  return (
    <StyledButton
      className={`${getStyleClassName(props)} ${getSizeClassName(props)}`}
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
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  primary: false,
  secondary: false,
  danger: false,
  success: false,
  large: false,
  small: false,
  tiny: false,
};

export { Button };
