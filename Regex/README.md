# Regualr Expression (RegEx)

 RegEx in Javascript are patterns used to **match, seaerch and replace** the text. They are super useful for **validating inputs, searching words and text manipulation.**

 ## Syntax of RegEx in Javascript

 ```Javascript
 const regex = /pattern/modifiers;
 ```

 - `pattern` → What you are searching for.
 - `modifiers` → How you want to search (case-sesitive, global, etc.).

 For Example:

 ```Javascript
 const regex = /hello/i; // Searches for "hello" (case-insensitive)
 ```

## Modifiers (Flags)

| Modifier | Meaning |
| -------- | ------- |
| `g`      | Global search (matches all occurrences) |
| `i`      | Case-insensitive search |
| `m`      | Multi-line search |
| `s`      | Allows `.` to match newline characters |
| `u`      | Unicode support |
| `y`      | Sticky search (matches only from the last index) |

Example:

```Javascript
const text = "Hello hello";
console.log(text.match(/hello/gi)); // Output: ["Hello", "hello"]
```

## Common RegEx Patterns

| Pattern | Meaning |
| ------- | ------- |
| `\d`    | Any digit (0-9) |
| `\D`    | Any non-digit  |
| `\w`    | Any word character (A-Z, a-z, 0-9, _) |
| `\W`    | Any non-word character |
| `\s`    | Any whitespace (spaces, tabs, newlines) |
| `\S`    | Any non-whitespace character |
| `.`     | Any character except a newline |
| `^'     | Start of the string |
| `$`     | End of the string |
| `[]`    | Character set (e.g., `[aeiou]` → Matches any vowel) |
| `[^]`   | Negated set (e.g., `[^0-9]` → Matches anything except digits) |
| `()`    | Grouping |

Example:

```Javascript
const regex = /\d{3}-\d{2}-\d{4}/; // Matches SSN-like format (123-45-6789)
console.log(regex.test("123-45-6789")); // true
```

## Quantifiers (Repetitions)

| Quantifier | Meaning |
| ---------- | ------- |
| `*`        | 0 or more times |
| `+`        | 1 or more times |
| `?`        | 	0 or 1 time (optional) |
| `{n}`      | Exactly `n` times |
| `{n,}`     | At least `n` times | 
| `{n.m}`    | Between `n` and `m` times |

Example:

```Javascript
const regex = /\d{3,5}/; // Matches 3 to 5 digit numbers
console.log("1234".match(regex)); // ["1234"]
```

## Useful RegEx Methods in Javascript

1. `test()`  → Checks if a string matches the pattern (returns `true`/`false`).

```Javascript
const regex = /hello/i;
console.log(regex.test("Hello World")); // true
```

2. `match()` → Returns an array of matched results. 

```Javascript
const text = "The price is $20 and $30.";
console.log(text.match(/\$\d+/g)); // ["$20", "$30"]
```

3. `replace()` → Replaces matched text with something else.

```Javascript
const text = "I love JS!";
console.log(text.replace(/JS/, "JavaScript")); // "I love JavaScript!"
```

4. `split()` → Splits a string using a regex pattern.

```Javascript
const text = "apple,banana;orange grape";
console.log(text.split(/[,; ]+/)); // ["apple", "banana", "orange", "grape"]
```

## Practical Example

### 1. Validate and Email

```Javascript
const email = "user@example.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test(email)); // true
```

### 2. Validate a Phone Number (Indian Format)

```Javascript
const phoneRegex = /^[6-9]\d{9}$/;
console.log(phoneRegex.test("9876543210")); // true
console.log(phoneRegex.test("1234567890")); // false
```

###  3. Check if a String Contains Only Letters and Numbers

```Javascript
const usernameRegex = /^[a-zA-Z0-9]+$/;
console.log(usernameRegex.test("User123")); // true
console.log(usernameRegex.test("User@123")); // false
```

### 4. Extract All Numbers from a String

```Javascript
const text = "Order 3 apples, 5 bananas, and 10 oranges.";
console.log(text.match(/\d+/g)); // ["3", "5", "10"]
```

### 5. Remove Extra Spaces from a String

```Javascript
const text = "  Hello    World  ";
console.log(text.replace(/\s+/g, " ").trim()); // "Hello World"
```