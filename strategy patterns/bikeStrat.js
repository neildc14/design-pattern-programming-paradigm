const Bike = function () {
  this.bike = "";
};

Bike.prototype = {
  pickBike: function (bike) {
    this.bike = bike;
  },

  model: function (model) {
    return this.bike.model(model);
  },

  cc: function (cc) {
    return this.bike.cc(cc);
  },
};

let Kawasaki = function () {
  this.model = function ({ model }) {
    return model;
  };
  this.cc = function ({ cc }) {
    return cc;
  };
};

const ninja = { model: "ninja 2012", cc: 1000 };

let kawasaki = new Kawasaki();
let bike = new Bike();

bike.pickBike(kawasaki);
console.log(bike.model(ninja), bike.cc(ninja)); 
