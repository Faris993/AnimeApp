import styled from 'styled-components';
import Logo from './Image/1.png';

export const NavbarContainer = styled.div`
  background-color: #343338;
  height: 5vh;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #454545;
  display: flex;
  align-items: center;
  z-index: 10; 
`;

export const NavbarContent = styled.div`
  margin-left: 3vw;
  height: 5vh;
  width: 50vw;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 4vh;
`;

export const Title = styled.p`
  color: white;
  font-size: 25px;
  margin-left: 10px;
`;

export const HeaderStyle = () => (
  <NavbarContainer>
    <NavbarContent>
      <LogoImage src={Logo} alt="Logo" />
      <Title>AnimeApp</Title>
    </NavbarContent>
  </NavbarContainer>
);
