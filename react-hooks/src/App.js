import React from 'react';

import './App.css';
import ClassCounter2 from './components/ClassCounter2';
import HookCounter5 from './components/HookCounter5';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* counter by class component */}
      {/* <ClassCounter /> */}
      {/* counter by hook useState method */}
      {/* <HookCounter /> */}
      {/* counter for reset , increement, dcreement */}
      {/* <HookCounter2 /> */}
      {/* useState by object through form */}
      {/* <HookCounter3 />
      <HookCounter4 /> */}
      {/* 
      useEffects after render */}
      {/* <ClassCounter2 />
      <HookCounter5 /> */}

      {/* useEffect to render only once */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}

      {/* useEffect with incorrect dependancy */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
{/* Data fetch with useEffect */}
      {/* <DataFetching /> */}

      {/* useContext hook */}
      <UserContext.Provider value={'Avinash'}>
      <ChannelContext.Provider value={'Ranosys'}>
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
