import { showMessage } from "./script.js";

const API_KEY = '6cf9590af3424499bc9ab3b5a5a5e32f'
const BASE_URL = 'https://newsapi.org/v2'

export async function getNews() {
    showMessage('Loading...');
    try {
        const getNewsDataApi = await
        fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`)
        return getNewsDataApi.json()
    } catch (error) {
        console.log(error)
    } 
}

export async function getSearchNews(query) {
   try {
        const getNewsDataApi = await
        fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`)
        return getNewsDataApi.json()
    } catch (error) {
        console.log(error)
    } 
}