# Lists

Lists are sets that are automatically included in all GNO files without the need to import them
from the set folder. They are one of the most commonly used data structures that allow inserting,
getting, and removing elements. Use the generic `List<?>` class to create a list of type `?`.
For example, `List<int>` is a list storing integers. Generics are defined in the chapter _Generics_.

```gno
List<string> shoppingList = List<string>()
```

## Instantiating Lists

Lists can be instantiated like in the example above, however it should be noted that

1. `shoppingList` is already of a generic: string
2. `shoppingList` is already of a known type: List<string>

Therefore, because of 1, it can be shortened down to:

```gno
List<string> shoppingList = List()
```

And because of 2, it can be shortened down to:

```gno
List<string> shoppingList = ()
```

This creates a new instance of the List class, however, unlike objects, all sets are set to `empty`,
instead of `null` when declared. This is very important for programmers from other languages.

::: danger
When declared, all Set objects are automatically instantiated to `empty` by GNO.
:::

Therefore, we can shorten down the example to just:

```gno
List<string> shoppingList
```

Note how shoppingList is **not** null, but it is **empty**.

When initialising a list, you can also provide an non-empty array of the same type as the list,
which will fill the list with all elements from the array.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
```

## Adding Elements

To add an element to a list, use the increment assignment operator `+=` followed by either an
object of the same type as the list, or a non-empty array of the same type as the list.
This works like `Add()` and `AddAll()` methods in other languages.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList += "Oil"
shoppingList += ["Water", "Ketchup"]
```

## Removing Elements

Similarly, to remove an element from a list, use the decrement assignment operator `-=` followed by
either an object of the same type as the list, a non-empty array of the same type as the list.
This works like `Remove()` and `RemoveAll()` methods in other languages.

If the element, or at least one element of the array, does not exist in the list, an exception
is thrown.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList += "Oil"
shoppingList += ["Water", "Ketchup"]

shoppingList -= "Oil"
shoppingList -= ["Apples", "Ketchup"]
```

Use the `at` keyword followed by a non-negative integer to remove the element at the index specified
by the integer. If there is no element at the specified index, an `OutOfBoundsException` is thrown.
Like arrays, lists are zero-indexed, meaning that the index of the first element is zero.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

shoppingList -= at 1 // Removes "Apples"
```

## Retrieving Elements

Elements can be retrieved just like arrays using the access operators `[` and `]`.
Element retrieval is explained in the chapter _Arrays_.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

print shoppingList[0] // "Bananas"
print shoppingList[~0] // "Cookies"
```

You can use ranges to retrieve results of multiple elements as an array. However, if at least one
index is out of bounds, an `OutOfBoundsException` is thrown.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]

print shoppingList[1..3] // ["Apples, "Flour", "Milk"]
```

## List Size

Use the cardinality operator `||` to retrieve the size of the list.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
print |shoppingList| // 5
```

If you want to check if the list size is 0, instead of using `|list| is 0`, you can use
`list is empty`.

## Streaming Elements

Elements can be streamed just like arrays using the `over` field. Streaming is defined in the
chapter _Streaming_.

```gno
List<string> shoppingList = ["Bananas", "Apples", "Flour", "Milk", "Cookies"]
print shoppingList.over.Shuffled().Skip(1).First()
```
