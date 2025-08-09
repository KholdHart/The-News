import { showMessage } from "./script.js";

const API_KEY = '6cf9590af3424499bc9ab3b5a5a5e32f';
const BASE_URL = 'https://newsapi.org/v2';

export async function getNews() {
    showMessage('Loading top headlines...');
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&pageSize=20&apiKey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'error') {
            throw new Error(data.message || 'API returned an error');
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        showMessage('Failed to load news. Please try again later.');
        return { articles: [] };
    }
}

export async function getSearchNews(query) {
    if (!query || query.trim() === '') {
        return { articles: [] };
    }
    
    showMessage(`Searching for "${query}"...`);
    try {
        const encodedQuery = encodeURIComponent(query.trim());
        const response = await fetch(`${BASE_URL}/everything?q=${encodedQuery}&sortBy=relevancy&pageSize=20&language=en&apiKey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'error') {
            throw new Error(data.message || 'API returned an error');
        }
        
        return data;
    } catch (error) {
        console.error('Error searching news:', error);
        showMessage('Failed to search news. Please try again later.');
        return { articles: [] };
    }
}

export async function getNewsByCategory(category) {
    if (!category || category.trim() === '') {
        return getNews(); // Default to general news
    }
    
    showMessage(`Loading ${category} news...`);
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'error') {
            throw new Error(data.message || 'API returned an error');
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching category news:', error);
        showMessage(`Failed to load ${category} news. Please try again later.`);
        return { articles: [] };
    }
}