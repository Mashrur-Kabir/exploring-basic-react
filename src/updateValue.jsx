import { useState } from "react";

export default function UpdatedVal() {
    // state management:
    const [val, setVal] = useState(0); // Initializes 'val' with 0 and 'setVal' is the function to update 'val'.

    const styleUpdate = {
        borderRadius: '8px',
        border: '3px solid skyblue',
        fontSize: '1em',
        fontWeight: '500',
        padding: '1rem'
    }

    /* event handler: */
    const handleAdd = () => {
        const newVal = val + 1;
        setVal(newVal); // newVal with new value gets sent to setVal function to update 'val'
    }

    const handleReduce = () => {
        const newVal = val - 1;
        setVal(newVal); // same as above
    }

    /* The 'setVal' function updates 'val', which triggers a re-render and reflects the new 'val' in the returned JSX. */

    return (
        <div style={styleUpdate}>
            <h3>Updated: {val}</h3> {/* 'val' is 0 initially and gets updated when the button below is clicked. */}
            <button onClick={handleAdd}>AddUpdate</button>
            <button onClick={handleReduce}>ReduceUpdate</button>
        </div>
    )
}
