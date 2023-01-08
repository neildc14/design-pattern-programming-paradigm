const Logistics = function (type, vehicle) {
  this.type = type;
  this.vehicle = vehicle;

  this.dispatch = function () {
    console.log(
      `The parcel is on the way. The mode of shipment is by : ${type}, vehicle:${vehicle}`
    );
  };
};

const RoadLogistics = function () {
  this.createLogistic = function (type, vehicle) {
    return new Logistics(type, vehicle);
  };
};

const SeaLogistics = function () {
  this.createLogistic = function (type) {
    return new Logistics(type);
  };
};

const transportProduct = new RoadLogistics();
const trans = transportProduct.createLogistic("road transport", "van");
trans.dispatch();

// const transportProduct2 = new SeaLogistics();
// const tran2 = transportProduct.createLogistic("sea transport");
// tran2.dispatch();
