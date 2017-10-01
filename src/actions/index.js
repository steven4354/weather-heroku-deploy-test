const API_KEY = 'f2b68d4a6814fcda1ba804da9b490232';
const ROOT_URL = "http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}"

import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = '${ROOT_URL}&q=${city},us'
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
