import styled from 'styled-components';
import Logo from './Image/1.png';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #343338;
  text-align: center;
  padding: 10px 0;
  bottom: 0;
  left: 0;
  height: 20vh;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  color: white;
  margin-left: 10px;
`;

export const FooterLogo = styled.img`
  height: 7vh;
`;


export const FooterStyle = () => (
  <FooterContainer>
    <FooterContent style={{borderBottom: "1px solid red"}}>
      <FooterLogo src={Logo} alt="Logo" />
      <FooterText>AnimeApp</FooterText>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}}to={"/"}>Home</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/Anime"}>Anime</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/Manga"}>Manga</Link>
      <Link style={{marginLeft: "10px", marginRight: "10px",color: "white",textDecoration: "none"}} to={"/About"}>About</Link>
    </FooterContent>
    <FooterContent>
      <FooterText>© 2022 Flowbite™. All Rights Reserved.</FooterText>
    </FooterContent>
  </FooterContainer>
);
