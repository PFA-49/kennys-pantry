import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './reducers/counterSlice';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import IngredientsContainer from './containers/IngredientsContainer.jsx';
import Navbar from './Components/Navbar.jsx';
import Logo from './Components/Logo.jsx';
import RecipeContainer from './Components/RecipeContainer.jsx';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex'>
        <Navbar />
        <Logo />
        <RecipeContainer />
        <IngredientsContainer />
      </div>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment count
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement count
        </button>
        <p>
          Count is {count}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
