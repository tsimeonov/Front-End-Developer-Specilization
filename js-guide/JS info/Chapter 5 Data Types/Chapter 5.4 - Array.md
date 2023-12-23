<h2>Arrays</h2>

Quite often we find that we need an ordered collection, where we have 1st, 2nd, 3rd element and so on.
It's not convenietnt to use an object here, because it provides no methods to manage the orderof elements.

---

<h5>Declaration</h5>

There are two syntaxes for creating an empty array.

```js
let arr = new Array();
let arr = [];
```

Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:

```js
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
```

We can replace an element

```js
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]
```