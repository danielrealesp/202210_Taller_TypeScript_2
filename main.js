import { series } from './data.js';
//Render series in the DOM
//We need to create a function that will render the series in the DOM
let renderer = function (serie) {
    //Create the HTML element with the id, name, channel and seasons
    let HTML = `<tr>
                <th scope="row"> ${serie.id} </th>
                <td class="nombre">
                    <a id="${serie.nombre}-card" href="#">${serie.nombre}</a>
                </td>
                <td>${serie.canal}</td>
                <td>${serie.temporada}</td>
               </tr> `;
    return HTML;
};
let renderSeries = function () {
    //Get the HTML element
    let table = document.getElementById("table-body");
    //Insert the elements into the table
    if (table) {
        table.innerHTML = series.map(renderer).reduce((a, b) => a + b, "");
    }
};
let addListeners = function () {
    //Get the elements from the DOM
    let names = series.map(serie => serie.nombre + "-card");
    let elements = names.map(name => document.getElementById(name));
    let elementsArray = elements.filter(element => element != null);
    //Add the event listener to each element
    elementsArray.forEach(element => element.addEventListener("click", handleCardClick));
};
let handleCardClick = function (event) {
    //Get the element that was clicked
    let element = event.target;
    //Get the text of the element
    let text = element.innerHTML;
    //Get the series that has the same name
    let serie = series.find(serie => serie.nombre == text);
    //If serie is defined render the card
    if (serie) {
        renderCard(serie);
    }
};
let renderAverageSeason = function () {
    let average = series.reduce((a, b) => a + b.temporada, 0) / series.length;
    let averageSeason = document.getElementById("average-season");
    if (averageSeason) {
        averageSeason.innerHTML = "Seasons average: " + average.toString();
    }
};
let renderCard = function (serie) {
    let card = document.getElementById("card");
    if (card) {
        card.innerHTML = `<div class="card">
                            <img class="card-img-top" src="./${serie.id}.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${serie.nombre}</h5>
                                <p class="card-text">${serie.descripcion}</p>
                                <a href="${serie.url}" target="blank">${serie.url}</a>
                            </div>
                        </div>`;
    }
};
let consolelog = function (message) {
    alert(message);
};
renderSeries();
addListeners();
renderAverageSeason();
