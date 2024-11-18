# React + Vite Demo Project 

In this project is a follow along to teachers tutorials.


### COMPONENTS
- lego blocks
- They are the building blocks of the application. Premade building blocks that can be used and reused anywhere in your application when called on and creates HTML elements.

#### Types
- function component - FUNCTION (STATELESS) COMPONENT- better for simple stuff
- class component - better for large stuff but not for recent use. Uses render that is found in the main.jsx

### PROPS(props) = object and are only read only. no re-rendering
- attributes => properties => props
- *pass in data for the components / send data to components
- shared between components?
- reusable
- from parent to child not vice versa

```react
 <p className="card"> 
    <p>{props.firstname}</p>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
</p>
```

firstname, title, age are attributes of the data

#### Types
- *propType* ensures that values is of the correct datatype
- *defaultProp* gives default values for props in case they aren't passed from parent component

### Export and Import  + Named Exports
- export for single main component from a file written as: export default x
- import brings the component into another file written as: import x from x

```react
export function  Box(){
    return <div>I'm a box</div>
}

export function Circle(){
    return <div>I'm a circle</div>
}
```

then import
``` react
import{Box, Circle} from x

    function App(){
        <div>xxx</div>
        );
    }

export default App;
```

#### Named export with import (for multiple exports): but we use default

* *default can renamed when exported*

``` react
export function ComponentName() {
     return <div>I'm a box</div> 
     }

import {ComponentName} from './FilePath’;
```

### State (QUES: IS IT A SUBSET OF HOOK OR VICE VERSA?= no but related) in COMPONENTS
- Same as props but not read-only. React keeps an eye on it all the time.
- Remembers data between renders, eg: user input, API data, 
- Store values specific to a component
- makes components dynamic and interactive for re-rendering.
- defined inside the component and always at the top

example from slide from mixed exports:

```react
import React, {Component} from 'react';

class counter extends Component{
    state ={
        count:0
    };

  render(){
    return(
        <div>
        <p>Name:{this.props.name}</p>
        <p>Count:{this.state.count}</p>
        </div>
    );
  }
}

export default Counter
```
*uses HOOKS to manage state*

### Hooks
- Special functions that add features like;
    - state, 
    - lifecycle?
    - side effects(doing extra stuff but still doing the work. eg:console.log, fetching) and context to functional components. Making them powerful like class components
    - context functional (later)
    

#### Rules of Hooks
- start with use eg: useState, useEffect, useContext, useReducer,etc
- called at top part of a component(begining), right after the function line n b4 return statement. Not inside conditional statements, loop or nested functions
- only used in react.
- always import?

#### useState = const [variable, method]= useState();
- always import useState before you can use it.
- add and manage state in functional components
- variable = count =>  current state while method = setCount => update

```react
function Counter() {
  const [count, setCount] = useState(0); // Initializes state to 0

  return (
    <div>
      ....
    </div>
  );
}
```


- className: a way to add css styles to an elkement. it tells react component to look for example .card in css file

