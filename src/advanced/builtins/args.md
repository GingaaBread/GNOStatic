# Args Builtin Method

The `args` method is a builtin method that allows users to access program arguments. It returns an
array of all program arguments in their unaltered order as strings.

As a builtin method, the method parameters are optional.

## Example

```gno
// Starting the program with the arguments "1" and "Hello"
print args[0] // "1"
print args[1] // "Hello World"

print args()[0] // "1"
print args()[1] // "Hello World"
```
