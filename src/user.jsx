import { useState, useEffect } from "react";

export default function Users(){

    /* state for verifying the reception of external data */

    const [users, setUsers] = useState([]); //users will have an array of objects.

    //css:
    const userStyles = {
        borderRadius: '10px',
        border: '3px solid hotpink',
        fontSize: '1em',
        fontWeight: '500',
        padding: '1rem',
        margin: '2rem'
    }

    useEffect( () => {
        // fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => setUsers(data)) // setting fetched data on state
    } ,[]) // if we want to load the data for the first time only, we should use an empty array as dependency

    return(
        <div style={userStyles}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}