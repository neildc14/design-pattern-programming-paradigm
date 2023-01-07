function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  console.log(`Hi I am ${this.name} and I am a ${this.type}`);
}

const employee = new EmployeeFactory();
const employees = [];

employees.push(employee.create("Neil Edward", 1));
employees.push(employee.create("Camille", 2));

employees.forEach((employee) => say.call(employee));
