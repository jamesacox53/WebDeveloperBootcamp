const personObj = {
    firstNameStr: 'Viggo',
    lastNameStr: 'Mortensen',
    getFullName: function() {
        const fullNameStr = this.firstNameStr +
        ' ' + this.lastNameStr;

        return fullNameStr;
    },
    getFullName2: () => {
        const fullNameStr = this.firstNameStr +
        ' ' + this.lastNameStr;

        return fullNameStr;
    },
    shoutName1: function() {
        setTimeout(function() {
            console.log(this.getFullName());
        }, 3000);
    },
    shoutName2: function() {
        setTimeout(() => {
            console.log(this.getFullName());
        }, 3000);
    }
};

console.log(personObj.getFullName());

console.log(personObj.getFullName2());

// personObj.shoutName1();

personObj.shoutName2();