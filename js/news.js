//Api from mediastack (api_key required!): https://mediastack.com
const NEWS_KEY = "";
if (NEWS_KEY === "") {
    console.error("No MediaStack api key registered, get it from: https://mediastack.com");
} else {
    const newsBlock = document.querySelector("#news");
    var newsArray;

    fetch(`http://api.mediastack.com/v1/news?access_key=${NEWS_KEY}&countries=ar`)
        .then((response) => response = response.text())
        .then((data) => { printNews(data) })
        .catch(err => console.error(err));

    const printNews = (datatext) => {
        var news = JSON.parse(datatext).data;
        var newsNoImg = [];
        let newsWImg = 0;
        news.forEach(e => {
            /* properties of the new:
                - author 
                - category
                - country: set as AR
                - description
                - image: could be null or not
                - language: almost always ES
                - published_at
                - source
                - title
                - url
            */
            if (e.image != undefined || e.image != null) {
                let card =
                    `
                    <div class="new_card">
                        <a href="${e.url}">
                            <div class="card_header">
                                <span class="author">${e.author == null ? "Frank news" : e.author}</span>
                                <h3 class="title">${e.title}</h3>
                            </div>
                            <div class="new_image">
                                <img src="${e.image}">
                            </div>
                        </a>
                    </div>
                    `
                    ;
                newsBlock.innerHTML += card;
                newsWImg++;
            } else {
                newsNoImg.push(e);
            }
        });

        newsNoImg.forEach(e => {
            let card =
                `
                    <div class="new_card-no-img">
                        <a href="${e.url}">
                            <span class="author-no-img">${e.author == null ? "Frank news" : e.author}</span>
                            <h3 class="title-no-img">${e.title}</h3>
                        </a>
                    </div>
                    `
                ;
            newsBlock.innerHTML += card;
        });
    }
}