import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, onClick, modalImg }) => {
  return (
    <Item>
      <Image src={url} alt="" onClick={() => onClick(modalImg)} />
    </Item>
  );
};
