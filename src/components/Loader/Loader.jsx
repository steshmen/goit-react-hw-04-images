import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClass="blocks-wrapper"
      colors={['#785be1', '#5b5be3', '#4b59ed', '#3468ea', '#8c849b']}
    />
  );
};
