const bcrypt = require('bcrypt');

async function hashPassword(pwStr) {
    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(pwStr, salt);

    console.log(salt);
    console.log(hash);
}

async function hashPassword2(pwStr) {
    const hash = await bcrypt.hash(pwStr, 12);

    console.log(hash);
}

async function login(pwStr, hashedPwStr) {
    const res = await bcrypt.compare(pwStr, hashedPwStr);

    if (res) {
        console.log('Logged in successfully!');
    
    } else {
        console.log('Incorrect password');
    }
}

// hashPassword('monkey');
// const hashedPwStr = '$2b$12$r1cL/qqc4B8YVBM.WekRaurhz6G.V3HVqS1i.na15IEYCCTVBgm2y';

// login('monkey', hashedPwStr);
// login('mankey', hashedPwStr);

// hashPassword2('monkey');
const hashedPwStr2 = '$2b$12$6NisSxJiizvoGYT6OhfOhuv3F95jnsYfhTVsXzXM7RCjHUOY5ahea';

login('monkey', hashedPwStr2);
// login('mankey', hashedPwStr2);