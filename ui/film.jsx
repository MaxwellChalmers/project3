import React from "react";
import { createRoot } from "react-dom";



function FilmInfoDetailed({film}){
  return(<div>
    <h1> {film.title} </h1>
    <p>"{film.description}"</p>
    <p><i>Released</i>: {film.release_year}</p>
    <p><i>Rating</i>: {film.rating}</p>
    <p> </p>
    <p><i>Price to rent for {film.rental_duration} days:</i> {film.rental_rate} </p>
    <p>Price to purchase {film.replacement_cost} </p>

    <p><i>Note: Lost DVD's will be considered as a purchase (you will not be refunded the rental fee!)  </i> </p>
  </div>);
}



async function main() {
 
  const filmID = window.location.pathname.split("/")[2];
  console.log(filmID);

  const filmResp = await fetch ("api/v1/" + filmID );
  const film = await filmResp.json();
 
  const rootElt = document.getElementById("app");
  const root = createRoot(rootElt);
  root.render(<div> <FilmInfoDetailed film={film} />
  <p>~~~~~~~~~~~~~~~~~~~~~~~~~</p>
  <a href={`/`}>Return to all films!</a> 
  </div>
  );
  

}

window.onload=main
