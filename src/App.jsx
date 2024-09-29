import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment,  } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

 

  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <h1>value: {count}</h1>
      <button onClick={decrementHandler}>-</button>
      
    </div>
  );
}

export default App;
