# For-Each-Loop

The for-each-loop allows iterating over a set of elements.
Note that classes need to be `iterable` in order to be used in a for-each-loop.

All sets, including arrays, lists, and strings, are iterable.

## Structure

```gno
// Default

foreach [VARIABLE_IDENTIFIER] in [SET] {
    // ...
}

// Inline

foreach [VARIABLE_IDENTIFIER] in [SET] => // ...
```

## Example

Assuming we have an array that stores shopping items, we can iterate over all items using a
for-each-loop like so:

```gno
shoppingItems = ["Eggs", "Milk", "Sugar", "Water"]

foreach item in shoppingItems => print item
// Output: "Eggs", "Milk", "Sugar", "Water"
```

In this example, the variable item is assigned to the item of the array of each iteration,
so first it is set to "Eggs", then to "Milk", then to "Sugar", and finally to "Water".

Because internally a range is a `Set`, we can use ranges in for-each-loops:

```gno
foreach number in 1..100 => print number
```

## Anonymous For-Each Loops

Often, you are not interested in providing a proper variable for the loop, but rather want to
work with the element of the set without needing a name for it. In these cases, you can omit the
variable declaration, and refer to the variable using the identity operator `it`.

```gno
foreach in 1..100 => print it
```

## Inline Loop

For-each-loops support the inline variant using the arrow `=>` operator.
