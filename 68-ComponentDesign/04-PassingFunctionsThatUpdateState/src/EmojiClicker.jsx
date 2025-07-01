import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    const [emojiArr, setEmojiArr] = useState(getInitEmojiArr);
    const emojiSpanArr = getEmojiSpanArr(emojiArr, setEmojiArr);

    const addEmoji = () => _addEmoji(setEmojiArr);
    const makeAllHearts = () => _makeAllHearts(setEmojiArr);

    return (
        <div>
            {emojiSpanArr}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeAllHearts}>Make them all hearts</button>
        </div>
    );
}

function getInitEmojiArr() {
    const emojiObj = getRandEmojiObj();
    return [emojiObj];
}

function getRandEmojiObj() {
    const emojiArr = ['😃', '😁', '😂', '😎', '😅', '😆'];
    const randEmojiStr = emojiArr[Math.floor(Math.random() * emojiArr.length)];

    return getEmojiObj(randEmojiStr);
}

function getEmojiObj(emojiStr) {
    return {
        id: uuid(),
        emojiStr: emojiStr
    }
}

function getEmojiSpanArr(emojiArr, setEmojiArr) {
    const styleObj = {
        fontSize: '4rem',
    };

    return emojiArr.map((emojiObj) => {
        const deleteEmoji = () => _deleteEmoji(emojiObj['id'], setEmojiArr);

        return (
            <span style={styleObj} onClick={deleteEmoji} key={emojiObj['id']}>
                {emojiObj['emojiStr']}
            </span>
        );
    });
}

function _deleteEmoji(id, setEmojiArr) {
    const newEmojiArrFunc = (emojiArr) => {
        return emojiArr.filter(emojiObj => emojiObj['id'] !== id);
    }
    
    setEmojiArr(newEmojiArrFunc);
}

function _addEmoji(setEmojiArr) {
    const newEmojiArrFunc = (emojiArr) => {
        const newEmojiArr = [...emojiArr];
        
        const newEmojiObj = getRandEmojiObj();
        newEmojiArr.push(newEmojiObj);

        return newEmojiArr;
    };

    setEmojiArr(newEmojiArrFunc);
}

function _makeAllHearts(setEmojiArr) {
    const newEmojiFunc = (emojiObj) => {
        const newEmojiObj = {...emojiObj};
        newEmojiObj['emojiStr'] = '💖';

        return newEmojiObj;
    };

    const newEmojiArrFunc = (emojiArr) => {
        const newEmojiArr = emojiArr.map(newEmojiFunc);
        return newEmojiArr;
    };

    setEmojiArr(newEmojiArrFunc);
}
