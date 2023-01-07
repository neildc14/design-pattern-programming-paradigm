function Alien(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.species = "alien";
}

//prototype allows you to add new method or properties to object constructor
Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien1 = new Alien("Ali", "I'm Ali the alien!");

console.log(alien1.name); // output "Ali"
console.log(alien1.phrase); // output "I'm Ali the alien!"
alien1.fly(); // output "Zzzzzziiiiiinnnnnggggg"
