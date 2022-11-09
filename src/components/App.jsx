import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';

import { LoadMore } from './Button/Button';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    loadMore: false,
  };

  getQuery = newQuery => {
    this.setState(prevState => ({
      query: newQuery,
      page: 1,
    }));
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onLoadMore = () => {
    this.setState({ loadMore: true });
  };
  offLoadMore = () => {
    this.setState({ loadMore: false });
  };

  render() {
    const { query, page, loadMore } = this.state;
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <ToastContainer />
        <Searchbar onSubmit={this.getQuery} />

        <ImageGallery
          query={query}
          page={page}
          onLoad={this.onLoadMore}
          offLoad={this.offLoadMore}
        />
        {loadMore && (
          <Container>
            <LoadMore onClick={this.loadMore}>Load More</LoadMore>
          </Container>
        )}
      </>
    );
  }
}
// ===================================
