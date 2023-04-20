# Arrays

The array data structure allows storing zero or more values of the same type in a single variable. Internally, an array is classified as `Set`, which allows the use of set methods and operators. To declare an array, the set operators (square brackets) `[` and `]` are used.

```gno
numbers = [1, 2, 3, 4, 5]
```

::: tip
After creating an array, the array's size is fixed to its original size and can never change during its lifetime.
:::

When explicitly specifying the type of an array variable, you also need to append the set operators to the type.

```gno
int[] numbers = [1, 2, 3, 4, 5]

// This example:
// int numbers = [1, 2, 3, 4, 5]
// would not compile because [1, 2, 3, 4, 5] is not an int
```

## Anonymous Arrays

Arrays can be annonymously specified by leaving out the variable assignment as shown in the following example:

```gno
print [1, 2, 3] // Output: [1, 2, 3]

print [].length // Output: 0
```

## Ranges

A range is used to quickly create an int array. It uses the access operator `.` twice to seperate the start and end values. Both the start and end value are included in the array. The array is ordered, so that the first element of the array is the start value, and the last element of the array is the end value.

```gno
print 3..6 // Output: [3, 4, 5, 6]

// This for-loop does the same:
sampleArray = [3, 4, 5, 6]
print sampleArray // Output: [3, 4, 5, 6]
```

## Declaration

When declaring an array, but not instantiating its values, the array is instantiated automatically, but the length of the array must be specified in between the set operators (known as the set limit):

```gno
string[7] weekdays
// the same result would as:
// string[7] weekdays = empty

weekdays[0] = "Monday"
weekdays[1] = "Tuesday"
//...
```

::: tip
You can use this concept for custom classes as well. If you create a class that inherits from the `Set` class, the protected `limit` property references the supplied integer.  
:::

Note than when automatically instantiating an array, all values are set to the default value of its type.

## Access

Array values can be accessed by providing the index of the respective value. Like in most languages, the index begins at zero. If the requested index is negative or the amount of elements in the array is less than the requested index, an `OutOfBoundsException` is thrown.

```gno
string[7] weekdays

weekdays[0] = "Monday"
weekdays[1] = "Tuesday"

print weekdays[0] // Output: "Monday"
print weekdays[1] // Output: "Tuesday"
print weekdays[2] // Output: ""
print weekdays[7] // Output: OutOfBoundsException
```

## Reverse Access

As specified above, zero references the first element of an array. The inversion operator `~` is used to access an array backwards. Thus, zero references the last element, one the second last element, etc.

```gno
string[7] weekdays

weekdays[0] = "Monday"
weekdays[1] = "Tuesday"

print weekdays[~0] // Output: ""
print weekdays[~1] // Output: ""
print weekdays[~5] // Output: "Tuesday"
print weekdays[~6] // Output: "Monday"
print weekdays[~7] // Output: OutOfBoundsException
```
