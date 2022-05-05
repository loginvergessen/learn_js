- ## declaration
- in js, variables can be declared with the `let`,  `var` or `const` keyword
- ```js
  let firstName;
  var lastName;
  const PI;
  ```
- `let` and `const` were added with ES6 (ES2015) and should replace `var`
- the problem with `var` is, that it create a variable with a function-scope
- `let` and `const` on the other hand will be at block-scope
- #+BEGIN_NOTE
  only use `let` and `const` in new code
  #+END_NOTE
- ## initialization
- variables can be initialized with a value at declaration
- ```js
  let firstName = 'login'
  let lastName = 'vergessen'
  const PI = 3.14
  ```
- ## types
- there are 2 main type
	- [[primitive types]]
	- [[dynamic types]]
-