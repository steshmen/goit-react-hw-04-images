import { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Icon } from './SearchForm.styled';

export class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
  };

  render() {
    const { value } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <Icon />
        </Button>

        <Input
          name="value"
          value={value}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}
