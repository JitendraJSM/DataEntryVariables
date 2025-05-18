async function main() {
  const data = require("./config.json");

  console.log(`Hello, ${data.name}!`);

  const num1 = 2;
  const num2 = 3;

  const sum = num1 + num2;
  const product = num1 * num2;

  console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
  console.log(`The product of ${num1} and ${num2} is ${product}.`);
}
main();
