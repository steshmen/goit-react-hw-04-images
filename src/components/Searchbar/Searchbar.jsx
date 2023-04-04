import PropTypes from 'prop-types';

import { Header } from './Searchbar.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Searchbar = ({ ...otherProps }) => {
  return (
    <Header>
      <SearchForm {...otherProps} />
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
