Lists are sets that are automatically included in all GNO files without the need to be imported
Lists are one of the most commonly used data structures that allow the insertion, retrieval,
and removal of elements.

Lists use the `[,]` syntax, similar to how arrays use the `[]` syntax.

```gno
string[,] shoppingList
```

# Instantiating Lists

Lists can be instantiated by using the data type of the list followed by the square brackets with
a comma in between `[,]`.

This creates a new instance of the List class. Like all sets, lists are initialised to `empty`,
instead of `null` when declared.

::: danger
When declared, all set objects are automatically instantiated to `empty`.
This is different from many other languages!
:::

If desired, lists must be manually instantiated to null:

```gno
string[,] shoppingList = null
```

When instantiating a list, an array of items of the same type as the list can be provided.
They are added in the order of declaration from left to right.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
```

# Adding Elements

To add an element to a list, use the increment assignment operator `+=` followed by either an
object of the same type as the list, or a non-empty array of the same type as the list.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList += "Oil"
shoppingList += ["Water", "Ketchup"]
```

# Removing Elements

Similarly, to remove an element from a list, use the decrement assignment operator `-=` followed by
either an object of the same type as the list, a non-empty array of the same type as the list.

If the element, or at least one element of the array, does not exist in the list, an exception
is thrown.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList += "Oil"
shoppingList += ["Water", "Ketchup"]

shoppingList -= "Oil"
shoppingList -= ["Apples", "Ketchup"]
```

Use the `at` keyword followed by a non-negative integer to remove the element at the index specified
by the integer. If there is no element at the specified index, an `OutOfBoundsException` is thrown.
Like arrays, lists are zero-indexed, meaning that the index of the first element is zero.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList -= at 1 // Removes "Apples"
```

The backwards access operator `~` can be used as well.

# Retrieving Elements

Elements can be retrieved just like arrays using the access operators `[` and `]`.
If the element at the index is out of bounds, an `OutOfBoundsException` is thrown.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

print shoppingList[0] // "Bananas"
print shoppingList[~0] // "Cookies"
```

You can use ranges to retrieve results of multiple elements as an array. However, if at least one
index is out of bounds, an `OutOfBoundsException` is thrown.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

print shoppingList[1..3] // ["Apples, "Flour", "Milk"]
```

# List Size

Use the cardinality operator `size of` to retrieve the size of the list.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
print size of shoppingList // 5
```

If you want to check if the list size is zero, instead of using `size of list is 0`, you can use
the short-hand `list is empty`.

# Streaming Elements

Elements can be streamed just like arrays using the `over` field. Streaming is defined in the
chapter _Streaming_.

```gno
string[,] shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
print shoppingList.over.Shuffled().Skip(1).First()
```
