const Config = {
  start: () => console.log("App has started"),
  update: () => console.log("App has updated"),
};

// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config);

Config.start(); // "App has started"
Config.update(); // "App has updated"

Config.name = "Robert"; // We try to add a new key
console.log(Config); // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

//class based
class Config2 {
  constructor() {}
  start() {
    console.log("App has started");
  }
  update() {
    console.log("App has updated");
  }
}

const instance = new Config2();
Object.freeze(instance);
instance.name = "neil"; //you cannot mutate the class because it has been freezed
console.log(instance);
