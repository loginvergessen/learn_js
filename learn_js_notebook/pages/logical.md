- | Operator | Description | Example |
  | && | logical AND | `true && true --> true, true && false --> false` |
  | ⎮⎮ | 	logical OR | `true ⎮⎮ true --> true, true ⎮⎮ false --> true` |
  | ! | 	logical and NOT | `!true --> false, !false --> true` |
- logical operators can be used with non boolean values
	- ### AND
		- goes from left to right and when it finds a `false` or Falsy value return `false` or the Falsy value and ignores all other AND there might be
		- ```js
		  console.log(true && '');            // --> ''
		  console.log(true && null && '');    // --> null
		  console.log(false && null && '');   // false
		  ```
		- if it does not find a `false` or Falsy value, it will return `true` or the last Truthy value
		  ```js
		  console.log(true && 'and' && true);     // --> true
		  console.log(true && 'and' && 5);        // --> 5
		  console.log(true && 'and' && 'and');    // "and"
		  ```
		-
	- ### OR
		- goes from left to right and when it finds a `true` or Truthy value returns `true`or the Truthy value and ignores all other OR there might be
		- ```js
		  console.log(false || 'or');			// --> "or"
		  console.log(false || 4 || 'or');	// --> 4
		  console.log(true || 4 || 'or');		// --> true
		  ```
		- if it does not find a `true` or Truthy value, it will return `false` or the last Falsy value
		- ```js
		  console.log(false || undefined || false);   // --> false
		  console.log(false || undefined || 0);       // --> 0
		  console.log(false || undefined || null);    // --> null
		  ```
- Falsy values (false)
	- undefined
	- null
	- 0
	- false
	- ''
	- NaN