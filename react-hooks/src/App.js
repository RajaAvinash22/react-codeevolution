import React, { useReducer } from 'react';
import './App.css';
import UserForm from './components/UserForm';
// import Doc from './components/Doc';
// import Doc2 from './components/Doc2';
// import Counter from './components/Counter';
// import Counter2 from './components/Counter2';
// import FocusInput from './components/FocusInput';
// import ClassTimer from './components/ClassTimer';
// import HookTimer from './components/HookTimer';
// import MemoHook from './components/MemoHook';
// import ClassCounter2 from './components/ClassCounter2';
// import HookCounter5 from './components/HookCounter5';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import DataFetching1 from './components/DataFetching1';
// import DataFetching2 from './components/DataFetching2';
// import ParentComponent from './components/ParentComponent';
// import Candy from './components/Candy';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
// import CompoA from './components/CompoA';
// import CompoB from './components/CompoB';
// import CompoC from './components/CompoC';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';

// for useContext hook
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

//for useReducer Global hook
// export const CountContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increement':
//             return state + 1
//         case 'decreement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }
function App() {
  // const [count,dispatch] = useReducer(reducer,initialState)
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
      {/* <UserContext.Provider value={'Avinash'}>
      <ChannelContext.Provider value={'Ranosys'}>
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer Hook Local State Management*/}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* useReducer Hook Global State Management */}
      {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
      Count - {count}
      <CompoA />
      <CompoB />
      <CompoC />
      </CountContext.Provider> */}

      {/* useReducer hook data fetching */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}

      {/* useCallback Hooks */}
      {/* <ParentComponent />
      <Candy /> */}
      {/* useMemo Hook */}
      {/* <MemoHook /> */}

      {/* useRef hook login input to be focus */}
      {/* <FocusInput />
    <ClassTimer />
    <HookTimer /> */}

      {/* custom hooks */}
      {/* <Doc />
      <Doc2 /> */}

      {/* useCustom counter hook */}
      {/* <Counter />
      <Counter2 /> */}
      <UserForm />
    </div>
  );
}

export default App;
