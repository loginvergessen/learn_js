- #+BEGIN_TIP
  the return of a comparison is always a boolean
  #+END_TIP
- | Operator | Name | Example |
  | == | equal to | `x == y` |
  | === | equal value AND type | `x === y` |
  | != | NOT equal | `x != y` |
  | !== | NOT equal value OR NOT equal type | `x !=== y` |
  | > | Greater than | `x > y` |
  | < | Less than | `x < y` |
  | >= | 	Greater than or equal to | `x >= y` |
  | <= | 	Less than or equal to | `x <= y` |
  | ? | ternary operator | see below |
- the ternary/conditional operator kinda acts like a if statement
- ```js
  let points = 110;
  let customerType = points > 100 ? 'gold' : 'silver';
  console.log(customerType)	// --> 'gold'
  ```
-
-