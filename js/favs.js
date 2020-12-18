const favoritesDiv = document.querySelector("#favorites");

const printBookmarks = bmObject => {
    bmObject.forEach(e => {
        print(e);
    });
}

const print = e => {
    favoritesDiv.innerHTML += 
    `<div class="containerLink" id="${e.name}">
        <div class="toLink">
            <a href="${e.link}">
                <img class="${e.class}" src="${e.img}">
            </a>
        </div>
        <p>${e.name}</p>
    </div>
    `;
};


var bookmarks = [
    {
        "name": "Github", 
        "link": "https://github.com/00frank",
        "img": "img/bookmarks/github.png",
        "class": "z2"
    },
    {
        "name": "Youtube",
        "link": "https://www.youtube.com/",
        "img": "img/bookmarks/youtube.png",
        "class": "z1"
    },
    {
        "name": "WhatsApp",
        "link": "https://web.whatsapp.com/",
        "img": "img/bookmarks/whatsapp.png",
        "class": "z2"
    },
    {
        "name": "Gmail", 
        "link": "https://mail.google.com/mail/u/0/",
        "img": "img/bookmarks/gmail.png",
        "class": "z1"
    },
    {
        "name": "Udemy",
        "link": "https://www.udemy.com",
        "img": "img/bookmarks/udemy.png",
        "class": "z2"
    }
];

printBookmarks(bookmarks);
