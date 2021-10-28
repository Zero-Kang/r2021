import React from 'react';

const CountButtons = ({inc, dec}) => {


    return (
        <div>
            <button onClick={() => inc()} >INC</button>
            <button onClick={() => dec()}>DEC</button>
        </div>
    );
};

export default CountButtons;
