let text = document.getElementById("text");
let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underlined = document.getElementById("underlined");
let normal = document.getElementById("normal");

class TextFormatter {
  constructor(strategy) {
    this.strategy = "";
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  format(text) {
    return this.strategy.format(text);
  }
}

class BoldStrategy {
  format(text) {
    return `<b>${text}</b>`;
  }
}

class ItalicStrategy {
  format(text) {
    return `<i>${text}</i>`;
  }
}

class UnderlineStrategy {
  format(text) {
    return `<u>${text}</u>`;
  }
}

class NormalStrategy {
  format(text) {
    return `${text}`;
  }
}

let textToFormat = text.innerHTML;

italic.addEventListener("click", async () => {
  const formatter = new TextFormatter();
  formatter.setStrategy(new ItalicStrategy());
  const formatted = await formatter.format(textToFormat);
  text.innerHTML = formatted;
});

bold.addEventListener("click", async () => {
  const formatter = new TextFormatter();
  formatter.setStrategy(new BoldStrategy());
  const formatted = await formatter.format(textToFormat);
  text.innerHTML = formatted;
});

underlined.addEventListener("click", async () => {
  const formatter = new TextFormatter();
  formatter.setStrategy(new UnderlineStrategy());
  const formatted = await formatter.format(textToFormat);
  text.innerHTML = formatted;
});

normal.addEventListener("click", async () => {
  const formatter = new TextFormatter();
  formatter.setStrategy(new NormalStrategy());
  const formatted = await formatter.format(textToFormat);
  text.innerHTML = formatted;
});
  