import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.i.attrs({ 'aria-hidden': true })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.button.font.size};

  position: relative;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;

  width: 3em;
  height: 3em;
  padding: 0;
  border: none;
  border-radius: 50%;

  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  box-shadow: 
    0 3px 5px -1px rgba(0,0,0,.2), 
    0 6px 10px 0 rgba(0,0,0,.14), 
    0 1px 18px 0 rgba(0,0,0,.12);

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

  &.large {
    width: 4em;
    height: 4em;
  }

  &.small {
    width: 2em;
    height: 2em;
  }

  &.tiny {
    font-size: .8em;
    width: 1em;
    height: 1em;
  }
`;

function getStyleClassName({ primary, secondary }) {
  if (primary) return 'primary';
  if (secondary) return 'secondary';
  return ''
}

function getSizeClassName({ large, small, tiny }) {
  if (large) return 'large';
  if (small) return 'small';
  if (tiny) return 'tiny';
  return '';
}

function IconButton({ icon, ...props }) {
  return (
    <StyledButton
      className={`${getStyleClassName(props)} ${getSizeClassName(props)}`}
      onClick={(event) => props.onClick(event)}
      {...props}
    >
      <StyledIcon className={`fa fa-${icon}`} />
    </StyledButton>
  );
}

IconButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  primary: false,
  secondary: false,
  large: false,
  small: false,
  tiny: false,
};

export { IconButton };
