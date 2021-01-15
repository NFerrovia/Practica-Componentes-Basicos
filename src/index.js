import React from "react";
import ReactDOM from "react-dom";

// faker era una libreria que permite acceso a información con fines de testeo
// o prototipos (imagenes, frases, etc)

import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Se llama al componente CommentDetail y en vez de crear un nuevo
// componente para cada comentario, se reutiliza el mismo componente
// y se alteran los datos.
// Toda la información como fecha y nombres estan codificados de una
// manera estática (no cambian) ya que es una práctica.

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Laura"
          timeAgo="Hoy a las 4:45PM"
          text="¡Buen Post!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Juan"
          timeAgo="Hoy a las 2:00AM"
          text="Me gustaria ver que más van a agregar en el futuro"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="José"
          timeAgo="Ayer a las 5:00PM"
          text="Interesante forma de ver el problema."
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
