import React, { createContext, useState, useEffect } from "react";
import { fetchAnimeByTag, fetchMangaByTag } from "../Request/request";
export const MyDataContext = createContext();

const MyDataProvider = ({ children }) => {
  const [animeData, setAnimeData] = useState({
    adventure: [], 
    romance: [],
    horror: [],
    adventureManga: [],
    actionManga: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState({
    adventure: { limit: 20, offset: 0 },
    romance: { limit: 20, offset: 0 },
    horror: { limit: 20, offset: 0 },
    adventureManga: { limit: 20, offset: 0 },
    actionManga: { limit: 20, offset: 0 }
  });
  const [favorites, setFavorites] = useState([]);

  const tags = {
    adventure: 'adventure',
    romance: 'romance',
    horror: 'horror',
    adventureManga: 'adventure',
    actionManga: 'action'
  };

  const fetchData = async (category, limit, offset) => {
    try {
      setLoading(true);
      const fetchFunction = category.includes('Manga') ? fetchMangaByTag : fetchAnimeByTag;
      const response = await fetchFunction(tags[category], limit, offset);
      setAnimeData(prevData => ({
        ...prevData,
        [category]: [...prevData[category], ...response.data]
      }));
      setPage(prevPage => ({
        ...prevPage,
        [category]: { ...prevPage[category], offset: offset + limit }
      }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Object.keys(tags).forEach(category => {
      const { limit, offset } = page[category];
      fetchData(category, limit, offset);
    });
  }, []); 

  const loadMore = (category) => {
    const { limit, offset } = page[category];
    fetchData(category, limit, offset);
  };

  const toggleFavorite = (item) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => fav.id === item.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== item.id);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  return (
    <MyDataContext.Provider value={{ animeData, loading, error, loadMore, favorites, toggleFavorite }}>
      {children}
    </MyDataContext.Provider>
  );
};

export default MyDataProvider;
