import { useSelector, useDispatch } from 'react-redux';
import './Counter.css';
import { counterActions } from '../store/index';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

   return (
      <main className='counter'>
         <h1>Counter</h1>
         <div className='value'>{counter}</div>
         <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
         </div>
      </main>
   );
};

export default Counter;
