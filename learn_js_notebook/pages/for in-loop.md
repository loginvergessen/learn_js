- loop over an object or array
- ```js
  let person = {
      firstName: 'login',
      lastName: 'vergessen',
      age: 31
  };
  
  for (let key in person) {
      console.log(key, person[key]);
  }
  ```
- ```js
  let colors = ['red', 'green', 'blue'];
  
  for (let index in colors) {
      console.log(index, colors[index]);
  }
  ```
- #+BEGIN_TIP
  since ES6 there is the [[for of-loop]] to better loop over arrays
  #+END_TIP