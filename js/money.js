//Api from DolarSi (no api_key required)
const date = new Date();
const dayOfWeek = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const today = `${dayOfWeek[date.getDay()]} ${date.getDate()}/${date.getMonth()+1} ${date.getFullYear()}`
const dateDiv = document.querySelector("#today-date");
const currency1 = document.querySelector("#currency1");
const currency2 = document.querySelector("#currency2");

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(c => c.json())
    .then(data => printMoney(data))
    .catch(err => console.error(err));

const printMoney = money => {
    let USD_BLUE = parseFloat(money[1].casa.venta);
    let USD_OFICIAL = parseFloat(money[0].casa.venta);
    
    dateDiv.innerHTML = today;
    currency1.innerHTML = `Blue: $${USD_BLUE}`;
    currency2.innerHTML = `Oficial: $${USD_OFICIAL}`;
    // tooltip from https://atomiks.github.io/tippyjs/
    tippy('#currency2', {
        duration: 0,
        placement: 'bottom',
        arrow: false,
        followCursor: 'default',
        content: `+65% $${(USD_OFICIAL*0.65) + USD_OFICIAL}`,
    });
}

