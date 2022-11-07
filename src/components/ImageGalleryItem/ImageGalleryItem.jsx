import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ url, onClick, modalImg }) => {
  return (
    <Item>
      <Image src={url} alt="" onClick={() => onClick(modalImg)} />
    </Item>
  );
};

Image.prototype = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  modalImg: PropTypes.string,
};
