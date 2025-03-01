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
| `dblclick`  | When an element is double clicked    |
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


## Progess Bar Explanation

Understanding line by line:

1. `window.scrollY`:

    ```Javascript
    const scrollTop = window.scrollY;
    ```

    `window.scrollY` gives you **how many pixels** you've scrolled **vertically** from top of the page.

    ### Key Points:

    - `scrollY = 0` → You're at the top of the page.
    - `scrollY > 0` → You've scrolled **down**.
    - `scrollY` keeps **increasing** as you scroll further.
    - If you scroll up, `scrollY` **decreases**.

2. `scrollHeight`:

    ```Javascript
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    ```

    This line **calculates the total scrollable height** of the page.

    ### Explanation:

    1. `document.documentElement.scorllHeight`
        - This gives the **total height** of the document (including the part **off-screen**).
        - Basically, the full height **if there was no scrolling**.
    
    2. `window.innerHeight`
        - This gives the **visible height** of the screen (the viewport).
        - Basically, **how much of the page is visible at the time**.

    3. Subtracting Both (`scrollHeight - innerHeight`)
        - This gives **how much we can actually scroll**.
        - **Example**:
            - Total page height: `2000px`
            - Visible screen height: `800px`
            - Scrollable height: `2000 - 800 = 1200px`
            - This denotes that you can scroll `1200px` before hitting the bottom.

3. **Scroll progess**:

    ```Javascript
    const scrollPercent = (window.scrollY / scrollHeight) * 100;
    ```

    This helps in tracking the **scroll progress**, so we can calculate **how far the user has scrolled** in **percentage**.