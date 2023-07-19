import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL

const api = axios.create({
  baseURL: baseURL,
  params: {
    api_key: apiKey,
  },
})

export const getMovieListOriginal = async () => {
  const response = await api.get("/discover/movie")
  return response.data.results
}

export const getMovieListTranding = async () => {
  const response = await api.get("/trending/movie/day")
  return response.data.results
}

export const getMovieListUpComing = async () => {
  const response = await api.get("/movie/upcoming")
  return response.data.results
}

export const getMovieListTopRated = async () => {
  const response = await api.get("/movie/top_rated")
  return response.data.results
}

export const getMovieSearch = async () => {
  const response = await api.get("/discover/movie")
  return response.data.results
}

export const searchMovie = async (q) => {
  const response = await api.get("/search/movie", {
    params: {
      query: q,
    },
  })
  return response.data
}
