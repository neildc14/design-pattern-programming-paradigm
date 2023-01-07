function Click() {
  this.handlers = [];
}

Click.prototype = {
  subscribe: function (observer) {
    this.handlers.push(observer);
  },

  unsubscribe: function (observer) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== observer) return item;
    });
  },

  fire: function (o, thisObj) {
    let scope = thisObj || null;
    this.handlers.forEach((item) => item.call(scope, o));
    console.log(scope, o);
  },
};

function run() {
  let clickHandler = function (item) {
    console.log("Fired:" + item);
  };
  let otherClickHandler = function (item) {
    console.log("Throw:" + item);
  };

  let click = new Click();

  click.subscribe(clickHandler);
  click.subscribe(otherClickHandler);
  click.fire("event 1", "scope");
  click.unsubscribe(clickHandler);
  click.fire("event 2");
  click.subscribe(clickHandler);
  click.fire("event 3");
  click.fire("event 4");
}

run();
