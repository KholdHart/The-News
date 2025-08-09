import { getNews, getSearchNews } from "./api.js";
const newsSearchInput = document.getElementById('newsSearchInput');
const contentWrapper = document.getElementById('contentWrapper');
const messageText = document.getElementById('messageText');

getNews().then(data => renderNews(data.articles))

function renderNews(newsData) {
    newsData.forEach(news => {
        const defaultImage = 'https://picsum.photos/600'
    const data = {
        urlImage: news.urlToImage ?? defaultImage,
        data: news.publishedAt,
        title: news.title,
        description: news.description,
        url: news.url
    }
       const card = `
       <div class="card">
                <div class="card-image-wrapper">
                    <img src="${data.urlImage}" >
                </div>
                <div class="card-content">
                    <span class="card-date">${data.date}</span>
                    <h2 class="card-title">
                        <a href="${data.url}">${data.title}</a>
                    </h2>
                    <p class="card-description">
                    ${data.description}
                    </p>
                </div>
            </div>
           
       `

       //apend the card to the content-wrapper
       contentWrapper.insertAdjacentHTML('beforeend', card )
})

messageText.style.display = 'none' // Hide the loading message after rendering

}

// Event Listener for searching

newsSearchInput.addEventListener('input', event => {
    const inputSearchValue = event.target.value 

    contentWrapper.innerHTML = ''; // Clear previous results
    if  (inputSearchValue == '') {
        getNews().then(data => renderNews(data.articles));
       
    } else 
        {
            getSearchNews(inputSearchValue).then(
            data => renderNews(data.articles))

    }

    getSearchNews(inputSearchValue).then(
        data => renderNews(data.articles))
    
})

export function showMessageText(message) {
    messageText.style.display = 'flex';
    messageText.textContent = message;

}