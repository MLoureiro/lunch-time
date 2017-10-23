import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.form.button.color.background};
  margin: ${({ theme }) => theme.form.button.margin};
  padding: ${({ theme }) => theme.form.button.padding};
  border:
    ${({ theme }) => theme.form.button.border.thickness}
    solid
    ${({ theme }) => theme.form.button.color.border};
  border-radius: ${({ theme }) => theme.form.button.border.radius};
  font-weight: ${({ theme }) => theme.form.button.font.weight};
  font-size: ${({ theme }) => theme.form.button.font.size};

  &.large {
    padding: ${({ theme }) => theme.form.button.size.large.padding};
    font-size: ${({ theme }) => theme.form.button.size.large.font.size};
  }
  &.small {
    padding: ${({ theme }) => theme.form.button.size.small.padding};
    font-size: ${({ theme }) => theme.form.button.size.small.font.size};
  }
  &.tiny {
    padding: ${({ theme }) => theme.form.button.size.tiny.padding};
    font-size: ${({ theme }) => theme.form.button.size.tiny.font.size};
  }

  &:hover {
    color: ${({ theme }) => theme.form.button.color.hover.text};
    background-color: ${({ theme }) => theme.form.button.color.hover.background};
    border-color: ${({ theme }) => theme.form.button.color.hover.border};
  }

  &:active {
    color: ${({ theme }) => theme.form.button.color.active.text};
    background-color: ${({ theme }) => theme.form.button.color.active.background};
    border-color: ${({ theme }) => theme.form.button.color.active.border};
  }
`;

// @TODO handle all button styles
// (background + text color with hover + active states)
function getStyleClassName({ primary, success, info, warning, danger, link }) {
  if (primary) return 'primary';
  if (success) return 'success';
  if (info) return 'info';
  if (warning) return 'warning';
  if (danger) return 'danger';
  if (link) return 'link';
  return 'default'
}

function getSizeClassName({ large, small, tiny }) {
  if (large) return 'large';
  if (small) return 'small';
  if (tiny) return 'tiny';
  return 'medium';
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

  // style
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,

  // size
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  primary: false,
  success: false,
  info: false,
  warning: false,
  danger: false,
  link: false,
  large: false,
  small: false,
  tiny: false,
};

export { Button };
