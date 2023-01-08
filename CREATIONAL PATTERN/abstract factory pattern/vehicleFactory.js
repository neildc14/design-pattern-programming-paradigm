const Vehicle = function (vehicle, model, maxSpeed) {
  this.vehicle = vehicle;
  this.model = model;
  this.maxSpeed = maxSpeed;

  this.run = function () {
    console.log(
      `$a ${vehicle} that is ${model} is now running up to the maximum speed of ${maxSpeed}mph`
    );
  };
};

const CarFactory = function () {
  this.create = function (vehicle, model, maxSpeed) {
    return new Vehicle(vehicle, model, maxSpeed);
  };
};

const toyota = new CarFactory();
toyota.create("car", "vios", 300).run();
