console.log(true && true);

console.log(true && false);

console.log(false && true);

console.log((1 === 1) && (2 < 7));

const password = prompt("Enter a password");

if ((password.length >= 6) && (password.indexOf(' ') === -1)) {
    console.log("Valid password")

} else {
    console.log("Invalid password")
}