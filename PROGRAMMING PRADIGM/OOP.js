class Person {
  constructor(name, address, nationality) {
    this.name = name;
    this.address = address;
    this.nationality = nationality;
  }
}

class Baby extends Person {
  constructor(name, address, nationality, age) {
    super(name, address, nationality);
    this.newBorn = true;
    this.age = age;
  }
}

const neil = new Baby("Neil", "SJC", "Filipino", 1);
console.log(neil);
