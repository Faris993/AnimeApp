import styled from 'styled-components';

export const AnimeContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const CategorySelect = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const AnimeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const AnimeItem = styled.div`
  width: 150px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
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

  ${AnimeItem}:hover & {
    opacity: 1;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff; /* Primary blue color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #0056b3; /* Darker shade of blue */
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  &:disabled {
    background-color: #6c757d; /* Secondary gray color */
    cursor: not-allowed;
  }
`;
