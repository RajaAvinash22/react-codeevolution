import React from 'react';
import './App.css';
// import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
// import ClassClick from './components/ClassClick'
// import Message from './components/Message'
// import Counter from './components/Counter';
// import FuncClick from './components/FuncClick'
// import Greet from './components/funC';
// import Welcome from './components/classC';
// import Hello from './components/hello';

function App() { 
  return (
    <div className="App">
 {/* State passing from one compo to another */}
      {/* <Message /> */}

      {/* setState method in detail */}
      {/* <Counter /> */}

      {/* when u have clue to pass properties u can pass by attributes */}
      {/* function components props */}
      {/* <Greet name="VIRAT" heroName="Chikoo">
        <p>Hello Captain</p>
      </Greet>
      <Greet name="ROHIT" heroName="Hit Man">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="DHONI" heroName="Thalla" /> */}

      {/* class component props */}
       {/* <Welcome name="VIRAT" heroName="Chikoo" />
      <Welcome name="ROHIT" heroName="Hit Man" /> */}
      {/* <Welcome name="DHONI" heroName="Thalla" />  */}
      {/* <Hello /> */}

      {/* handling event with funcComponent */}
      {/* <FuncClick /> */}

      {/* handling event with classComponent */}
      {/* <ClassClick /> */}

      {/* binding of Event Handlers */}
      {/* <EventBind /> */}

{/* child compo want to communicate with parent compo */}
      <ParentComponent />
    </div>
  );
}

export default App;
