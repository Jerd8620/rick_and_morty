import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id }) {
   // props --> {name: 'string', species: 'string', gender: 'string', image, 'string', onClose: funcion}
   return (
      <div>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} /> 
      </div>
   );
}


export default Card;

// la responsabilidad de Card es mostrar una carta, mostrar informacion y caracteristicas de cada card
// que se mande por parametros