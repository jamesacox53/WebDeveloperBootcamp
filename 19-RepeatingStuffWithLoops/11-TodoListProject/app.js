const todosArr = ['temp1', 'temp2'];

let inputStr = prompt('What would you like to do?');

while(inputStr != 'quit' && inputStr != 'q') {
    if (inputStr == 'list') {
        console.log('***************');
        for (let i = 0; i < todosArr.length; i++) {
            const outputStr = i + ': ' + todosArr[i];
        
            console.log(outputStr);
        }

        console.log('***************');
    
    } else if (inputStr == 'new') {
        const newTodoStr = prompt('Ok, what is the new todo?');

        todosArr.push(newTodoStr);
        console.log(newTodoStr + ' added to the list');
    
    } else if (inputStr == 'delete') {
        const indexStr = prompt('Ok, enter an index to delete:');
        
        const indexInt = parseInt(indexStr);
        if (Number.isNaN(indexInt)) {
            console.log('Unknown Index');
        
        } else {
            const deletedArr = todosArr.splice(indexInt, 1);

            console.log('Ok, deleted ' + deletedArr[0]);
        }
    }
    
    inputStr = prompt('What would you like to do?');
}

console.log('Ok, you quit the app.');