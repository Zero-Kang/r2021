import React, {useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";
import ColorDisplay from "./ColorDisplay";

const CountWrapper = () => {

    const [num, setNum] = useState(0)

    const inc = () => {

        setNum(num + 1)
    }

    const dec = () => {
        setNum(num -1)
    }


    return (
        <div>
            <CountDisplay value={num}></CountDisplay>
            <ColorDisplay value={num}></ColorDisplay>
            <CountButtons inc = {inc} dec = {dec} ></CountButtons>
        </div>
    );
};

export default CountWrapper;