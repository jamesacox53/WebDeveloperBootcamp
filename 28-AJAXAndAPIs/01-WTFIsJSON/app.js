//THIS IS A STRING OF JSON (NOT AN OBJECT)
const dataStr = '{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}';

const dataObj = JSON.parse(dataStr);
console.log(dataObj);

console.log(dataObj.ticker.price);

const dogObj = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
};

const dogJSONStr = JSON.stringify(dogObj);
console.log(dogJSONStr);