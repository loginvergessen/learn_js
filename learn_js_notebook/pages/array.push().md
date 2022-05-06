- method of the array prototype
- appends the argument to the array
	- argument can be more than 1 element separated by `,`
- ```js
  let selectedColors = ['red', 'blue', 'green'];
  selectedColors.push('yellow');
  console.log(selectedColors); // --> ['red', 'blue', 'green', 'yellow
  selectedColors.push('brown', 31, false);
  console.log(selectedColors); // --> ['red', 'blue', 'green', 'yellow', 'brown', 31, false]
  ```