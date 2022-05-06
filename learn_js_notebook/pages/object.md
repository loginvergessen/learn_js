- ## declaration
- same as a value type variable but with a object body with `{}`
- properties are separated with a `,`
- ```js
  let person = {
    firstName: 'login',
    lastName: 'vergessen',
    age: 30
  };
  ```
- ## access properties
- ### dot notation
- ```js
  person.firstName = 'John';
  console.log(person.firstName);
  ```
- ### bracket notation
- ```js
  person['firstName'] = 'Mary';
  console.log(person['firstName']);
  ```
- #+BEGIN_TIP
  used when the name of the target property is not known until the run time
  #+END_TIP
- ```js
  let selection = 'firstName'; // would be a user input for example
  person[selection] = 'Mary;
  ```
-