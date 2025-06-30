import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    const [emojiArr, setEmojiArr] = useState(getInitEmojiArr);
    const emojiSpanArr = getEmojiSpanArr(emojiArr);

    const addEmoji = () => _addEmoji(setEmojiArr);

    return (
        <div>
            {emojiSpanArr}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}

function getInitEmojiArr() {
    const emojiObj = getEmojiObj('😃');
    return [emojiObj];
}

function getEmojiObj(emojiStr) {
    return {
        id: uuid(),
        emojiStr: emojiStr
    }
}

function getEmojiSpanArr(emojiArr) {
    const styleObj = {
        fontSize: '4rem',
    };

    return emojiArr.map((emojiObj) => {
        return (
            <span style={styleObj} key={emojiObj['id']}>
                {emojiObj['emojiStr']}
            </span>
        );
    });
}

function _addEmoji(setEmojiArr) {
    const newEmojiArrFunc = (emojiArr) => {
        const newEmojiArr = [...emojiArr];
        
        const newEmojiObj = getEmojiObj('😁');
        newEmojiArr.push(newEmojiObj);

        return newEmojiArr;
    };

    setEmojiArr(newEmojiArrFunc);
}
