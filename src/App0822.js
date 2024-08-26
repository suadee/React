import { useState } from 'react'

function App() {
  console.log('render');
  const [number, setNumber] = useState(1);
  const double = () => {
    setNumber((prevState) => prevState * 2);
    setNumber((prevState) => prevState * 2);
  };
  
  return(
  <>
    <div>{number}</div>
    <div>したてる、　春奈デザイン</div>
    <button onClick={double}>Double</button>
  </>
  );
}

export default App;