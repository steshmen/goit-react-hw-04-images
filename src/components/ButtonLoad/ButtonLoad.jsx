import PropTypes from 'prop-types';

import { Button } from './ButtonLoad.styled';

export const ButtonLoad = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

ButtonLoad.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
