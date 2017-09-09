{
    var a = 1;
}
console.log(a);

{
    let b = 2;
}
//console.log(b); // error

function test() {
    var c = 1;
}

test();
// console.log(c); // error

function test1() {
    let d = 1;
}
test1();
// console.log(d); // error

for (var i = 1; i < 10; i++) {}
console.log(i);

for (let j = 1; j < 10; j++) {}
// console.log(j); //error
