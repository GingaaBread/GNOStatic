# Arrays

The array data structure is used to store multiple values inside one variable. All values stored
inside the array are all of one type.

> Note that the type of an array can also be `object`, which means that the values inside the
> variable can all have any type.

## Declaring Arrays

To declare an array, use the square brackets `[` and `]` after the variable type like so:

```gno
int[] array
```

Similarly, you can create an array of arrays, which is called a multidimensional array.

```gno
Cell[][] checkBoard
```

## Initialising Arrays

Arrays have a fixed size, which needs to be known during initialisation.

To create the array with elements, the square brackets `[` and `]` are used like so:

```gno
int[] ids = [1, 3, 5, 7]
```

This creates a new array with a fixed size of 4. Note that the size of an array cannot be changed
after initialisation.

To intialise an array with a fixed size, but no values, supply the size of the array as an integer
using the `size of` keywords:

```gno
string[] names = size of 3
```

This creates a new array with a fixed size of 3.

> Note that the values of an array created this way are all set to the default value of the array
> type, which is "" in this case!

## Accessing Arrays

To access an array, the index of the value needs to be passed like so:

```gno
string[] names = ["John", "Sarah", "Tom"]

print names[0] // "John"
print names[2] // "Tom"
print names[3] // EXCEPTION
```

> Note that arrays are zero indexed

To access an array backwards, instead of forwards, the backwards access operator `~` is used like
so:

```gno
string[] names = ["John", "Sarah", "Tom"]

print names[~0] // "Tom"
print names[~2] // "John"
print names[~3] // EXCEPTION
```

## Array Size

Internally, an array is a type of `Set`. To get the size of a set, the cardinality operator
`size of` is used like so:

```gno
string[] names = ["John", "Sarah", "Tom"]

print size of names // 3
```

## Anonymous Arrays

Anonymous arrays are arrays with an implicit array data type and no variable name.
The data type of the array is inferred and all values of the array must be of that type.

_Example_:

```gno
print size of ["John", "Sarah", "Tom"] // 3

foreach in ["Monday", "Sunday", "Friday"] {
    print "Day is $it"
}

int magicNumber = [1, 3, 5, 8].over.Reversed().Skip(1).First()
print magicNumber // 5
```

## Iterable

Internally, arrays are `iterable`. This allows you to iterate over them in a `for-each`-loop.

```gno
numbers = [1, 2, 3]

foreach number in numbers => print number** // 1, 4, 9
```
