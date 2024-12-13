const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include a space
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password')
    
    } else {
        console.log('Password cannot contain a space')
    }
} else {
    console.log('Password too short, must be 6+ characters');
}