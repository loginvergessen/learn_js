- ## declaration
- same as a value type variable but with `[]`
- ```js
  let emptyArray = [];
  let selectedColors = ['red', 'blue', 'green'];
  console.log(selectedColors); // --> ['red', 'blue', 'green']
  ```
- ## access element
- ```js
  console.log(selectedColors[0]); // --> 'red'
  ```
- ## add element
- see https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
- ### via index
- ```js
  selectedColors[3] = 'yellow'; // rly bad
  selectedColors[selectedColors.len] = 'brown'; // adds it at the end of the array
  ```
- ### via .push()
- {{embed [[array.push()]]}}
-