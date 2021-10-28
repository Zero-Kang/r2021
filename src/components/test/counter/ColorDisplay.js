import React from 'react';

const style = {
    width: '200px',
    height: '200px',
    borderRadius: '200px'
}

const ColorDisplay = ({value}) => {


    const valueColor = value % 2 === 0 ? 'red': 'blue'

    const style = {
        width: '200px',
        height: '200px',
        borderRadius: '200px',
        backgroundColor: valueColor
    }

    console.log(valueColor)
    console.log(style)

    return (
        <div style={style}>
            <div></div>
        </div>
    );
};

export default ColorDisplay;