const greeter = {
  message: (() => {
    const name = "Naveed";
    const greeting = "Hello";

    return `${greeting}, ${name}!`;
  })(),

  sayGreeting() {
    console.log(this.message);
  },
};

greeter.sayGreeting();