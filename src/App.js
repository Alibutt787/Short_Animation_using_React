import './App.css';
import Typing from 'react-typing-animation'
import { Useref } from './Useref';
import { WebAnimation1 } from './WebAnimation1';
import { WebAnimation2 } from './WebAnimation2';

function App() {
 

  return (
    <>
    <WebAnimation2 />
      <Useref />
    <h4>Typing Effect using React-typing-animation</h4>
 <Typing speed={10} >
  <span>This span will get typed.</span>
  </Typing>
  <WebAnimation1/>

 </>
  );
}

export default App;
