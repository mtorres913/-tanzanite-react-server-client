
import { useState } from 'react';
  // Our functions and variables will go here
  // This is how we previously declared variables
  // let firstName = 'Chris';

  function ClickCounter() {
  const [firstName, setFirstName] = useState('Chris');
  // let counter = 0;
  //    name      function      default value
  const [counter, setCounter] = useState(0);
  //function to increase click counter
  let increaseClickCounter = () => {
    // counter += 1; // Do not modify state directly
    console.log('before', counter)
    setCounter(counter + 1);
    //! counter is not different yet
    console.log(counter)
  }
  let decreaseClickCounter = () => {
    // counter -= 1; // Do not modify state directly
    setCounter(counter - 1);
    console.log(counter)
  }
return (
<div>
<p>Hello World! {firstName}</p>
<p>You clicked {counter} times!</p>
<button onClick={increaseClickCounter}>Increase</button>
<button onClick={decreaseClickCounter}>Decrease</button>
</div>
)
  }
  
export default ClickCounter;