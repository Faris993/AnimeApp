import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MyDataContext } from '../Provider/Provider'; 

const AnimeDetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const AnimeImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const AnimeTitle = styled.h1`
  font-size: 2em;
  margin-top: 10px;
  color: white;
`;

const AnimeDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: white;
`;

const LoadingMessage = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
`;

const ErrorMessage = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  color: red;
`;

const FavoriteButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: ${props => props.isFavorite ? '#ff6f61' : '#007bff'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.isFavorite ? '#e55b50' : '#0056b3'};
  }
`;

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, toggleFavorite } = useContext(MyDataContext); 

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
        setAnime(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching anime details. Please try again later.');
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;


  const isFavorite = favorites.some(fav => fav.id === anime.id);

  return (
    <AnimeDetailContainer>
      <AnimeImage src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
      <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
      <AnimeDescription>{anime.attributes.synopsis}</AnimeDescription>
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={() => toggleFavorite(anime)}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </FavoriteButton>
    </AnimeDetailContainer>
  );
};

export default AnimeDetails;
