// Typically we would store in {process.env.API_KEY}
const API_KEY ="cd779552c7d5feac92c200b8250790d2";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRateed:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
}

export default requests;