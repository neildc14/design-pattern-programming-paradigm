//context
const Shipping = function () {
  this.company = "";
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },

  calculate: function (package) {
    return this.company.calculate(package);
  },
};

//strategies
let LBC = function () {
  this.calculate = function (package) {
    //calculations
    return "$45.95";
  };
};

let JNT = function () {
  this.calculate = function (package) {
    return "$39.40";
  };
};

let JRS = function () {
  this.calculate = function (package) {
    return "$42.20";
  };
};

//clients
var package = { from: "32442", to: "43243", weight: "1kg" };

let lbc = new LBC();
let jnt = new JNT();
let jrs = new JRS();
let shipping = new Shipping();

shipping.setStrategy(lbc);
console.log(`LBC Strategy: ${shipping.calculate(package)}`);
shipping.setStrategy(jnt);
console.log(`JNT Strategy: ${shipping.calculate(package)}`);
shipping.setStrategy(jrs);
console.log(`JRS Strategy: ${shipping.calculate(package)}`);
