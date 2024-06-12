# Input Builtin Method

The `input` method is a builtin method that allows users to read keyboard strings from the system.
The input is accessed "as is" with no characters removed or altered.
The active thread is blocked until input is received.

::: danger
For critical applications, it is vital to sanitize such user input because of this.
:::

As a builtin method, the method parameters are optional.

## Example

```gno
print "What is your name, adventurer?"
name = input
name = input()
```

## Combined Print Statement

The builtin print method has a single overload that accepts a single string and internally calls
`print`. This can be useful to provide a simple message along with requesting user input:

```gno
name = input "What is your name, adventurer?"
name = input("What is your name, adventurer?")
```
