import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button'

const StyledIcon = styled.i.attrs({ 'aria-hidden': true })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 3em;
  height: 3em;
  padding: 0;
  border-radius: 50%;

  box-shadow: 
    0 3px 5px -1px rgba(0,0,0,.2), 
    0 6px 10px 0 rgba(0,0,0,.14), 
    0 1px 18px 0 rgba(0,0,0,.12);

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
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  primary: false,
  secondary: false,
  danger: false,
  large: false,
  small: false,
  tiny: false,
};

export { IconButton };
