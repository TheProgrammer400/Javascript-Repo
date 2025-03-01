# Breakdown of Javascript Code

## For loop

This loop adds a **dragstart** event listener to each element with the class `"list"`

### Breakdown of for loop

1. `for (let list of lists)`
    - `lists` is an **HTMLCollection** containing all the elements with the class `list`.
    - The loop iterates over each element (each `list` item)

2. `list.addEventListener("dragstart", function (event) { selected = event.target; });`

    - For every `list` item, we attach a **dragstart** event listener.
    - When a user starts dragging an item, the **dragstart** event triggers.
    - `event.target` refers to the **element being targeted`**.
    - The element is stored in the `selected` variable so it can be accessed later.

### Purpose

- This ensures that when a user drags an item, we know **which element is being dragged** and can later append it to another container (like `rightBox` or `leftBox`).

- Without this, we wouldn’t be able to determine **which element is being dragged** when handling the drop event.


## Enabling The Drop Zone

Adding event listener for the `"dragover"` event on `rightBox` is done by following:

```Javascript
rightBox.addEventListener("dragover", function (event) {
    event.preventDefault();
});
```

This allows dragged elements to be **dropped** inside `rightBox`.

### Significance of `event.preventDefault()`

By default, dragging something **does not allow dropping** in most elements. Calling `event.preventDefault()` **prevents the default behaviour** and tells the browser to **let the user drop stuff here**.

Without `event.preventDefault()`, the `drop` wouldn't fire, and the dragged item wouldn't be able to be placed inside `rightBox`.

#### Same things are being done for the `leftBox`.