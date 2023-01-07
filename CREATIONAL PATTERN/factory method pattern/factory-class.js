class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.name, alien1.phrase); // output: "Ali"
