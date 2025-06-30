import { useState } from "react";

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
    return ["😃"];
}

function getEmojiSpanArr(emojiArr) {
    const styleObj = {
        fontSize: "4rem",
    };

    return emojiArr.map((e) => {
        return <span style={styleObj}>{e}</span>;
    });
}

function _addEmoji(setEmojiArr) {
    const newEmojiArrFunc = (emojiArr) => {
        const newEmojiArr = [...emojiArr];
        newEmojiArr.push("😁");

        return newEmojiArr;
    };

    setEmojiArr(newEmojiArrFunc);
}
