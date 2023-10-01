# Constants

Constants are variables with values that cannot be reassigned. To create a constant variable, write
its name in UPPER_CAMEL_CASE.

```gno
FIRST_MONTH_OF_YEAR = Month.JANUARY
AMOUNT_OF_DAYS_IN_A_WEEK = 7

AMOUNT_OF_DAYS_IN_A_WEEK = 5 // Will not compile
```

To declare a global class constant, specify it in the class body.

```gno
class Alphabet {
    FIRST_LETTER = 'a'
}
```
