import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="mailto:email@example.com">EMAIL</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
    </FooterContainer>
  );
};

export default Footer;
