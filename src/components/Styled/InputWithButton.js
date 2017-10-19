import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const InlineInput = styled.input.attrs({
  type: ({ type }) => (type || 'text'),
})`
  display: inline-block;
  background: ${({ theme }) => theme.form.input.color.background};
  height: ${({ theme }) => theme.form.input.height};
  padding: ${({ theme }) => theme.form.input.padding};
  border:
    ${({ theme }) => theme.form.input.border.thickness}
    solid
    ${({ theme }) => theme.form.input.color.border};
  border-top-left-radius: ${({ theme }) => theme.form.input.border.radius};
  border-bottom-left-radius: ${({ theme }) => theme.form.input.border.radius};
  font-size: ${({ theme }) => theme.form.input.font.size};
`;

const InlineInputButton = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.form.button.color.background};
  font-weight: bolder;
  height: ${({ theme }) => theme.form.button.height};
  margin-left: -1px;
  padding: .5em 1em 0;
  border:
    ${({ theme }) => theme.form.button.border.thickness}
    solid
    ${({ theme }) => theme.form.button.color.border};
  border-top-right-radius: ${({ theme }) => theme.form.button.border.radius};
  border-bottom-right-radius: ${({ theme }) => theme.form.button.border.radius};
  user-select: none;

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

export class InputWithButton extends Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    button: PropTypes.node,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    type: 'text',
    button: null,
    placeholder: '',
    disabled: false,
    onSubmit: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
  };

  state = { value: '' };

  componentWillReceiveProps({ value }) {
    if (value !== undefined) {
      this.setState({ value });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.disabled) {
      return;
    }

    const shouldClear = this.props.onSubmit(this.state.value);
    if (shouldClear) {
      this.setState({ value: '' });
    }
  }

  onChange(event) {
    event.preventDefault();
    if (this.props.disabled) {
      return;
    }

    const value = event.target.value;
    this.setState(() => ({ value }));
    this.props.onChange(value);
  }

  onFocus(event) {
    event.preventDefault();
    this.props.onFocus(this.state.value);
  }

  onBlur(event) {
    event.preventDefault();
    this.props.onBlur(this.state.value);
  }

  onKeyPress(event) {
    this.props.onKeyPress(event);

    if (event.key === 'Enter') {
      this.onSubmit(event);
    }
  }

  render() {
    const {
      id,
      type,
      name,
      button,
      placeholder,
      disabled,
    } = this.props;

    return (
      <Wrapper disabled={disabled}>
        <InlineInput
          type={type}
          id={id || `input-${name}`}
          name={name}
          value={this.state.value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event) => this.onChange(event)}
          onKeyPress={(event) => this.onKeyPress(event)}
          onFocus={(event) => this.onFocus(event)}
          onBlur={(event) => this.onBlur(event)}
        />
        <InlineInputButton onClick={(event) => this.onSubmit(event)}>
          {button}
        </InlineInputButton>
      </Wrapper>
    );
  }
}
