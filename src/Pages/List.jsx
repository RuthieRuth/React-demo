// import persons from "../Data/persons"; // change all person to post
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const List = () => {
    const navigate = useNavigate();
    const handleNavigate = (id) => { navigate(`/${id}`); };

    const [posts, setPosts]= useState ([]);
    const [isLoading,setIsLoading] = useState(true);



    useEffect(() => {
        fetch("http://localhost:3001/persons")
        .then ((response) => response.json())
        .then ((data) => {
            setPosts(data);
            setIsLoading (false);
        });
    }, [])

    return (
        <div>
            <main>
                <h2>People</h2>

                <div className="list">
                {isLoading ? (<p>Loading</p>) : (posts.map ((person) => (
                    <Card
                        key={person.id}//always have an ID so that it can easily identify deleted, new, moved,etc elements
                        firstname={person.firstname}
                        title={person.title}
                        age={person.age}
                        animal={person.animal}                      
                        onClick = {() => handleNavigate(person.id)}
                    />
                )))}
                </div>

            </main>
        </div>
    )      
};

export default List;