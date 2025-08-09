import { getNews } from "./api";

const contentWrapper = document.getElementById('contentWrapper');

getNews().then(data => renderNews(data.articles))

function renderNews(newsData) {
    newsData.forEach(news => {
    const data = {
        urlImage: news.urlToImage,
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
       contentWrapper.insertAdjacentHTML('beforeend', card);
})

}