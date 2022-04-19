import {series} from './data.js';
import { Serie } from './serie.js';


//Render series in the DOM

//We need to create a function that will render the series in the DOM

let renderer: (serie:Serie) => string = function (serie: Serie): string
{
    //Create the HTML element with the id, name, channel and seasons
    let HTML: string = `<tr>
                <th scope="row"> ${serie.id} </th>
                <td class="nombre">
                    <a id="${serie.nombre}-card" href="#">${serie.nombre}</a>
                </td>
                <td>${serie.canal}</td>
                <td>${serie.temporada}</td>
               </tr> `;
    return HTML;
}

let renderSeries: () => void = function(): void
{
    //Get the HTML element
    let table: HTMLElement | null = document.getElementById("table-body");
    //Insert the elements into the table
    if(table)
    {
        table.innerHTML = series.map(renderer).reduce((a,b) => a + b, "");
    }
}

let addListeners: () => void = function(): void
{
    //Get the elements from the DOM
    let names : Array<string> = series.map(serie => serie.nombre + "-card");
    let elements: Array<HTMLElement|null> = names.map(name => document.getElementById(name));
    let elementsArray: Array<HTMLElement> = elements.filter(element => element != null) as Array<HTMLElement>;
    //Add the event listener to each element
    elementsArray.forEach(element => element.addEventListener("click", handleCardClick));
}

let handleCardClick: (event: Event) => void = function(event: Event): void
{
    //Get the element that was clicked
    let element: HTMLElement = event.target as HTMLElement;
    //Get the text of the element
    let text: string = element.innerHTML;

    //Get the series that has the same name
    
    let serie: Serie | undefined = series.find(serie => serie.nombre == text);
    
    //If serie is defined render the card
    if(serie) 
    {
        renderCard(serie);
    }
}

let renderAverageSeason:() => void = function(): void
{
    let average: number = series.reduce((a,b) => a + b.temporada, 0) / series.length;
    let averageSeason: HTMLElement | null = document.getElementById("average-season");
    if(averageSeason)
    {
        averageSeason.innerHTML =  "Seasons average: " + average.toString();
    }
}

let renderCard:(serie:Serie) => void = function(serie:Serie): void
{
    let card: HTMLElement | null = document.getElementById("card");
    if(card)
    {
        card.innerHTML = `<div class="card">
                            <img class="card-img-top" src="./${serie.id}.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${serie.nombre}</h5>
                                <p class="card-text">${serie.descripcion}</p>
                                <a href="${serie.url}" target="blank">${serie.url}</a>
                            </div>
                        </div>`;
    }
}

let consolelog:(message:string) => void = function(message:string): void
{
    alert(message);
}

renderSeries();
addListeners();
renderAverageSeason();
