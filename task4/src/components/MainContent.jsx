import {useState} from 'react';
import "./../assets/css/MainContent.css";
import Button from './Button';

const MainContent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);

  return (
      <div className="main-content">
          <h2 className='counter-value'>Counter: {counter}</h2>
          <Button onClick={increment} label="Increase" />
          <Button onClick={decrement} label="Decrease" />
      </div>
  );
}
export default MainContent;