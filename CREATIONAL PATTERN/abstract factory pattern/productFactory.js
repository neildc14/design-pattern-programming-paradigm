// Abstract factory
function AbstractFactory() {
  this.createProductA = function () {
    throw new Error("This method must be overwritten!");
  };
  this.createProductB = function () {
    throw new Error("This method must be overwritten!");
  };
}

// Concrete factory 1
function ConcreteFactory1() {
  this.createProductA = function () {
    return new ProductA1();
  };
  this.createProductB = function () {
    return new ProductB1();
  };
}
ConcreteFactory1.prototype = new AbstractFactory();
ConcreteFactory1.prototype.constructor = ConcreteFactory1;

// Concrete factory 2
function ConcreteFactory2() {
  this.createProductA = function () {
    return new ProductA2();
  };
  this.createProductB = function () {
    return new ProductB2();
  };
}
ConcreteFactory2.prototype = new AbstractFactory();
ConcreteFactory2.prototype.constructor = ConcreteFactory2;

// Abstract product A
function AbstractProductA() {
  this.use = function () {
    throw new Error("This method must be overwritten!");
  };
}

// Concrete product A1
function ProductA1() {
  this.use = function () {
    console.log("Using product A1");
  };
}
ProductA1.prototype = new AbstractProductA();
ProductA1.prototype.constructor = ProductA1;

// Concrete product A2
function ProductA2() {
  this.use = function () {
    console.log("Using product A2");
  };
}
ProductA2.prototype = new AbstractProductA();
ProductA2.prototype.constructor = ProductA2;

// Abstract product B
function AbstractProductB() {
  this.eat = function () {
    throw new Error("This method must be overwritten!");
  };
}

// Concrete product B1
function ProductB1() {
  this.eat = function () {
    console.log("Eating product B1");
  };
}
ProductB1.prototype = new AbstractProductB();
ProductB1.prototype.constructor = ProductB1;

// Concrete product B2
function ProductB2() {
  this.eat = function () {
    console.log("Eating product B2");
  };
}
ProductB2.prototype = new AbstractProductB();
ProductB2.prototype.constructor = ProductB2;

// Client
function Client(factory) {
  this.productA = factory.createProductA();
  this.productB = factory.createProductB();
}

// Usage
var client1 = new Client(new ConcreteFactory1());
client1.productA.use();
client1.productB.eat();

var client2 = new Client(new ConcreteFactory2());
client2.productA.use();
client2.productB.eat();
