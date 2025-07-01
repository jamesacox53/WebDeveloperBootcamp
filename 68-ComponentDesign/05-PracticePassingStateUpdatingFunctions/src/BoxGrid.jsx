import { useState } from 'react';
import Box from './Box';

export default function BoxGrid() {
    const [isActiveArr, setIsActiveArr] = useState(getInitIsActiveArr);
    const boxArr = getBoxArr(isActiveArr, setIsActiveArr);

    const reset = () => setIsActiveArr(getInitIsActiveArr());

    return (
        <div className='BoxGrid'>
            {boxArr}
            <button onClick={reset}>Reset</button>
        </div>
    );
}

function getInitIsActiveArr() {
    return new Array(9).fill(false);
}

function getBoxArr(isActiveArr, setIsActiveArr) {
    const getBoxFunc = (isActive, idx) => {
        const clickBoxFunc = () => toggleBoxFunc(idx, setIsActiveArr);

        return <Box key={idx} isActive={isActive} clickBoxFunc={clickBoxFunc} />;
    };

    return isActiveArr.map(getBoxFunc);
}

function toggleBoxFunc(idx, setIsActiveArr) {
    const toggleFunc = (isActiveArr, idx) => {
        const newIsActiveArr = [...isActiveArr];
        newIsActiveArr[idx] = !newIsActiveArr[idx];

        return newIsActiveArr;
    }
    
    setIsActiveArr((isActiveArr) => toggleFunc(isActiveArr, idx));
}