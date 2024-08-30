export default function Friend({friend}){ //friend here is prop. it contains single object as a result of .map iterations of an array of objects 

    const {name, email, address: {city}} = friend; // destructuring 

    //css:
    const singleStyles = {
        borderRadius: '10px',
        border: '3px solid aquamarine',
        fontSize: '1em',
        fontWeight: '500',
        padding: '1rem',
        margin: '2rem'
    }

    const hrStyles = {
        border: '0.1px solid rgba(255, 255, 255, 0.5)' // 0.5 is opacity   
    }

    return(
        <div style={singleStyles}>
            <h4>Name: {name} </h4>
            <h4>Email: {email} </h4>
            <p>From: {city}</p>
            <hr style={hrStyles}/>
        </div>
    )
}