import { getNews, getSearchNews, getNewsByCategory } from "./api.js";

const newsSearchInput = document.getElementById('newsSearchInput');
const searchBtn = document.getElementById('searchBtn');
const contentWrapper = document.getElementById('contentWrapper');
const messageText = document.getElementById('messageText');
const categoryBtns = document.querySelectorAll('.category-btn');

let currentCategory = 'general';
let isSearchMode = false;

// Initialize with general news
getNews().then(data => {
    if (data && data.articles) {
        renderNews(data.articles);
    }
});

function renderNews(newsData) {
    hideMessage();
    contentWrapper.innerHTML = ""; // Clear previous results
    
    if (!newsData || newsData.length === 0) {
        showMessage('No articles found. Try a different search or category.');
        return;
    }

    newsData.forEach(news => {
        if (!news.title || news.title === '[Removed]') return; // Skip removed articles
        
        const defaultImage = 'https://picsum.photos/400/200';
        const data = {
            urlImage: news.urlToImage ?? defaultImage,
            date: new Date(news.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            title: news.title,
            description: news.description,
            url: news.url,
            source: news.source?.name || 'Unknown Source'
        }
        
        const card = `
        <div class="card">
            <div class="card-image-wrapper">
                <img src="${data.urlImage}" alt="News image" onerror="this.src='${defaultImage}'">
            </div>
            <div class="card-content">
                <div class="card-date">${data.date} • ${data.source}</div>
                <h2 class="card-title">
                    <a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.title}</a>
                </h2>
                <p class="card-description">
                    ${data.description ?? "No description available."}
                </p>
                <a class="read-more" href="${data.url}" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
        `;
        contentWrapper.insertAdjacentHTML('beforeend', card);
    });
}

// Category filter functionality
categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        
        // Update active state
        categoryBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update current category and reset search mode
        currentCategory = category;
        isSearchMode = false;
        newsSearchInput.value = '';
        
        // Fetch news for selected category
        if (category === '') {
            // General news (top headlines)
            getNews().then(data => {
                if (data && data.articles) {
                    renderNews(data.articles);
                }
            });
        } else {
            // Category-specific news
            getNewsByCategory(category).then(data => {
                if (data && data.articles) {
                    renderNews(data.articles);
                }
            });
        }
    });
});

// Search functionality
function performSearch() {
    const inputSearchValue = newsSearchInput.value.trim();
    
    if (inputSearchValue === '') {
        // If search is cleared, go back to current category
        isSearchMode = false;
        if (currentCategory === '') {
            getNews().then(data => {
                if (data && data.articles) {
                    renderNews(data.articles);
                }
            });
        } else {
            getNewsByCategory(currentCategory).then(data => {
                if (data && data.articles) {
                    renderNews(data.articles);
                }
            });
        }
    } else {
        // Perform search
        isSearchMode = true;
        getSearchNews(inputSearchValue).then(data => {
            if (data && data.articles) {
                renderNews(data.articles);
            }
        });
    }
}

// Search event listeners
searchBtn.addEventListener('click', performSearch);

newsSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Debounced search on input (optional - uncomment if you want live search)
/*
let searchTimeout;
newsSearchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
});
*/

export function showMessage(message) {
    messageText.style.display = 'block';
    messageText.classList.add('show');
    messageText.textContent = message;
    contentWrapper.innerHTML = '';
}

function hideMessage() {
    messageText.style.display = 'none';
    messageText.classList.remove('show');
}