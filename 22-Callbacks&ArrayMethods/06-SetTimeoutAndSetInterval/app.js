console.log('Hello');

setTimeout(() => {
    console.log('...are you still there?');
}, 3000);

console.log('Goodbye');

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 12000);