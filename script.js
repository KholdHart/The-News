import { getNews } from "./api";

getNews().then(data => renderNews(data.articles))

function renderNews(newsData) {
    newsData.forEach(news => {
    const data = {
        urlImage: newsData.urlToImage,
        data: newsData.publishedAt,
        title: newsData.title,
        description: news.description,
        url: news.url
    }
       const card = `
       <div class="card">
                <div class="card-image-wrapper">
                    <img src="https://picsum.photos/200" alt="">
                </div>
                <div class="card-content">
                    <span class="card-date">9 August 2025</span>
                    <h2 class="card-title">
                        <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae officiis possimus iure eveniet deserunt inventore quod nesciunt, quis quae veniam at commodi placeat sed nam. Cum placeat cupiditate quisquam.</a>
                    </h2>
                    <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos, enim officia exercitationem voluptas officiis ducimus praesentium facilis tempore culpa animi dolorum maxime inventore odit, deleniti ad voluptatum similique fugiat?</p>
                </div>
            </div>
           
       `

       //apend the card to the content-wrapper
})

}