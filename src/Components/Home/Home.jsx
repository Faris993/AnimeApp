import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MyDataContext } from '../Provider/Provider';
import { 
  HomeContainer, 
  Title, 
  AnimeRow, 
  AnimeList, 
  AnimeItem, 
  MangaRow, 
  MangaList, 
  MangaItem, 
  Info
} from './HomeStyle';

const Home = () => {
  const { animeData, loading, error } = useContext(MyDataContext);
  const navigate = useNavigate(); 

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const handleItemClick = (id, type) => {
    navigate(`/${type}/${id}`); 
  };

  const renderAnimeRow = (animeList, genre) => (
    <AnimeRow>
      <Title>{genre}</Title>
      <AnimeList>
        {animeList.map(anime => (
          <AnimeItem key={anime.id} onClick={() => handleItemClick(anime.id, 'Anime')}>
            <img
              src={anime.attributes.posterImage.small}
              alt={anime.attributes.canonicalTitle}
            />
            <Info>{anime.attributes.canonicalTitle}</Info>
          </AnimeItem>
        ))}
      </AnimeList>
    </AnimeRow>
  );

  const renderMangaRow = (mangaList, genre) => (
    <MangaRow>
      <Title>{genre}</Title>
      <MangaList>
        {mangaList.map(manga => (
          <MangaItem key={manga.id} onClick={() => handleItemClick(manga.id, 'Manga')}>
            <img
              src={manga.attributes.posterImage.small}
              alt={manga.attributes.canonicalTitle}
            />
            <Info>{manga.attributes.canonicalTitle}</Info>
          </MangaItem>
        ))}
      </MangaList>
    </MangaRow>
  );

  return (
    <HomeContainer>
      {renderAnimeRow(animeData.adventure, 'Adventure Anime')}
      {renderAnimeRow(animeData.romance, 'Romance Anime')}
      {renderAnimeRow(animeData.horror, 'Horror Anime')}
      {renderMangaRow(animeData.adventureManga, 'Adventure Manga')}
      {renderMangaRow(animeData.actionManga, 'Action Manga')}
    </HomeContainer>
  );
};

export default Home;
