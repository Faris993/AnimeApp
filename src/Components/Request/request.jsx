import axios from "axios";

const fetchData = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchAnimeByTag = async (tag, limit, offset) => {
  const apiUrl = `https://kitsu.io/api/edge/anime?filter[genres]=${tag}&page[limit]=${limit}&page[offset]=${offset}`;
  return fetchData(apiUrl);
};

export const fetchMangaByTag = async (tag, limit, offset) => {
  const apiUrl = `https://kitsu.io/api/edge/manga?filter[genres]=${tag}&page[limit]=${limit}&page[offset]=${offset}`;
  return fetchData(apiUrl);
};
