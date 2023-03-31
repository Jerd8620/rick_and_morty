import Card from './Card';

function Cards({ characters, onClose }) {  // es un  array de objetos [{...}, {...}, {...}]

return (
   <div>
      {
         characters.map(({id, name, species, gender, image}) => {
           return <Card
            key={id}    // el parametro key es solo para react
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={() => onClose(id)}
           />
         })
      }
   </div>
)
}

export default Cards;