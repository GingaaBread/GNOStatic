# String Operators

## String Concatenation

> Type: binary

As a design choice, GNO only supports string concatenation for string literals.
If you want to concatenate a variable or other type literals, string interpolation must be used.

To concatenate a string literal to another string literal, the `+` operator is used like so:

```gno
string message = "This is a very long message, so now I " +
    "will start on a new line!"
```

## String Interpolation

> Type: complex

You can use the interpolation operator `$` to get the string representation of a variable in a
string. Similarly, you can include an expression by using the `${}` operator, and providing the
expression within the curly brackets. This makes it necessary to _escape_ the dollar character in a
string using the backslash `\`.

_Example_:

```gno
int amount = 4
print "Amount is $amount" // "Amount is 4"
print "This is ${amount > 5}" // "This is false"
```

## String Area

> Type: complex

A string area is used to avoid the use of special characters such as `\n` and `\t`.
It practically allows you to provide _raw_ multiline strings.

To use begin and end a string area, use the string area operator `"""` on a new line like so:

_Example_:

```gno
string message =
"""
This string consists of multiple lines.
Note how at the end of the last line we did not have to specify the new line character \n.
    Nor did we have to specify the tab character \t here.
"""
```

::: danger
The indentation of the beginning string area operator determines the tabulation of the string.
This is the only part in GNO, in which tabulation matters!
:::

## String Removal

To remove a string from another string, the `-` operator is used. All occurrences of the right
operand are removed from the left operand.

```gno
print "Hello, World!" - "o" // "Hell, Wrld!"
print "Hello, World!" - "lo" // "Hel, World!"
```

::: tip
Similarly, the right operand can also be a `char`.
:::

## String Truncation

> Type: binary

To truncate the first n characters from a string, the `-` operator is used with a positive integer
as the right operand.

```gno
print "Hello, World!" - 1 // "ello, World!"
print "Hello, World!" - 3 // "lo, World!"
```

To truncate the last n characters from a string, the backwards access operator `~` operator is
used with a positive integer as the right operand.

```gno
print "Hello, World!" ~ 1 // "Hello, World"
print "Hello, World!" ~ 3 // "Hello, Wor"
```

## Repetition Operator

> Type: binary

To repeatedly concatenate a string to another string, the `*` operator is used:

```gno
print "Hi, " * 3 // "Hi, Hi, Hi, "
print "Hi, " * 3 ~ 2 // "Hi, Hi, Hi"
```

## Split Operator

> Type: binary

To split a string into an array of substrings, the `/` operator is used:

```gno
print "Hello World!" / " " // ["Hello", "World!"]
```

Note that the right hand operator is excluded from the result set. The delimiter itself is not
included in the operation.

::: tip
Similarly, the right operand can also be a `char`.
:::

If the right operand is an integer, the substrings will be divided into equal size, except for the
last one if it does not fit. This does not fill in null values, but only uses the maximum required
size for the array.

```gno
print "Hello World!" / 2 // ["He", "ll", "o ", "Wo", "rl, "d!"]
```
