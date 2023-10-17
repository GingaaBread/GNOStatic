# Set Queries

Set queries allow a declarative way to get and delete elements from a set in an SQL-like syntax.
They abstract away the need for explicit loops, condition checks, and manual element manipulation.

## Getting Elements

To get an element from a set using set queries, use the keywords `select`, `from`, and `where`.

```gno
Item[,] shoppingList = [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]
itemsWith2Amount = select from shoppingList where it.amount is 2

if itemsWith2Amount is not empty {
    print itemsWith2Amount
}
```

### Select Query

The `select` keyword allows retrieving elements from a set. You can choose to retrieve an array or
a single value from a set. If the `from` directly follows the `select` keyword, all values from
the query will be returned as an array.

```gno
Item[,] shoppingList = [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]
print select from shoppingList // [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]
```

To return only a single element use either `first`, `last` or `any` after the `select` keyword.

- first: Only return the first element from the query
- last: Only return the last element from the query
- any: Return a random element from the query

Note that the elements are returned not as arrays, but as the types of the elements.

```gno
Item[,] shoppingList = [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]
print select first from shoppingList // Item("Apples", 2)
```

::: tip
This also makes it easy to use randomness in GNO

```gno
randomPlayer = select any from players
```

:::

The select query can use the `where` condition to only include elements in the query that meet
that condition. The condition must be a boolean expression and can use the identity operator `it`
to refer to the element and its members.

```gno
Item[,] shoppingList = [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]

print select all from shoppingList where 'l' is in it.name
// Result: [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]

print select last from shoppingList where 'l' is in it.name
// Result: Item("Milk", 3)
```

For readability reasons, you can only return the element of a set and not a member of the element.
Instead, you should get the element and then get its member.

Note that an array is `empty` if the query found no elements, and an object is `null` if the
single result query found no element.

## Deletion Query

You can delete one or multiple items from a set by using the `delete` keyword.

```gno
Item[,] shoppingList = [Item("Apples", 2), Item("Flour", 1), Item("Milk", 3)]
delete from shoppingList where it.amount is 2
```

Similarly to select queries, you can choose to delete all, the first, the last or any element from
a set using the same keywords as in select queries.

Note that trying to delete an element, which does not exist, throws a `NoSuchElementException`.
