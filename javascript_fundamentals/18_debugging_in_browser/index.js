console.log("hello world");

function hello(name) {
  let phrase = `Hello, ${name}!`;

  console.log(say(phrase));
}

function say(phrase) {
  return `** ${phrase} **`;
}
