- loop variable is not part of the loop --> has to be declared before the while
  title:: while-loop
- ```js
  let i = 0;
  
  while (i <= 5) {
      console.log(i);
      i++;
  }
  ```
- #+BEGIN_WARNING
  while loops can run forever if not properly coded
  #+END_WARNING
- exit a while loop at any time with a `break`
-
- ```js
  let i = 0;
  - while (i <= 5) {
    console.log(i);
    i++;
    if (i === 4) {
      break;
    }
  }
  ```