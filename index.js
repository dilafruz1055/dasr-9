let sozlar = [ 'malina', 'porsche', 'shokolad', 'money', 'model', 'kivi', 'qovoq', 'roza', 'bmw', 'mercedes', 'ferrari'];
let mbor = [];
let myoq = [];

for (let i = 0; i < 11; i++) {
    if (sozlar[i].indexOf('m') !== -1) {
        mbor.push(sozlar[i]);
    } else {
        myoq.push(sozlar[i]);
    }
}

console.log(mbor);
console.log(myoq);