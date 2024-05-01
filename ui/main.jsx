import React from "react";
import { createRoot } from "react-dom";



function FilmInfo({id, title, description}){
  return <p>
    <a href={`/film/${id}`}>{title}</a> : {description} 
  </p>
}


async function main() {
  const filmsResp = await fetch("/api/v1/films"); 
  const films = await filmsResp.json();


  const rootElt = document.getElementById("app");
  const root = createRoot(rootElt);
  root.render(
    films.map((film) => (
      <ul>
        <li>
          <FilmInfo
            id={film.id}
            title={film.title}
            description={film.description}
          />
        </li>
      </ul>
    ),
  ));

  const filmID = 1;
  const filmResp = await fetch("film/23" ); 
  const film = await filmResp.json();


 
  
  console.log(film);

  console.log("hello world");
}

window.onload=main
