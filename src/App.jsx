// import { useState } from 'react'

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

