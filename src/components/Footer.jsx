import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLeft = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
`;

const FooterLeftItems = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #bac4b8;
`;

const FooterLeftBreak = styled.div`
  border: 1px solid #bac4b8;
  width: 30px;
  transition: all 0.5s ease-in-out;

  ${FooterLeftItems}:hover & {
    transform: translate(-70px);
  }
`;

const FooterLeftBreak1 = styled.div`
  border: 1px solid #bac4b8;
  margin-top: -2px;
  width: 30px;
  transition: all 0.5s ease-in-out;

  ${FooterLeftItems}:hover & {
    transform: translate(70px);
  }
`;

const FooterRight = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  text-align: right;
`;

const FooterRightLink = styled.a`
  text-decoration: none;
  color: #bac4b8;
  opacity: 0.7;
  display: block;
  margin-bottom: -4px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLeftItems href="mailto:utsaru@gmail.com">
          <div>FULLSTACK DEVELOPER</div>
          <FooterLeftBreak />
          <FooterLeftBreak1 />
          <div>OPEN TO WORK</div>
        </FooterLeftItems>
      </FooterLeft>
      <FooterRight>
        <FooterRightLink href="mailto:utsaru@gmail.com">EMAIL</FooterRightLink>
        <FooterRightLink
          href="https://www.linkedin.com/in/kristianutsar/"
          target="_blank"
        >
          LINKEDIN
        </FooterRightLink>
        <FooterRightLink
          href="https://github.com/Utsar"
          target="_blank"
        >
          GITHUB
        </FooterRightLink>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
