# Constants

Constants are variables with values that cannot be reassigned. To create a constant variable, write
its name in UPPER_CAMEL_CASE.

```gno
FIRST_MONTH_OF_YEAR = Month.JANUARY
AMOUNT_OF_DAYS_IN_A_WEEK = 7

AMOUNT_OF_DAYS_IN_A_WEEK = 5 // Will not compile
```

If declared in the property header, it is not part of the constructor, and is not `settable`.
A constant defined this way is `gettable`.

```gno
class Alphabet (
    FIRST_LETTER = 'a'
)
```

```gno
alphabet = Alphabet()
print alphabet.FIRST_LETTER // "a"
```

::: tip
As a convention, constants should be the topmost properties in a property header.
:::

Just like literals, constant values can be assigned to properties directly in the property header:

```gno
class A (
    EXAMPLE_CONSTANT = 5
    int sample = EXAMPLE_CONSTANT
)
```
