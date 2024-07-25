import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const AnimeRow = styled.div`
  margin-bottom: 20px;
`;

export const AnimeList = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
`;

export const AnimeItem = styled.div`
  width: 150px; 
  height: 300px; 
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MangaRow = styled.div`
  margin-bottom: 20px;
`;

export const MangaList = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
`;

export const MangaItem = styled.div`
  width: 150px;
  height: 300px; 
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;

  ${AnimeItem}:hover &,
  ${MangaItem}:hover & {
    opacity: 1;
  }
`;
