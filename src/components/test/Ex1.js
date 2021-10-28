import React, {useState} from 'react';

const Ex1 = () => {

    const [showFlag, setShowFlag] = useState(false)

    const testClick = () => {
        console.log("test Click")
        setShowFlag(!showFlag)

        console.log("showFlag", showFlag)
    }

    return (
        <div>
            <h1>Ex1</h1>
            {showFlag ? <div>SHOW</div>:<></>}
            <button className="btn btn-primary" onClick={() => testClick()}>CLICK</button>
        </div>
    );
};

export default Ex1;