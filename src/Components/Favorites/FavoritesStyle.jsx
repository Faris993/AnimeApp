import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  color: white;
`;

export const ItemCard = styled.div`
  width: 150px; 
  height: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  p {
    padding: 10px;
    text-align: center;
    color: black;
  }
`;
