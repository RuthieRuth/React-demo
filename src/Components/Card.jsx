import { useState } from "react";
import Button from "./Button";

/* function Card(props) { // functions take input/ props. Output will then be a component
    return (
        <div>
            <p className="card"> 
                <p>{props.firstname}</p>
                <p>Title: {props.title}</p>
                <p>Age: {props.age}</p>
                <p>Animal: {props.animal}</p>
            </p>
        </div>
    );
} */

// DESTRUCTURTNG = props changed to object properties. Removed props from this list
function Card ({firstname, title, age, animal}) { // rename click

  const [isEditing, setIsEditing]= useState(false);
  const [animalValue, setAnimalValue] = useState(animal);

  const toggleEdit = () => setIsEditing((prev) => !prev);
  const handlechange = (event) => setAnimalValue (event.target.value); 


  return (
    <div className="card">

        <p>{firstname}</p>
        <p>Title: {title}</p>
        <p>Age: {age}</p>
        {/* <p>Animal: {animal}</p> */}

        {isEditing 
        ? (<input type="text" value={animalValue} onChange={handlechange} />) 
        : (<p>Animal:{animalValue}</p>)}

        <Button onClick={toggleEdit} text={isEditing ? 'Save': 'Edit'} /> 

         {/* <Button text="Edit" click={click} />   */}
    
    </div>
  );
}

export default Card;
