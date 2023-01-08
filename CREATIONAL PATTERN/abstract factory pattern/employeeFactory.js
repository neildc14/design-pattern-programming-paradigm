const Employee = function (name) {
  this.name = name;

  this.say = function () {
    console.log(`Hi, I am employee ${name}`);
  };
};

const Vendor = function (name) {
  this.name = name;

  this.say = function () {
    console.log(`Hi, I am vendor ${name}`);
  };
};

const EmployeeFactory = function () {
  this.create = function (name) {
    return new Employee(name);
  };
};

const VendorFactory = function () {
  this.create = function (name) {
    return new Vendor(name);
  };
};

const employee = new EmployeeFactory();
employee.create("Neil").say();

const vendor = new VendorFactory();
vendor.create("Edward").say();
