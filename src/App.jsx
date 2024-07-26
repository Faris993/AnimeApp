import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDataProvider from "./Components/Provider/Provider";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import DropDown from './Components/DropDown/DropDown';
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";
import About from "./Components/About/AboutUs";
import Favorites from "./Components/Favorites/Favorites";
import AnimeDetail from "./Components/Anime/AnimeDetails";
import MangaDetail from "./Components/Manga/MangaDetails";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  html, body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #343338;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 1.8vh;
`;

const ContentWrapper = styled.div`
  margin-left: 6.6vw;
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <MyDataProvider>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <MainContent>
            <DropDown />
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manga" element={<Manga />} />
                <Route path="/Manga/:id" element={<MangaDetail />} /> 
                <Route path="/Anime" element={<Anime />} />
                <Route path="/Anime/:id" element={<AnimeDetail />} /> 
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/About" element={<About />} />
              </Routes>
            </ContentWrapper>
          </MainContent>
          <Footer />
        </AppContainer>
      </MyDataProvider>
    </Router>
  );
}

export default App;
