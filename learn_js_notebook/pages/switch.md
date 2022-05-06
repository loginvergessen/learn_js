- ```js
  let role = '123';
  
  switch (role) {
      case 'guest':
          console.log('is guest');
          break;
  
      case 'moderator':
          console.log('is moderator');
          break;
  
      case 'admin':
          console.log('is admin');
          break;
      
      default:
          console.log('unknown');
  }
  ```
- #+BEGIN_IMPORTANT
  always add a `break` as last statement in a case, otherwise all other statements in all cases will be executed!
  #+END_IMPORTANT
-