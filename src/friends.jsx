import { useState, useEffect } from "react"
import Friend from "./friend";

export default function Friends(){

    const [users, setUsers] = useState([]); // will trigger a re-render after updating.

    //css:
    const friendStyles = {
        borderRadius: '10px',
        border: '3px solid lime',
        fontSize: '1em',
        fontWeight: '500',
        padding: '1rem',
        margin: '2rem'
    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => setUsers(data)) // set data to state for update
    }, []) //The empty dependency array [] tells React to run this effect only once

    return(
        <div style={friendStyles}>
            <h3>Friends: {users.length}</h3>
            {
                users.map(friend => <Friend key={friend.id} friend={friend}></Friend>) //sending data of every individual 'friend' obj to the <Friend/> component
            }
        </div>
    )
}

/*  #1: create state to load data 
    #2: create useEffect with no dependencies
    #3: use fetch to load data and trigger re-render
    #4. extract objects from array using .map and send them by calling another component (<Friend>) via props
    */

/* 
What is rendering? Rendering is the process where React calls a component to update the user interface (UI) based on changes in data, state, or props. When a component is rendered, it generates the necessary HTML elements to reflect the current state of the application.

Triggering a render:

The useState hook creates a state variable (users) and the setUsers function to update that state.
When setUsers(data) is called inside the useEffect after fetching the data, it updates the users state.
And, State updates in React trigger a re-render, so whenever setUsers is called with new data, the Friends component re-renders to reflect the updated users array.]

'useEffect' is where you handle things like data fetching or other side effects that need to happen when your component is mounted or updated.

Triggering Re-render: Updating the users state causes the component to re-render, displaying the fetched data.
*/