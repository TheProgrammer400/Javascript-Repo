# Document Object Model (DOM)

The **DOM (Document Object Model)** in JavaScript is basically the way your browser sees an HTML page and lets you manipulate it **dynamically**.

## What is DOM?

- Tree-like strucuture representing HTML.
- Every HTML element like `<p> <h1> <a>` becomes an **object** in the DOM.

## Selecting Elements

### 1. `document.getElementById("id-name")`:

DOM method used to select a single HTML element by its `id` attribute.

```Javascript
const element = document.getElementById("idOfElement")
```

- This return a single element.
- If not element found, it returns ``null``.

**Note**:

- IDs must be unique.
- This method is used for only one element.

### 2. `document.getElementsByClassName("class-name")`:

- Relects all the elements with the given class name.
- Returns a HTML collection (not an array).
- Access the elements using `[index]`.

### 3. `document.getElementsByTagName("tag")`:

- Selects all elements by a specific tag name (`<h1>, <p>, <div> etc.`).
- Returns a HTML collection.

### 4. `document.querySelector("selector")`:

- Selects the first matching element (works like CSS selectors).
- Returns a single element or `null` if element not found.

### 5. `document.querySelectorAll("selector")`:

- Selects all matching elements like (`querySelector`, but returns a collection).
- Returns: A NodeList (similar to array, supports `.forEach()`).


## Dynamic Styling

This allows you to **change CSS properties of HTML elements** using Javascript. This makes your website **interective** & **responsive** to user actions.

### 1. `.style` Property:

You can directly modify CSS properties of an elements using `.style`.

Example:

```Javascript
let title = document.getElementById("id-name")
title.style.Color = "red"
title.style.borderRadius = "5px"
```

## Dynamic Text Manipulations

Helps in **dynamically updating content** without modifying the underlying HTML strcture.

### 1. `.innerText` Property:

Use `.innerText` to retrieve the text inside an element.

```Javascript
let element = document.getElementById("id-name")
console.log(element.innerText)
```

To change to the text:

```Javascript
let element = document.getElementById("id-name")
element.innerText = "updated text"
```

### 2. `.textContent` Property:

This property **retrieves or sets** the text inside the element, including hidden content. It's **faster** than `.innerText` and useful when you need **raw text without layout calculations**.


#### Key Difference Between `.innerText` & `.textContent`:

- `.textContent` **includes hidden text** i.e. `<span style="display: none;"></span>`.
- `.innnerText` **ignores the hidden text** and only return the visible content

#### When to Use `.textContent`?

- Extracting raw text from an element (including hidden parts).
- When performance matters.
- If you don't care about layout and formatting.


## Injecting & Retrieving HTML Content

The `.innerHTML` property allows you to **get or set** the HTML content inside an element. Unlike `.innerText` and `.textContent`, it **interprets HTML tags** rather than treating them as a plain text.

Example:

```HTML
<div id="container">
    <p>Hello <strong>World!</strong></p>
</div>
<button onclick="showHTML()">Get HTML</button>

<script>
    function showHTML() {
        const container = document.getElementById("container");
        console.log(container.innerHTML);
    }
</script>
```

Output:

```HTML
<p>Hello <strong>World!</strong></p>
```

It can be seen that `.innerHTML` returns both text and HTML tags.

## Modifying The Text Dynamically

You can use `.innerHTML` to **replace** existing content with nwe HTML.

Example:

```HTML
<div id="content">Old Content</div>
<button onclick="changeHTML()">Change Content</button>

<script>
    function changeHTML() {
        document.getElementById("content").innerHTML = "<h2>New Content Added!</h2>";
    }
</script>
```

- **Before clicking**: "Old Content"
- **After clicking**: `<h2>New Content Added!</h2>`


## NodeList in Javascript

A **NodeList** is a collection of **DOM Nodes** (elements, text or comments) that Javascript returns when selecting multiple elements from the page. It's kinda like an **array**, but with some quirks.

### How Do You Get a NodeList?

- `document.querySelectorAll("selector")`
- `childNodes` (includes elements, text etc.)

To loop over the NodeList, we can use `.forEach()`

## HTML Collection in Javascript

An HTML Collection is a **live collection** of HTML elements that Javascript returns when selecting multiple elements from the page. Unlike a NodeList, **HTML Collection updates automatically when DOM changes**.

### How Do You Get HTML Collection?

- `document.getElementByTagName("tag")`
- `document.getElementsByClassName("class-name")`
- `document.forms` (All `<form>` elements on the page)
- `document.images` (All `<img>` elements on the page)

Unlike NodeList, here `.forEach()` can't be used to loop over an HTML Collection.

### Looping Over An HTML Collection

- Using for loop:

    ```Javascript
    const items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        console.log(items[i].textContent);
    }
    ```

- Converting to an Array:

    ```Javascript
    const itemsArray = Array.from(document.getElementsByClassName("item"));
    itemsArray.forEach(item => console.log(item.textContent));
    ```