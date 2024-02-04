import axios from 'axios';

export const fetchMoviesList = async(keyword) => {

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: keyword},
  headers: {
    'X-RapidAPI-Key': '0996f35d00msh4868da494aedfeep11e607jsncfef9f1629e1',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  return response.data;
} catch (error) {
	console.error(error);
}
}