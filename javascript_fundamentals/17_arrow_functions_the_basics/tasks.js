let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

// Convert to arrow funciton
ask(
  "Do you agree",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  },
);

ask(
  "Do you agree",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution"),
);
