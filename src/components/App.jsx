import { useState, useEffect } from 'react';

import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { ButtonLoad } from './ButtonLoad/ButtonLoad';
import { Loader } from './Loader/Loader';

import { getGallery } from 'services/gallery.services';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeUrl, setLargeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchData(search, page);
  }, [search, page]);

  const fetchData = async (value, page) => {
    setIsLoading(true);
    try {
      const items = await getGallery(value, page);
      setImages(prevImages => [...prevImages, ...items]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const modalToggle = () => {
    setShowModal(prevState => !prevState);
  };

  const handleSubmit = value => {
    if (!value) {
      return;
    }

    setSearch(value);
    setPage(1);
    setImages([]);
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handelModalOpen = url => {
    setLargeUrl(url);
    modalToggle();
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {error && (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>
          Server not responding
        </p>
      )}
      {images.length > 0 && (
        <ImageGallery items={images} onModal={handelModalOpen} />
      )}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <ButtonLoad onClick={handleNextPage}>Load more</ButtonLoad>
      )}
      {showModal && <Modal url={largeUrl} onClose={modalToggle} />}
    </Container>
  );
};
