import React from 'react';
import './App.css';
import CompoC from './components/CompoC';
import { UserProvider } from './components/userContext';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import User from './components/User';
// import RenderCounter from './components/RenderCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter from './components/ClickCounter';
// import Hero from './components/Hero'
// import ErrorBound from './components/ErrorBound'
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';
// import FRParentInput from './components/FRParentInput'
// import PortalDemo from './components/PortalDemo';
// import PureComp from './components/PureComp'
// import ParentComp from './components/ParentComp'
// import FragmentDemo from './components/FragmentDemo'
// import Table from './components/Table';
// import Form from './components/Form'
// import NameList from './components/NameList'
// import LifeCycleA from './components/LifeCycleA'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Inline from './components/Inline'
// import Stylesheet from './components/Stylesheet';
// import UserGreeting from './components/UserGreeting'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
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
      {/* module css method */}
      {/* <h1 className='error'>Error</h1>

      <h1 className={styles.success}>Success</h1> */}

      {/* css first method */}
      {/* <Stylesheet primary={true}/> */}

      {/* inline css */}
      {/* <Inline /> */}
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

      {/* child compo want to communicate with parent compo with passing arguments in child*/}
      {/* <ParentComponent /> */}

      {/* Conditional Rendering */}
      {/* <UserGreeting /> */}

      {/* List REndering */}
      {/* <NameList /> */}
      {/* Basics of form */}
      {/* <Form /> */}

      {/* Mounting LifeCycleA */}
      {/* <LifeCycleA /> */}

      {/* FrageMents */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}

      {/* Pure Component for class components */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* Memo for fuction components */}

      {/* Refs in react */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}

      {/* Forwarding Refs */}
      {/* <FRParentInput /> */}

      {/* Portal for rendering DOM */}
      {/* <PortalDemo /> */}

      {/* ERRROR Boundary */}
      {/* <ErrorBound>
      <Hero heroName="BatMan" />
      <Hero heroName="IronMan" />
      <Hero heroName="Joker" />
      </ErrorBound> */}

      {/* Higher order compo */}
      {/* <ClickCounter name='Avinash'/>
      <HoverCounter /> */}

      {/* Render Props */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User name={()=>'Avinash'} >
      <User render={(isLoggedIn) => isLoggedIn ?'Avinash':'Guest'} /> */}
      {/* <RenderCounter>
        {(count, increement) => (
          <ClickCounter2 count={count} increement={increement} />
        )}
      </RenderCounter>
      <RenderCounter>
        {(count, increement) => (
          <HoverCounter2 count={count} increement={increement} />
        )}
      </RenderCounter> */}

      {/* Context implementing on components */}
      {/* <UserProvider value="Avinash"> */}
        <CompoC />
      {/* </UserProvider> */}

    </div>
  );
}

export default App;
