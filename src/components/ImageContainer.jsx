import styled from 'styled-components';

const Container = styled.div`
  min-width: 200px;
  height: 300px;
  background-color: #333;
  background-image: url('/path/to/your/image.jpg'); /* Update with actual image paths */
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = () => {
  return <Container />;
};

export default ImageContainer;
