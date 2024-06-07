import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return <HeaderContainer>Utsar</HeaderContainer>;
};

export default Header;
