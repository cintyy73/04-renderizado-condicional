/* eslint-disable react/prop-types */
const Card = ({element}) => {
   
const { name, breed, age, color, image, isPuppy}=element
  return <div>
   {isPuppy && <>
    <h4>NOMBRE: {name}</h4>
    <p>Raza: {breed}</p>
    <p>Edad: {age}</p>
    <p>Color: {color}</p>
    <img src={image} alt={`perro de raza: ${breed}`} style={{width:200, height:200}} /></>}

  </div>;
};
export default Card;
