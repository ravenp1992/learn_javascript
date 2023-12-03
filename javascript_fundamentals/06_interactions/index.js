// INTERACTIONS

// alert
// It shows a message and wait for the use to press "OK".
alert("Hello");
// The mini-window with the message is called a modal window. The word "modal" means
// that the visitor can't interact with the rest of the page, press other buttons,
// etc, until they have dealth with the window. In this case - until they press "OK".

// prompt
// The function prompt accepts two arguments
// const result = prompt(title, [default])
// It shows a modal window with a text message, an input for the visitor, and
// the buttons Ok/Cancel.

// title - The text to show the visitor
// default - An optional second parameter, the initial value for the input field.

// The visitor can type something in the promptt input field and press Ok. Then we
// get that text in the file result. Or they can cancel the input by pressing
// Cancel or hitting the Esc key, then we get null as the result.

// The call to prompt returns the text from the input field or null if the input
// was canceled.

// confirm
// The confirm function shows a modal with a question and two buttons: Ok and Cancel.
// The result is true if Ok is pressed and false otherwise.
