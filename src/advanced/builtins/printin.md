# Print-Inline Builtin Method

The `printin` method is a builtin method that allows users to print a string to the console.
Unlike `print`, it does **NOT** append the new line character `\n`.

As a builtin method, the method parameters are optional.

## Example

```gno
printin "Hello World!"
printin "This is in the same line!"

// Output: "Hello World!This is in the same line!"

printin("Hello World!")
printin("This is in the same line!")
```
