function setBackgroundColor(newColorStr, delayInt, doNextFunc) {
    setTimeout(function() {
        document.body.style.backgroundColor = newColorStr;
        
        if (doNextFunc)
            doNextFunc();
    
    }, delayInt);
}

document.body.style.backgroundColor = 'red';

setBackgroundColor('orange', 1000, () => {
    setBackgroundColor('yellow', 1000, () => {
        setBackgroundColor('green', 1000, () => {
            setBackgroundColor('blue', 1000, () => {});
        });
    });
});