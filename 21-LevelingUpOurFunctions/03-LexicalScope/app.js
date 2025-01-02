function bankRobbery() {
    const heroes = ['Spiderman', 'Batman'];
    
    function cryForHelp() {
        for (let hero of heroes) {
            console.log('Please help us ' + hero);
        }
    }

    cryForHelp();
}

bankRobbery();