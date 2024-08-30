import './App.css'
import Friends from './friends';
import UpdatedVal from './updateValue';
import Users from './user';

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
      <h2>React Concepts</h2>

      <Users></Users>

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
