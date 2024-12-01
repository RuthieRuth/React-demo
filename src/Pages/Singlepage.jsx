import Button from "../Components/Button";
import { useParams , useNavigate } from "react-router-dom";
import persons from "../Data/persons";

const Singlepage = () => {
    const {id} = useParams();
    // console.log(id)

    const navigate = useNavigate(); // for to go back button

    const person = persons.find((person) => person.id === parseInt(id));

    return (
        <div>

            <h2>Single- dedicated page for one individual card {person.firstname} </h2>
            <p>Age: {person.title} </p>
            <p>Animal:{person.animal} </p>

            <Button text ="Bact to list" onClick={() => navigate(-1)}/>
        </div>
    )
}; 

export default Singlepage;

