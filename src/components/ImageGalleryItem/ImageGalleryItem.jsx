import PropTypes from 'prop-types';

import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, onModal, largeUrl }) => {
  return (
    <Item onClick={() => onModal(largeUrl)}>
      <Image src={url} alt="title" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
};
