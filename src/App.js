import './App.css';
import React from 'react';
import HoverCounter from './Component/HoverCounter';
import HoverCounterWithoutHOC from './Component/HoverCounterWithoutHOC';
import ParentComp from './Component/ParentComp';

function App() {
  return (
    <div class="container">
        <h1> React Assignment 5</h1>
    <h2> 1. Example of React Pure Component? </h2>
    <p> 
      <span> Ans.</span> We can create a component by extending the pure component class. A pure component implements the shouldcomponentupdate life cycle method by performing a Shallow comparison on the props and state of the component. 
      If there is no difference the component is not re-rendered and it will lead to performance boost. It is a good idea to ensure that all the children component are also pure to avoid an expected behaviour. Never mutate the state always return a new object that reflects the new state.
    </p>
    <p>Regular component does not implement the shouldcomponentupdate method it always return true by default. A pure component on the other hand implement shouldcomponentupdate with a Shallow props and state comparison.</p>
    <h2> Expample : </h2>
    <ParentComp/>
    <p>In this example we have made a parentcomp.js file and two other JS file. One is comp.js and other one purecomp.js. In all the three files we have rendered it on console with there names and in parent component we have made a state name with Meenakshi and also made ComponentDidMount and inside Thai one set inerval is there with 2 seconds with which we call state name and again set it Meenakshi. So In console all the three component will render itself once but then after then every 2 sec only parent component and Component will re-render because  parent  component re-render so all child component will also re-rendered unless and until the component  shouldComponentUpdate method is false but pure component do not re-render itself.</p>

    <h2> 2. Example of Higher Order Component? </h2>
    <p> 
      <span> Ans.</span> Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.
    </p>

    <HoverCounterWithoutHOC/>
    <HoverCounter/>
   
    
    </div>
   

  );
}

export default App;