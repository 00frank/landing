const main = document.querySelector("main");

//select all the child divs to then add "hide" class
const weatherDiv = document.querySelector("#weather");
const dolarDiv = document.querySelector("#dolar");
const linksDiv = document.querySelector("#favorites");
const newsDiv = document.querySelector("#news");
const moneyDiv = document.querySelector("#money")


const searcher = "https://www.google.com/search?q=";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const line_container = document.querySelector("form div.line_container");
const line = document.querySelector("form div#line");
form.onsubmit = (e) => {
    e.preventDefault();
    window.location = `${searcher}${search.value}`
}
search.addEventListener("focus", toLeft)
search.addEventListener("blur", toRight)
search.addEventListener("keyup", function (e) {
    console.info(e.key)
})

function toLeft() {
    //hide all child divs
    weatherDiv.classList.add("hide");
    moneyDiv.classList.add("hide");
    linksDiv.classList.add("hide");
    newsDiv.classList.add("hide");

    main.classList.add("fade");
    var elem = document.getElementById("line");
    var width = 1;
    var id = setInterval(frame, 0.1);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width = width + 1;
            elem.style.width = width + '%';
        }
    }
}

function toRight() {
    //set divs to visible again
    weatherDiv.classList.remove("hide");
    moneyDiv.classList.remove("hide");
    linksDiv.classList.remove("hide");
    newsDiv.classList.remove("hide");

    main.classList.remove("fade")
    var elem = document.getElementById("line");
    var width = 103;
    var id = setInterval(frame, 0.1);
    function frame() {
        if (width <= 1) {
            clearInterval(id);
            elem.style.width = 0;
        } else {
            width = width - 1;
            elem.style.width = width + '%';
        }
    }
}