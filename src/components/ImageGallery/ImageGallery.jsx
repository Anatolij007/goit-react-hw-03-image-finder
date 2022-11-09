import { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImages } from 'services/api';
import { Gallery, ModalImage, Search } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    modalImg: '',
    isLoader: false,
    isModal: false,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const { query: nextQuery, page: nextPage } = this.props;
    const { query: prevQuery, page: prevPage } = prevProps;

    if (prevQuery !== nextQuery) {
      this.setState({ isLoader: true });
      try {
        const response = await fetchImages(nextQuery, nextPage);
        this.setState({ gallery: response.hits });
        if (response.hits.length) {
          this.props.onLoad();
        } else {
          this.resetGallery();
          this.props.offLoad();
          toast.error(`По запиту "${nextQuery}" нічого не знайдено`);
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoader: false });
      }
    }

    if (prevQuery !== nextQuery) {
      this.setState({ isLoader: true });
      try {
        const response = await fetchImages(nextQuery, nextPage);
        this.setState({ gallery: response.hits });
        if (!response.hits.length || response.hits.length < 12) {
          this.props.offLoad();
          toast('Колекція закінчилась');
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoader: false });
      }
    }

    if (prevQuery === nextQuery && prevPage !== nextPage) {
      this.setState({ isLoader: true });
      try {
        const response = await fetchImages(nextQuery, nextPage);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...response.hits],
        }));
        if (!response.hits.length || response.hits.length < 12) {
          this.props.offLoad();
          toast('Колекція закінчилась');
        } else {
          this.props.onLoad();
        }
      } catch (error) {
        this.setState({ error });
        toast.error(`${this.state.error}`);
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  handelClick = img => {
    this.setState(({ isModal }) => ({ isModal: !isModal }));
    this.setState(prevState => ({
      modalImg: img,
    }));
  };

  resetGallery = () => {
    this.setState({ gallery: [] });
  };

  render() {
    const { gallery, isLoader, isModal } = this.state;

    return (
      <>
        <Gallery id="gallery">
          {gallery.map(({ id, webformatURL, largeImageURL }, index) => (
            <ImageGalleryItem
              key={index}
              url={webformatURL}
              onClick={this.handelClick}
              modalImg={largeImageURL}
            />
          ))}
        </Gallery>
        {isLoader && (
          <Search>
            <Loader />
          </Search>
        )}
        {isModal && (
          <Modal onClose={this.handelClick}>
            <ModalImage src={this.state.modalImg} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.prototype = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  offLoad: PropTypes.func,
  onLoad: PropTypes.func,
};
