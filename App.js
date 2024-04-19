import { useState } from 'react';

// Import the CSS file for styling
import './style.css';

// Import the MyArticle component from the './components/MyArticle' module
import MyArticle from './components/MyArticle';

// Define the App component, a functional component
function App() {
  /* Declare a state variable 'isVisible' and a function 'setVisibility' to toggle its value
    Examples of how to declare different types of Variables as opposed to plain Javascript
  */
  const [isVisible, setVisibility] = useState(true);
  const [mytext , setmytext] = useState('Joshua Rice');
  const [myVar , setmyVar] = useState('');
  const [myNum , setmyNum] = useState(0);
  const [myBool , setmyBool] = useState(false);
  const [mylist , setmyList] = useState([]);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    // Update the 'isVisible' state by toggling its value
    setVisibility(!isVisible);
  };

  // Return JSX markup to render the application UI
  return (
    <>
      {/* First section: React Components / Props lesson 1 & 2 */}
      <div>
        {/* Render a heading for the list of articles */}
        <h1>React Components / Props lesson 1 & 2</h1>
        {/* Render the MyArticle component with title and paragraph props */}
        <MyArticle 
          title="My First Article"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem eos quasi libero sed debitis blanditiis culpa, laudantium nesciunt aliquam atque explicabo alias temporibus amet ullam ducimus suscipit sit porro!"
        />
      </div>

      {/* Second section: React UseState */}
      <div>
        {/* Render a heading */}
        <h1>React UseState</h1>
        {/* Render a button to toggle visibility */}
        <button onClick={toggleVisibility}>Click Me!</button>
        {/* Conditional rendering based on 'isVisible' state */}
        {isVisible && <h2>Hello World</h2>}
      </div>
      <div>
        <h1>Mastering Syntax: Working the Funtion as Second the Paremeter of useState Hook</h1>
        <h2>{mytext}</h2>
        <button onClick={() => setmytext('Sarah Rice')}>Click Me!</button>
      </div>
      <div>
        <h1>Plain JavaScript VS. React.js: Working with Variables</h1>
        <button onClick={()=>setmyNum(1)}>Click Me!</button>
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
