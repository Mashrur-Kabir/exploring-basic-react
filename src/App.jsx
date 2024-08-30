import './App.css'
import Friends from './friends';
import UpdatedVal from './updateValue';

function App() {

  function handleClick(){
    alert('Button clicked!');
    // perform some action here
  }

  const handleClick2 = () => {
    alert('Button 22222222 clicked!');
    // perform some action here
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts</h2>

      <ol className='orderedListStyle'>
        <li><span>Components:</span> should be created in different jsx files.</li>
        <li><span>JSX:</span> we will return jsx from components in root file</li>
        <li><span>Prop:</span> Its a way to pass data from a parent component to a child component</li>
        <li><span>Event Handler:</span> Handling what will happen after doing what</li>
        <li><span>State:</span> data that can change over time within a component</li>
        <li><span>Side Effect:</span> performed outside the usual rendering logic. like fetching API</li>
      </ol>

      <Friends></Friends> {/* we dont need to worry about adding <Friend> here since it's imported by <Friends> */}

      <UpdatedVal></UpdatedVal>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('third button clicked 3333')}>Click 3</button>
      
      <button onClick={() => addToFive(4)}>Four Sent</button> {/* wrapping function to avoid instant call */}
    
    </>
  )
}

export default App
