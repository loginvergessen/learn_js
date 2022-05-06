- Arithmetic operators are used to perform arithmetic on number
- | Operator | Name | Example |
  |---|---|---|
  | + | Addition | `8 + 4 = 12` |
  | - | Subtraction | `8 - 4 = 4` |
  | * | Multiplication | `8 * 4 = 32` |
  | / | Division | `8 / 4 = 2.0` |
  | % | Modulus | `8 % 4 = 0` |
  | ** | Exponentiation | `8 ** 4 = 4096` |
  | ++ | Increment | `++8 = 9` |
  | -- | Decrement | `--8 = 7` |
- #+BEGIN_WARNING
  the increment and decrement operator can be set after the value, so the +/- occurs after the statement has been executed   
  #+END_WARNING
- ```js
  let x = 8;
  let y = 8;
  
  console.log(++x)    // --> 9
  console.log(y++)    // --> 8
  console.log(y)		// --> 9
  ```
-