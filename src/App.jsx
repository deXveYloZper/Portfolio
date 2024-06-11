import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Gallery />
      <Footer />
    </AppContainer>
  );
};

export default App;
