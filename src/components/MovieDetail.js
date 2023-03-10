import React from "react";

function MovieDetail(props) {
  if(!props.src) {
    return (
      <div className="text-center">
        <h3>Nada dude! maybes try again...</h3>

      </div>
    );
  } else {
    return (
      <div className="text-center">
        <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h3>Director(s): {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Released: {props.released}</h3>
      </div>
    );
  }

}

export default MovieDetail;
