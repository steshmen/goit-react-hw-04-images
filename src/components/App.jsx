import { Component } from 'react';

import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { ButtonLoad } from './ButtonLoad/ButtonLoad';
import { Loader } from './Loader/Loader';

import { getGallery } from 'services/gallery.services';

export class App extends Component {
  state = {
    search: '',
    isLoading: false,
    images: [],
    largeUrl: '',
    page: 1,
    error: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch) {
      this.fetchData(nextSearch, 1);
    }
    if (prevPage !== nextPage && prevSearch === nextSearch) {
      this.fetchData(nextSearch, nextPage);
    }
  }

  fetchData = async (value, page) => {
    this.setState({ isLoading: true });
    try {
      const items = await getGallery(value, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...items],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleSubmit = value => {
    this.setState({ search: value, page: 1, images: [] });
  };

  handleNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handelModalOpen = largeUrl => {
    this.setState({ largeUrl });
    this.modalToggle();
  };

  render() {
    const { isLoading, images, largeUrl, showModal, error } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && (
          <p style={{ textAlign: 'center', fontSize: '20px' }}>
            Server not responding
          </p>
        )}
        {images.length > 0 && (
          <ImageGallery items={images} onModal={this.handelModalOpen} />
        )}
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && (
          <ButtonLoad onClick={this.handleNextPage}>Load more</ButtonLoad>
        )}
        {showModal && <Modal url={largeUrl} onClose={this.modalToggle} />}
      </Container>
    );
  }
}
