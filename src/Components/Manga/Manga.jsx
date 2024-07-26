import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { MyDataContext } from '../Provider/Provider';
import { MangaContainer, SearchInput, CategorySelect, MangaList, MangaItem, Info, LoadMoreButton } from './MangaStyle';

const Manga = () => {
  const { animeData, loadMore } = useContext(MyDataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('adventureManga');
  const navigate = useNavigate(); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemClick = (id) => {
    navigate(`/Manga/${id}`); 
  };

  const filteredManga = (animeData[selectedCategory] || [])
    .filter((manga) => {
      const title = manga.attributes?.titles?.canonicalTitle?.toLowerCase() || '';
      return title.includes(searchTerm);
    });

  return (
    <MangaContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="Search manga..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <CategorySelect onChange={handleCategoryChange} value={selectedCategory}>
          <option value="adventureManga">Adventure Manga</option>
          <option value="actionManga">Action Manga</option>
        </CategorySelect>
      </div>
      <MangaList>
        {filteredManga.length ? (
          filteredManga.map((manga) => (
            <MangaItem key={manga.id} onClick={() => handleItemClick(manga.id)}>
              <img
                src={manga.attributes?.posterImage?.small}
                alt={manga.attributes?.titles?.en || 'No title'}
              />
              <Info>{manga.attributes?.titles?.en_jp}</Info>
            </MangaItem>
          ))
        ) : (
          <p>No manga found</p>
        )}
      </MangaList>
      <LoadMoreButton onClick={() => loadMore(selectedCategory)}>Load More</LoadMoreButton>
    </MangaContainer>
  );
};

export default Manga;
