const req = new XMLHttpRequest();

req.onload = function() {
    console.log('It loaded');
    console.log(this);
    
    var responseStr = this.responseText;
    var responseObj = JSON.parse(responseStr);
    
    var hairColor = responseObj['hair_color'];

    console.log(responseObj);
    console.log(hairColor);
}

req.onerror = function() {
    console.log('Error');
    console.log(this);
}

const urlStr = 'https://swapi.dev/api/people/1';

req.open("GET", urlStr);
req.send();