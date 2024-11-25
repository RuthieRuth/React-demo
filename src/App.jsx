// import { useState } from 'react'

import Card from "./Components/Card"; // if the jsx is not there, its still reads it as JS since it react is JS
import { useState } from "react";
import personsData from "./Data/persons"; // formerly called persons since itsan export.
import Button from "./Components/Button";
import Header from "./Components/Header";
import List from "./Pages/List";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/appRoutes";
import "./App.css";

function App() {

  return (
    <div>
      <RouterProvider 
        router={router}
        future = {{v7_startTransition:true}} />
    </div>
  );
}

export default App;

