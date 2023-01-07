const Strategy = function () {
  this.strategy = "";
};

Strategy.prototype = {
  setStrategy: function (strategy) {
    this.strategy = strategy;
  },

  operator: function (ops) {
    return this.strategy.operator(ops);
  },
};

const Addition = function () {
  this.operator = function (input) {
    return input + "+";
  };
};
const Subtraction = function () {
  this.operator = function (input) {
    return input + "-";
  };
};

const Multiplication = function () {
  this.operator = function (input) {
    return input + "*";
  };
};

const Division = function () {
  this.operator = function (input) {
    return input + "/";
  };
};

export { Strategy, Addition, Subtraction, Multiplication, Division };
