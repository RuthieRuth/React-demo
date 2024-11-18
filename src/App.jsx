// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import Card from "./Components/Card"; // if the jsx is not there, its still reads it as JS since it react is JS
import { useState } from "react";
import personsData from "./Data/persons"; // formerly called persons since itsan export.
import Button from "./Components/Button";

function App() {
  /*  const [ person, setPerson] = useState ({
    firstname:"Emilia",
    title:"Developer",
    age:52,
  }); */

  /*  TO CREATE A BUTTON   */
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // const handleLoginClick = () => {setIsLoggedIn(!isLoggedIn);}; 
  // Above solution, normal way of doing it but has its downside. Use rather:
  const toggleLogin = () => { setIsLoggedIn((previousState) => !previousState);
  }; // using the most up to date value (prev)

  const handleClick = (id) => {
    console.log(`Card ${id} was clicked`);
  };

  console.log(personsData); // to check the array in console

  return (
    <div>
      <header>
        <h1>Progressive Practice React 1</h1>
        {/* <button onClick={handleLoginClick}>{isLoggedIn ? 'Log out' : 'Log in'}</button>  OR */}
        <Button text={isLoggedIn ? "Log out" : "Log in"} onClick={toggleLogin} />
      </header>

      <main>
        {isLoggedIn ? (
          <>
            <h2>People</h2>
            <div className="list">
              {personsData.map(
                (person /*index*/ //index are not stable unless its static or fixed
          ) => (
                  <Card
                    key={person.id} // always have an ID so that it can easily identify deleted, new, moved,etc elements
                    firstname={person.firstname}
                    title={person.title}
                    age={person.age}
                    animal={person.animal}
                    // click={sadkashdbaksbjdakjsbda} // rename and crosscheck wth Margit
                    onClick = {() => handleClick(person.id)} // this is not related to edit/save
                  />

                  /* same as above
          {  
        <Card firstname={person.firstname} title={person.title} age={person.age} animal={person.animal} />
        <Card firstname="Ruth" title="Developer" age="25" />
        <Card firstname="Adam" title="Teacher" age="24" />
        <Card firstname="Lizzie" title="Chef" age="26" />
        <Card firstname="Beatrice" title="Designer" age="24" />
        <Card firstname="Nana" title="Analyst" age="26" />  */
                )
              )}
            </div>
          </>
        ) : (
          <div>
            <p>Log in to see list</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

// idea for cards in portfolio in case you have more than 300, good luck with html

// FUNCTION (STATELESS) COMPONENT- better for simple stuff
/* 
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
} 
*/

// CLASS COMPONENT- better for large stuff but not for recent use. Uses render that is found in the main.jsx
/* 
class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1> // props are inbuilt in components
  }
} 
  */

/* MOVED TO CARD.JSX
function Card(props) { // functions take input/ props. Output will then be a component
  return ( 
    <div>
      <p className="card">{props.firstname} 
        <p>Title: {props.title}</p> 
        <p>Age: {props.age}</p> 
      </p>
    </div>
  );
} */

/*
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Card firstname="Ruth" title="Developer" age="25" />
      <Card firstname="Adam" title="Teacher" age="24" />
      <Card firstname="Lizzie" title="Chef" age="26" />
      <Card firstname="Beatrice" title="Designer" age="24" />
      <Card firstname="Nana" title="Analyst" age="26" />
      <Card/>
      <Card/>
      <Card/>
    </main>
  )
}

export default App
*/
