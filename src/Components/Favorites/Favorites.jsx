import React, { useContext } from 'react';
import { MyDataContext } from '../Provider/Provider';
import { FavoritesContainer, ItemCard } from './FavoritesStyle';

const Favorites = () => {
  const { favorites } = useContext(MyDataContext);

  return (
    <FavoritesContainer>
      <h1>Favorites</h1>
      <div>
        {favorites.length ? (
          favorites.map((item) => (
            <ItemCard key={item.id}>
              <img
                src={item.attributes.posterImage.small}
                alt={item.attributes.canonicalTitle || item.attributes.titles.en}
              />
              <p>{item.attributes.canonicalTitle || item.attributes.titles.en}</p>
            </ItemCard>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </FavoritesContainer>
  );
};

export default Favorites;
