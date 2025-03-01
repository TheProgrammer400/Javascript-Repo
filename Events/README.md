# Events in Javascript

An event in JavaScript is an action or occurrence that happens in the browser, triggered by the user or the system.

For example:

- **Clicking a button** → `click` event
- **Typing in a input field** → `input` or `keydown` event
- **Hovering over an element** → `mouseover` event
- **Scrolling the page** → `scroll` event
- **Loading the page** → `load` event

### Note:
Using `addEventListener` is the best practise

For example:

```Javascript
const btn = document.getElementById("myButton");

btn.addEventListener("click", function () {
    alert("Button clicked!");
});
```

## Common Event Types in Javascript

| Event Type | Description                          |
| -----------| -------------------------------------|
| `click`    | When an element is clicked           |
| `dbclick`  | When an element is double clicked    |
| `mouseover`| When mouse hovers over an element    |
| `mouseout` | When mouse moves out of the element  |
| `keydown`  | When a key is pressed                |
| `keyup`    | When a key is released               |
| `input`    | When user types in a input field     |
| `change`   | When value of input changes          |
| `submit`   | When a form is submitted             |
| `scroll`   | When the page is scrolled            |
| `load`     | When the page fully loads            |
| `resize`   | When the window is resized           |


## Event Object

The `event` object contains details about the event that occured. Example:

```Javascript
document.addEventListener("click", function (event) {
    console.log("Clicked element:", event.target);
});
```

Here, `event.target` shows which element was clicked.

## Event Bubbling & Capturing

Evenets in Javascript **propagate** in two phases:

- **Capturing phase** (Top to bottom)
- **Bubbling Phase** (Bottom to top)

Example:

```Javascript
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
}, true); // Capturing phase

document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked");
}); // Bubbling phase (default)
```

Use `event.stopPropagation()` to **stop event bubbling**

## Prevent Default Behaviour

Some events have default behaviour (e.g., form submission, link redirection). You can prevent them:

```Javascript
document.getElementById("myLink").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents link from opening
});
```

## Remove Event Listener

To remove event listener:

```Javascript
function sayHello() {
    console.log("Hello!");
}

btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);
```
