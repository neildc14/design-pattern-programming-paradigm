const MessagingSystem = (function () {
  const observers = {};

  function subscribe(username, observer) {
    if (!observers[username]) {
      observers[username] = [];
    }
    observers[username].push(observer);
  }

  function unsubscribe(username, observer) {
    if (observers[username]) {
      observers[username] = observers[username].filter(
        (obs) => obs !== observer
      );
    }
  }

  function sendMessage(username, message) {
    if (observers[username]) {
      observers[username].forEach((observer) => {
        observer.update(message);
      });
    }
  }

  return {
    subscribe,
    unsubscribe,
    sendMessage,
  };
})();

const Observer = (username) => ({
  update: (message) => console.log(`${username}: ${message}`),
});

const observer1 = Observer("user1");
const observer2 = Observer("user2"); 

MessagingSystem.subscribe("user1", observer1);
MessagingSystem.subscribe("user2", observer2);

MessagingSystem.sendMessage("user1", "Hello, user1!");
MessagingSystem.sendMessage("user2", "Hello, user2!");

MessagingSystem.unsubscribe("user1", observer1);

MessagingSystem.sendMessage("user1", "Hello, user1 again!");
