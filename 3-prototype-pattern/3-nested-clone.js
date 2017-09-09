function TypeA () {
    this.name = 'a'
}

const a = new TypeA();
const cloneA = Object.create(a);
const cloneCloneA = Object.create(cloneA);

console.log(cloneCloneA.name) // a
console.log(cloneCloneA.__proto__.__proto__); // TypeA {name: 'a'}
