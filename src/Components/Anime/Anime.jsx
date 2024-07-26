import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyDataContext } from '../Provider/Provider';
import { 
  AnimeContainer, 
  SearchInput, 
  CategorySelect, 
  AnimeList, 
  AnimeItem,
  LoadMoreButton,
  Info
} from './AnimeStyle';

const Anime = () => {
  const {animeData, loadMore } = useContext(MyDataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('adventure');
  const navigate = useNavigate(); 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemClick = (id) => {
    navigate(`/Anime/${id}`); 
  };

  const filteredAnime = animeData[selectedCategory]?.filter((anime) =>
    anime.attributes.canonicalTitle.toLowerCase().includes(searchTerm)
  ) || [];

  return (
    <AnimeContainer>
      <div style={{ textAlign: 'center' }}>
        <SearchInput
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <CategorySelect onChange={handleCategoryChange} value={selectedCategory}>
          <option value="adventure">Adventure Anime</option>
          <option value="romance">Romance Anime</option>
          <option value="horror">Horror Anime</option>
        </CategorySelect>
      </div>
      <AnimeList>
        {filteredAnime.length ? (
          filteredAnime.map((anime) => (
            <AnimeItem key={anime.id} onClick={() => handleItemClick(anime.id)}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <Info>{anime.attributes.canonicalTitle}</Info>
            </AnimeItem>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No anime found</p>
        )}
      </AnimeList>
      <LoadMoreButton onClick={() => loadMore(selectedCategory)}>Load More</LoadMoreButton>
    </AnimeContainer>
  )
}

export default Anime;