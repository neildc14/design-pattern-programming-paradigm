// Logistics interface
const Logistics = function () {};
Logistics.prototype.createTransport = function () {};

// RoadLogistics implementation
const RoadLogistics = function () {};
RoadLogistics.prototype = Object.create(Logistics.prototype);
RoadLogistics.prototype.createTransport = function () {
  return new Truck();
};

// ShipLogistics implementation
const ShipLogistics = function () {};
ShipLogistics.prototype = Object.create(Logistics.prototype);
ShipLogistics.prototype.createTransport = function () {
  return new Ship();
};

// Truck class
const Truck = function () {
  this.type = "Truck";
};

// Ship class
const Ship = function () {
  this.type = "Ship";
};

// Factory function
const createLogistics = function (type) {
  if (type === "road") {
    return new RoadLogistics();
  } else if (type === "ship") {
    return new ShipLogistics();
  } else {
    throw new Error("Invalid logistics type");
  }
};

// Usage
const roadLogistics = createLogistics("road");
console.log(roadLogistics.createTransport()); // logs "Truck { type: 'Truck' }"

const shipLogistics = createLogistics("ship");
console.log(shipLogistics.createTransport()); // logs "Ship { type: 'Ship' }"
