import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Icon } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        onChange={handleChange}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
